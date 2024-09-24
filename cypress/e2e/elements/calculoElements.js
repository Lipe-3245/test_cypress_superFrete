class CalculoElements {
  inputCepOrigem = () => {
    return "#originPostcode";
  };
  inputCepDestino = () => {
    return "#destinationPostcode";
  };
  btnSalvar = () => {
    return ".css-tuxzvu > :nth-child(2) > .MuiButtonBase-root";
  };
  btnLimpar = () => {
    return ".css-tuxzvu > :nth-child(3) > .MuiButtonBase-root";
  };
  selectComboboxFormatEnvio = () => {
    return "#object_format";
  };
  selectComboboxPeso = () => {
    return "#weight";
  };
  selectTrezentos = () => {
    return '[data-value="0.3"]';
  };

  inputAltura = () => {
    return '[data-cy="calculator-packageHeight"] > .MuiInputBase-root';
  };
  inputLargura = () => {
    return '[data-cy="calculator-packageWidth"] > .MuiInputBase-root';
  };
  inputComprimento = () => {
    return '[data-cy="calculator-packageDepth"] > .MuiInputBase-root';
  };
  btnCalcularFrete = () => {
    return '[data-cy="calculator-submit"]';
  };

  mensagemErro = () => {
    return 'p[id="packageDepth-helper-text"]';
  }
}
export default CalculoElements;
