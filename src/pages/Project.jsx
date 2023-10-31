import React from 'react';
import FlipCard from '../components/Flipcard'

export default function Project() {
  // Define an array of card details here
  const cardDetails = [
    {
      frontTitle: 'Car Rental System',
      backDetails: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      frontTitle: 'Another Project',
      backDetails: ['Frontend', 'Backend', 'Database'],
    },
    {
        frontTitle: 'Another Project',
        backDetails: ['Frontend', 'Backend', 'Database'],
      },
      {
        frontTitle: 'Another Project',
        backDetails: ['Frontend', 'Backend', 'Database'],
      },
      {
        frontTitle: 'Another Project',
        backDetails: ['Frontend', 'Backend', 'Database'],
      },
    // Add more objects as needed
  ];

  return (
    <div className='flex lg:flex-row flex-wrap items-center justify-center flex-col relative'>
      {cardDetails.map((details, index) => (
        <FlipCard key={index} details={details} />
      ))}
    </div>
  );
}
