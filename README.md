# Previsão do Tempo com React & Material UI

Este é um projeto de previsão do tempo desenvolvido com React e estilizado com Material UI. Utilize o padrão de design Container/Presentational para organizar a lógica de negócios e a apresentação de forma simples. A aplicação consome dados da API da OpenWeather para fornecer informações precisas sobre temperatura, status do clima atual, velocidade do vento e umidade.

## Motivações do Projeto
O projeto foi reescrito para melhorar a experiência do usuário e facilitar a manutenção contínua. Optamos pelo uso do React e Material UI para garantir uma interface moderna e responsiva, enquanto o padrão Container/Presentational foi adotado para manter o código organizado e de fácil compreensão.

### Detalhes sobre o Projeto

#### Padrão "Container/Presentational"

O padrão "Container/Presentational" é uma abordagem arquitetural que separa as responsabilidades de lógica de negócios e de apresentação em um aplicativo.

#### Funcionamento do Padrão
1. **Containers (Componentes de Lógica):** Responsáveis por conter a lógica de negócios do aplicativo. Eles lidam com a recuperação e manipulação de dados, comunicação com APIs externas e gerenciamento de estado global.

2. **Presentational (Componentes de Apresentação):** Responsáveis por exibir a interface do usuário e interagir com o usuário. Eles recebem dados e funções de manipulação de eventos como props, promovendo a reutilização e a manutenção independente da lógica de negócios.

#### Vantagens desse Padrão
- **Separação de Responsabilidades:** Facilita a compreensão, teste e manutenção do código, ao separar a lógica de negócios da interface do usuário.
- **Reutilização de Componentes:** Promove a reutilização de código, uma vez que os componentes de apresentação podem ser facilmente reaproveitados em diferentes contextos.
- **Melhoria da Legibilidade:** A distinção clara entre containers e componentes de apresentação melhora a legibilidade do código.

## Instalação

Antes de começar, certifique-se de ter o Node.js e o npm instalados em sua máquina. Você também precisará de uma chave de API da OpenWeather para consumir os dados de previsão do tempo.

1. **Node.js:** Você pode baixar e instalar o Node.js a partir do [site oficial](https://nodejs.org/en). Siga as instruções de instalação adequadas para o seu sistema operacional.
2. **Git**: Git: Se você ainda não tem o Git instalado, você pode baixá-lo e instalá-lo a partir do [site oficial do Git](https://git-scm.com). Novamente, siga as instruções de instalação para o seu sistema operacional.

Com o Node.js e o Git instalados, e com a sua chave da API, siga as etapas abaixo para configurar e executar o projeto:

1. **Baixando ou Clonando:** Você pode baixar os arquivos do projeto e colocá-los em uma pasta de sua escolha, ou clonar o repositório usando o Git. Utilize o seguinte comando para clonar o repositório:

```
git clone https://github.com/jvmrcl/previsao-do-tempo-jvmrcl.git
```

2. **Configurando a Chave da API da OpenWeather:** Crie um arquivo .env na raiz do projeto e adicione sua chave de API da OpenWeather no seguinte formato:

```
REACT_APP_WEATHER_KEY_API=sua_chave_aqui
```

3. **Instalando Dependências e Iniciando o Projeto:** Após baixar ou clonar o repositório, navegue até o diretório do projeto em seu terminal. Em seguida, execute os seguintes comandos:

```
npm install
npm start
```

Se tudo estiver configurado corretamente, você verá a página inicial do projeto aberta em seu navegador padrão. Agora você está pronto para começar a usar a aplicação de previsão do tempo!

## Links Oficiais das Bibliotecas Utilizadas

Para saber mais sobre as tecnologias utilizadas neste projeto, você pode acessar os seguintes links:

- **React:** O React é uma biblioteca JavaScript para a construção de interfaces de usuário. Para obter mais informações e recursos, visite o [site oficial do React](https://react.dev/).
- **Material UI:** O Material UI é uma biblioteca de componentes React que implementa o design de materiais do Google. Para explorar os componentes disponíveis e aprender como usá-los em seus próprios projetos, visite o [site oficial do Material UI](https://mui.com/material-ui/).
- **OpenWeather API:** A OpenWeather API fornece dados meteorológicos precisos e atualizados para milhares de cidades em todo o mundo. Saiba mais sobre os recursos oferecidos pela API e como integrá-la em seus aplicativos visitando o [site oficial da OpenWeather API](https://openweathermap.org/).