import type { ChangeEvent } from 'react';
import { useState } from 'react';

import type { SignUpDetails } from '@/models/sign';

export const useAuth = () => {
  const [signUpDetails, setSignUpDetails] = useState<SignUpDetails>({
    name: '',
    email: '',
    password: '',
  });
  const [toggleCheckBox, setToggleCheckbox] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);

  const isValidEmail = (email: string) => {
    setEmailValidation(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    );
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setSignUpDetails((s) => ({ ...s, [name]: value }));
  };

  const toggleCheckBoxHandler = () => {
    setToggleCheckbox((t) => !t);
  };
  return {
    signUpDetails,
    onChangeHandler,
    toggleCheckBox,
    toggleCheckBoxHandler,
    emailValidation,
    isValidEmail,
  };
};
