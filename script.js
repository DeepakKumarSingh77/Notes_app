const createbtn = document.getElementById("create");
const notecontainer = document.getElementById("note");


function saveNotes() {
    const notes = [];
    notecontainer.querySelectorAll("p").forEach(note => {
        notes.push(note.textContent.slice(0, -1)); // Remove the "X" before saving
    });
    localStorage.setItem("notes", JSON.stringify(notes));
}


function loadNotes() {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
        savedNotes.forEach(noteText => {
            createNote(noteText);
        });
    }
}


function createNote(text = "New Note") {
    const para = document.createElement("p");
    para.contentEditable = "true";
    para.textContent = text;
    para.addEventListener("input", saveNotes);
    const delet = document.createElement("span");
    delet.textContent = "X";
    delet.style.cursor = "pointer";
    delet.style.marginLeft = "40px";
    delet.style.color = "red";
    delet.addEventListener("click", function() {
        delet.parentElement.remove();
        saveNotes(); 
    });
    para.appendChild(delet);
    notecontainer.appendChild(para);


    saveNotes();
}


createbtn.addEventListener("click", function() {
    createNote();
});


loadNotes();
