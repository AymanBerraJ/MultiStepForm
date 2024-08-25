import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


const Identification = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('Le nom est requis'),
        email: Yup.string().email('Email invalide').required('L\'email est requis'),
      })}
      onSubmit={values => {
        // Stocker les valeurs dans localStorage ou context
        localStorage.setItem('userDetails', JSON.stringify(values));
        navigate('/review');
      }}
    >
<Form className="flex items-center justify-center h-screen border-4 bg-gradient-to-r from-gray-500 via-blue-500 to-gray-500 w-full">
  <div className="m-8 p-6 bg-gray-400 w-1/2 rounded-lg shadow-lg">
    <div className="flex flex-col text-center p-2 space-y-4">
      <div>
        <label className="block text-left pr-2 text-lg font-medium text-gray-700">Nom</label>
        <Field className="rounded-lg w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" name="name" type="text" />
        <ErrorMessage name="name" className="text-red-500 text-sm mt-1" />
      </div>

      <div>
        <label className="block text-left pr-2 text-lg font-medium text-gray-700">Email</label>
        <Field className="rounded-lg w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" name="email" type="email" />
        <ErrorMessage name="email" className="text-red-500 text-sm mt-1" />
      </div>

      <button type="submit" className="mt-4 bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">Suivant</button>
    </div>
  </div>
</Form>

    </Formik>
  );
};

export default Identification;
