import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@/components/ui/shared';
import classNames from 'classnames';

import { TMenuItem } from '@/core/types/generic/TMenuItem';
import { TPropsWithClassName } from '@/core/types/generic';

import { MaxWidthWrapper } from './MaxWidthWrapper';

const menuItems: TMenuItem[] = [
  {
    id: 'aboutUs',
    title: 'About Us',
  },
  {
    id: 'license',
    title: 'License',
  },
];

type TProps = TPropsWithClassName;

const logoSize = 24;

export const FooterMenuItem: React.FC<{ item: TMenuItem }> = ({ item }) => {
  const { id, title, icon, url } = item;
  let titleNode = <>{title}</>;
  if (url) {
    titleNode = <a href={url}>{titleNode}</a>;
  }
  return (
    <li>
      <Typography
        item-id={id}
        as="a"
        href="#"
        className={classNames(
          'font-normal',
          'transition-all',
          'hover:color-white',
          'hover:underline',
          'hover:opacity-80',
          'hover:bg-primary-400',
          'hover:bg-opacity-50',
          'px-4',
          'py-1.5',
          'rounded-full',
          '[&>svg]:w-[20px]',
          '[&>svg]:h-[20px]',
          '[&>svg]:opacity-50',
        )}
      >
        {icon}
        {titleNode}
      </Typography>
    </li>
  );
};

export const AppFooter: React.FC<TProps> = (props) => {
  const { className } = props;
  const itemsContent = menuItems.map((item) => <FooterMenuItem key={item.id} item={item} />);
  return (
    <MaxWidthWrapper
      className={classNames(
        // prettier-ignore
        className,
        'AppFooter',
        'bg-primary',
        'color-white',
      )}
    >
      <footer
        className={classNames(
          'AppFooter_Container',
          'flex',
          'w-full',
          'flex-row',
          'flex-wrap',
          'items-center',
          'justify-center',
          'gap-y-6',
          'gap-x-12',
          'py-3',
          'px-3',
          'text-center',
          'md:justify-between',
        )}
      >
        <Link
          href="/"
          className={classNames('flex', 'gap-4', 'hover:opacity-80', 'transition-opacity')}
        >
          <Image
            src="/static/images/logo/v1/sm-super-simple.svg"
            width={logoSize}
            height={logoSize}
            alt="Small logo"
          />
          <Typography className={classNames('font-normal')}>&copy; 2024 WordQizzz!</Typography>
        </Link>
        <ul
          className={classNames(
            // prettier-ignore
            'flex',
            'flex-wrap',
            'items-center',
            'justify-center',
            'gap-y-1',
            'gap-x-2',
          )}
        >
          {itemsContent}
        </ul>
      </footer>
    </MaxWidthWrapper>
  );
};
