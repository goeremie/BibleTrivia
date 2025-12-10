export default function MultipleChoice({ data, onAnswer }) {
  return (
    <div>
      <h2 className='text-2xl mb-4'>{data.question}</h2>
      <div className='grid gap-3'>
        {data.options.map((opt, i) => (
          <button key={i} className='p-3 border rounded-xl hover:bg-gray-200'
            onClick={() => onAnswer(opt === data.answer)}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
