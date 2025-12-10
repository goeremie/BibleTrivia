import { useState } from 'react';
import MultipleChoice from './questions/MultipleChoice';
import TrueFalse from './questions/TrueFalse';
import ShortAnswer from './questions/ShortAnswer';
import { useNavigate } from 'react-router-dom';

const QUESTIONS = [
  { type: 'multiple', question: 'Who built the ark?', options: ['Moses','Noah','David','Solomon'], answer: 'Noah' },
  { type: 'truefalse', question: 'Jesus turned water into wine.', answer: true },
  { type: 'short', question: 'Finish the verse: "The Lord is my ____."', answer: 'shepherd' }
];

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    if (index + 1 < QUESTIONS.length) setIndex(index + 1);
    else navigate('/results', { state: { score, total: QUESTIONS.length } });
  };

  const q = QUESTIONS[index];

  return (
    <div className='p-8 max-w-xl mx-auto'>
      {q.type === 'multiple' && <MultipleChoice data={q} onAnswer={handleAnswer} />}
      {q.type === 'truefalse' && <TrueFalse data={q} onAnswer={handleAnswer} />}
      {q.type === 'short' && <ShortAnswer data={q} onAnswer={handleAnswer} />}
    </div>
  );
}
