# Instruções para agentes

## Objetivo do repositório

Este repositório publica o site pessoal de Thomaz em GitHub Pages. A implementação usa Jekyll, layouts Liquid, conteúdo Markdown e o workflow oficial do GitHub Pages. A interface é pt-BR; os artigos podem ser escritos em português ou inglês.

Antes de alterar qualquer parte do site, leia `README.md` e os guias relevantes em `docs/`. Confirme quais arquivos e comandos existem antes de presumir que uma convenção já está em vigor.

## Princípios de implementação

- Preserve a compatibilidade com o build do GitHub Pages. Não introduza plugins que o ambiente não suporta sem necessidade explícita.
- Prefira HTML semântico, CSS simples, Liquid e JavaScript sem dependências para funcionalidades pequenas.
- Mantenha conteúdo pessoal editável em `_data/profile.yml`; nunca invente identificadores, URLs, biografia, credenciais ou experiências.
- Mantenha páginas de interface em pt-BR. Respeite o idioma declarado nos metadados dos artigos.
- Use os caminhos e padrões definidos em `docs/content-guide.md` e as decisões visuais de `docs/design-system.md`.
- Preserve navegação por teclado, foco visível, contraste, zoom e redução de movimento. Não dependa apenas de cor, hover ou JavaScript para comunicar conteúdo essencial.
- Faça mudanças focadas. Não adicione dependências, abstrações, conteúdo de demonstração ou funcionalidades fora do escopo da tarefa.
- Não inclua comentários no código, a menos que sejam solicitados explicitamente ou necessários para explicar comportamento não óbvio.

## Organização prevista

- `_data/profile.yml`: nome, apresentação, localização e contatos.
- `_layouts/` e `_includes/`: estrutura e componentes compartilhados em Liquid.
- `_posts/`: artigos Markdown com front matter Jekyll.
- `assets/css/` e `assets/js/`: estilos e comportamentos do site.
- `docs/`: convenções de design, conteúdo e desenvolvimento.
- `.github/workflows/`: build e publicação.

A estrutura acima descreve a organização atual, mas confirme os arquivos presentes antes de trabalhar.

## Verificações

- Confira primeiro os scripts, dependências e comandos disponíveis no repositório.
- Para mudanças em conteúdo ou templates, rode o build Jekyll documentado no `README.md`, quando a configuração estiver implementada.
- Para mudanças visuais, verifique tema claro e escuro, viewport móvel, foco por teclado e links internos.
- Para mudanças no workflow, examine permissões e gatilhos, e não adicione segredos ou tokens sem necessidade.
- Informe com precisão o que foi verificado; não declare testes executados quando não foram.

## Limites editoriais e dados pessoais

- Os endereços de GitHub e LinkedIn devem vir de dados confirmados em `_data/profile.yml`.
- A localização é `Campinas, Brazil`.
- Não publique telefone, e-mail ou outros dados pessoais que não tenham sido fornecidos explicitamente.
- Não copie textos, imagens, código ou identidade visual das páginas de referência. Use-as somente para orientar características gerais de composição e tom.
