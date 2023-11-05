import AppleIcon from 'assets/images/apple.png';
import GoogleIcon from 'assets/images/google.png';

export const GoogleAppleButton = ({
  isLogin,
  type,
}: {
  isLogin: boolean;
  type: 'apple' | 'google';
}) => {
  const label = `Sign ${isLogin ? 'In' : 'Up'}`;
  const icon = type === 'google' ? GoogleIcon : AppleIcon;
  const text =
    type === 'google' ? `${label} with Google` : `${label} with Apple ID`;

  return (
    <div className="px-1 flex gap-2 items-center justify-center w-[240px] h-[50px] bg-[#F0F5FA] text-[#8A94A6] font-medium rounded-2xl">
      <img src={icon} alt="google" />
      <p className="text-md">{text}</p>
    </div>
  );
};
