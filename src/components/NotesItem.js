import React from "react";
import NotesItemBody from "./NotesItemBody";



function NotesItem({ title, createdAt, body }) {

  return (
    <div className="note-item">
      <NotesItemBody title={title} date={createdAt} body={body} />
    </div>
  );
}

export default NotesItem;