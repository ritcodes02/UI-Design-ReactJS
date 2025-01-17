import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function CompareAccuracy ()  {
  const [selectedTime, setSelectedTime] = useState(15); // Default: 15 min

  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7'], // Slots
    datasets: [
      {
        label: 'Accuracy',
        data: [100, 50, 75, 60, 80, 70, 90],
        backgroundColor: 'rgba(15, 20, 166, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
            callback: function(value) {
              return value + '%';
            },
          },
          max: 100, 
        beginAtZero: true,
        title: {
          display: true,
          text: 'Accuracy',
        },
      },
   
      x: {
        title: {
          display: true,
          text: 'Slots',
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      {/* Time selector */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        {['10MIN', '15MIN', '30MIN', '45MIN'].map((time) => (
          <button
            key={time}
            style={{
              padding: '0.5rem 1rem',
              margin: '0 0.5rem',
              borderRadius: '5px',
              background: time === `${selectedTime}MIN` ? '#4caf50' : '#e0e0e0',
              color: time === `${selectedTime}MIN` ? '#fff' : '#000',
              cursor: 'pointer',
              border: 'none',
            }}
            onClick={() => setSelectedTime(parseInt(time))}
          >
            {time}
          </button>
        ))}
      </div>
      {/* Chart */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default CompareAccuracy;
