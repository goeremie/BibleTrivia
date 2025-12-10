export default function MultipleChoice({ data, onAnswer }) {
  return (
    <div>
      <h2 className="text-2xl mb-4 text-white">{data.question}</h2>

      <div className="grid gap-3">
        {data.options.map((opt, i) => (
          <button
            key={i}
            className="p-3 rounded-xl bg-white border-2 border-[#b82929] hover:bg-[#f9d4d4] transition font-semibold"
            onClick={() => onAnswer(opt === data.answer)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
