import React, { useState } from 'react';

const MovieCard = ({ movie, onDelete, onToggleLike }) => {
    const [liked, setLiked] = useState(movie.liked);

    const handleToggleLike = () => {
        setLiked(!liked);
        onToggleLike(movie.id, !liked);
    };

    return (
        <div className="movie-card">
            <h3><strong>{movie.title}</strong></h3>
            <p>Catégorie: {movie.category}</p>
            <div className="like-bar">
                <div style={{ width: `${(movie.likes / (movie.likes + movie.dislikes)) * 100}%` }} className="likes">
                    {movie.likes} Likes
                </div>
                <div style={{ width: `${(movie.dislikes / (movie.likes + movie.dislikes)) * 100}%` }} className="dislikes">
                    {movie.dislikes} Dislikes
                </div>
            </div>
            <button onClick={handleToggleLike}>{liked ? 'Dislike' : 'Like'}</button>
            <button onClick={() => onDelete(movie.id)}>Supprimer</button>
        </div>
    );
};

export default MovieCard;
