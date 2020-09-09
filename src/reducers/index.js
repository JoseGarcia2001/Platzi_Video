const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      // eslint-disable-next-line no-case-declarations
      const exist = state.myList.find((item) => item.id === action.payload.id);
      if (exist) {
        return { ...state };
      }
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };

    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== action.payload),
      };

    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing:
          state.trends
            .concat(state.originals)
            .find((item) => item.id === +action.payload) || [],
      };

    case 'SEARCHING_VIDEO':
      if (action.payload === '') {
        return {
          ...state,
          searching: [],
        };
      }

      return {
        ...state,
        searching:
          state.trends.concat(state.originals).filter((item) => item.title.toLowerCase().includes(action.payload)) || [],
      };

    default:
      return state;
  }
};

export default reducer;
