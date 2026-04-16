 To-Do List com Deadline (HTML, CSS e JavaScript)

Visão Geral

Este projeto é uma aplicação de lista de tarefas (To-Do List) com definição de prazos (data e hora), desenvolvida utilizando HTML, CSS e JavaScript puro.

A aplicação permite ao usuário criar tarefas, definir prioridade e prazo, acompanhar o status em tempo real e visualizar mudanças visuais baseadas no cumprimento ou atraso das atividades.



Objetivo

O objetivo deste projeto é demonstrar:

- Manipulação de DOM com JavaScript
- Gerenciamento de estado no front-end
- Persistência de dados com localStorage
- Aplicação de regras de negócio baseadas em tempo (deadline)
- Separação de responsabilidades entre HTML, CSS e JavaScript



Funcionalidades

1. Criação de tarefas
O usuário pode:
- Inserir uma descrição
- Definir prioridade (Alta, Média, Baixa)
- Escolher data e hora para execução

2. Definição de prazo (deadline)
Cada tarefa possui um campo de data e hora que representa quando ela deve ser concluída.

3. Listagem dinâmica
As tarefas são exibidas automaticamente na tela após serem adicionadas.

4. Marcação de conclusão
O usuário pode marcar uma tarefa como concluída através de um checkbox.

5. Remoção de tarefas
Cada tarefa pode ser removida da lista por meio de um botão de exclusão.

6. Persistência de dados
As tarefas são armazenadas no navegador utilizando localStorage, mantendo os dados mesmo após recarregar a página.

---

Regras de Negócio (Estados da Tarefa)

A aplicação possui uma lógica baseada em tempo:

- **Pendente (amarelo)**  
  A tarefa ainda não foi concluída e o prazo não expirou.

- **Concluída no prazo (verde)**  
  A tarefa foi finalizada antes do prazo definido.

- **Atrasada (vermelho)**  
  A tarefa não foi concluída até o prazo ou foi concluída após o prazo.

---

Estrutura do Projeto

```

/todo-list
│
├── index.html     # Estrutura da aplicação
├── styles.css     # Estilização e estados visuais
└── script.js      # Lógica e regras de negócio

````

---

Modelo de Dados

Cada tarefa é representada como um objeto:

```json
{
  "text": "Descrição da tarefa",
  "priority": "high | medium | low",
  "deadline": "2026-04-15T14:00",
  "completed": false,
  "completedAt": null
}
````



Fluxo da Aplicação

1. O usuário insere os dados da tarefa
2. A tarefa é adicionada ao array de estado
3. O estado é salvo no localStorage
4. A interface é atualizada dinamicamente
5. O sistema avalia o prazo e define o status visual



Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)
* Web Storage API (localStorage)


Conceitos Aplicados

* Manipulação de DOM
* Eventos (click, change, keypress)
* Programação baseada em estado
* Renderização dinâmica
* Regras condicionais baseadas em tempo
* Serialização de dados com JSON
* Separação de responsabilidades



Como Executar no VS Code

Pré-requisitos

* Ter o Visual Studio Code instalado

Passo a passo

1. Abra o VS Code

2. Crie uma nova pasta para o projeto

3. Dentro da pasta, crie os seguintes arquivos:

   * `index.html`
   * `styles.css`
   * `script.js`

4. Cole os respectivos códigos em cada arquivo

5. Abra o arquivo `index.html`

Forma recomendada

Instale a extensão **Live Server** no VS Code:

1. Vá até a aba de extensões
2. Procure por "Live Server"
3. Instale
4. Clique com o botão direito no `index.html`
5. Selecione **"Open with Live Server"**

Isso irá abrir o projeto no navegador com atualização automática.



Limitações

* Não possui backend (dados ficam apenas no navegador)
* Não há autenticação de usuários
* Não há sincronização entre dispositivos
* Não possui notificações em tempo real



Possíveis Melhorias

* Sistema de filtros (pendentes, concluídas, atrasadas)
* Edição de tarefas
* Notificações de prazo próximo
* Ordenação por prioridade ou data
* Integração com backend (API)
* Interface responsiva avançada
* Migração para frameworks como React



Conclusão

Este projeto representa uma evolução de um simples To-Do List para um sistema com regras reais de negócio baseadas em tempo.

Ele demonstra como construir uma aplicação funcional e estruturada utilizando apenas tecnologias nativas do navegador, servindo como base sólida para projetos mais complexos.

```
```



