# Diretrizes de design

## Direção

O site é um portfólio pessoal editorial para um engenheiro de dados. Deve transmitir curiosidade técnica, clareza e personalidade sem parecer um template corporativo. A direção combina três referências gerais: leitura e taxonomia de um blog técnico, apresentação pessoal concisa e um momento visual mais expressivo. Não reproduzir layouts, marcas, textos ou ativos das referências.

A página inicial deve identificar a pessoa e sua área de atuação logo no primeiro viewport, apresentar seus interesses e oferecer caminhos claros para o blog e contato. O blog prioriza leitura confortável; a página de contato mantém a biografia breve e os meios de contato visíveis.

## Layout e navegação

- Usar uma moldura editorial consistente, com conteúdo alinhado a uma coluna de leitura e espaço lateral generoso em telas largas.
- Na introdução da página inicial, manter o título e destaque juntos à esquerda e a descrição com links na coluna à direita; empilhar as colunas em telas estreitas.
- Exibir os interesses diretamente em uma grade de caixas, sem título ou legenda de seção; em telas pequenas, usar uma coluna.
- Manter navegação global enxuta: início, blog e sobre/contato.
- Priorizar tipografia, títulos, datas, divisores e metadados. Usar cartões apenas quando representarem itens independentes, como artigos ou interesses.
- Limitar a largura de leitura de artigos a aproximadamente 65–75 caracteres por linha.
- Em telas pequenas, reorganizar a composição em fluxo vertical; não apenas reduzir tamanhos ou ocultar conteúdo.

## Identidade do navegador

O favicon é um SVG autoral em `favicon.svg`, com uma xícara e vapor em cores alinhadas à paleta do site. O motivo de café é uma referência geral, sem reproduzir logotipo de terceiros. Mantenha o ícone legível em tamanhos pequenos e atualize o link no layout global se o formato ou caminho mudar.

## Tipografia

- Definir uma família principal legível para interface e leitura, com fallback de sistema e sem dependência obrigatória de fontes externas.
- Reservar uma família monoespaçada para trechos técnicos, metadados ou pequenos detalhes; não usar monoespaçada em todo o texto.
- Criar escala explícita para título principal, títulos de seção, corpo, metadados e código.
- Usar line-height confortável em parágrafos e blocos de código; evitar linhas extensas em artigos.
- Os textos de navegação e controles devem permanecer legíveis em telas pequenas e com zoom.

## Cor e temas

Usar tokens semânticos CSS em vez de valores repetidos nos componentes. A paleta deve ser neutra e editorial, com um tom de destaque contido, associado a marcações e links, e não a gradientes genéricos de produto tecnológico.

Tokens mínimos a definir durante a implementação:

- superfície de fundo e superfície elevada;
- texto principal e texto secundário;
- borda e divisor;
- cor de destaque e sua variante de foco;
- cores para seleção de texto e blocos de código.

O tema claro e o escuro devem manter os mesmos papéis semânticos e contraste suficiente. O tema inicial deve respeitar `prefers-color-scheme`; uma escolha explícita pode ser persistida no navegador. O controle deve ser um botão com nome acessível e estado anunciado. Se JavaScript falhar, o conteúdo continuará legível no tema do sistema.

## Interação e movimento

- Links e controles devem ter estados de hover, ativo e foco visíveis; foco de teclado não pode depender de hover.
- Links sociais devem usar nomes curtos com ícones decorativos ocultos de tecnologias assistivas; os URLs completos ficam somente nos destinos dos links.
- Alvos interativos devem ser confortáveis para toque, preferencialmente com pelo menos 44 px de área útil.
- Transições devem ser discretas e explicar uma mudança de estado. Evitar animação decorativa contínua.
- Respeitar `prefers-reduced-motion: reduce` e não animar conteúdo essencial para torná-lo visível.
- Não depender de armazenamento local para exibir o conteúdo; o armazenamento só pode guardar a preferência de tema.

## Acessibilidade e responsividade

- Usar landmarks HTML, hierarquia correta de títulos, links descritivos e texto alternativo para imagens informativas.
- Disponibilizar link para saltar ao conteúdo principal.
- Garantir navegação completa por teclado e foco visível.
- Não usar cor como único indicador de categoria, estado ou seleção.
- Garantir leitura e reflow em 320 px e zoom de 200%; evitar alturas fixas em texto.
- Validar pelo menos 320, 375, 768, 1024 e 1440 px, cobrindo toque e ponteiro.

## Elementos editoriais

Datas, idiomas, tags e resumos devem ter estilo secundário e não competir com títulos. Código deve quebrar ou permitir rolagem horizontal sem provocar transbordamento da página. Imagens devem manter proporção, carregar com dimensões reservadas quando possível e ter texto alternativo apropriado.

## Critério de revisão

Antes de concluir uma mudança visual, revisar as páginas inicial, blog, artigo e contato nos dois temas, em desktop e mobile. Verificar a hierarquia em uma olhada rápida, contraste, foco, links, estados vazios e conteúdo longo. Atualizar este guia quando decisões visuais implementadas mudarem de forma intencional.
