const btn = document.getElementById('add_btn');
const noteContainer = document.getElementById('note_container');

function createNoteElement(id, content) {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.placeholder = "Empty Note";
  element.value = content;
  
  element.addEventListener('dblclick', () => {
    noteContainer.removeChild(element);
  })

  return element;


}

function addNote() {
    const noteObj = {
        id: Math.floor(Math.random() * 10000),
        content: ""
    }

    const noteElement = createNoteElement(noteObj.id, noteObj.content);
    noteContainer.insertBefore(noteElement, btn);   
}

btn.addEventListener('click', addNote)