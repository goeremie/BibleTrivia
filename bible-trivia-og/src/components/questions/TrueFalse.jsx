export default function TrueFalse({ data, onAnswer }) {
  return (
    <div>
      <h2 className="text-2xl mb-4 text-white">{data.question}</h2>

      <div className="flex gap-4">
        <button
          className="p-3 rounded-xl bg-white border-2 border-[#b82929] hover:bg-[#f9d4d4] transition font-semibold"
          onClick={() => onAnswer(true === data.answer)}
        >
          True
        </button>

        <button
          className="p-3 rounded-xl bg-white border-2 border-[#b82929] hover:bg-[#f9d4d4] transition font-semibold"
          onClick={() => onAnswer(false === data.answer)}
        >
          False
        </button>
      </div>
    </div>
  );
}
