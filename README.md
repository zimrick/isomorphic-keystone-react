# isomorphic-keystone-react

An example of an isomorphic app structure with react, react-router, fluxible, and keystone. This example app extends the useful tutorial examples by Yahoo, and shows how to combine a simple react/react-router isomorphic/universal app with a keystone backend, and also integrates data fetching with fetchr. Note that this is a WIP, so expect bugs and gremlins everywhere.

## Getting started

1. Run `npm install`
2. Set up `updates` folder with `0.0.1-admin.js` (Check keystone getting started)
3. You will also need a .env file with a `MONGO_URI` variable (again check keystone getting started)
4. Run `node keystone`
5. Go to `localhost:3000`

For more information on how things work, check the comments in the code.

When working on the react code, run `webpack` or `webpack -w`.
