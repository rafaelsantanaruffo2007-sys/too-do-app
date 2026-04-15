To-Do List (HTML, CSS e JavaScript)

Visão geral:

Este projeto consiste em uma aplicação de lista de tarefas (To-Do List) desenvolvida utilizando HTML, CSS e JavaScript puro. O objetivo é demonstrar a construção de uma interface interativa com manipulação de estado no front-end, sem o uso de frameworks.

A aplicação permite ao usuário criar, visualizar, concluir e remover tarefas, além de definir níveis de prioridade para cada item.


 Objetivo:

O objetivo principal deste projeto é:

- Demonstrar conceitos fundamentais de desenvolvimento web
- Aplicar manipulação de DOM com JavaScript
- Implementar persistência de dados no navegador com localStorage
- Estruturar um pequeno sistema seguindo princípios básicos de arquitetura de software



Funcionalidades:

1. Adição de tarefas
O usuário pode digitar uma tarefa em um campo de entrada e adicioná-la à lista.

2. Definição de prioridade
Cada tarefa pode ser classificada em três níveis:
- Alta
- Média
- Baixa

A prioridade influencia diretamente na estilização visual da tarefa.

3. Listagem dinâmica
As tarefas são renderizadas dinamicamente na interface conforme são adicionadas ou modificadas.

4. Marcação de conclusão
Cada tarefa possui um checkbox que permite marcar como concluída. Ao ser marcada:
- A tarefa é visualmente alterada (texto riscado)
- O estado é atualizado internamente

5. Remoção de tarefas
Cada item possui um botão que permite excluir a tarefa da lista.

6. Persistência de dados
As tarefas são armazenadas no navegador utilizando localStorage. Isso garante que os dados não sejam perdidos ao recarregar a página.



Estrutura do Projeto:



/project
│
├── index.html     # Estrutura da aplicação
├── styles.css     # Estilização da interface
└── script.js      # Lógica da aplicação





Arquitetura:

A aplicação segue uma separação básica de responsabilidades:

HTML (View)
Responsável pela estrutura da interface.

CSS (Presentation)
Responsável pela aparência visual e estilização condicional baseada em prioridade e estado.

JavaScript (Logic)
Responsável pela lógica da aplicação, incluindo:
- Manipulação de eventos
- Controle de estado
- Renderização dinâmica
- Persistência de dados



Modelo de Dados:

Cada tarefa é representada como um objeto com a seguinte estrutura:

```json
{
  "text": "Descrição da tarefa",
  "priority": "high | medium | low",
  "completed": false
}



Fluxo da Aplicação:

1. O usuário insere uma tarefa e seleciona a prioridade
2. A tarefa é adicionada ao array de estado
3. O estado é salvo no localStorage
4. A interface é atualizada através da função de renderização
5. Interações futuras (concluir ou excluir) atualizam o estado e re-renderizam a lista



Tecnologias Utilizadas:

* HTML5
* CSS3
* JavaScript (ES6+)
* Web Storage API (localStorage)

-

Conceitos Aplicados:

* Manipulação de DOM
* Eventos (click, change, keypress)
* Programação baseada em estado
* Renderização dinâmica
* Serialização de dados (JSON)
* Separação de responsabilidades



Limitações:

* Não há backend (dados limitados ao navegador)
* Não há autenticação de usuários
* Não há sincronização entre dispositivos
* Interface simples sem responsividade avançada



Possíveis Melhorias:

* Implementar filtros (todas, concluídas, pendentes)
* Permitir edição de tarefas
* Adicionar ordenação por prioridade
* Implementar drag and drop
* Migrar para um framework como React
* Integrar com uma API backend



Como Executar:

1. Baixe ou clone este repositório
2. Abra o arquivo `index.html` em um navegador
3. Utilize a aplicação normalmente



Conclusão:

Este projeto serve como base para compreensão de aplicações web interativas. Ele demonstra como construir um sistema funcional completo utilizando apenas tecnologias nativas do navegador, sendo um excelente ponto de partida para evoluções futuras.


