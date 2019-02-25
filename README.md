# BBC Tech Interview - Front End Articles Website by Tim La Roche

Articles website written for the BBC Software Engineering technical interview by Tim La Roche. I wish to be considered for all 3 possible teams (Web, Backend and Apps). My preference is for the Web with Backend.

## Intro and Overview
In this repo I present my web app for evaluation with regard to the Software Engineering placement role at the BBC. [You can visit the website here.](https://timlaroche.github.io/BBC-Tech-Interview-TimLaRoche/)

I have created the app using a React with testing done through the Cypress framework. I have also leveraged Semantic-UI-React and Axios for UI components and HTTP requests respectively. My build is manual in the sense that I have not used create-react-app or any boilerplate however, there is nothing special going on; I compile the .jsx to .js and bundle these into a bundle.js using webpack.

As no server logic was required, my HTTP GET requests are directly the Github repo hosting the .json data files and my HTTP POST request is a log to the console. As such, no server is required to be run to view my webpage and it can be run locally with just an internet connection and a web browser. In reality, these would be replaced with the relevant API endpoints.

I hope you have enjoyed viewing and using the website as much as I enjoyed creating it.

## Running instructions
-   Ensure that Webpack is installed on the system. You may need to globally install Babel too.
-   Clone the repo to a folder
-   Run `npm install`
-   Run `npx babel src --out-dir ./dist --presets react-app/prod` and then  `webpack` one command after the next, ensuring that you are located in the root of the project folder.
-   Open index.html in Chrome to view the page.

## Future
I have a list of a few things I planned to do to embelish the system

-   Error handling to some extent. I would wrap certain statements around some try-catch statements and update the state of certain components based on this try-catch to render some elements. I have handled error messages in the render cycle but I need to ensure that there are no errors in certain events. This should be around an hour or two extra work.
-   Performance. The app is fast however, I need to ensure that it stays this way with a growing code base. Splitting up the bundle.js file is definitely one way to do this. I also need to consider UX performance by preloading some articles. 
-   Better testing. Currently my Cypress test is a mixture between end-to-end and unit testing. This is an area I would love to learn more about and improve on.
-   Better styling. Some work could be done on making the website look better especially on the ranking page. Perhaps a new layout, some colour and some left and right arrow buttons to scroll between articles would be beneficial.
-   Setup some automated build scripts. I have attempted this in the package.json however, it is not tested. Building by running each command works but can become cumbersome.
