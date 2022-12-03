import actionTypes from "../actions/actionsType";

const initState = {
  banner: [],
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME:
      console.log(":action:", action);
      return {
        ...state,
        banner:
          action.homeData?.find((item) => item.sectionId === "hSlider")
            ?.items || null,
      };

    default:
      return state;
  }
};

export default appReducer;
