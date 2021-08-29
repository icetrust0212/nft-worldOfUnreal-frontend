import { createTypes } from 'redux-action-creator'
import axios from '../../api/axios'


export const types = createTypes(['SEND_REQUEST','SEND_LOCATION', 'SET_CURRENT_GEOLOCATION', 'GET_REQUEST', 'APPROVED', 'ERROR', 'ERROR_FORMAT', 'FORMAT_REQUEST_STATE'
, 'REQUEST_FAILD','SEND_CONTACT_US', 
], 'SMS')

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