import { getHome } from "../../service/webApi";
import actionTypes from "./actionsType";
const { GET_HOME } = actionTypes;
//start , doing, finish
const getHomeData = () => {
  return async (dispatch) => {
    try {
      const res = await getHome();
      if (res?.err === 0) {
        //handle when success
        dispatch({
          type: GET_HOME,
          homeData: res?.data?.items,
        });
      } else {
        //handle when fail
        dispatch({
          type: actionTypes.GET_HOME,
          homeData: null,
        });
      }
      console.log("res", res);
    } catch (error) {
      console.log("err:", error);
    }
  };
};
export { getHomeData };
