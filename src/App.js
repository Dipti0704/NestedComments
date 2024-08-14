import React from 'react';
import { CommentProvider } from './context/CommentContext';
import CommentSection from './components/CommentSection';
import './styles/Styles.css';

function App() {
  return (
    <CommentProvider>
      <div className="App">
        <CommentSection />
      </div>
    </CommentProvider>
  );
}

export default App;