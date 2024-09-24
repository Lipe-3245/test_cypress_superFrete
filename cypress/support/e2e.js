// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import { url } from 'inspector';
import './commands'
import "allure-cypress";

// Ignorar exceções não tratadas
Cypress.on('uncaught:exception', (err, runnable) => {
  // Imprimir o erro no console
  console.error(err);
  
    // Retornar false para impedir que o Cypress falhe o teste
    // em caso de exceção não tratada
    //return false;

    // Ou retornar true para permitir que o Cypress falhe o teste
    // em caso de exceção não tratada
     return false;

  });

  // Executa antes de cada teste
beforeEach(() => {
    // Limpar cookies
    cy.clearCookies();
  
    // Limpar armazenamento local
   // cy.clearLocalStorage();
  
    // Definir a resolução da tela para 1366x768
    cy.viewport(1366, 768);
  });

 
  
  


  
  
  

// Alternatively you can use CommonJS syntax:
// require('./commands')