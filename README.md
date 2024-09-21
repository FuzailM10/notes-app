CloudNotes: Your Cloud-Based Notes App
Overview
CloudNotes is a simple cloud-based notes application that allows users to create, store, and manage their notes. Built with Flask for the backend and vanilla JavaScript for the frontend, this app provides an easy way to keep track of your thoughts and ideas.

Features
Create Notes: Add new notes with a title.
View Notes: See a list of all your notes in real-time.
Backend API: Utilizes a RESTful API to manage notes.
Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Python, Flask
Database: In-memory storage (for simplicity)
CORS: Enabled for cross-origin requests
Project Structure
lua
Copy code
/CloudNotes
|-- /frontend
|   |-- index.html
|   |-- styles.css
|   `-- script.js
|-- /backend
|   |-- app.py
|   |-- test.py
|   |-- wsgi.py
`-- /venv
Frontend
index.html: The main HTML file that provides the user interface.
styles.css: Styles for the application.
script.js: Contains the JavaScript for fetching and posting notes.
Backend
app.py: The main Flask application that handles note creation and retrieval.
test.py: A simple test to verify the Flask setup.
wsgi.py: Entry point for running the Flask application.
Installation
Prerequisites
Python 3.7 or higher
Flask
Flask-CORS
Steps
Clone the Repository


git clone https://github.com/FuzailM10/notes-app.git
cd notes-app
Set Up Virtual Environment


python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
Install Dependencies

pip install Flask Flask-CORS
Run the Backend Server Navigate to the backend directory and start the Flask server:


python app.py
Open the Frontend Open frontend/index.html in your web browser to access the notes application.

Usage
Adding a Note: Enter a title in the input field and click "Add Note" to save it.
Viewing Notes: The notes will appear below the input field as they are added.
API Endpoints
GET /api/notes: Retrieve all notes.
POST /api/notes: Add a new note. Requires a JSON body with the structure:
json

{ "note": "Your note text here" }
Contributing
We welcome contributions! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Make your changes and commit them (git commit -m 'Add your feature').
Push to your branch (git push origin feature/YourFeature).
Open a Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For questions or feedback, feel free to reach out:

Email: joyofuzail@gmail.com
GitHub: FuzailM10
Acknowledgments
Thanks to Flask for the web framework.
Special thanks to anyone else who contributed to this project.
