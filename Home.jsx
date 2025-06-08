import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const movies = [
  { id: 1, title: 'Petta', description: 'Kaali, a newly appointed hostel warden, tries to live a peaceful life. However, his dark past resurfaces when his old enemy Singaaram seeks revenge. Kaali must confront his past to protect those around him.' },
  { id: 2, title: 'Avengers: Infinity War', description: 'The Avengers and their allies fight to stop Thanos, a powerful warlord seeking all six Infinity Stones to wipe out half of all life in the universe.' },
  { id: 3, title: 'Interstellar', description: 'Joseph Cooper, a former NASA pilot, who is tasked with piloting a spacecraft to find a new habitable planet for humanity as Earth becomes unhabitable due to environmental disasters.' },
  { id: 4, title: 'The Amazing Spider-Man 2', description: 'Peter Parker struggles to balance his life as Spider-Man while facing powerful new enemies. As secrets about his parents unravel, Peter makes a heartbreaking choice to protect those he loves.' },
  { id: 5, title: 'Enthiran', description: 'Dr. Vaseegaran, a brilliant scientist, creates a humanoid robot named Chitti. However, things go out of control when Chitti develops emotions and falls in love with Vaseegaran\’s girlfriend, leading to a deadly conflict.' },
  { id: 6, title: 'Top Gun: Maverick', description: 'After more than 30 years of service as one of the Navy’s top aviators, Pete "Maverick" Mitchell is back to train the next generation of pilots for a dangerous mission. As he faces ghosts from his past, Maverick must prove he still has what it takes.' },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', padding: '30px' }}>
      
      
      <div
  style={{
    flex: '0 0 25%',
    paddingRight: '20px',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100vh'
  }}
>
  <h1 style={{ marginTop: '130px' }}>Welcome to Movie Booking</h1>

  <p>Find and book tickets for your favorite movies!</p>
</div>


      {/* Right-side movie area */}
      <div style={{ flex: 1, paddingTop: '110px' }}>

        <input
          type="text"
          placeholder="Search your movies here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />

        <div className="movie-grid">
          {filteredMovies.map(movie => (
            <div className="movie-card" key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <button onClick={() => navigate(`/MovieDetails/${movie.id}`)}>
                View Details
              </button>
            </div>
          ))}
          {filteredMovies.length === 0 && (
            <p style={{ color: '#ccc', gridColumn: '1 / -1' }}>No movies found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
