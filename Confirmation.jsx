import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Confirmation.css'; // optional styling

const Confirmation = () => {
  const { id: movieId } = useParams();
  const [seats, setSeats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const selected = JSON.parse(localStorage.getItem(`selectedSeats_${movieId}`)) || [];
    setSeats(selected);
  }, [movieId]);

  const handleConfirmPayment = () => {
    alert('Payment Confirmed!');
    navigate('/');
  };

  return (
    <div className="confirmation-container">
      <h2>Confirm Booking Details!</h2>
      <p><strong>Movie ID:</strong> {movieId}</p>
      <p><strong>Seats Booked:</strong> {seats.length > 0 ? seats.join(', ') : 'None'}</p>
      <p><strong>Total Price:</strong> ₹{seats.length * 200}</p>
      <button className="confirm-button" onClick={handleConfirmPayment}>
  Confirm Payment
</button>

    </div>
  );
};

export default Confirmation;




