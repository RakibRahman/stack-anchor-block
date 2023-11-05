import React from 'react';

import type { PasswordInputProps } from '@/models/form';
import EyeIcon from 'assets/images/eye.png';
import LockIcon from 'assets/images/lock.png';

export const PasswordInput: React.FC<PasswordInputProps> = ({
  onChangeHandler,

  placeholder = 'Create Password',
  name,
}) => {
  const [togglePassword, setTogglePassword] = React.useState(true);

  return (
    <div className="relative mt-2 rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <img
          src={LockIcon}
          alt="lock"
          className="w-[20px] h-[20px] object-cover"
        />
      </div>
      <input
        type={togglePassword ? 'password' : 'text'}
        name={name}
        id={name}
        className="block w-full rounded-lg border-0 py-2 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:#B0B7C3focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
      <button
        type="button"
        className=" absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
        onClick={() => {
          setTogglePassword((t) => !t);
        }}
      >
        <img
          src={EyeIcon}
          alt="eye"
          className="w-[20px] h-[20px] object-cover"
        />
      </button>
    </div>
  );
};
