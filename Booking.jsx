import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './SeatSelection.css';

const rows = ['A','B','C','D','E','F','G','H','J','K','L'];
const cols = Array.from({ length: 16 }, (_, i) => i + 1);

const Booking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const navigate = useNavigate();
  const { id: movieId } = useParams();

  useEffect(() => {
    const booked = JSON.parse(localStorage.getItem(`bookedSeats_${movieId}`)) || [];
    setBookedSeats(booked);
  }, [movieId]);

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleProceed = () => {
    const allBooked = [...bookedSeats, ...selectedSeats];
    localStorage.setItem(`bookedSeats_${movieId}`, JSON.stringify(allBooked));
    localStorage.setItem(`selectedSeats_${movieId}`, JSON.stringify(selectedSeats));
    navigate(`/confirmation/${movieId}`);
  };

  return (
    <div className="seat-container">
      <h2>Select Your Seats</h2>

      <div className="legend">
        <div className="legend-item">
          <div className="seat legend-available"></div>
          <span>Available</span>
        </div>
        <div className="legend-item">
          <div className="seat legend-selected"></div>
          <span>Selected</span>
        </div>
        <div className="legend-item">
          <div className="seat legend-booked"></div>
          <span>Booked</span>
        </div>
      </div>

      <div className="screen">Screen</div>

      <div className="seats-grid">
        {rows.map((row) =>
          cols.map((col) => {
            const seatId = `${row}${col}`;
            const isBooked = bookedSeats.includes(seatId);
            const isSelected = selectedSeats.includes(seatId);

            return (
              <button
                key={seatId}
                className={`seat ${isBooked ? 'booked' : ''} ${isSelected ? 'selected' : ''}`}
                onClick={() => toggleSeat(seatId)}
                disabled={isBooked}
              >
                {seatId}
              </button>
            );
          })
        )}
      </div>

      <button
        className="proceed-button"
        onClick={handleProceed}
        disabled={selectedSeats.length === 0}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default Booking;

