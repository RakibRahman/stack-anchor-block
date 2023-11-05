import { useAppSelector } from '@/store/hooks';
import Bell from 'assets/images/bell.png';
import Profile from 'assets/images/profile.png';

export const TopBar = () => {
  const user = useAppSelector((state) => state.user);

  const isAuthenticated = !!user.token;

  if (!isAuthenticated) {
    return null;
  }
  return (
    <div className="flex gap-1 justify-between w-full items-center">
      <div>
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-[400px] px-4 py-3 pr-10 text-sm text-[#B0B7C3] border border-gray-300 rounded-lg bg-[#F0F5FA] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <img src={Bell} alt="profile" className="object-cover w-8 h-8" />

        <img
          src={Profile}
          alt="profile"
          className="object-cover w-[47px] h-[47px] rounded-full"
        />
      </div>
    </div>
  );
};
