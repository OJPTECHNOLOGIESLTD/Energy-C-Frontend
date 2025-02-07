import { ChangeEvent, useState } from "react";

export type InputChangeHandler = (
  e:
    | ChangeEvent<HTMLInputElement>
    | ChangeEvent<HTMLSelectElement>
    | ChangeEvent<HTMLTextAreaElement>
) => void;

interface IreturnProps {
  handleInputChange: InputChangeHandler;
  input: Object;
  handleInputChangeByNameValue: (name: string, val: any) => void;
  setState: (val: any) => void;
}

export default function useInputChange<T>(val: T) {
  const [state, setState] = useState<T>(val);

  const onChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => {
    // @ts-ignore
    const value = e.target.checked || e.target.value;

    setState((curr) => ({
      ...curr,
      [e.target.name]: value,
    }));
  };

  const onChangeByNameValue = (name: keyof T, value: any) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  return { state, onChange, onChangeByNameValue, setState };
}
