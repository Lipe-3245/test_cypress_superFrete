/// <reference types="cypress" />
import CalculoPage from "../pages/calculo_page";
const calculoPage = new CalculoPage();




Given(/^que o usuário acessa a página de cálculo de frete$/, () => {
	calculoPage.acessoCalculoPage();
});

When(/^o usuário insere o CEP de origem "([^"]*)"$/, (cepOrigem) => {
	calculoPage.cepOrigem(cepOrigem);
});

When(/^insere o peso "([^"]*)"$/, (peso) => {
	calculoPage.selectPeso(peso);
	
});

When(/^insere a altura "([^"]*)"$/, (altura) => {
	calculoPage.inputAltura(altura);
	
});

When(/^insere a largura "([^"]*)"$/, (largura) => {
	calculoPage.inputLargura(largura);
	
});

When(/^insere o comprimento "([^"]*)"$/, (comprimento) => {
	calculoPage.inputComprimento(comprimento);
	
});

When(/^insere o CEP de destino "([^"]*)"$/, (cepDestino) => {
	calculoPage.cepDestino(cepDestino);
	
});


Then(/^resultado é exibido$/, () => {
	calculoPage.resultadoCalcularFrete();
});












