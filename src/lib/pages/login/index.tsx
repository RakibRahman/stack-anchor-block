/* eslint-disable jsx-a11y/label-has-associated-control */
import console from 'console';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

import { Input } from '@/lib/components/common/forms/Input';
import { PasswordInput } from '@/lib/components/common/forms/PasswordInput';
import { SignWrapper } from '@/lib/components/common/SignWrapper';
import { useAuth } from '@/lib/hooks/useAuth';
import { useLoginUserMutation } from '@/services/auth';
import { setUserInfo } from '@/store/userSlice';
import EmailIcon from 'assets/images/at.png';
import { useAppDispatch, useAppSelector } from 'store/hooks';

const Login = () => {
  const user = useAppSelector((state) => state.user);

  const {
    signUpDetails,
    onChangeHandler,
    toggleCheckBox,
    toggleCheckBoxHandler,
    isValidEmail,
    emailValidation,
  } = useAuth();
  const dispatch = useAppDispatch();
  const [loginUser, { isLoading, error, isError }] = useLoginUserMutation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = !!user.token;
    if (isAuthenticated) {
      navigate('/');
    }
  }, []);
  return (
    <SignWrapper>
      <div className="w-[500px] flex flex-col gap-6">
        <div>
          <Input
            name="email"
            icon={EmailIcon}
            type="email"
            onChangeHandler={onChangeHandler}
            placeholder="Your Email"
          />
          {emailValidation === false && isSubmitted ? (
            <p className="text-[#FF5630] text-left text-sm">
              Please enter a valid email address.
            </p>
          ) : null}
        </div>

        <PasswordInput
          onChangeHandler={onChangeHandler}
          name="password"
          placeholder="Password"
        />

        <button
          className="flex gap-2 items-center"
          onClick={() => {
            toggleCheckBoxHandler();
          }}
          type="button"
        >
          <span
            className={`w-5 h-5 block ${
              toggleCheckBox ? 'bg-[#377DFF]' : 'bg-[#EDEFF1]'
            } rounded-[6px]`}
          />
          <p className="text-[#B0B7C3] font-medium text-base">Remember Me</p>
        </button>

        <button
          className="bg-[#377DFF] text-white rounded-[8px] border-0 py-2"
          type="button"
          onClick={() => {
            setIsSubmitted(true);
            isValidEmail(signUpDetails.email);

            if (emailValidation === false) {
              return;
            }

            loginUser(signUpDetails)
              .then((res) => {
                console.log(res);
                dispatch(
                  setUserInfo({
                    email: signUpDetails.email,
                    token: res?.data?.token!,
                  })
                );
                navigate('/');
              })
              .catch((err) => {
                console.log(err);
              });
            // console.log(payload);
            // dispatch(setUserInfo({ email: 'www@gmail', token: '4545' }));
          }}
        >
          Sign In
        </button>
        <p className="text-[#B0B7C3] text-md font-medium">
          Don’t have an account yet?{' '}
          <Link style={{ color: '#377DFF' }} to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </SignWrapper>
  );
};

export default Login;
