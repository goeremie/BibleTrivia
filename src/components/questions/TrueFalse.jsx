export default function TrueFalse({ data, onAnswer }) {
  return (
    <div>
      <h2 className='text-2xl mb-4'>{data.question}</h2>
      <div className='flex gap-4'>
        <button className='p-3 border rounded-xl hover:bg-gray-200' onClick={() => onAnswer(true === data.answer)}>True</button>
        <button className='p-3 border rounded-xl hover:bg-gray-200' onClick={() => onAnswer(false === data.answer)}>False</button>
      </div>
    </div>
  );
}