import React from 'react';
import MoviesList from './MoviesList';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="app-box">
                <h1>Liste des Films</h1>
                <MoviesList />
            </div>
        </div>
    );
}

export default App;
