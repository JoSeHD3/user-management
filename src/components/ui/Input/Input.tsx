import { ChangeEvent, InputHTMLAttributes, useCallback } from 'react';
import { Input as ShadInput } from './base';
import { debounce } from 'lodash';
import { DEBOUNCE_TIME } from '@/lib/constants';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  onDebouncedChange: (value: string) => void;
}

export const Input = ({ onDebouncedChange, ...props }: IInput) => {
  const debounceHandler = useCallback(
    debounce((value: string) => {
      onDebouncedChange(value);
    }, DEBOUNCE_TIME),
    [onDebouncedChange],
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    debounceHandler(e.target.value);

  return <ShadInput {...props} onChange={onChange} />;
};
