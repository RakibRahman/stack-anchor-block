import { useAppSelector } from '@/store/hooks';
import DashboardIcon from 'assets/images/dashboard.png';
import SaleIcon from 'assets/images/sales.png';
import UserIcon from 'assets/images/user.png';

import { SidebarItem } from './SidebarItem';
import { SiteLogo } from './SiteLogo';

export const Sidebar = () => {
  const user = useAppSelector((state) => state.user);

  const isAuthenticated = !!user.token;

  if (!isAuthenticated) {
    return null;
  }
  return (
    <div className="flex gap-4 flex-col border-gray-100 h-[100dvh] border-r-2 w-[250px] items-center">
      <div className="mt-4">
        {' '}
        <SiteLogo />
      </div>

      <div className="mt-10">
        <p className="text-sm text-[#B0B7C3] text-left mb-4">Pages</p>
        <SidebarItem name="Dashboard" path="/" icon={DashboardIcon} />
        <SidebarItem name="Users" path="/users" icon={UserIcon} />
        <SidebarItem name="Sales" path="/sales" icon={SaleIcon} />
      </div>
    </div>
  );
};
