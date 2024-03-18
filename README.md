# Automação de Testes Trello API com Cypress

Este projeto consiste na automação de testes para a API do Trello utilizando o framework Cypress. Os testes foram desenvolvidos para validar as principais funcionalidades de criação e exclusão de boards, listas e cards.

## Testes Automatizados

Os testes automatizados incluídos neste projeto são:

- Cadastrar um novo board.
- Cadastrar uma nova lista em um board existente.
- Cadastrar um novo card em uma lista existente.
- Excluir um card.
- Excluir um board.

Os testes são realizados utilizando a API do Trello e o framework Cypress para garantir a funcionalidade e integridade das operações de CRUD (criar, ler, atualizar e excluir) na plataforma.

## Estratégia de Testes

Para visualizar a estratégia de testes utilizada, consulte o mapa mental incluído neste projeto.

## Pré-requisitos

Antes de executar os testes, certifique-se de ter o Cypress instalado e configurado em seu ambiente de desenvolvimento. Além disso, é necessário obter uma chave de API e um token de acesso para a API do Trello e configurá-los como variáveis de ambiente.

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando: npm install

## Configuração

Antes de executar os testes, configure as variáveis de ambiente com sua chave de API e token de acesso:
      "SUA_KEY": "insira_sua_key",
      "SEU_TOKEN": "insira_seu_token"
Substitua `insira_sua_key` e `insira_seu_token` pelos valores fornecidos pela API do Trello.
  
## Execução dos Testes

Para executar os testes, utilize o seguinte comando: npx cypress open
Isso abrirá a interface do Cypress, onde você pode selecionar e executar os testes desejados.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests com correções de bugs, melhorias de código ou novos recursos.

## Licença

Este projeto é fornecido exclusivamente para fins de avaliação. Todos os direitos autorais deste projeto são reservados ao autor, Luciane Faria. A empresa VERX TECNOLOGIA E INOVACAO LTDA. está autorizada a revisar, modificar e testar este projeto para fins de avaliação apenas. Nenhuma parte deste projeto pode ser reproduzida, distribuída ou utilizada para outros fins sem permissão prévia por escrito do autor.


## Referências Adicionais

- [Mapa Mental](mapa_mental.txt): Arquivo contendo o mapa mental com a estratégia de testes para o projeto.



