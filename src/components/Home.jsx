export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-8'>
      <h1 className='text-4xl font-bold mb-4'>Bible Trivia Challenge</h1>
      <p className='text-lg mb-6'>Test your knowledge of Scripture through fun and challenging questions!</p>
      <a href='/quiz' className='px-6 py-3 bg-blue-600 text-white rounded-xl'>Start Quiz</a>
    </div>
  );
}