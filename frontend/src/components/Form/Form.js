import React from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import recommendationService from '../../services/recommendation.service';

function Form({ onSubmitRecommendations }) {

  const { preferences, features, products } = useProducts();


  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  // Ao submeter, processa os dados e envia as recomendações
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataRecommendations = recommendationService.getRecommendations(formData, products);
    onSubmitRecommendations(dataRecommendations);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm"
    >
      {/* Bloco de seleção de preferências */}
      <div>
        <Preferences
          preferences={preferences}
          onPreferenceChange={(selected) =>
            handleChange('selectedPreferences', selected)
          }
        />
      </div>

      {/* Bloco de seleção de funcionalidadees */}
      <div>
        <Features
          features={features}
          onFeatureChange={(selected) =>
            handleChange('selectedFeatures', selected)
          }
        />
      </div>

      <div>
        <RecommendationType
          selectedRecommendationType={formData.selectedRecommendationType}
          onRecommendationTypeChange={(selected) =>
            handleChange('selectedRecommendationType', selected)
          }
        />
      </div>

      <div className="pt-4">
        <SubmitButton text="🔍 Obter recomendação" />
      </div>
    </form>
  );
}

export default Form;
