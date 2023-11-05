import Logo from 'assets/images/logo.png';

export const SiteLogo = () => {
  return (
    <div className="flex items-center gap-1">
      <img className="w-[50px] h-[44px] object-cover" src={Logo} alt="logo" />
      <h3
        className="text-[28px]"
        style={{
          color: '#4E5D78',
        }}
      >
        Stack
      </h3>
    </div>
  );
};
