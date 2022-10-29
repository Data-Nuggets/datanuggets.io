# Data Nuggets Website

## Running the project

Make sure you have Docker installed. Then just run `./run.sh` to start the dev env in Docker.

You can find the site in https://localhost:8000

## 🚀 Project Structure

Inside of your Rocket project, you'll see the following folders and files:

```
.
├── config
│   └── rocket.config.js
├── site
│   ├── pages
│   │   └── index.rocket.html
│   └── public
│       └── favicon.ico
└── package.json
```

Rocket looks for `.rocket.md` or `.rocket.js` or `.rocket.html` files in the `site/pages` directory. Each page is exposed as a route based on its file name.

There's nothing special about `site/src/components/`, but that's where we like to put our web components.

Any static assets, that is not referenced via HTML but you still want to be on the web server we can place in the `site/public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run start`   | Starts local dev server at `localhost:8000`  |
| `npm run build`   | Build your production site to `./_site/`     |
| `npm run preview` | Preview your build locally, before deploying |

## 👀 Want to learn more?

Feel free to check [our documentation](https://next.rocket.modern-web.dev/) or jump into our [Discord server](https://rocket.modern-web.dev/chat).