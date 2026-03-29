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
      <h2 className="text-2xl mb-4 text-white">{data.question}</h2>

      <input
        className="border-2 border-[#b82929] p-2 rounded-xl w-full mb-4 bg-white"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button className="btn-main">Submit</button>
    </form>
  );
}
