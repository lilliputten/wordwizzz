import React from 'react';
import classNames from 'classnames';
import { KeyIcon, InformationCircleIcon } from '@heroicons/react/24/solid';

import { Typography } from '@/components/ui/shared';
import { TMenuItem } from '@/core/types/generic/TMenuItem';

// TODO: Extract to constants...
const menuItems: TMenuItem[] = [
  {
    id: 'pages',
    title: 'Pages',
    icon: <KeyIcon />,
    url: '#',
  },
  {
    id: 'docs',
    title: 'Documentation',
    icon: <InformationCircleIcon />,
    url: '#',
  },
];

export const NavBarMenuItem: React.FC<{ item: TMenuItem }> = ({ item }) => {
  const { id, title, icon, url } = item;
  let titleNode = <>{title}</>;
  if (url) {
    titleNode = <a href={url}>{titleNode}</a>;
  }
  return (
    <Typography
      item-id={id}
      as="li"
      variant="small"
      className={classNames(
        'flex',
        'items-center',
        'gap-x-2',
        'p-1',
        'font-medium',
        'transition-all',
        'hover:color-white',
        'hover:underline',
        'hover:opacity-80',
        'hover:bg-primary-400',
        'hover:bg-opacity-50',
        'px-4',
        'py-2.5',
        'rounded-full',
        '[&>svg]:w-[20px]',
        '[&>svg]:h-[20px]',
        '[&>svg]:opacity-50',
      )}
    >
      {icon}
      {titleNode}
    </Typography>
  );
};

export const NavBarMenu: React.FC = () => {
  const itemsContent = menuItems.map((item) => <NavBarMenuItem key={item.id} item={item} />);
  return (
    <ul
      className={classNames(
        'mt-2',
        'mb-4',
        'flex',
        'flex-col',
        // 'gap-2',
        'lg:mb-0',
        'lg:mt-0',
        'lg:flex-row',
        'lg:items-center',
        // 'lg:gap-6',
        'gap-y-1',
        'gap-x-2',
      )}
    >
      {itemsContent}
    </ul>
  );
};
