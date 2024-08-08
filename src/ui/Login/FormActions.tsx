import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { BasicButton } from '@/ui/BasicButton';
import classNames from 'classnames';

export function FormActions({ isPending }: { isPending?: boolean }) {
  return (
    <BasicButton className={classNames('mt-4', 'w-full')} disabled={isPending}>
      Log in{' '}
      <ArrowRightIcon
        className={classNames(
          // prettier-ignore
          'ml-auto',
          'h-5',
          'w-5',
          'text-gray-50',
        )}
      />
    </BasicButton>
  );
}
