import React from "react";
import NotesList from "./NotesList";
import NotesHeader from "./NotesHeader";
import { getInitialData } from "../utils/data";


class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  render() {
    return (
      <div className="notes-app">
        <NotesHeader />
        <h1>Catatan Aktif</h1>
        <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}


export default NotesApp;