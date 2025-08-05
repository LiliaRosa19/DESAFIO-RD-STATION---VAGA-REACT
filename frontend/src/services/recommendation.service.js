/**
 * Retorna produtos recomendados com base nas preferências, funcionalidades e tipo de recomendação.
 *
 * @param {Object} formData - Dados do formulário preenchido pelo usuário
 * @param {Array} products - Lista de produtos disponíveis
 * @returns {Array} - Produtos recomendados
 */
const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [], selectedRecommendationType: '' },
  products
) => {
  const { selectedPreferences, selectedFeatures, selectedRecommendationType } = formData;

  const filteredProducts = products.filter(product => {
    // Verifica se todas as preferências selecionadas aparecem em algum texto das preferências do produto
    const hasAllPreferences = selectedPreferences.every(pref =>
      product.preferences.some(p => p.toLowerCase().includes(pref.toLowerCase()))
    );

    // Verifica se todas as funcionalidades selecionadas aparecem em algum texto das features do produto
    const hasAllFeatures = selectedFeatures.every(feat =>
      product.features.some(f => f.toLowerCase().includes(feat.toLowerCase()))
    );

    return hasAllPreferences && hasAllFeatures;
  });

  // Modo "SingleProduct": retorna apenas o último produto válido
  if (selectedRecommendationType === 'SingleProduct') {
    return filteredProducts.slice(-1);
  }

  // Caso contrário (MultipleProducts), retorna todos os matches
  return filteredProducts;
};

export default { getRecommendations };
