import React from "react";
import NotesItem from "./NotesItem";



function NotesList({notes}){
    return(
        <div className="note-list">
            {
            notes.map((note) => {
                return <NotesItem key={note.id} id={note.id} {...note} />;
            })
            }
        </div>
    );
}


export default NotesList;