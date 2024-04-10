# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ nvm use && npm i
```

### Local Development

```
$ npm run start
```

This command starts a local development server using the default locale (English) and opens up a browser window. Most changes are reflected live without having to restart the server. 
For Dutch content, run the following command:

```
$ npm run start -- --locale nl
```


### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
