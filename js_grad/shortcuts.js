const shortcutForm = document.getElementById("shortcut-form");
const shortcutInput = document.querySelector("#shortcut-form input");
const urlForm = document.getElementById("url-form");
const urlInput = document.querySelector("#url-form input");

const shortcutList = document.getElementById("shortcut-list");

const SHORTCUT_KEY = "shortcuts";

let shortcuts = [];

function saveShortcuts(){
    localStorage.setItem(SHORTCUT_KEY, JSON.stringify(shortcuts));
}

function deleteShortcuts(event){
    const li = event.target.parentNode;
    console.dir(li);
    
    shortcuts = shortcuts.filter(shortcut => shortcut.outertext !== li.innertext);
    li.remove();
    saveShortcuts();
}

function paintShortcuts(newShortcutObj){
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerText = newShortcutObj.text;
    a.href = `${newShortcutObj.url}`;
    
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteShortcuts);
    li.appendChild(a);
    li.appendChild(button);
    shortcutList.appendChild(li);
}

function handleShortcutSubmit(event){
    event.preventDefault();
    if (urlInput.value === null || urlInput.value === "" || urlInput.value === undefined){
        alert("Please write the URL");
        return ;
    }
}

function handleUrlSubmit(event){
    event.preventDefault();
    if (shortcutInput.value === null || shortcutInput.value === "" || shortcutInput.value === undefined){
        alert("Please write the Shortcut Name");
        return ;
    }
    const newShortcutObj = {
        text: shortcutInput.value,
        url: urlInput.value,
    }
    shortcutInput.value = "";
    urlInput.value = "";
    shortcuts.push(newShortcutObj);
    paintShortcuts(newShortcutObj);
    saveShortcuts();
}

urlForm.addEventListener("submit", handleUrlSubmit);
shortcutForm.addEventListener("submit", handleShortcutSubmit);

const savedShortcuts = localStorage.getItem(SHORTCUT_KEY);

if(savedShortcuts !== null){
    const parsedShortcuts = JSON.parse(savedShortcuts);
    shortcuts = parsedShortcuts;
    parsedShortcuts.forEach(paintShortcuts);
}
