/*
 * @Author: your name
 * @Date: 2020-02-04 18:33:46
 * @LastEditTime : 2020-02-05 10:16:38
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/reducers/notification.js
 */
import actionTypes from "../actions/actionTypes";
const initState = {
  isLoading: false,
  list: [
    {
      id: 1,
      title: "Ant Design Title 12",
      desc:
        "Ant 1111Design, a design language for background applications, is refined by Ant UED Team",
      hasRead: false,
      avatar:
        "https://img2.woyaogexing.com/2020/01/26/1360c4ff104946028080570ae0426312!400x400.webp"
    },
    {
      id: 2,
      title: "Ant Design Title 2",
      desc: "这是第二条",
      hasRead: false,
      avatar:
        "https://img2.woyaogexing.com/2020/01/26/1360c4ff104946028080570ae0426312!400x400.webp"
    }
  ]
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.RECIVED_NOTIFIACTIONS:
      return {
        ...state,
        list: action.payload.list
      };

    case actionTypes.START_MARK_AS_READ:
      return {
        ...state,
        isLoading: true
      };

    case actionTypes.FINISH_MARK_AS_READ:
      return {
        ...state,
        isLoading: false
      };

    case actionTypes.MARK_NOTIFICATION_AS_READ_BY_ID:
      const newList = state.list.map(item => {
        if (item.id === action.payload.id) {
          item.hasRead = true;
        }
        return item;
      });
      return { ...state, list: newList };

    case actionTypes.MARK_ALL_NOTIFICATION_AS_READ:
      return {
        ...state,
        list: state.list.map(item => {
          item.hasRead = true;
          return item;
        })
      };

    default:
      // break;
      return state;
  }
};
