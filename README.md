Cypress Test Automation Project
Este projeto contém testes automatizados para uma aplicação web utilizando Cypress e segue boas práticas para garantir que os testes comecem em um estado limpo, com a resolução da tela configurada para 1366x768.

Pré-requisitos
Antes de rodar os testes, certifique-se de ter os seguintes itens instalados:

Node.js - versão 12 ou superior
npm - versão 6 ou superior
Cypress - versão 12 ou superior

Instalação

Clone o repositório:
git clone https://github.com/Lipe-3245/test_cypress_superFrete.git

Navegue até a pasta do projeto:
cd nome-do-projeto

Instale as dependências:
npm install

Estrutura do Projeto
cypress/fixtures/: Contém dados de exemplo para uso em seus testes.
cypress/e2e/: Aqui você colocará seus arquivos de teste.
cypress/plugins/: Plugins de Cypress podem ser configurados neste diretório.
cypress/support/: Arquivos de suporte para os testes, como comandos personalizados e configurações globais.

Configurações Padrão
O projeto está configurado para garantir que antes de cada teste:

Cookies e Local Storage sejam limpos, garantindo que nenhum dado persistente interfira nos testes.
A resolução da tela seja ajustada para 1366x768 para garantir que os testes sejam executados em uma resolução padrão e evitem problemas de layout.
Essa configuração é realizada no arquivo cypress/support/e2e.js (ou cypress/support/index.js dependendo da versão do Cypress):

beforeEach(() => {
  // Limpar cookies e armazenamento local antes de cada teste
  cy.clearCookies();
  cy.clearLocalStorage();

  // Definir a resolução da tela para 1366x768
  cy.viewport(1366, 768);
});


Executando os Testes
Para executar os testes automatizados, você pode usar um dos comandos a seguir:

Interface Gráfica (Test Runner)
Para abrir a interface gráfica do Cypress e ver os testes rodando:
npm run cy:open

sso abrirá a janela do Cypress, onde você pode clicar nos testes que deseja rodar.

Execução em Linha de Comando (Headless)
Para rodar os testes sem abrir a interface gráfica, use:
npm run cy:run

Isso executará os testes em modo headless (sem interface) e exibirá os resultados no terminal.

Estrutura de Testes
Os testes foram organizados utilizando as seguintes práticas:

beforeEach(): Garante que antes de cada teste, o estado da aplicação esteja limpo, sem cookies ou dados locais persistentes.
Resolução da tela: Cada teste é executado em uma resolução padrão de 1366x768, garantindo que a aplicação seja validada consistentemente em um ambiente previsível.


Tratamento de Exceções Não Tratadas
O projeto também está configurado para ignorar exceções não tratadas, impedindo que erros inesperados que não afetam diretamente os testes causem falhas nos testes.


Cypress.on('uncaught:exception', (err, runnable) => {
  // Retornar false para impedir que o Cypress falhe o teste em caso de exceção não tratada
  return false;
});


Esse projeto foi desenvolvido com o objetivo de fornecer uma base sólida para a automação de testes com Cypress, com as melhores práticas para garantir a consistência e previsibilidade dos testes. Sinta-se à vontade para adaptar o projeto às suas necessidades.


Contribuindo
Faça um fork do projeto.
Crie uma nova branch (git checkout -b feature/nova-feature).
Commit suas mudanças (git commit -am 'Adiciona nova feature').
Envie para o branch principal (git push origin feature/nova-feature).
Crie um novo Pull Request. 
