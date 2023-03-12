import React from "react";
import NotesList from "./NotesList";
import { getInitialData } from "../utils/data";



function NotesApp() {
    const notes = getInitialData();
    

    return (
        <div className="notes-app">
            <h1>Catatan Aktif</h1>
            <NotesList notes={notes} />
        </div>
    );
}

export default NotesApp;