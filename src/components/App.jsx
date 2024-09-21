import React, { useState } from "react";
import Header from "../Header.jsx";
import Note from "../components/Note.jsx";
import Footer from "../components/Footer.jsx";
import AddNote from "../components/AddNote.jsx";
import notesData from "../notes.js";

function App() {
	const [notes, setNotes] = useState(notesData);

	// Add a new note
	function addNote(newNote) {
		setNotes((prevNotes) => {
			return [...prevNotes, newNote];
		});
	}

	// Delete a note
	function deleteNote(id) {
		setNotes((prevNotes) =>
			prevNotes.filter((noteItem, index) => index !== id)
		);
	}

	return (
		<>
			<Header />
			<AddNote onAdd={addNote} />
			<div className="notesdiv">
				{notes.map((noteItem, index) => (
					<Note
						key={index}
						id={index}
						title={noteItem.title}
						content={noteItem.content}
						onDelete={deleteNote}
					/>
				))}
			</div>
			<Footer />
		</>
	);
}

export default App;
