const initialState = {
  temperatureUnit: "celsius",
  buttonColors: {
    celsius: "#000000",
    fahrenheit: "#7877BE",
  },
};

const changeUnitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TEMPERATURE_UNIT":
      return {
        ...state,
        temperatureUnit: action.payload,
      };
    case "CHANGE_BUTTON_COLOR":
      return {
        ...state,
        buttonColors: {
          ...state.buttonColors,
          [action.payload.buttonId]: action.payload.color,
        },
      };
    default:
      return state;
  }
};

export default changeUnitsReducer;
