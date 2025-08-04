# 🧠 Recomendador de Produtos - RD Station

Este projeto é uma solução para o **Desafio Técnico Frontend (Júnior/Pleno)** da RD Station.

A aplicação é um sistema de recomendação de produtos com base nas preferências e funcionalidades desejadas pelo usuário. Desenvolvido com **React.js**, **Tailwind CSS** e com testes automatizados em **Jest**.

---

## 🚀 Funcionalidades

- Seleção de **preferências** e **funcionalidades** via formulário.
- Escolha entre:
  - **SingleProduct**: retorna um único produto (último match).
  - **MultipleProducts**: retorna todos os produtos correspondentes.
- Exibição de recomendações com design limpo e responsivo.
- Lógica modular e testada.
- **Feedback claro** caso nenhuma recomendação seja encontrada.

---

## 🛠️ Tecnologias utilizadas

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [json-server](https://github.com/typicode/json-server)
- [Jest](https://jestjs.io/)
- [Node.js](https://nodejs.org/) (versão 18.3 ou superior)

---

## ⚙️ Como executar o projeto

### Pré-requisitos

- Node.js **18.3 ou superior**
- Yarn ou npm
- Acesso ao terminal com permissões para scripts `.sh`

---

### Passos para rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo

# 2. Instale as dependências
yarn install

# 3. Execute o script de instalação (se necessário)
./install.sh

# 4. Rode o app (frontend + backend simultaneamente)
yarn dev


✅ Rodando os testes
yarn test

Os testes cobrem:
-> Recomendações nos modos SingleProduct e MultipleProducts
-> Casos com e sem correspondência
-> Empates (último produto válido)
-> Preferências genéricas ou inexistentes

💡 Melhorias aplicadas
✅ Refatoração completa do layout com Tailwind CSS
✅ Separação de responsabilidades em componentes reutilizáveis
✅ Mensagens explicativas para quando não houver resultados
✅ Código limpo, modular e comentado

🔎 Observações
-> Se nenhuma recomendação aparecer, é porque não há produto que combine exatamente com os filtros selecionados.
-> O layout foi otimizado para melhorar a experiência do usuário, sem sair do escopo proposto.
-> A lógica foi isolada e validada com testes automatizados abrangentes.
