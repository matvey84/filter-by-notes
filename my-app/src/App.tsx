import React from 'react';
import './App.css';
import CreateNoteForm from './components/createNoteForm/CreateNoteForm';
import NoteList from './components/noteList/NoteList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <CreateNoteForm />
        <NoteList />
      </div>
    </div>
  );
}

export default App;
