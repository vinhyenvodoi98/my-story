# ddhoang

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Run your unit tests

```
yarn run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### deploy to github page

- comment /dist trong file .gitignore
- run `git add dist && git commit -m "Initial dist subtree commit"`
- run `git subtree push --prefix dist origin gh-pages`
