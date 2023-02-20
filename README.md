# SEO Tools
## _Built with Reactjs, Nodejs, Express_




<a href="https://seo-tools-five.vercel.app/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-Live%20Demo-success" alt="Go to - Live Site" data-canonical-src="https://img.shields.io/badge/-Live%20Demo-success" style="max-width: 100%; height: 20px;"></a>

This is a web application built with React on the client side and a suite of technologies on the server side including Express, and Nodejs. Its functionality and purpose is similar to RankMath, a Wordpress plugin. The app allows users to check on-page SEO, conduct content analysis, perform SEO tests, and more. I employed various popular technologies such as Axios, React Parser, and Styled Components to provide a smooth user experience and ensure high performance. Additionally, I integrated React Hot Toast to provide real-time notifications to users during the tests. React was the natural choice for building the client side of the application as it offers powerful tools for building UIs, and its reusability and flexibility allowed for a scalable and maintainable codebase. The server side stack was carefully selected to provide the necessary functionalities for efficient web crawling, and the integration of Axios provides an easy-to-use HTTP client for making requests. 

### Core Technologies
<div>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style="width: 40px; height: 40px; " alt="reactjs"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" style="width: 40px; height: 40px;" alt="nodejs"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"style="width: 40px; height: 40px;" alt="express"/>
</div>

### Dependancies

-  **Client**
	- Reactjs
	- Axios
	- React Parser
	- React Icons
	- Styled Components
 	- React Hot Toast

-  **Server**
	- Nodejs
	- Express
  	- Axios
  	- Cheerio /* Currently not used */
  	- Config
  	- Cors
  	- DotEnv
  	- Concurrently


### Config

#### Client ***package.json***

```json
{
  "name": "client",
  "version": "0.1.0",
  "private": false,
  "dependencies": {
    "@mantine/rte": "^5.10.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.2.2",
    "babel-plugin-macros": "^3.1.0",
    "html-react-parser": "^3.0.7",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hot-toast": "^2.4.0",
    "react-icons": "^4.7.1",
    "react-scripts": "5.0.1",
    "styled-components": "^5.3.6",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "https://seo-tools-five.vercel.app/" /* This is a production only url */
}
```

#### Server ***package.json***

```json
{
  "name": "seo-tools",
  "version": "1.0.0",
  "description": "A web application using Express and React",
  "main": "index.js",
  "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js --ignore client",
    "client": "npm start --prefix ../client/",
    "clientinstall": "npm install --prefix client",
    "dev": "concurrently \"npm run server\"  \"npm run client\""
  },
  "dependencies": {
    "axios": "^1.2.2",
    "cheerio": "^1.0.0-rc.12",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "nodemon": "^2.0.20"
  },
  "devDependencies": {
    "concurrently": "^7.6.0"
  }
}
```


### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

