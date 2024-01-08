const initialState = {
  temperatureUnit: "celsius",
};

const changeUnitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TEMPERATURE_UNIT":
      return {
        ...state,
        temperatureUnit: action.payload,
      };
    default:
      return state;
  }
};

export default changeUnitsReducer;
