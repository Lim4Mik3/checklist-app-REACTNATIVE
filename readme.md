<h1 align="center">
 <p>
   🐮 FarmCheckList
 </p>
</h1>

# FarmCheckList todo o controle na palma da mão.

<p>
  Aplicação com features Offline Fisrt para controle de checklists de fazendeiros e profissionais rurais onde o sinal constante com a internet não pode ser garantido.
</p>

<br />

Projeto desenvolvido como desafio para desenvolvedor React Native.

<br />

<b>Printscreen Home page - Listagem de checklists</b>

![](/images/1.png)

 <br />
 <br />
 
# **Sobre a aplicação 📲**

## Aplicação com seu core em controle de checklists de verificação das tarefas rurais.

<br />

A aplicação deve funcionar em qualquer tipo de situação de conexão, seja essas conexão lenta, conexão boa ou até mesmo **SEM CONEXÃO** (Offline First).

## Requisitos funcionais

- O usuário da aplicação poderá criar, editar e visualizar todos os checklists **Independente de sua conexão com a internet**.
- Os checklists devem ser salvos localmente para controle de cache e offline first utilizando o banco de dados RealmDB.
- Todos os dados, tanto do servidor quanto do client local _(Celular do usuário)_ devem estar sincronizados quando existem conexão com a internet.

<br />
<br />

# **Tecnologias utilizadas 💻**

- React Native (EXPO v44);
- React Navigation
- React Hook Form
- Realm DB
- Styled Components
- Yup Schema Validator
- JSON-Server (fake-api)

<br />

# **Features implementadas 🔨**

## Funcionalidades da aplicação

- Todas as ações do usuário é informada a ele com um flash message indicando o estado da sua ação (Conluida ou se resultou em algum erro), boas práticas de UI/UX.

- Caso o usuário esteja sem internet todas as funcionalidade continuam funcionando e mesmo que ele saia da aplicação todos os dados estão persistidos.

- Ao entrar no aplicativo, será feita a sincronização dos dados locais/remoto se houver conexão com a internet.

- Na criação de um checklist há verificação do formulário sendo obrigatório o seguintes campos:

  - Nome do fazendeiro;
  - Nome e cidade da fazenda;
  - Nome do supervisor;
  - Tipo do checklist;
  - Quantidade de leite produzida no mês;
  - Quantidade de cabeça de gado;
  - Se houve supervisão.
    <br />

- Na edição será feito a validação novamente dos campos exceto **se houve supervisão** e será incluso no registro a data de alteração.

<br />

> ### _Seja resiliente, acredite na sua força, no seu potencial, creia que é capaz e você será!_

<br />

# **Prints Screen da aplicação 📸**

## Todas as fotos da aplicação estão na pasta /images deste repositório, acessem.

<b>Criação de checklist</b>

![](/images/5.png)

<br />
