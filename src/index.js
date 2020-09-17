
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/firebaseConfig'
import firebase from 'firebase/app'
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, fbConfig),
  )
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  presence: 'presence',
  sessions: 'sessions'
}




const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: "#ccada4",
      light: "#ffdfd5",
      dark: "#9b7e75",
    },
    secondary: {
      main: "#776464",
      light: "a69292",
      dark: "4b3a3a",
    },
  },
});


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StylesProvider>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister()
