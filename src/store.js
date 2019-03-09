import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {
  composeWithDevTools
} from 'redux-devtools-extension';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const composeEnhancers = composeWithDevTools({
  enhancers
});

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(thunk)
  ));
}