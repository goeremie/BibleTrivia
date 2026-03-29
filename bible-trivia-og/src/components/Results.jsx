import { useLocation, Link } from 'react-router-dom';

export default function Results() {
  const { state } = useLocation();
  const score = state?.score ?? 0;
  const total = state?.total ?? 0;

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="results-container text-center max-w-xl">
        <h1 className="text-3xl mb-4 text-white">Your Results</h1>
        <p className="text-xl mb-4 text-white">
          You scored {score} out of {total}
        </p>

        <Link to="/" className="btn-secondary inline-block mt-4">
          Play Again
        </Link>
      </div>
    </div>
  );
}
