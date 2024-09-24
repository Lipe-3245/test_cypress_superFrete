Feature: Cálculo de Frete no SuperFrete Inssucesso

  Scenario Outline: Realizar o cálculo de frete com erro
    Given que o usuário acessa a página de cálculo de frete
    When o usuário insere o CEP de origem "<cepOrigem>"
    And insere o peso "<peso>"
    And insere a altura "<altura>"
    And insere a largura "<largura>"
    And insere o comprimento "<comprimento>"
    And insere o CEP de destino "<cepDestino>"
    Then o erro "<messageDEErro>" é exibido

    Examples:
      | cepOrigem | peso | altura | largura | comprimento | cepDestino | messageDEErro              |
      | 08090-284 |  300 |      5 |      11 |         155 |  05407-002 | Comprimento máximo 150 cm. |
      | 08090-284 |  300 |      5 |      11 |          12 |  05407-002 | Comprimento mínimo 13 cm.  |
      | 08090-284 |  300 |      5 |       7 |         150 |  05407-002 | Largura mínima 8 cm.       |
      | 08090-284 |  300 |      5 |     155 |         150 |  05407-002 | Largura máxima 150 cm.     |
      | 08090-284 |  300 |    0.3 |      15 |         150 |  05407-002 | Altura mínima 0.4 cm.      |
      | 08090-284 |  300 |    155 |      15 |         150 |  05407-002 | Altura máxima 150 cm.      |
