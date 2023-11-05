import type { ChangeEvent } from 'react';

export interface InputProps {
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  icon: string;
  type?: string;
  placeholder: string;
  name: string;
}

export type PasswordInputProps = Omit<InputProps, 'icon' | 'type'>;
