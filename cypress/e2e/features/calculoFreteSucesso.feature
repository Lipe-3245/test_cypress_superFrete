Feature: Cálculo de Frete no SuperFrete

  Scenario Outline: Realizar o cálculo de frete com sucesso
    Given que o usuário acessa a página de cálculo de frete
    When o usuário insere o CEP de origem "<cepOrigem>"
    And insere o peso "<peso>"
    And insere a altura "<altura>"
    And insere a largura "<largura>"
    And insere o comprimento "<comprimento>"
    And insere o CEP de destino "<cepDestino>"
    Then resultado é exibido

    Examples:
      | cepOrigem | peso | altura | largura | comprimento | cepDestino |
      | 08090-284 |  300 |      2 |      11 |          16 |  05407-002 |
      

  
