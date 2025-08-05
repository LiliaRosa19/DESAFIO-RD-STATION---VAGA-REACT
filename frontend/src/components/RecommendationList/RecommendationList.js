// RecommendationList.js
import React from 'react';

function RecommendationList({ recommendations }) {
  if (recommendations.length === 0) {
    return (
      <div className="text-center text-gray-500 italic py-4">
        Nenhuma recomendação encontrada com os critérios selecionados.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {recommendations.map((product, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-all duration-200"
        >
          <h3 className="text-lg font-semibold text-blue-700 mb-2">{product.name}</h3>

          {product.features?.length > 0 && (
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default RecommendationList;
