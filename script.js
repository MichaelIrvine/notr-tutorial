// Toggle Light & Dark Modes
//  ---
//  ---
//  ---
//  ---
//  ---
//  ---
//  ---
//  ---
// Selectors

const body = document.querySelector('body');
const lightModeToggle = document.querySelector('.light-mode--toggle');
const darkModeToggle = document.querySelector('.dark-mode--toggle');

// Functions

function toggleLightMode() {
  body.classList.remove('dark-mode');
}
function toggleDarkMode() {
  body.classList.add('dark-mode');
}

// Events

lightModeToggle.addEventListener('click', toggleLightMode);
darkModeToggle.addEventListener('click', toggleDarkMode);

// Notes
//  ---
//  ---
//  ---
//  ---
//  ---
//  ---
//  ---
//  ---
//  ---
//  ---

// Selectors
const addNoteButton = document.querySelector('.save');
const cancelNoteButton = document.querySelector('.cancel');
const noteForm = document.querySelector('#note-form');
const notesList = document.querySelector('.notes');
const noteInput = document.querySelector('#input--new-note');
const toggleNewNote = document.querySelector('.btn--new-note');

// Functions
function showNoteForm() {
  noteForm.classList.add('visible');
}

function addNote(e) {
  e.preventDefault();
  const newNoteItem = document.createElement('li');
  newNoteItem.classList.add('note--item');
  newNoteItem.innerText = noteInput.value;
  notesList.appendChild(newNoteItem);
  noteInput.value = '';
}

function cancelNote() {
  noteInput.value = '';
  setTimeout(() => {
    noteForm.classList.remove('visible');
  }, 100);
}

function deleteNote() {}

// Events
toggleNewNote.addEventListener('click', showNoteForm);
addNoteButton.addEventListener('click', addNote);
cancelNoteButton.addEventListener('click', cancelNote);
