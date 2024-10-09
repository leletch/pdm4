# FLUXO FIREBASE
O fluxo de login usando Firebase Authentication e Firestore envolve a autenticação de usuários e o armazenamento de dados adicionais relacionados a esses usuários. A seguir, detalho o fluxo e a finalidade dos principais serviços envolvidos:

# 1. Firebase Authentication (Firebase Auth)
O Firebase Authentication é responsável pela autenticação de usuários, fornecendo uma forma segura e simples de implementar o login usando diferentes métodos de autenticação. Sua principal função é validar a identidade do usuário e fornecer um token de autenticação (JWT) para ser utilizado no acesso a outros serviços do Firebase e APIs.

# 2. Fluxo de Login - Firebase Authentication

# a. Tela de Login
O usuário acessa a tela de login, onde escolhe um método de autenticação (como e-mail/senha ou login social via Google ou Facebook).

# b. Processo de autenticação
Login com e-mail/senha: O usuário insere seu e-mail e senha, que são validados pelo Firebase Authentication. Se forem válidos, ele recebe um token de autenticação.
Login com redes sociais: O usuário escolhe um provedor como Google, Facebook ou Twitter. O Firebase Auth integra-se com esses provedores para realizar a autenticação.

# c. Verificação de autenticação
O Firebase Auth emite um token JWT que o cliente pode utilizar para acessar outros serviços do Firebase (como Firestore ou Realtime Database).
Esse token é armazenado localmente (geralmente no dispositivo do usuário) e pode ser utilizado para autenticar requisições subsequentes.

# 3. Firestore
O Firestore é o banco de dados em tempo real do Firebase, utilizado para armazenar dados de aplicativos, como informações de usuários, produtos, mensagens, etc.

# Função do Firestore no fluxo de login:

# Armazenamento de dados de usuário
Após a autenticação bem-sucedida, os dados do usuário (nome, e-mail, foto de perfil, etc.) podem ser armazenados ou recuperados do Firestore. Os dados dos usuários geralmente são armazenados em uma coleção de usuários no Firestore.

# Personalização de experiência
Com o Firestore, é possível manter dados personalizados de cada usuário, como preferências, histórico de compras, entre outros.

# Acesso controlado 
O Firestore possui regras de segurança que podem ser configuradas para permitir ou negar o acesso a determinados dados com base no status de autenticação ou na identidade do usuário.

----------------------------------------------------------------------------------------------------------------------------

# Finalidade dos serviços utilizados

# Firebase Authentication (Firebase Auth)
Gerencia o processo de autenticação, validando identidades e garantindo segurança no login.

# Firestore
Armazena e gerencia dados dos usuários e outros dados do aplicativo de forma escalável e em tempo real.

# Firestore Security Rules
Protege os dados do Firestore, garantindo que apenas usuários autenticados e autorizados possam acessar ou modificar seus próprios dados.

Esse fluxo simplifica a implementação de autenticação e armazenamento de dados em aplicativos, reduzindo a complexidade e aumentando a segurança, além de permitir integração fácil com outros serviços do Firebase.
