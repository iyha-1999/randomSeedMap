import * as Actions from "./actions";

export const userPressedKey = (inputPressed, key) => {
  const pressed = { ...inputPressed };
  pressed[key] = true;
  return (dispatch) => {
    dispatch(
      Actions.setUserInputPlessed({
        pressed,
      })
    );
  };
};
export const userReleasedKey = (inputPressed, key) => {
  const pressed = { ...inputPressed };
  pressed[key] = false;
  return (dispatch) => {
    dispatch(
      Actions.setUserInputPlessed({
        pressed,
      })
    );
  };
};
