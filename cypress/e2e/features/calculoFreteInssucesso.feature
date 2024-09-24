Feature: Cálculo de Frete no SuperFrete Inssucesso

Scenario Outline: Realizar o cálculo de frete com erro
    Given que o usuário acessa a página de cálculo de frete
    When o usuário insere o CEP de origem "<cepOrigem>"
    And insere o peso "<peso>"
    And insere a altura "<altura>"
    And insere a largura "<largura>"
    And insere o comprimento "<comprimento>"
    And insere o CEP de destino "<cepDestino>"
    Then o erro "<erro>" é exibido

    Examples:
      | cepOrigem | peso | altura | largura | comprimento | cepDestino | erro                       |
      | 08090-284 |  300 |      5 |      11 |         155 |  05407-002 | Comprimento máximo 150 cm. |