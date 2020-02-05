/*
 * @Author: your name
 * @Date: 2020-02-05 09:33:14
 * @LastEditTime : 2020-02-05 10:15:53
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/actions/notifications.js
 */
import actionTypes from "./actionTypes";
import{getNotifiaction} from '../http/index'
export const startMarkAsRead = () => {
  return {
    type: actionTypes.START_MARK_AS_READ
  };
};

export const finishMarkAsRead = () => {
  return {
    type: actionTypes.FINISH_MARK_AS_READ
  };
};

export const markNotificationAsReadByid = id => {
  return dispatch => {
    dispatch(startMarkAsRead());
    setTimeout(() => {
      dispatch({
        type: actionTypes.MARK_NOTIFICATION_AS_READ_BY_ID,
        payload: {
          id
        }
      });
      dispatch(finishMarkAsRead());
    }, 2000);
  };
};

export const markAllNotificationAsRead = () => {
  return dispatch => {
    dispatch(startMarkAsRead());
    setTimeout(() => {
      dispatch({
        type: actionTypes.MARK_ALL_NOTIFICATION_AS_READ
      });
      dispatch(finishMarkAsRead());
    }, 2000);
  };
};


export const getNotifiactionList = () => {
  return dispatch => {
    dispatch(startMarkAsRead());
    getNotifiaction()
    .then(res => {
      dispatch({
        type: actionTypes.RECIVED_NOTIFIACTIONS,
        payload: {
          list: res.list
        }
      })
      dispatch(finishMarkAsRead());
      console.log(res)
    })
  };
};
