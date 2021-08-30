import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import characters from './characters/reducer'

export default function rootReducer() {
  return combineReducers({
    form,
    characters
  })
}
