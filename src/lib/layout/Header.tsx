import { SiteLogo } from '../components/common/SiteLogo';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-base-100/80 backdrop-blur-md px-10">
      <section className="wrapper mx-auto flex items-center justify-between py-2">
        <SiteLogo />
        <div className="ml-auto">{/* <ThemeToggle /> */}</div>
        <select
          id="currency"
          name="currency"
          className="h-full rounded-md border-0 bg-gray-100 py-2 pl-2 pr-7 text-[#4E5D78] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
        >
          <option>English (UK)</option>
          <option>Bangla</option>
        </select>
      </section>
    </header>
  );
};

export default Header;
