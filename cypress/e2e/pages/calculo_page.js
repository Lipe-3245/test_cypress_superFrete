/// <reference types="cypress" />

import { error } from "console";
import CalculoElements from "../elements/calculoElements";
const calculoElements = new CalculoElements();
const url = Cypress.config("baseUrl");
class CalculoPage {
  acessoCalculoPage() {
    cy.visit(url);
    cy.wait(10000);
  }

  cepOrigem(cepOrigem) {
    cy.get(calculoElements.inputCepOrigem()).type(cepOrigem);
  }
  selectFormatEnvio(formatoEnvio) {
    cy.get(calculoElements.selectComboboxFormatEnvio()).select(formatoEnvio);
    cy.wait(5000)
  }
  selectPeso(peso) {
    cy.get(calculoElements.selectComboboxPeso()).click()
    cy.get(calculoElements.selectTrezentos()).click()
  }
  inputAltura(altura) {
    cy.get(calculoElements.inputAltura()).type(altura);
  }
  inputLargura(largura) {
    cy.get(calculoElements.inputLargura()).type(largura);
  }
  inputComprimento(comprimento) {
    cy.get(calculoElements.inputComprimento()).type(comprimento);
    
  }

  cepDestino(cepDestino) {
    cy.get(calculoElements.inputCepDestino()).type(cepDestino);
    
  }
  resultadoCalcularFrete() {
    cy.get(calculoElements.btnCalcularFrete()).click();
    cy.wait(9000)
  }

  
  
  messagemDeErroComprimento(){
    cy.get(calculoElements.btnCalcularFrete()).click();
    cy.wait(3000)
    cy.get('.error-message').should('be.visible').and('contain', error);
  }


}
export default CalculoPage;
