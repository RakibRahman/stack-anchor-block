import type React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '@/lib/layout/Header';
import { GoogleAppleButton } from '@/lib/pages/login/components/GoogleAppleButton';
import type { SignWrapperProps } from '@/models/sign';

export const SignWrapper: React.FC<SignWrapperProps> = ({ children }) => {
  const location = useLocation();

  const isLogin = location.pathname === '/login';
  const heading = isLogin ? 'Sign In' : 'Get Started';
  const subHeading = isLogin
    ? 'Welcome back, you’ve been missed!'
    : ' Create an account to continue!';
  return (
    <div className="w-screen flex items-center flex-col text-center">
      <Header />
      <div className="mt-10">
        <h3 className="text-[#323B4B] mb-2 text-2xl font-bold">{heading}</h3>
        <p className="mb-4 text-[#8A94A6] font-medium">{subHeading}</p>

        <div className="flex justify-between items-center">
          <GoogleAppleButton isLogin={isLogin} type="google" />
          <GoogleAppleButton isLogin={isLogin} type="apple" />
        </div>
        <div className="flex gap-4 items-center my-4">
          <div className="w-full bg-[#F0F5FA] h-[1px]" />
          <p className="text-[#B0B7C3] text-xl font-medium">OR</p>
          <div className="w-full bg-[#F0F5FA] h-[2px]" />
        </div>
        {children}
      </div>
    </div>
  );
};
