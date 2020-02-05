/*
 * @Author: your name
 * @Date: 2020-02-05 09:33:14
 * @LastEditTime : 2020-02-05 09:49:30
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/actions/notifications.js
 */
import actionTypes from "./actionTypes";

export const markNotificationAsReadByid = id => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: actionTypes.MARK_NOTIFICATION_AS_READ_BY_ID,
        payload: {
            id
        }
      });
    }, 2000);
  };
};

export const markAllNotificationAsRead = () => {
    return dispatch => {
      setTimeout(() => {
        dispatch({
          type: actionTypes.MARK_ALL_NOTIFICATION_AS_READ
        });
      }, 2000);
    };
  };