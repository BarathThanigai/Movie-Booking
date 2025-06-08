import React from 'react';
import { useParams, Link } from 'react-router-dom';
import pettaPoster from './assets/petta.jpeg';
import spiderPoster from './assets/spiderman2.jpg';
import infinityPoster from './assets/infinitywar.jpeg';
import interstellarPoster from './assets/interstellar.jpg';
import topgunPoster from './assets/Top-Gun.jpg';
import enthiranposter from './assets/Enthiran-Movie-Poster.jpg';

const MovieDetails = () => {
  const { id } = useParams();

  const movieData = {
    1: {
      title: 'Petta',
      description: 'Kaali, a newly appointed hostel warden, tries to live a peaceful life. However, his dark past resurfaces when his old enemy Singaaram seeks revenge. Kaali must confront his past to protect those around him.',
      cast: 'Rajinikanth, Nawazuddin Siddiqui, Vijay Sethupathi, Trisha',
      releaseYear: 2019,
      rating: '8.0',
      poster: pettaPoster
    },
    2: {
      title: 'Avengers: Infinity War',
      description: 'The Avengers and their allies fight to stop Thanos, a powerful warlord seeking all six Infinity Stones to wipe out half of all life in the universe.',
      cast: 'Robert Downey Jr., Chris Hemsworth, Chris Evans, Scarlett Johansson',
      releaseYear: 2018,
      rating: '8.4',
      poster: infinityPoster
    },
    3: {
      title: 'Interstellar',
      description: 'Joseph Cooper, a former NASA pilot, who is tasked with piloting a spacecraft to find a new habitable planet for humanity as Earth becomes unhabitable due to environmental disasters.',
      cast: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain',
      releaseYear: 2014,
      rating: '8.6',
      poster: interstellarPoster
    },
    4: {
      title: 'The Amazing Spider-Man 2',
      description: 'Peter Parker struggles to balance his life as Spider-Man while facing powerful new enemies. As secrets about his parents unravel, Peter makes a heartbreaking choice to protect those he loves.',
      cast: 'Andrew Garfield, Emma Stone, Jamie Foxx',
      releaseYear: 2014,
      rating: '6.6',
      poster: spiderPoster

    },
    5: {
      title: 'Enthiran',
      description: 'Dr. Vaseegaran, a scientist, creates a humanoid robot named Chitti. However, things go out of control when Chitti develops emotions and falls in love with Vaseegaran\’s girlfriend, leading to a deadly conflict.',
      cast: 'Rajinikanth, Aishwarya Rai Bachchan, Danny Denzongpa',
      releaseYear: 2010,
      rating: '7.1',
      poster: enthiranposter

    },
    6: {
      title: 'Top Gun: Maverick',
      description: 'After more than 30 years of service as one of the Navy’s top aviators, Pete "Maverick" Mitchell is back to train the next generation of pilots for a dangerous mission. As he faces ghosts from his past, Maverick must prove he still has what it takes.',
      cast: 'Tom Cruise, Miles Teller, Jennifer Connelly, Jon Hamm',
      releaseYear: 2022,
      rating: '8.3',
      poster: topgunPoster

    },
  };

  const movie = movieData[id];

  if (!movie) {
    return (
      <div className="container">
        <p>Movie not found.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>{movie.title} ({movie.releaseYear})</h2>
      <img src={movie.poster} alt={`${movie.title} Poster`} style={{ width: '200px', borderRadius: '8px' }} />
      <p>Description: {movie.description}</p>
      <p>Cast: {movie.cast}</p>
      <p>Rating: {movie.rating} / 10</p>
      <div style={{ display: 'flex', gap: '250px', marginTop: '16px' }}>
  <Link to={`/Booking/${id}`} className="btn">Book Tickets</Link>
  <Link to="/" className="btn">Back to Home</Link>
</div>


    </div>
  );
};

export default MovieDetails;



