import React from 'react';
import { useNavigate } from 'react-router-dom';


const Review = () => {
  const navigate = useNavigate();
  const [review, setReview] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = () => {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    const data = { ...userDetails, review, message };
    localStorage.setItem('reviewDetails', JSON.stringify(data));
    navigate('/confirmation');
  };

  return (
    <div className="flex items-center justify-center flex-col h-screen bg-gradient-to-r from-gray-500 via-blue-500 to-gray-500 w-full">
      <div className='flex items-center justify-center flex-col border-4 border-gray-600 rounded-2xl w-1/2'>
      <h2 className='m-8 text-xl text-white'>Please. Give us your opinion !</h2>
      <div className='mt-7'>
        <input type="radio" id="unhappy" name="review" value="mécontent" onChange={() => setReview('mécontent')} />
        <label className='pr-9' htmlFor="unhappy">😞</label>
        <input type="radio" id="better" name="review" value="pourrait être mieux" onChange={() => setReview('pourrait être mieux')} />
        <label className='pr-9' htmlFor="better">😐</label>
        <input type="radio" id="satisfied" name="review" value="satisfait" onChange={() => setReview('satisfait')} />
        <label className='pr-9' htmlFor="satisfied">😊</label>
        <input type="radio" id="very-satisfied" name="review" value="très satisfait" onChange={() => setReview('très satisfait')} />
        <label htmlFor="very-satisfied">😁</label>
      </div>
      <textarea
        className='mt-7 w-3/4 h-40 text-sm rounded-lg p-4 text-red-950 bg-gray-200'
        placeholder="Commentaires..."
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button className='w-32 bg-blue-500 m-8 rounded-lg p-3 text-white hover:bg-blue-600 hover:text-white' onClick={handleSubmit}>Suivant</button>
      </div>
    </div>
  );
};

export default Review;
