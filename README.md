## Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

```

## File Directory Structure
- When implementing the React conversion, I attempted to follow best practices outlined in NextJS documentation along with using React functional components that have a single responsibility.
- pages/_app.js is the customized component to initalize pages which I used as a global stylesheet.
- I made a separate CSS file for each component, but a better implementation would have been using CSS modules and styled components.