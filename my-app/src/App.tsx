import React from 'react';
import './App.css';
import CreateNoteForm from './components/createNoteForm/CreateNoteForm';
import NoteList from './components/noteList/NoteList';

function App() {
  return (
    <div className="App">
      <CreateNoteForm />
      <NoteList />
    </div>
  );
}

export default App;
