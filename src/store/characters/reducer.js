import { types } from './actions'

const initialState = {
  team1: [],
  team2: [],
}

const character_reducer =  (state = initialState, {type, payload}) => {
  switch (type) {
    case types.GET_TEAM1:
      state = {...state, team1: payload}
      return state;
    case types.GET_TEAM2:
      state = {...state, team2: payload}
      return state;
    default:
      return state
  }
}

export const getTeam1 = (state) => {
  return state.characters.team1
}

export const getTeam2 = (state) => {
  return state.characters.team2
}

export default character_reducer;