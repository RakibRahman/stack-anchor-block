/* eslint-disable no-nested-ternary */

import type React from 'react';

import { checkPasswordStrength } from '@/lib/utils/passwordChecker';

interface PasswordProps {
  password: string;
}
// eslint-disable-next-line sonarjs/cognitive-complexity
export const PasswordBar: React.FC<PasswordProps> = ({ password }) => {
  const passwordStrength = checkPasswordStrength(password);

  return (
    <div className="flex gap-2 items-center justify-between" key={password}>
      <div
        className="w-[80px] h-1 rounded-[2px]"
        style={{
          background:
            passwordStrength === 'weak'
              ? '#F3F3F3'
              : passwordStrength === 'medium'
              ? '#ffd850'
              : passwordStrength === 'strong'
              ? '#38CB89'
              : passwordStrength === 'best'
              ? '#38CB89'
              : '#F3F3F3',
        }}
      />
      <div
        className="w-[80px] h-1 rounded-[2px]"
        style={{
          background:
            passwordStrength === 'medium'
              ? '#ffd850'
              : passwordStrength === 'strong'
              ? '#38CB89'
              : passwordStrength === 'best'
              ? '#38CB89'
              : '#F3F3F3',
        }}
      />
      <div
        className="w-[80px] h-1 rounded-[2px]"
        style={{
          background:
            passwordStrength === 'strong'
              ? '#38CB89'
              : passwordStrength === 'best'
              ? '#38CB89'
              : '#F3F3F3',
        }}
      />
      <div
        className="w-[80px] h-1 rounded-[2px]"
        style={{
          background: passwordStrength === 'best' ? '#38CB89' : '#F3F3F3',
        }}
      />
      <div
        className="w-[80px] h-1 rounded-[2px]"
        style={{
          background: passwordStrength === 'best' ? '#38CB89' : '#F3F3F3',
        }}
      />
    </div>
  );
};
