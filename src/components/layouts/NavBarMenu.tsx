import React from 'react';
import classNames from 'classnames';
import { KeyIcon } from '@heroicons/react/24/outline';

import { Typography } from '@/components/ui/shared';

interface TMenuItem {
  id: string;
  title: string;
  icon: React.ReactElement;
  url: string;
}

const items = [
  {
    id: 'pages',
    title: 'Pages',
    icon: <KeyIcon />,
    url: '#',
  },
];

export const NavBarMenuItem: React.FC<{ item: TMenuItem }> = ({ item }) => {
  const { id, title, icon, url } = item;
  return (
    <Typography
      id={id}
      as="li"
      variant="small"
      // color="blue-gray"
      className={classNames(
        'flex',
        'items-center',
        'gap-x-2',
        'p-1',
        'font-medium',
        '[&>svg]:w-[24px]',
        '[&>svg]:h-[24px]',
      )}
    >
      {icon}
      <a href={url} className={classNames('flex', 'items-center')}>
        {title}
      </a>
    </Typography>
  );
};

export const NavBarMenu: React.FC = () => {
  const itemsContent = items.map((item) => <NavBarMenuItem key={item.id} item={item} />);
  return (
    <ul
      className={classNames(
        'mt-2',
        'mb-4',
        'flex',
        'flex-col',
        'gap-2',
        'lg:mb-0',
        'lg:mt-0',
        'lg:flex-row',
        'lg:items-center',
        'lg:gap-6',
      )}
    >
      {itemsContent}
    </ul>
  );
};
