import { useLocation, Link } from 'react-router-dom';

export default function Results() {
  const { state } = useLocation();
  const score = state?.score ?? 0;
  const total = state?.total ?? 0;

  return (
    <div className='flex flex-col items-center p-8'>
      <h1 className='text-3xl mb-4'>Your Results</h1>
      <p className='text-xl mb-4'>You scored {score} out of {total}</p>
      <Link to='/' className='mt-4 px-4 py-2 bg-green-600 text-white rounded-xl'>Play Again</Link>
    </div>
  );
}