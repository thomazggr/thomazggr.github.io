# Guia editorial e de conteúdo

## Idioma e voz

- A navegação e as páginas institucionais usam português do Brasil.
- Cada artigo pode ser publicado em português ou inglês. Não crie traduções duplicadas até existir uma necessidade concreta de relacionar versões.
- Escreva com clareza e precisão, mantendo a voz pessoal. Explique siglas na primeira ocorrência quando forem importantes para o argumento.
- Separe opinião, experiência pessoal e afirmações factuais. Inclua referências quando uma explicação depender de fonte externa.
- Evite dados confidenciais de clientes, empregadores ou terceiros.

## Localização e metadados

Os artigos vivem em `_posts/` e usam o formato de data do Jekyll: `YYYY-MM-DD-slug.md`. O slug deve ser curto, estável, em minúsculas, sem acentos e com hífens entre palavras. Não renomeie posts já publicados sem avaliar os links existentes.

Modelo de front matter:

```yaml
---
layout: post
title: "Título do artigo"
date: YYYY-MM-DD HH:MM:SS -03:00
lang: pt-BR
description: "Resumo conciso que explica o assunto do artigo."
categories:
  - dados
tags:
  - engenharia de dados
  - processamento distribuído
---
```

Use `lang: en` para artigos em inglês. A data deve representar a publicação pretendida e incluir o fuso horário. O resumo deve ser específico, sem repetir apenas o título. Use categorias amplas e poucas tags relevantes; normalize grafia e capitalização para evitar duplicatas.

## Estrutura recomendada de artigo

1. Comece com o problema, a pergunta ou o contexto.
2. Declare o escopo e as premissas quando forem relevantes.
3. Desenvolva uma ideia por seção, com títulos descritivos.
4. Inclua exemplos reproduzíveis e explique o ambiente e os resultados esperados.
5. Diferencie claramente observação, hipótese e conclusão.
6. Termine com conclusão ou próximos passos, sem chamada promocional genérica.

## Markdown, código e links

- Use títulos em ordem hierárquica; não pule níveis para obter tamanho visual.
- Use cercas de código com identificador de linguagem, por exemplo, ` ```sql `.
- Evite linhas de código impossivelmente longas; quando não puderem ser quebradas, o bloco pode rolar horizontalmente.
- Prefira texto de link descritivo em vez de “clique aqui”.
- Identifique links que abrem destinos externos quando isso for necessário para evitar surpresa.
- Não inclua conteúdo HTML inseguro nem scripts em artigos.

## Imagens e outros ativos

- Armazene ativos editoriais em uma pasta do próprio site, organizada por artigo quando necessário.
- Use formatos eficientes e dimensões adequadas ao uso; não suba versões duplicadas ou arquivos de origem pesados sem motivo.
- Escreva alt text que descreva a informação relevante. Use `alt=""` para imagens puramente decorativas.
- Não use imagens ou ilustrações sem licença ou permissão apropriada; registre atribuição quando exigida.
- Teste caminhos considerando o domínio raiz `thomazggr.github.io` e o `baseurl` configurado.

## Publicação

1. Criar o arquivo em `_posts/` seguindo a convenção de data e slug.
2. Preencher todos os campos do front matter e revisar o idioma.
3. Conferir código, links, imagens, ortografia e dados confidenciais.
4. Rodar o build local documentado em `README.md` quando a configuração Jekyll estiver disponível.
5. Revisar a página gerada em desktop e mobile e nos dois temas.
6. Integrar pela branch configurada para GitHub Pages e conferir o resultado publicado.

Não adicionar posts fictícios para preencher a página. A listagem do blog deve apresentar um estado vazio útil quando não houver artigos.
