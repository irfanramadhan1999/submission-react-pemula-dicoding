import React from "react";
import NotesItemBody from "./NotesItemBody";

function NotesItem({ title, body }) {
  return (
    <div className="note-item">
      <NotesItemBody title={title}  body={body} />
    </div>
  );
}

export default NotesItem;