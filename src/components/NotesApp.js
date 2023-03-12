import React from "react";
import NotesList from "./NotesList";
import {getInitialData} from "../utils/data";

function NotesApp() {
    const note = getInitialData();

    return (
        <div className="notes-app">
            <h1>Catatan Aktif</h1>
            <NotesList notes={note} />
        </div>
    );
}

export default NotesApp;