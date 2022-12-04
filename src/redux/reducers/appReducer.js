import actionTypes from "../actions/actionsType";

const initState = {
  banner: [],
  friday: {},
  newEveryday: {},
  top100: {},
  xone: {},
  newMusic: {},
  newReleases: {},
  weekChart: [],
  artists: {},
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME:
      return {
        ...state,
        banner:
          action.homeData?.find((item) => item.sectionId === "hSlider")
            ?.items || null,
        friday:
          action.homeData?.find((item) => item.sectionId === "hAutoTheme1") ||
          null,
        newEveryday:
          action.homeData?.find((item) => item.sectionId === "hAutoTheme2") ||
          null,
        top100:
          action.homeData?.find((item) => item.sectionId === "h100") || null,
        xone:
          action.homeData?.find((item) => item.sectionId === "hXone") || null,
        newMusic:
          {
            ...action.homeData?.find((item) => item.sectionId === "hAlbum"),
            title: "Nhạc mới",
          } || null,
        newReleases:
          action.homeData?.find((item) => item.sectionType === "new-release") ||
          null,
        weekChart:
          action.homeData?.find((item) => item.sectionType === "weekChart")
            ?.items || null,
        artists: {
          ...action.homeData?.find(
            (item) => item.sectionType === "artistSpotlight"
          ),
          title: "Artists",
        },
      };

    default:
      return state;
  }
};

export default appReducer;
