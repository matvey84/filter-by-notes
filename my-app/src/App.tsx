import React from 'react';
import './App.css';
import CreateNoteForm from './components/createNoteForm/CreateNoteForm';
import FilterForm from './components/filterForm/FilterForm';
import NoteList from './components/noteList/NoteList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <CreateNoteForm />
        <FilterForm />
        <NoteList />
      </div>
    </div>
  );
}

export default App;
