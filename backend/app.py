from flask import Flask, jsonify, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# In-memory store for notes
notes = []

@app.route('/api/notes', methods=['GET'])
def get_notes():
    return jsonify(notes)

@app.route('/api/notes', methods=['POST'])
def add_note():
    data = request.get_json()
    note = data.get('note')
    if note:
        notes.append({'note': note})
        return jsonify({'message': 'Note added'}), 201
    return jsonify({'error': 'Invalid data'}), 400

if __name__ == '__main__':
    app.run(debug=True)
