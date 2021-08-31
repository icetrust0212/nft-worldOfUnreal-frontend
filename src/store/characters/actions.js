import {
    createTypes
} from 'redux-action-creator'
import axios from '../../api/axios'
import {
    characters
} from '../../static/characters';

export const types = createTypes(['GET_TEAM1', 'GET_TEAM2'], 'CHARACTER')

// export const sendRequest = (from, to, name, msg) => (dispatch) => {
//   dispatch({
//     type: types.SEND_REQUEST,
//     payload: REQUEST_STATE.SENDING
//   });
//   return axios.post('/send_request', {
//     from,
//     to,
//     name,
//     msg,
//     socketID: getSocketID()
//   }).then(result => {
//     console.log('result: ', result)
//     if (result.data.success) {
//       dispatch({
//         type: types.SEND_REQUEST,
//         payload: REQUEST_STATE.PENDING
//       })
//     } else {
//       dispatch({
//         type: types.REQUEST_FAILD,
//         payload: 'Your number is not available to use Twilio'
//       });
//     }

//   });
// }

const getRank = (arrayData, item) => {
    for (let i = 0; i < arrayData.length; i++) {
        if (arrayData[i].height === item.height) return i;
    }
    return 0;
}
export const getCharactersByTeam = (team) => {
    let data = characters.filter(character => character.team === team);
    let cloneData = [...data];
    cloneData.sort((a, b) => {
        if (a.height > b.height) {
            return -1;
        } else if (a.height < b.height) {
            return 1;
        }
        return 0;
    })
    let sortedData = [];
    let minHeight = sortedData[0];
    data.map(item => {
        sortedData.push({
            ...item,
            width: item.height / minHeight,
            order: getRank(cloneData, item)
        })
    });
    return {
        type: team === 'Team1' ? types.GET_TEAM1 : types.GET_TEAM2,
        payload: sortedData
    }
}
