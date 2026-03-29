export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="home-container text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4 text-white">Bible Trivia Challenge</h1>
        <p className="text-lg mb-6 text-white">
          Test your knowledge of Scripture through fun and challenging questions!
        </p>

        <a href="/quiz" className="btn-main inline-block mt-4">
          Start Quiz
        </a>
      </div>
    </div>
  );
}
