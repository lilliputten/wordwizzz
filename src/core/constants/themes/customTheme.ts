export const customTheme = {
  /*
   * select: {
   *   styles: {
   *     base: {
   *       container: {
   *         backgroundColor: 'red',
   *         marginLeft: 'ml-2',
   *       },
   *     },
   *   },
   * },
   * navbar: {
   *   variants: {
   *     filled: {
   *       white: {
   *         background: '…',
   *         color: '…',
   *       },
   *     },
   *   },
   * },
   */
  button: {
    /*
     * valid: {
     *   variants: ['filled', 'outlined', 'gradient', 'text'],
     *   sizes: ['sm', 'md', 'lg'],
     *   colors: [
     *     'white',
     *     'blue-gray',
     *     'gray',
     *     'brown',
     *     'deep-orange',
     *     'orange',
     *     'amber',
     *     'yellow',
     *     'lime',
     *     'light-green',
     *     'green',
     *     'teal',
     *     'cyan',
     *     'light-blue',
     *     'blue',
     *     'indigo',
     *     'deep-purple',
     *     'purple',
     *     'pink',
     *     'red',
     *   ],
     * },
     */
    styles: {
      /*
       * base: {
       *   initial: {
       *     verticalAlign: 'align-middle',
       *     userSelect: 'select-none',
       *     fontFamily: 'font-sans',
       *     fontWeight: 'font-bold',
       *     textAlign: 'text-center',
       *     textTransform: 'uppercase',
       *     transition: 'transition-all',
       *     disabled: 'disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none',
       *   },
       *   fullWidth: {
       *     display: 'block',
       *     width: 'w-full',
       *   },
       * },
       */
      sizes: {
        sm: {
          fontSize: 'text-xs',
          py: 'py-2',
          px: 'px-4',
          borderRadius: 'rounded-full',
        },
        md: {
          fontSize: 'text-xs',
          py: 'py-3',
          px: 'px-6',
          borderRadius: 'rounded-full',
        },
        lg: {
          fontSize: 'text-sm',
          py: 'py-3.5',
          px: 'px-7',
          borderRadius: 'rounded-full',
        },
      },
      variants: {
        filled: {
          orange: {
            backgroud: 'bg-orange-500',
            color: 'text-black',
            shadow: 'shadow-md shadow-orange-500/20',
            hover: 'hover:shadow-lg hover:shadow-orange-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
        },
      },
    },
  },
};

