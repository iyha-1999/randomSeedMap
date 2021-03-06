import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  userPressedKey,
  userReleasedKey,
} from "../store/ducks/userInput/operations";
import {
  getUserInputDisabled,
  getUserInputPressed,
} from "../store/ducks/userInput/selecors";

const useUserInput = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();

  const inputDisabled = getUserInputDisabled(selector);
  const inputPressed = getUserInputPressed(selector);

  const keybordDownEvent = useCallback((event) => {
    if (inputDisabled.all || inputDisabled[event.key]) return;
    dispatch(userPressedKey(inputPressed, event.key));
  }, []);
  const keybordUpEvent = useCallback((event) => {
    if (inputDisabled.all) return;
    dispatch(userReleasedKey(inputPressed, event.key));
  }, []);
  return {
    keybordDownEvent,
    keybordUpEvent,
  };
};

export default useUserInput;
