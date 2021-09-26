import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store

// import { configureStore } from '@reduxjs/toolkit'
// import { userSlice } from './features/register'

// export default configureStore({
//   reducer: {
//     user: userSlice.reducer
//   }
// })
