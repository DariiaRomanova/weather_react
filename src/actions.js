export const changeTemperatureUnit = (unit) => ({
  type: "CHANGE_TEMPERATURE_UNIT",
  payload: unit,
});

export const changeButtonColor = (buttonId, color) => ({
  type: "CHANGE_BUTTON_COLOR",
  payload: { buttonId, color },
});
