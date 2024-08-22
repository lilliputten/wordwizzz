// import Link from 'next/link';
// import Image from 'next/image';
import classNames from 'classnames';
// import { Popover, PopoverHandler, PopoverContent, Button } from '@material-tailwind/react';

import { TPropsWithClassName } from '@/core/types/generic';
// import { Button, Popover, PopoverContent, PopoverHandler } from '@/components/ui/shared';

import { MaxWidthWrapper } from './MaxWidthWrapper';
import { AppNavBar } from './AppNavBar';

type TProps = TPropsWithClassName;

export const AppHeader: React.FC<TProps> = (props) => {
  const { className } = props;
  return (
    <MaxWidthWrapper
      className={classNames(
        // prettier-ignore
        className,
        'AppHeader',
        'border-b border-blue-900',
        'bg-white',
        'dark:bg-gray-800',
      )}
    >
      <AppNavBar />

      {/*
      <Popover>
        <PopoverHandler>
          <Button>
            Popover
          </Button>
        </PopoverHandler>
        <PopoverContent>This is a very beautiful popover, show some love.</PopoverContent>
      </Popover>

      <button
        data-ripple-light="true"
        data-popover-target="menu"
        className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Open Menu
      </button>
      <ul
        role="menu"
        data-popover="menu"
        data-popover-placement="bottom"
        className="absolute z-10 min-w-[180px] overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
      >
        <li
          role="menuitem"
          className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          Menu Item 1
        </li>
        <li
          role="menuitem"
          className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          Menu Item 2
        </li>
        <li
          role="menuitem"
          className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          Menu Item 3
        </li>
      </ul>

      <header>
        <nav className={classNames('border-gray-200', 'px-4', 'lg:px-6', 'py-2.5')}>
          <div
            className={classNames(
              'flex',
              'flex-wrap',
              'justify-between',
              'items-center',
              'mx-auto',
              'max-w-screen-xl',
            )}
          >
            <a href="https://flowbite.com" className={classNames('flex', 'items-center')}>
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                className={classNames('mr-3', 'h-6', 'sm:h-9')}
                alt="Flowbite Logo"
                width={32}
                height={32}
              />
              <span
                className={classNames(
                  'self-center',
                  'text-xl',
                  'font-semibold',
                  'whitespace-nowrap',
                  'dark:text-white',
                )}
              >
                Flowbite
              </span>
            </a>
            <div className={classNames('flex', 'items-center', 'lg:order-2')}>
              <a
                href="#"
                className={classNames(
                  'text-gray-800',
                  'dark:text-white',
                  'hover:bg-gray-50',
                  'focus:ring-4',
                  'focus:ring-gray-300',
                  'font-medium',
                  'rounded-lg',
                  'text-sm',
                  'px-4',
                  'lg:px-5',
                  'py-2',
                  'lg:py-2.5',
                  'mr-2',
                  'dark:hover:bg-gray-700',
                  'focus:outline-none',
                  'dark:focus:ring-gray-800',
                )}
              >
                Log in
              </a>
              <a
                href="#"
                className={classNames(
                  'text-white',
                  'bg-primary-700',
                  'hover:bg-primary-800',
                  'focus:ring-4',
                  'focus:ring-primary-300',
                  'font-medium',
                  'rounded-lg',
                  'text-sm',
                  'px-4',
                  'lg:px-5',
                  'py-2',
                  'lg:py-2.5',
                  'mr-2',
                  'dark:bg-primary-600',
                  'dark:hover:bg-primary-700',
                  'focus:outline-none',
                  'dark:focus:ring-primary-800',
                )}
              >
                Get started
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className={classNames(
                  'inline-flex',
                  'items-center',
                  'p-2',
                  'ml-1',
                  'text-sm',
                  'text-gray-500',
                  'rounded-lg',
                  'lg:hidden',
                  'hover:bg-gray-100',
                  'focus:outline-none',
                  'focus:ring-2',
                  'focus:ring-gray-200',
                  'dark:text-gray-400',
                  'dark:hover:bg-gray-700',
                  'dark:focus:ring-gray-600',
                )}
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className={classNames('sr-only')}>Open main menu</span>
                <svg
                  className={classNames('w-6', 'h-6')}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className={classNames('hidden', 'w-6', 'h-6')}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              className={classNames(
                'hidden',
                'justify-between',
                'items-center',
                'w-full',
                'lg:flex',
                'lg:w-auto',
                'lg:order-1',
              )}
              id="mobile-menu-2"
            >
              <ul
                className={classNames(
                  'flex',
                  'flex-col',
                  'mt-4',
                  'font-medium',
                  'lg:flex-row',
                  'lg:space-x-8',
                  'lg:mt-0',
                )}
              >
                <li>
                  <a
                    href="#"
                    className={classNames(
                      'block',
                      'py-2',
                      'pr-4',
                      'pl-3',
                      'text-white',
                      'rounded',
                      'bg-primary-700',
                      'lg:bg-transparent',
                      'lg:text-primary-700',
                      'lg:p-0',
                      'dark:text-white',
                    )}
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={classNames(
                      'block',
                      'py-2',
                      'pr-4',
                      'pl-3',
                      'text-gray-700',
                      'border-b',
                      'border-gray-100',
                      'hover:bg-gray-50',
                      'lg:hover:bg-transparent',
                      'lg:border-0',
                      'lg:hover:text-primary-700',
                      'lg:p-0',
                      'dark:text-gray-400',
                      'lg:dark:hover:text-white',
                      'dark:hover:bg-gray-700',
                      'dark:hover:text-white',
                      'lg:dark:hover:bg-transparent',
                      'dark:border-gray-700',
                    )}
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={classNames(
                      'block',
                      'py-2',
                      'pr-4',
                      'pl-3',
                      'text-gray-700',
                      'border-b',
                      'border-gray-100',
                      'hover:bg-gray-50',
                      'lg:hover:bg-transparent',
                      'lg:border-0',
                      'lg:hover:text-primary-700',
                      'lg:p-0',
                      'dark:text-gray-400',
                      'lg:dark:hover:text-white',
                      'dark:hover:bg-gray-700',
                      'dark:hover:text-white',
                      'lg:dark:hover:bg-transparent',
                      'dark:border-gray-700',
                    )}
                  >
                    Marketplace
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={classNames(
                      'block',
                      'py-2',
                      'pr-4',
                      'pl-3',
                      'text-gray-700',
                      'border-b',
                      'border-gray-100',
                      'hover:bg-gray-50',
                      'lg:hover:bg-transparent',
                      'lg:border-0',
                      'lg:hover:text-primary-700',
                      'lg:p-0',
                      'dark:text-gray-400',
                      'lg:dark:hover:text-white',
                      'dark:hover:bg-gray-700',
                      'dark:hover:text-white',
                      'lg:dark:hover:bg-transparent',
                      'dark:border-gray-700',
                    )}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={classNames(
                      'block',
                      'py-2',
                      'pr-4',
                      'pl-3',
                      'text-gray-700',
                      'border-b',
                      'border-gray-100',
                      'hover:bg-gray-50',
                      'lg:hover:bg-transparent',
                      'lg:border-0',
                      'lg:hover:text-primary-700',
                      'lg:p-0',
                      'dark:text-gray-400',
                      'lg:dark:hover:text-white',
                      'dark:hover:bg-gray-700',
                      'dark:hover:text-white',
                      'lg:dark:hover:bg-transparent',
                      'dark:border-gray-700',
                    )}
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={classNames(
                      'block',
                      'py-2',
                      'pr-4',
                      'pl-3',
                      'text-gray-700',
                      'border-b',
                      'border-gray-100',
                      'hover:bg-gray-50',
                      'lg:hover:bg-transparent',
                      'lg:border-0',
                      'lg:hover:text-primary-700',
                      'lg:p-0',
                      'dark:text-gray-400',
                      'lg:dark:hover:text-white',
                      'dark:hover:bg-gray-700',
                      'dark:hover:text-white',
                      'lg:dark:hover:bg-transparent',
                      'dark:border-gray-700',
                    )}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      */}
    </MaxWidthWrapper>
  );
};
