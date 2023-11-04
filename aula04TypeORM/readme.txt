Instruções para criar o projeto para reproduzir os exemplos:
a) Crie uma pasta de nome aula4 (ou qualquer outro nome sem caracteres especiais) no local de sua preferência do
computador;
b) Abra a pasta aula4 no VS Code e acesse o terminal do VS Code;
c) No terminal, execute o comando npm init -y para criar o arquivo fundamental de um projeto Node, arquivo
package.json;
d) No terminal, execute o comando npm i express para instalar o pacote express;
e) No terminal, execute o comando npm i -D @types/express para instalar o pacote que contém as definições
de tipos do pacote express. Quando usamos um pacote é preciso ter acesso às declarações de tipo do pacote para
que o TS saiba quais tipos de dados esperar do framework;
f) No terminal, execute o comando npm i dotenv para instalar o pacote dotenv. As variáveis de ambientes são
acessadas através do objeto process.env. Porém, as variáveis declaradas no arquivo .env não são carregadas pelo
ambiente de execução do Node no objeto process.env. Usaremos o dotenv parar carregar as variáveis do arquivo
.env no objeto process.env;
g) No terminal, execute o comando npm i typeorm para instalar a biblioteca que possui ferramentas para persistir
dados no SGBD (https://www.npmjs.com/package/typeorm);
h) No terminal, execute o comando npm i sqlite3 para instalar a biblioteca que possui ferramentas para acessar o
BD do SQLite (https://www.npmjs.com/package/sqlite3);
i) No terminal, execute o comando npm i pg para instalar a biblioteca que possui ferramentas para acessar o SGBD
PostgreSQL (https://www.npmjs.com/package/pg);
j) No terminal, execute o comando npm i -D @types/pg para instalar o pacote que contém as definições de tipos
do pacote pg;
k) No terminal, execute o comando npm i -D ts-node ts-node-dev typescript para instalar os pacotes tsnode,
ts-node-dev e typescript como dependências de desenvolvimento;
l) No terminal, execute o comando tsc --init para criar o arquivo de opções e configurações para o compilador TS
(arquivo tsconfig.json);
m) Crie o arquivo .gitignore na raiz do projeto e coloque a linha para ignorar a pasta node_modules;
n) Crie o arquivo .env na raiz do projeto e coloque as seguintes variáveis de ambiente:
PORT = 3001

2
o) Crie a pasta src na raiz do projeto;
p) Crie as pastas entities, controllers e routes na pasta src;
q) Crie os arquivos index.ts e data-source.ts na pasta src e os
demais arquivos nas pastas controllers, entities e routes.