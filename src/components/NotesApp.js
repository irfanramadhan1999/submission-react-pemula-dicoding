import React from "react";
import NotesList from "./NotesList";
import NotesHeader from "./NotesHeader";
import { getInitialData } from "../utils/data";



function NotesApp() {
    const notes = getInitialData();
    

    return (
        <div className="notes-app">
            <NotesHeader />
            <h1>Catatan Aktif</h1>
            <NotesList notes={notes} />
        </div>
    );
}

export default NotesApp;