import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import NoteItem from '../noteItem/NoteItem';

function NoteList() {
  const notes = useAppSelector((state) => state.noteSlice.noteList);
  const filteredNotes = useAppSelector((state) => state.noteSlice.filteredNoteList);
  const isFilter = useAppSelector((state) => state.noteSlice.isFilter);

  return (
    <>
      {isFilter && filteredNotes.length > 0 ? (
        filteredNotes.map((note, i) => <NoteItem index={i} note={note} key={nanoid()} />)
      ) : isFilter && filteredNotes.length === 0 ? (
        <span className="warning">No matches!</span>
      ) : !isFilter && notes.length > 0 ? (
        notes.map((note, i) => <NoteItem index={i} note={note} key={nanoid()} />)
      ) : (
        <span className="warning">You do not have any notes!</span>
      )}
    </>
  );
}

export default NoteList;
