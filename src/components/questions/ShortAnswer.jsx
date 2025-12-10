import { useState } from 'react';

export default function ShortAnswer({ data, onAnswer }) {
  const [value, setValue] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAnswer(value.trim().toLowerCase() === data.answer.toLowerCase());
      }}
    >
      <h2 className='text-2xl mb-4'>{data.question}</h2>
      <input
        className='border p-2 rounded-xl w-full mb-4'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className='px-4 py-2 bg-blue-600 text-white rounded-xl'>Submit</button>
    </form>
  );
}