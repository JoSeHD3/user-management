import { ChangeEvent, InputHTMLAttributes, useCallback, useState } from 'react';
import { Input as ShadInput } from './base';
import { debounce } from 'lodash';
import { DEBOUNCE_TIME } from '@/lib/constants';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  onDebouncedChange: (value: string) => void;
}

export const Input = ({ onDebouncedChange, ...props }: IInput) => {
  const [inputValue, setInputValue] = useState('');

  const debounceHandler = useCallback(
    debounce((value: string) => {
      onDebouncedChange(value);
    }, DEBOUNCE_TIME),
    [onDebouncedChange],
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    debounceHandler(e.target.value);
  };

  return <ShadInput {...props} value={inputValue} onChange={onChange} />;
};
