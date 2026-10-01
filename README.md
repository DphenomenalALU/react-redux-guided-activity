# React Guided Learning Activity: Redux State Management

This project demonstrates how to connect a React + TypeScript application to Redux **without Redux Toolkit**. It follows the Week 5 guided learning activity and keeps the Redux pieces deliberately visible: actions, reducer, combined reducer, store, middleware, Provider, selectors, and dispatch.

## Learning objectives

- Configure a Redux store with `redux-logger` middleware.
- Create typed counter actions and a reducer without Redux Toolkit.
- Combine reducers and derive `RootState` and `AppDispatch` from the store.
- Connect React to Redux with `Provider`, `useSelector`, and `useDispatch`.
- Implement increment, decrement, and reset behavior with accessible controls.

## Run the application

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). To verify a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/
│   ├── Counter.module.css
│   └── Counter.tsx
├── store/
│   ├── actions/counterActions.ts
│   ├── reducers/counterReducer.ts
│   ├── reducers/index.ts
│   └── store.ts
├── App.tsx
├── index.css
└── main.tsx
```

### How the state flows

1. `main.tsx` wraps `<App />` in Redux's `<Provider>`.
2. `Counter.tsx` reads `state.counter.value` with `useSelector`.
3. Button clicks dispatch action creators from `counterActions.ts`.
4. `counterReducer.ts` returns the next immutable state.
5. `redux-logger` prints each action and state transition in the browser console.

## Assessment checklist

- Redux store configured with logger middleware.
- Actions and reducer separated into clear folders.
- Reducers combined with `combineReducers`.
- Relevant state and dispatch types derived from the store.
- Increment, decrement, and reset all update the visible UI.
- `node_modules` and build output excluded from Git.
- Development is represented by multiple conventional commits.

## Optional extensions

- Persist the counter in local storage.
- Add a `setValue` action with a typed payload.
- Add a second reducer, such as a user-preferences reducer.
