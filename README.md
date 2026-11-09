# Site pessoal de Thomaz

Site pessoal publicado em GitHub Pages com Jekyll: apresentação, interesses, blog técnico e contato. A interface usa português do Brasil; os artigos podem ser escritos em português ou inglês.

## Desenvolvimento local

Requisitos: Ruby compatível com a versão do GitHub Pages e Bundler. Instale as dependências e inicie o servidor:

```sh
bundle install
bundle exec jekyll serve
```

Abra o endereço local informado pelo Jekyll. Para gerar o site sem iniciar o servidor:

```sh
bundle exec jekyll build
```

A saída é gerada em `_site/`, que não deve ser commitada.

## Conteúdo

- Atualize nome, descrição e contatos confirmados em [`_data/profile.yml`](_data/profile.yml).
- Adicione artigos Markdown em `_posts/` seguindo [`docs/content-guide.md`](docs/content-guide.md).
- A página inicial e as páginas institucionais permanecem em pt-BR; cada artigo declara seu idioma no front matter.
- Consulte [`docs/design-system.md`](docs/design-system.md) para decisões visuais e requisitos de acessibilidade.

## Publicação

O workflow [Deploy to GitHub Pages](.github/workflows/pages.yml) constrói e publica o site na branch `main` e também pode ser acionado manualmente. Nas configurações do repositório, selecione GitHub Actions como origem de publicação em **Settings → Pages**.

## Documentação para colaboradores e agentes

Leia [`AGENTS.md`](AGENTS.md) antes de alterar o site. Ele descreve os limites de compatibilidade, dados pessoais, estrutura e verificações esperadas.
