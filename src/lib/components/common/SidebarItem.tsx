import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import type { SidebarItemProps } from '@/models/sidebar';

export const SidebarItem: FC<SidebarItemProps> = ({ icon, path, name }) => {
  const location = useLocation();

  const isSelectedPath = location.pathname === path;
  return (
    <Link to={path}>
      <div
        className={`flex gap-4 mb-2 py-2 px-6 items-center rounded-lg ${
          isSelectedPath ? 'bg-[#F0F5FA]' : 'bg-white'
        }`}
      >
        <img src={icon} className="w-4 h-4 object-cover" alt="icon sidebar" />
        <p className="text-[#A7AFBC] text-sm">{name}</p>
      </div>
    </Link>
  );
};
