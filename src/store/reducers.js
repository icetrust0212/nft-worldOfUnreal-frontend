import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import products from './products/reducer'

export default function rootReducer() {
  return combineReducers({
    form,
    products
  })
}
