document.addEventListener('DOMContentLoaded', () => {
    const noteForm = document.getElementById('note-form');
    const noteInput = document.getElementById('note-input');
    const notesList = document.getElementById('notes-list');

    // Fetch and display notes
    function fetchNotes() {
        fetch('http://127.0.0.1:5000/api/notes')
            .then(response => response.json())
            .then(data => {
                notesList.innerHTML = ''; // Clear existing notes
                data.forEach(note => {
                    const noteElement = document.createElement('div');
                    noteElement.textContent = note.note; // Assuming 'note' has a 'note' property
                    notesList.appendChild(noteElement);
                });
            })
            .catch(error => console.error('Error fetching notes:', error));
    }

    // Add a new note
    function addNote() {
        const noteText = noteInput.value;
        fetch('http://127.0.0.1:5000/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ note: noteText })
        })
        .then(response => response.json())
        .then(() => {
            noteInput.value = ''; // Clear input field
            fetchNotes(); // Refresh notes list
        })
        .catch(error => console.error('Error adding note:', error));
    }

    // Form submission handler
    noteForm.addEventListener('submit', event => {
        event.preventDefault(); // Prevent default form submission
        addNote();
    });

    // Initial fetch of notes
    fetchNotes();
});
