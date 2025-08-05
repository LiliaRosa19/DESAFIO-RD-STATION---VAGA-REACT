import recommendationService from './recommendation.service';
import mockProducts from '../mocks/mockProducts';

describe('recommendationService', () => {
  test('Retorna recomendação correta para SingleProduct com base nas preferências selecionadas', () => {
    const formData = {
      selectedPreferences: ['Integração com chatbots'],
      selectedFeatures: ['Chat ao vivo e mensagens automatizadas'],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Conversas');
  });

  test('Retorna recomendações corretas para MultipleProducts com base nas preferências selecionadas', () => {
    const formData = {
      selectedPreferences: [
        'Integração fácil com ferramentas de e-mail',
        'Personalização de funis de vendas',
        'Automação de marketing',
      ],
      selectedFeatures: [
        'Rastreamento de interações com clientes',
        'Rastreamento de comportamento do usuário',
      ],
      selectedRecommendationType: 'MultipleProducts',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(2);
    expect(recommendations.map((product) => product.name)).toEqual([
      'RD Station CRM',
      'RD Station Marketing',
    ]);
  });

  test('Retorna apenas um produto para SingleProduct com mais de um produto de match', () => {
    const formData = {
      selectedPreferences: [
        'Integração fácil com ferramentas de e-mail',
        'Automação de marketing',
      ],
      selectedFeatures: [
        'Rastreamento de interações com clientes',
        'Rastreamento de comportamento do usuário',
      ],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Station Marketing');
  });

  test('Retorna o último match em caso de empate para SingleProduct', () => {
    const formData = {
      selectedPreferences: ['Automação de marketing', 'Integração com chatbots'],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Conversas');
  });

  test('Retorna vazio se nenhuma preferência ou funcionalidade combinarem', () => {
  const formData = {
    selectedPreferences: ['Preferência que não existe'],
    selectedFeatures: ['Funcionalidade que também não existe'],
    selectedRecommendationType: 'MultipleProducts',
  };

  const recommendations = recommendationService.getRecommendations(formData, mockProducts);

  expect(recommendations).toHaveLength(0);
});

test('Retorna todos os produtos quando filtros são genéricos (todos batem)', () => {
  const formData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: 'MultipleProducts',
  };

  const recommendations = recommendationService.getRecommendations(formData, mockProducts);

  // Espera todos os produtos, já que nada foi filtrado
  expect(recommendations).toHaveLength(mockProducts.length);
});

test('Retorna produto único corretamente com apenas uma preferência e uma feature', () => {
  const formData = {
    selectedPreferences: ['Integração com chatbots'],
    selectedFeatures: ['Gestão de conversas em diferentes canais'],
    selectedRecommendationType: 'SingleProduct',
  };

  const recommendations = recommendationService.getRecommendations(formData, mockProducts);

  expect(recommendations).toHaveLength(1);
  expect(recommendations[0].name).toBe('RD Conversas');
});

test('Retorna vazio se tipo de recomendação estiver vazio', () => {
  const formData = {
    selectedPreferences: ['Automação de marketing'],
    selectedFeatures: ['Análise de retorno sobre investimento (ROI) de campanhas'],
    selectedRecommendationType: '',
  };

  const recommendations = recommendationService.getRecommendations(formData, mockProducts);

  // Mesmo que não seja "SingleProduct", retorna os produtos múltiplos
  expect(recommendations).toHaveLength(1);
  expect(recommendations[0].name).toBe('RD Station Marketing');
});

});
