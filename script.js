// Toggle Light & Dark Modes
//  ---
//  ---
// Selectors for Dark Mode

const body = document.querySelector('body');
const lightModeToggle = document.querySelector('.light-mode--toggle');
const darkModeToggle = document.querySelector('.dark-mode--toggle');

// Functions for Dark Mode

function toggleLightMode() {
  body.classList.remove('dark-mode');
}
function toggleDarkMode() {
  body.classList.add('dark-mode');
}

// Events for Dark Mode

lightModeToggle.addEventListener('click', toggleLightMode);
darkModeToggle.addEventListener('click', toggleDarkMode);

// Notes
//  ---
//  ---

// Selectors for Notes
const addNoteButton = document.querySelector('.save');
const cancelNoteButton = document.querySelector('.cancel');
const noteForm = document.querySelector('#note-form');
const notesList = document.querySelector('.notes');
const noteInput = document.querySelector('#input--new-note');
const toggleNewNote = document.querySelector('.btn--new-note');
const deleteNoteButton = document.querySelector('.btn--delete-note');

// Functions for Notes
function showNoteForm() {
  noteForm.classList.add('visible');
}

function addNote(e) {
  e.preventDefault();

  const newNoteText = noteInput.value;

  const markup = `
  <li class="note--item">
  <span class="note--item__text">
    ${newNoteText}
  </span>
  <button class="btn--delete-note">
    <svg
      id="delete-icon"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 2"
      viewBox="0 0 32 40"
    >
      <path
        d="M20 2h-8a1 1 0 00-1 1v3H4a1 1 0 00-1 1v4a1 1 0 001 1h2v17a1 1 0 001 1h18a1 1 0 001-1V12h2a1 1 0 001-1V7a1 1 0 00-1-1h-7V3a1 1 0 00-1-1zm-7 2h6v2h-6zm11 24H8V12h16zm3-18H5V8h22z"
      />
      <path
        d="M16 26a1 1 0 001-1V15a1 1 0 00-2 0v10a1 1 0 001 1zM11 26a1 1 0 001-1V15a1 1 0 00-2 0v10a1 1 0 001 1zM21 26a1 1 0 001-1V15a1 1 0 00-2 0v10a1 1 0 001 1z"
      />
    </svg>
    </button>
    </li>
  `;

  notesList.insertAdjacentHTML('beforeend', markup);

  // Clear input field
  noteInput.value = '';
}

function cancelNote() {
  noteInput.value = '';
  setTimeout(() => {
    noteForm.classList.remove('visible');
  }, 100);
}

function deleteNote(e) {
  if (e.target.classList.contains('btn--delete-note')) {
    e.target.parentElement.remove();
  }
}

// Events for Notes
toggleNewNote.addEventListener('click', showNoteForm);
addNoteButton.addEventListener('click', addNote);
cancelNoteButton.addEventListener('click', cancelNote);
notesList.addEventListener('click', deleteNote);
