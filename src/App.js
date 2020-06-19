import React from 'react';
import List from './components/List'
import {BrowserRouter,Link,Route} from 'react-router-dom'
import NotesForm from '../src/components/notesForm'

function App() {
  return (
    <BrowserRouter>
    <div>
    <h2>Notes App</h2>
      <Link to="/">Notes</Link>
      <Link to="/category">Category</Link>

      <Route path="/" component={List} exact={true}/>
      <Route path="/notes/:id" component={NotesForm} />
      
    </div>
    </BrowserRouter>
  );
}

export default App;
