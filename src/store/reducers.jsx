import {combineReducers} from 'redux';

import cardReducer from './sobre/cardReducer';

/*Combinação de redurcers, quando se tem muitos, cria um arquivo chamando os redurcers*/
const rootReducer = combineReducers({
  Card: cardReducer
})

export default rootReducer;