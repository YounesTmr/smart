### Back office

##### Install required packages
`npm install -g pm2`

##### env: Change baseUrl
[env.ts](src/app/env.ts)

##### First deploy
`npm install`

`npm run build`

`pm2 start node --name SSC_BO -- serve.js`

##### Update project
`npm install`

`npm run build`

##### Run local project
`npm install`

`ng serve -o`