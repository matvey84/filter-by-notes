import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import NoteItem from '../noteItem/NoteItem';

function NoteList() {
  const notes = useAppSelector((state) => state.noteSlice.noteList);
  return (
    <>
      {notes.map((note, i) => {
        return <NoteItem index={i} note={note} key={nanoid()} />;
      })}
    </>
  );
}

export default NoteList;
