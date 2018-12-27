# akramus.github.io powered by gatsbyjs

### Purpose

This the repo for akramus.github.io . It could also be used as a template for a freelancer/consultant personal blog. It includes an "about me" as the main page, blog, It uses [gatsby.js](https://github.com/gatsbyjs/gatsby) for the user interface. This repo  was inspired from  danielhollcraft.com repo but very simplified. 

### Pre-requistes

1) [Node.js installed](https://nodejs.org/en/)
2) [Yarn installed](https://yarnpkg.com/)
6) [gatbsy.js installed](https://github.com/gatsbyjs/gatsby)

### Top level commands

All commands must be used in the root file directory.

- `yarn install`: Install UI .
- `yarn static:build`: Build UI locally.
- `cd ui  && yarn run develop`: build localy the ui for dev which can be viewed in browser (http://localhost:8000/)  
      

### Web UI

To create the front-end I used the library [gatsby.js](https://github.com/gatsbyjs/gatsby) for static content generation. The reason I prefer gatsby.js as a static generation lib is because it uses [React.js](https://github.com/facebook/react)
 
The website uses [SCSS](http://sass-lang.com/) as a CSS pre-processor.


#### To Deploy:

1) I use travisci. For more details see .travis.yml in the root directory
