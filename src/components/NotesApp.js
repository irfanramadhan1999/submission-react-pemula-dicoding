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
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          onArchive: true,
        };
      } else {
        return note;
      }
    });
    this.setState({ notes });
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="notes-app">
        <NotesHeader />
        <div className="note-app__body">
          <NotesInput addNotes={this.onAddNotesHandler} />
          <h2>Catatan Aktif</h2>
          <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
          <h2>Arsip</h2>
          <NotesList
            notes={this.state.notes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
      </div>
    );
  }
}

export default NotesApp;
