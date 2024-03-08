# React Chat APP

Mobile Cook App, projeto de um app de receitas utilizando React Native.

## Tecnologias utilizadas


Para gerenciamento de tabelas foi utilizado um banco de dados serveless. O Supabase, que é uma plataforma de banco de dados open-source e comploeta que oferece uma variedade de recursos avançados.

<a alt="supabase logo" href="https://supabase.com/" target="_blank" rel="noreferrer"><img src="https://supabase.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupabase-logo-wordmark--dark.b36ebb5f.png&w=128&q=75" width="45"></a>

---
Para construção do App, foi utilizado React-Native.

OO React Native é uma biblioteca javasript criada pelo Facebook, é utilizada para desenvolver aplicativos para Android e iOS de forma nativa.

<a alt="React Native logo" href="https://reactnative.dev/" target="_blank" rel="noreferrer"><img src="https://reactnative.dev/img/header_logo.svg" width="45"></a>

--- 

Tabém foi utilizado para facilitar o acesso a recursos nativos da API o Expo.

O Expo é uma ferramenta utilizada no desenvolvimento mobile com React Native que permite o fácil acesso às API’s nativas do dispositivo sem precisar instalar qualquer dependência ou alterar código nativo.

<a alt="Expo Go logo" href="https://expo.dev/" target="_blank" rel="noreferrer"><img src="https://cdn.worldvectorlogo.com/logos/expo-go-app.svg" width="45"></a>

---

## Instalação do Repositório

Para instalar as dependências no repositório:

- Utilizando npm:

  `npm i`

- Utilizando Yarn:

  `Yarn`

Após a instalação das dependências sera necessário utilizar um banco de dados para armazenar as informações da tabela de ingredientes e receitas,

Para isto utilizaremos o Supabase

`https://supabase.com/`

Acesse o link acima, crie uma conta, e as bases de dados, após isso será necessário criar um arquivo .env contendo as váriavés para acessar a base de dados remotamente:

exemplo de env
```
  EXPO_PUBLIC_SUPABASE_URL= ****
  EXPO_PUBLIC_SUPABASE_ANON_KEY= ***
```

Será necessário criar algumas tabelas, buckets e funções, para isto só seguir os passos abaixo:
  - Em Databases > Tables:
    
    - Criar uma tabela de <i>ingredients</i> com as colunas 
        
        - id: uuid (PK - random generate)
        - name: varchar
        - image: text

    - Criar uma tabela de <i>preparations</i> com as colunas 
        
        - id: uuid (PK - random generate)
        - recipe_id: uuid
        - description: text
        - step: int8

    - Criar uma tabela de <i>recipes</i> com as colunas 
        
        - id: uuid (PK - random generate)
        - name: varchar
        - minutes: int8
        - image: text

    - Criar uma tabela de <i>recipe_ingredients</i> com as colunas 
        
        - id: uuid (PK - random generate)
        - recipe_id: uuid
        - ingredient_id: uuid

  - Em SQL Editor:
    criar uma função:
    ```SQL
      CREATE OR REPLACE FUNCTION recipes_by_ingredients(ids UUID[])
      RETURNS setof recipes
      AS $$
      BEGIN
          RETURN QUERY
          SELECT
              recipes.id,
              recipes.name,
              recipes.minutes,
              recipes.image
          FROM
              recipes_ingredients
          INNER JOIN
              recipes ON recipes_ingredients.recipe_id = recipes.id
          WHERE
              recipes_ingredients.ingredient_id = ANY(ids)
          GROUP BY recipes.id;
      END;
      $$ LANGUAGE plpgsql;
    ```
    Para verificar se foi criada corretamente, acesse Datatables > Functions

  - Em Storage:
    - Crie um novo bucket e adicione as ícones dos ingredients no formato .png


Dentro do repositório, existe uma pasta chamada assets, e lá possui os arquivos .csv com alguns dados e ícones para teste, caso deseje utiliza-los.

Com estas configurações, se tudo estiver correto é só rodar o projeto utilizando

  `npx expo start`
