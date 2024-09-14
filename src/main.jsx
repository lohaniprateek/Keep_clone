import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header.jsx";
import "./index.css";
import Note from "./components/Note.jsx";
import Footer from "./components/Footer.jsx";
import notes from "./notes.js";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Header />
		{notes.map((noteItem) => (
			<Note
				key={noteItem.id}
				title={noteItem.title}
				content={noteItem.content}
			/>
		))}
		<Footer />
	</StrictMode>
);
