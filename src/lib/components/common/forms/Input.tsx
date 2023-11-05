import type { FC } from 'react';

import type { InputProps } from '@/models/form';

export const Input: FC<InputProps> = ({
  onChangeHandler,
  icon,
  placeholder,
  name,
  type = 'text',
}) => {
  return (
    <div className="relative mt-2 rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <img
          src={icon}
          alt={`${name}-icon`}
          className="w-[20px] h-[20px] object-cover"
        />
      </div>
      <input
        type={type}
        name={name}
        id={name}
        className="block w-full rounded-lg border-0 py-2 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:#B0B7C3focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};
