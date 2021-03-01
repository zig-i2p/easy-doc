# Website

Этот веб-сайт построен с использованием [Docusaurus 2](https://v2.docusaurus.io/), современный генератор статических сайтов.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

Эта команда запускает локальный сервер разработки и открывает окно браузера. Большинство изменений отражаются в реальном времени без перезагрузки сервера.

## Build

```console
yarn build
```

Эта команда генерирует статический контент в`build` каталог и может обслуживаться с помощью любой службы хостинга статического содержимого.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

Если вы используете страницы GitHub для хостинга, эта команда - удобный способ создать веб-сайт и перейти на `gh-pages` ответвляться.
