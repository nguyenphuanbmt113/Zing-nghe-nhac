import { searchApi } from "../../service/webApi";
import actionTypes from "../actions/actionsType";
import actions from "../actions/actionsType";
const searchItemReduxThunk = (keyword) => {
  // const keyword = keyword.replace(" ", "+");
  return async (dispatch, getState) => {
    try {
      const res = await searchApi(keyword);
      if (res.err === 0) {
        dispatch({
          type: actions.SEARCH,
          data: res?.data,
        });
      } else {
        dispatch({
          type: actions.SEARCH,
          data: null,
        });
      }
    } catch (error) {
      console.log("error:", error);
    }
  };
};
const setValueSearch = (flag) => ({
  type: actionTypes.SEARCH_VALUE,
  flag,
});
export { searchItemReduxThunk, setValueSearch };
