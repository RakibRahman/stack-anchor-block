import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

import { Input } from '@/lib/components/common/forms/Input';
import { PasswordInput } from '@/lib/components/common/forms/PasswordInput';
import { SignWrapper } from '@/lib/components/common/SignWrapper';
import { useAuth } from '@/lib/hooks/useAuth';
import { useRegisterUserMutation } from '@/services/auth';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setUserInfo } from '@/store/userSlice';
import EmailIcon from 'assets/images/at.png';

import { PasswordBar } from './components/PasswordBar';

const SignUp = () => {
  const {
    signUpDetails,
    onChangeHandler,
    toggleCheckBox,
    toggleCheckBoxHandler,
    isValidEmail,
    emailValidation,
  } = useAuth();
  const dispatch = useAppDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    const isAuthenticated = !!user.token;
    if (isAuthenticated) {
      navigate('/');
    }
  }, []);

  return (
    <SignWrapper>
      <div className="w-[500px] flex flex-col gap-5">
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

        <Input
          name="name"
          icon={EmailIcon}
          type="text"
          onChangeHandler={onChangeHandler}
          placeholder="Your Name"
        />

        <PasswordInput
          onChangeHandler={onChangeHandler}
          name="password"
          placeholder="Create Password"
        />

        <PasswordBar
          password={signUpDetails.password}
          key={signUpDetails.password.length}
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
          <p className="text-[#B0B7C3] font-medium text-base">
            I agree to the Terms & Conditions
          </p>
        </button>

        <button
          className="bg-[#377DFF] text-white rounded-lg border-0 py-2"
          type="button"
          onClick={() => {
            setIsSubmitted(true);
            isValidEmail(signUpDetails.email);

            if (emailValidation === false) {
              return;
            }
            if (emailValidation && toggleCheckBox === false) {
              toast.error('You must agree to the terms and Conditions.');
              return;
            }

            // loginUser(signUpDetails);
            // dispatch(setUserInfo({ email: 'www@gmail', token: '4545' }));
            registerUser(signUpDetails)
              .unwrap()
              .then((res) => {
                dispatch(
                  setUserInfo({
                    email: signUpDetails.email,
                    token: res?.data?.token!,
                    id: res?.data?.id,
                  })
                );
                navigate('/');
              })
              .catch((err) => {
                toast.error(err?.data?.error);
              });
          }}
        >
          Sign Up
        </button>
        <p className="text-[#B0B7C3] text-md font-medium">
          Already have an account?{' '}
          <Link style={{ color: '#377DFF' }} to="/login">
            Sign In
          </Link>
        </p>
      </div>
    </SignWrapper>
  );
};

export default SignUp;
