# Redux
+ Used to make *state* centralized so there is no need for long `props` chains between Parents and distant Children.

## Setting up
1. Install Redux
  `$ yarn add redux@4.0.4`
2. Import **`createStore`**
  `import { createStore } from 'redux'; `
3. Set up the **createStore** call; it *requires* a function to be passed in.
  + Do not modify the *state*, instead `return` the new value or the old *state*.
  *EXAMPLE*:
  `  const store = createStore( (state = {someKey: someValue}) => { `
`    return state; `
`  }); `

  *SYNTAX* using `if,,,else`
`  const store = createStore((state = {someKey: someValue}, action) => { `
`    if (action.type === 'ACTION_VALUE') { `
`      return { `
`        someKey: state.someKey + 1  // or whatever `
`      }; `
`    } else { `
`      return state; `
`    } `
`  }); `

  *SYNTAX* using `switch...case`
`  ...code... `
`  switch (action.type) { `
`    case 'INCREMENT': `
`      return { `
`        someKey: state.someKey +1 `
`      }; `
`    default: `
`      return state; `
`  } `

  + There is no access to a *constructor* function, so we set the *default* w/in the argument list.
  ` (state = {someKey: someValue}) => { ...code...};`
  + Get the current *state* using **`.getState()`**
  ` console.log(store.getState()); `

## Actions
+ Use **Actions** to change the *state*; it is simply an *object* that gets sent to the *store*
+ You "name" Actions by creating an object that uses `type` as a *key* and `CAPITALS_HERE` as their value – usually verbs (hence, actions)
  `  { `
  `    type: 'INCREMENT' `
  `  } `
+ You add this to the *store* using `.dispatch()` and passing the Action object into it.
` store.dispatch({ `
`   type: 'INCREMENT' `
` }); `


# Useful Links
[Redux Docs](redux.js.org)