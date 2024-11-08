import React, { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  equipment: {
    id: string;
    name: string;
    price: number;
  };
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, equipment }) => {
  const [bookingData, setBookingData] = useState({
    startDate: '',
    endDate: '',
    quantity: 1,
  });

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        width: '90%',
        maxWidth: '500px',
      }}>
        <h2 style={{ marginBottom: '20px' }}>Book {equipment.name}</h2>
        
        <form onSubmit={(e) => {
          e.preventDefault();
          // Handle booking submission
          console.log('Booking:', bookingData);
          onClose();
        }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Start Date</label>
            <input
              type="date"
              value={bookingData.startDate}
              onChange={(e) => setBookingData({ ...bookingData, startDate: e.target.value })}
              style={{ width: '100%', padding: '8px' }}
              required
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>End Date</label>
            <input
              type="date"
              value={bookingData.endDate}
              onChange={(e) => setBookingData({ ...bookingData, endDate: e.target.value })}
              style={{ width: '100%', padding: '8px' }}
              required
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Quantity</label>
            <input
              type="number"
              min="1"
              value={bookingData.quantity}
              onChange={(e) => setBookingData({ ...bookingData, quantity: parseInt(e.target.value) })}
              style={{ width: '100%', padding: '8px' }}
              required
            />
          </div>

          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '10px 20px',
                backgroundColor: '#gray',
                border: 'none',
                borderRadius: '4px',
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#1a237e',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
              }}
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal; 