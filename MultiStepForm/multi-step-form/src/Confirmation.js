import React from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Confirmation = () => {
  const navigate = useNavigate();
  const reviewDetails = JSON.parse(localStorage.getItem('reviewDetails'));

  const handleSend = () => {
    const templateParams = {
      name: reviewDetails.name,
      message: reviewDetails.message,
      review: reviewDetails.review,
      reply_to: reviewDetails.email,  // Ajout de l'email pour le champ "Répondre À"
    };

    emailjs.send('beayman35@gmail.com', 'template_8zqxkh6', templateParams, 'G9h8w4aNhMQaUKdyl')
      .then(() => {
        alert('Email envoyé avec succès');
        localStorage.clear();
        navigate('/');
      }, error => {
        console.error('Erreur:', error);
      });
  };

  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-gradient-to-r from-gray-500 via-blue-500 to-gray-500'>
      <div className='flex flex-col w-1/2 items-center rounded-xl border-4 border-gray-600'>
        <h2 className='p-7 text-white text-xl'>Confirmation</h2>
        <p><strong>Nom :</strong> {reviewDetails.name}</p>
        <p><strong>Email :</strong> {reviewDetails.email}</p>
        <p><strong>Avis :</strong> {reviewDetails.review}</p>
        <p className='pb-3'><strong>Message :</strong> {reviewDetails.message}</p>
        <button className=' mb-7 p-3 bg-blue-500 rounded-lg hover:bg-blue-600 hover:text-white' onClick={handleSend}>Envoyer</button>
      </div>
    </div>
  );
};

export default Confirmation;
