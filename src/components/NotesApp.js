import React from "react";
import NotesList from "./NotesList";
import NotesHeader from "./NotesHeader";
import { getInitialData } from "../utils/data";
import NotesInput from "./NotesInput";


class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNotesHandler({title,body}) {
    this.setState((prevState) => {
        return {
            Notes: [
                ...prevState.notes,
                {
                    id: +new Date(),
                    title,
                    body,
                }
            ]
        }
    });
  }

  render() {
    return (
      <div className="notes-app">
        <NotesHeader />
        <h2>Buat Catatan</h2>
        <NotesInput AddNotes={this.onAddNotesHandler} />
        <h1>Catatan Aktif</h1>
        <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}


export default NotesApp;