/*
 * @Author: your name
 * @Date: 2020-02-04 18:33:46
 * @LastEditTime : 2020-02-04 19:13:42
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/reducers/notification.js
 */
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
    // case value:

    //     break;

    default:
      // break;
      return state;
  }
};
