import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-2xl shadow-lg space-y-10">


        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
            🧠 Recomendador de Produtos RD Station
          </h1>
          <p className="text-gray-600 text-lg">
            Use o formulário abaixo para selecionar suas preferências e receba recomendações personalizadas.
          </p>
        </div>

        {/* Formulário para entrada de preferências */}
        <Form onSubmitRecommendations={setRecommendations} />

        {/* Lista de recomendações resultantes */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">📋 Recomendações</h2>
          <RecommendationList recommendations={recommendations} />
        </div>
      </div>
    </div>
  );
}

export default App;
