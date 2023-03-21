import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "../components/DeleteButton";
import ArchiveButton from "./ArchiveButton.js";



function NotesItem({ title, createdAt, body,id, onArchive,onDelete, }) {

  return (
    <div className="note-item">
      <NotesItemBody title={title} date={createdAt} body={body} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive} />
      </div>
    </div>
  );
}

export default NotesItem;