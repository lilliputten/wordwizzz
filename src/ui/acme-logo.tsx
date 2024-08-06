import { GlobeAltIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
// import { lusitana } from '@/app/ui/fonts';

export function AcmeLogo() {
  return (
    <div className={classNames('flex flex-row items-center leading-none text-white')}>
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[32px]">Acme</p>
    </div>
  );
}
