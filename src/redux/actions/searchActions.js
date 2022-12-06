import { searchApi } from "../../service/webApi";
import actions from "../actions/actionsType";
const searchItemReduxThunk = (keyword) => {
  return async (dispatch, getState) => {
    try {
      const res = await searchApi(keyword);
      console.log("res", res);
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
export { searchItemReduxThunk };
