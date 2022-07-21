import { useState } from "react";

type ReactEvent = React.FormEvent<HTMLInputElement | HTMLTextAreaElement>;

type InputValue = number | string | boolean;
type UseInputFn = (initialState: InputValue) => [InputValue, (e: ReactEvent) => void];

const useInput: UseInputFn = (initialState) => {
  const [value, setValue] = useState(initialState);
  const setValueAction = (v: ReactEvent) => setValue(v.currentTarget.value);

  return [value, setValueAction];
};

export default useInput;
