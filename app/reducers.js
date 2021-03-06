/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import registerReducer from 'containers/RegisterPage/reducer';
import loginReducer from 'containers/LoginPage/reducer';
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    language: languageProviderReducer,
    register: registerReducer,
    loginData: loginReducer,
    router: connectRouter(history),
    ...injectedReducers,
});

  return rootReducer;
}
