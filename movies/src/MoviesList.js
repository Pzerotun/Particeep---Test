import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import { movies$ } from './movies';

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    useEffect(() => {
        movies$.then(data => {
            setMovies(data);
            updateCategories(data);
        });
    }, []);

    const updateCategories = (movies) => {
        const uniqueCategories = [...new Set(movies.map(movie => movie.category))];
        setCategories(uniqueCategories);
    };

    const handleDelete = (id) => {
        const updatedMovies = movies.filter(movie => movie.id !== id);
        setMovies(updatedMovies);
        updateCategories(updatedMovies);
    };

    const handleToggleLike = (id, liked) => {
        const updatedMovies = movies.map(movie =>
            movie.id === id ? { ...movie, liked, likes: liked ? movie.likes + 1 : movie.likes - 1, dislikes: liked ? movie.dislikes - 1 : movie.dislikes + 1 } : movie
        );
        setMovies(updatedMovies);
        updateCategories(updatedMovies);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const filteredMovies = movies.filter(movie =>
        selectedCategories.length === 0 || selectedCategories.includes(movie.category)
    );

    const indexOfLastMovie = currentPage * itemsPerPage;
    const indexOfFirstMovie = indexOfLastMovie - itemsPerPage;
    const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfFirstMovie + itemsPerPage);

    return (
        <div>
            <div className="filter-container">
                {categories.map(category => (
                    <label key={category}>
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                        />
                        {category}
                    </label>
                ))}
            </div>
            <div className="movie-cards-container">
                {currentMovies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onDelete={handleDelete}
                        onToggleLike={handleToggleLike}
                    />
                ))}
            </div>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={filteredMovies.length}
                paginate={setCurrentPage}
                currentPage={currentPage}
                setItemsPerPage={setItemsPerPage}
            />
        </div>
    );
};

export default MoviesList;
