# Car Tool State Manager Project

The projects in this repository represent many ways of managing state for the Car Tool application. To use each project (except the Apollo/GraphQL version), run the following commands:

```bash
cd <PROJECT FOLDER>

npm install

npm start
```

For the Apollo/GraphQL version, run the following commands:

```bash
cd <PROJECT FOLDER>

npm install

npm run start-rest-server
```

Next, open a new terminal window, and run the following commands:

```bash
cd <PROJECT FOLDER>

npm run start-graphql-server
```

Finally, open a third terminal window, and run the following commands:

```bash
cd <PROJECT FOLDER>

npm run start-client
```

For all projects, once the React application starts it should open your default web browser and load the React web site. If it does not, please use this URL in the browser of your choice.

```bash
http://localhost:3000
```

## Project Descriptions and Links to Documentation

The "async" version include the following state managers:

- React Context [React Context Docs](https://reactjs.org/docs/context.html)
- Redux [Redux Docs](https://redux.js.org/), [React Bindings for Redux Docs](https://react-redux.js.org/)
- MobX [MobX Docs](https://mobx.js.org/README.html), [React Bindings for MobX Docs](https://mobx-react.js.org/libraries)
- Satchel (Microsoft's combination of Redux and MobX) [Satchel Docs](https://github.com/microsoft/satcheljs)
- Apollo/GraphQL [Apollo Docs](https://www.apollographql.com/), [GraphQL Docs](https://graphql.org/), [React Bindings for Apollo Docs](https://www.apollographql.com/docs/react/)

For the Satchel library, there are two synchronous versions which explore the use of actions, mutators and action/mutators.
