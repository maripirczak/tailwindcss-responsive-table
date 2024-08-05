// Docs {@link https://tailwindcss.com/docs/text-color}
import React from 'react';

export function App() {
  return (
    <div className='container mx-auto'>
      <table className='w-full mx-2 border-collapse' >
        <thead className='bg-green-100 '>
          <tr className='border-b text-left text-sm '>
            <th className='py-2'>Name</th>
            <th className='hidden md:table-cell'>Occupation</th>
            <th className='hidden md:table-cell'>E-mail</th>
            <th>Situation</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b text-left text-sm text-gray-600 '>
            <td className= 'py-2 text-black'>
              <p className='font-bold'>Liam Anderson</p>
              <p className='block md:hidden'>Lawyer</p>
              <p className='block md:hidden'>liam.anderson@example.ca</p>
            </td>
            <td className='hidden md:table-cell'>Lawyer</td>
            <td className='hidden md:table-cell'>liam.anderson@example.ca</td>
            <td>Member</td>
            <td className='text-sky-500 hover:font-semibold'> <a href="">Edit</a> </td>
          </tr>

          <tr className='border-b text-left text-sm text-gray-600 '>
            <td className= 'py-2 text-black'>
              <p className='font-bold'>Ana Costa</p>
              <p className='block md:hidden'>Teacher</p>
              <p className='block md:hidden'>ana.costa@example.com</p>
            </td>
            <td className='hidden md:table-cell'>Teacher</td>
            <td className='hidden md:table-cell'>ana.costa@example.com</td>
            <td>Member</td>
            <td className='text-sky-500 hover:font-semibold'> <a href="">Edit</a> </td>
          </tr>

          <tr className='border-b text-left text-sm text-gray-600 '>
            <td className= 'py-2 text-black'>
              <p className='font-bold'>Maria da Silva</p>
              <p className='block md:hidden'>Athlete</p>
              <p className='block md:hidden'>maria.silva@exemple.com</p>
            </td>
            <td className='hidden md:table-cell'>Athlete</td>
            <td className='hidden md:table-cell'>maria.silva@exemple.com</td>
            <td>Member</td>
            <td className='text-sky-500 hover:font-semibold'> <a href="">Edit</a> </td>
          </tr>

          <tr className='border-b text-left text-sm text-gray-600 '>
            <td className= 'py-2 text-black'>
              <p className='font-bold'>Emma Thompson</p>
              <p className='block md:hidden'>Designer</p>
              <p className='block md:hidden'>emma.thompson@example.ca</p>
            </td>
            <td className='hidden md:table-cell'>Designer</td>
            <td className='hidden md:table-cell'>emma.thompson@example.ca</td>
            <td>Member</td>
            <td className='text-sky-500 hover:font-semibold'> <a href="">Edit</a> </td>
          </tr>
         
        </tbody>
      </table>
  
    </div>
  );
}

window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        'my-indigo': '#4f45e5',
      },
    },
  },
};
