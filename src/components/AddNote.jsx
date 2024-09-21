import { useState } from "react";

function AddNote(props) {
	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	}

	function submitNote(event) {
		event.preventDefault();
		props.onAdd(note);
		setNote({ title: "", content: "" }); 
	}

	return (
		<>
			<form className="AddNewNote">
				<div className="indiv">
					<input
						className="addTitle"
						type="text"
						name="title"
						placeholder="Title Here"
						value={note.title}
						onChange={handleChange}
					/>
					<textarea
						className="addContent"
						name="content"
						placeholder="Write something..."
						value={note.content}
						onChange={handleChange}
						rows={3}
					/>
				</div>
				<button id="Addbtn" onClick={submitNote}>Add</button>
			</form>
		</>
	);
}

export default AddNote;
