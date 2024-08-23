// NOTE: This file is provided ony for future reference purposes
export const sampleThemeObject = {
  accordion: {
    defaultProps: {
      className: '',
      animate: {
        unmount: {},
        mount: {},
      },
      disabled: false,
    },
    styles: {
      base: {
        container: {
          display: 'block',
          position: 'relative',
          width: 'w-full',
        },
        header: {
          initial: {
            display: 'flex',
            justifyContent: 'justify-between',
            alignItems: 'items-center',
            width: 'w-full',
            py: 'py-4',
            borderWidth: 'border-b border-b-blue-gray-100',
            color: 'text-blue-gray-700',
            fontSmoothing: 'antialiased',
            fontFamily: 'font-sans',
            fontSize: 'text-xl',
            textAlign: 'text-left',
            fontWeight: 'font-semibold',
            lineHeight: 'leading-snug',
            userSelect: 'select-none',
            hover: 'hover:text-blue-gray-900',
            transition: 'transition-colors',
          },
          active: {
            color: 'text-blue-gray-900',
          },
          icon: {
            ml: 'ml-4',
          },
        },
        body: {
          display: 'block',
          width: 'w-full',
          py: 'py-4',
          color: 'text-gray-700',
          fontSmoothing: 'antialiased',
          fontFamily: 'font-sans',
          fontSize: 'text-sm',
          fontWeight: 'font-light',
          lineHeight: 'leading-normal',
        },
        disabled: {
          pointerEvents: 'pointer-events-none',
          opacity: 'opacity-50',
        },
      },
    },
  },
  alert: {
    defaultProps: {
      variant: 'filled',
      color: 'gray',
      open: true,
      animate: {
        unmount: {},
        mount: {},
      },
      className: '',
    },
    valid: {
      variants: ['filled', 'gradient', 'outlined', 'ghost'],
      colors: [
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
    },
    styles: {
      base: {
        alert: {
          position: 'relative',
          display: 'block',
          width: 'w-full',
          fontFamily: 'font-sans',
          fontSize: 'text-base',
          fontWeight: 'font-regular',
          px: 'px-4',
          py: 'py-4',
          borderRadius: 'rounded-lg',
        },
        action: {
          position: '!absolute',
          top: 'top-3',
          right: 'right-3',
        },
      },
      variants: {
        filled: {
          'blue-gray': {
            backgroud: 'bg-blue-gray-500',
            color: 'text-white',
          },
          gray: {
            backgroud: 'bg-gray-900',
            color: 'text-white',
          },
          brown: {
            backgroud: 'bg-brown-500',
            color: 'text-white',
          },
          'deep-orange': {
            backgroud: 'bg-deep-orange-500',
            color: 'text-white',
          },
          orange: {
            backgroud: 'bg-orange-500',
            color: 'text-white',
          },
          amber: {
            backgroud: 'bg-amber-500',
            color: 'text-black',
          },
          yellow: {
            backgroud: 'bg-yellow-500',
            color: 'text-black',
          },
          lime: {
            backgroud: 'bg-lime-500',
            color: 'text-black',
          },
          'light-green': {
            backgroud: 'bg-light-green-500',
            color: 'text-white',
          },
          green: {
            backgroud: 'bg-green-500',
            color: 'text-white',
          },
          teal: {
            backgroud: 'bg-teal-500',
            color: 'text-white',
          },
          cyan: {
            backgroud: 'bg-cyan-500',
            color: 'text-white',
          },
          'light-blue': {
            backgroud: 'bg-light-blue-500',
            color: 'text-white',
          },
          blue: {
            backgroud: 'bg-blue-500',
            color: 'text-white',
          },
          indigo: {
            backgroud: 'bg-indigo-500',
            color: 'text-white',
          },
          'deep-purple': {
            backgroud: 'bg-deep-purple-500',
            color: 'text-white',
          },
          purple: {
            backgroud: 'bg-purple-500',
            color: 'text-white',
          },
          pink: {
            backgroud: 'bg-pink-500',
            color: 'text-white',
          },
          red: {
            backgroud: 'bg-red-500',
            color: 'text-white',
          },
        },
        gradient: {
          'blue-gray': {
            backgroud: 'bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400',
            color: 'text-white',
          },
          gray: {
            backgroud: 'bg-gradient-to-tr from-gray-900 to-gray-800',
            color: 'text-white',
          },
          brown: {
            backgroud: 'bg-gradient-to-tr from-brown-600 to-brown-400',
            color: 'text-white',
          },
          'deep-orange': {
            backgroud: 'bg-gradient-to-tr from-deep-orange-600 to-deep-orange-400',
            color: 'text-white',
          },
          orange: {
            backgroud: 'bg-gradient-to-tr from-orange-600 to-orange-400',
            color: 'text-white',
          },
          amber: {
            backgroud: 'bg-gradient-to-tr from-amber-600 to-amber-400',
            color: 'text-black',
          },
          yellow: {
            backgroud: 'bg-gradient-to-tr from-yellow-600 to-yellow-400',
            color: 'text-black',
          },
          lime: {
            backgroud: 'bg-gradient-to-tr from-lime-600 to-lime-400',
            color: 'text-black',
          },
          'light-green': {
            backgroud: 'bg-gradient-to-tr from-light-green-600 to-light-green-400',
            color: 'text-white',
          },
          green: {
            backgroud: 'bg-gradient-to-tr from-green-600 to-green-400',
            color: 'text-white',
          },
          teal: {
            backgroud: 'bg-gradient-to-tr from-teal-600 to-teal-400',
            color: 'text-white',
          },
          cyan: {
            backgroud: 'bg-gradient-to-tr from-cyan-600 to-cyan-400',
            color: 'text-white',
          },
          'light-blue': {
            backgroud: 'bg-gradient-to-tr from-light-blue-600 to-light-blue-400',
            color: 'text-white',
          },
          blue: {
            backgroud: 'bg-gradient-to-tr from-blue-600 to-blue-400',
            color: 'text-white',
          },
          indigo: {
            backgroud: 'bg-gradient-to-tr from-indigo-600 to-indigo-400',
            color: 'text-white',
          },
          'deep-purple': {
            backgroud: 'bg-gradient-to-tr from-deep-purple-600 to-deep-purple-400',
            color: 'text-white',
          },
          purple: {
            backgroud: 'bg-gradient-to-tr from-purple-600 to-purple-400',
            color: 'text-white',
          },
          pink: {
            backgroud: 'bg-gradient-to-tr from-pink-600 to-pink-400',
            color: 'text-white',
          },
          red: {
            backgroud: 'bg-gradient-to-tr from-red-600 to-red-400',
            color: 'text-white',
          },
        },
        outlined: {
          'blue-gray': {
            border: 'border border-blue-gray-500',
            color: 'text-blue-gray-700',
          },
          gray: {
            border: 'border border-gray-900',
            color: 'text-gray-900',
          },
          brown: {
            border: 'border border-brown-500',
            color: 'text-brown-700',
          },
          'deep-orange': {
            border: 'border border-deep-orange-500',
            color: 'text-deep-orange-700',
          },
          orange: {
            border: 'border border-orange-500',
            color: 'text-orange-700',
          },
          amber: {
            border: 'border border-amber-500',
            color: 'text-amber-700',
          },
          yellow: {
            border: 'border border-yellow-500',
            color: 'text-yellow-700',
          },
          lime: {
            border: 'border border-lime-500',
            color: 'text-lime-700',
          },
          'light-green': {
            border: 'border border-light-green-500',
            color: 'text-light-green-700',
          },
          green: {
            border: 'border border-green-500',
            color: 'text-green-700',
          },
          teal: {
            border: 'border border-teal-500',
            color: 'text-teal-700',
          },
          cyan: {
            border: 'border border-cyan-500',
            color: 'text-cyan-700',
          },
          'light-blue': {
            border: 'border border-light-blue-500',
            color: 'text-light-blue-700',
          },
          blue: {
            border: 'border border-blue-500',
            color: 'text-blue-700',
          },
          indigo: {
            border: 'border border-indigo-500',
            color: 'text-indigo-700',
          },
          'deep-purple': {
            border: 'border border-deep-purple-500',
            color: 'text-deep-purple-700',
          },
          purple: {
            border: 'border border-purple-500',
            color: 'text-purple-700',
          },
          pink: {
            border: 'border border-pink-500',
            color: 'text-pink-700',
          },
          red: {
            border: 'border border-red-500',
            color: 'text-red-700',
          },
        },
        ghost: {
          'blue-gray': {
            backgroud: 'bg-blue-gray-500/20',
            color: 'text-blue-gray-900',
          },
          gray: {
            backgroud: 'bg-gray-900/10',
            color: 'text-gray-900',
          },
          brown: {
            backgroud: 'bg-brown-500/20',
            color: 'text-brown-900',
          },
          'deep-orange': {
            backgroud: 'bg-deep-orange-500/20',
            color: 'text-deep-orange-900',
          },
          orange: {
            backgroud: 'bg-orange-500/20',
            color: 'text-orange-900',
          },
          amber: {
            backgroud: 'bg-amber-500/20',
            color: 'text-amber-900',
          },
          yellow: {
            backgroud: 'bg-yellow-500/20',
            color: 'text-yellow-900',
          },
          lime: {
            backgroud: 'bg-lime-500/20',
            color: 'text-lime-900',
          },
          'light-green': {
            backgroud: 'bg-light-green-500/20',
            color: 'text-light-green-900',
          },
          green: {
            backgroud: 'bg-green-500/20',
            color: 'text-green-900',
          },
          teal: {
            backgroud: 'bg-teal-500/20',
            color: 'text-teal-900',
          },
          cyan: {
            backgroud: 'bg-cyan-500/20',
            color: 'text-cyan-900',
          },
          'light-blue': {
            backgroud: 'bg-light-blue-500/20',
            color: 'text-light-blue-900',
          },
          blue: {
            backgroud: 'bg-blue-500/20',
            color: 'text-blue-900',
          },
          indigo: {
            backgroud: 'bg-indigo-500/20',
            color: 'text-indigo-900',
          },
          'deep-purple': {
            backgroud: 'bg-deep-purple-500/20',
            color: 'text-deep-purple-900',
          },
          purple: {
            backgroud: 'bg-purple-500/20',
            color: 'text-purple-900',
          },
          pink: {
            backgroud: 'bg-pink-500/20',
            color: 'text-pink-900',
          },
          red: {
            backgroud: 'bg-red-500/20',
            color: 'text-red-900',
          },
        },
      },
    },
  },
  avatar: {
    defaultProps: {
      variant: 'circular',
      size: 'md',
      className: '',
      withBorder: false,
      color: 'gray',
    },
    valid: {
      variants: ['circular', 'rounded', 'square'],
      sizes: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      colors: [
        'white',
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
    },
    styles: {
      base: {
        initial: {
          display: 'inline-block',
          position: 'relative',
          objectFit: 'object-cover',
          objectPosition: 'object-center',
        },
        withBorder: {
          border: 'border-2',
        },
      },
      sizes: {
        xs: {
          width: 'w-6',
          height: 'h-6',
          borderRadius: 'rounded-md',
        },
        sm: {
          width: 'w-9',
          height: 'h-9',
          borderRadius: 'rounded-md',
        },
        md: {
          width: 'w-12',
          height: 'h-12',
          borderRadius: 'rounded-lg',
        },
        lg: {
          width: 'w-[58px]',
          height: 'h-[58px]',
          borderRadius: 'rounded-lg',
        },
        xl: {
          width: 'w-[74px]',
          height: 'h-[74px]',
          borderRadius: 'rounded-xl',
        },
        xxl: {
          width: 'w-[110px]',
          height: 'h-[110px]',
          borderRadius: 'rounded-2xl',
        },
      },
      variants: {
        rounded: {},
        square: {
          borderRadius: '!rounded-none',
        },
        circular: {
          borderRadius: '!rounded-full',
        },
      },
      borderColor: {
        white: {
          borderColor: 'border-white',
        },
        'blue-gray': {
          borderColor: 'border-blue-gray-500',
        },
        gray: {
          borderColor: 'border-gray-900',
        },
        brown: {
          borderColor: 'border-brown-500',
        },
        'deep-orange': {
          borderColor: 'border-deep-orange-500',
        },
        orange: {
          borderColor: 'border-orange-500',
        },
        amber: {
          borderColor: 'border-amber-500',
        },
        yellow: {
          borderColor: 'border-yellow-500',
        },
        lime: {
          borderColor: 'border-lime-500',
        },
        'light-green': {
          borderColor: 'border-light-green-500',
        },
        green: {
          borderColor: 'border-green-500',
        },
        teal: {
          borderColor: 'border-teal-500',
        },
        cyan: {
          borderColor: 'border-cyan-500',
        },
        'light-blue': {
          borderColor: 'border-light-blue-500',
        },
        blue: {
          borderColor: 'border-blue-500',
        },
        indigo: {
          borderColor: 'border-indigo-500',
        },
        'deep-purple': {
          borderColor: 'border-deep-purple-500',
        },
        purple: {
          borderColor: 'border-purple-500',
        },
        pink: {
          borderColor: 'border-pink-500',
        },
        red: {
          borderColor: 'border-red-500',
        },
      },
    },
  },
  breadcrumbs: {
    defaultProps: {
      className: '',
      fullWidth: false,
      separator: '/',
    },
    styles: {
      base: {
        root: {
          initial: {
            width: 'w-max',
          },
          fullWidth: {
            display: 'block',
            width: 'w-full',
          },
        },
        list: {
          display: 'flex',
          flexWrap: 'flex-wrap',
          alignItems: 'items-center',
          width: 'w-full',
          bg: 'bg-blue-gray-50',
          bgOpacity: 'bg-opacity-60',
          py: 'py-2',
          px: 'px-4',
          borderRadius: 'rounded-md',
        },
        item: {
          initial: {
            display: 'flex',
            alignItems: 'items-center',
            color: 'text-blue-gray-900',
            fontSmoothing: 'antialiased',
            fontFamily: 'font-sans',
            fontSize: 'text-sm',
            fontWeight: 'font-normal',
            lineHeight: 'leading-normal',
            cursor: 'cursor-pointer',
            transition: 'transition-colors duration-300',
            hover: 'hover:text-light-blue-500',
          },
          disabled: {
            pointerEvents: 'pointer-events-none',
          },
        },
        separator: {
          color: 'text-blue-gray-500',
          fontSize: 'text-sm',
          fontSmoothing: 'antialiased',
          fontFamily: 'font-sans',
          fontWeight: 'font-normal',
          lineHeight: 'leading-normal',
          px: 'mx-2',
          pointerEvents: 'pointer-events-none',
          userSelcet: 'select-none',
        },
      },
    },
  },
  button: {
    defaultProps: {
      variant: 'filled',
      size: 'md',
      color: 'gray',
      fullWidth: false,
      ripple: true,
      className: '',
    },
    valid: {
      variants: ['filled', 'outlined', 'gradient', 'text'],
      sizes: ['sm', 'md', 'lg'],
      colors: [
        'white',
        'black',
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
    },
    styles: {
      base: {
        initial: {
          verticalAlign: 'align-middle',
          userSelect: 'select-none',
          fontFamily: 'font-sans',
          fontWeight: 'font-bold',
          textAlign: 'text-center',
          textTransform: 'uppercase',
          transition: 'transition-all',
          disabled: 'disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none',
        },
        fullWidth: {
          display: 'block',
          width: 'w-full',
        },
      },
      sizes: {
        sm: {
          fontSize: 'text-xs',
          py: 'py-2',
          px: 'px-4',
          borderRadius: 'rounded-lg',
        },
        md: {
          fontSize: 'text-xs',
          py: 'py-3',
          px: 'px-6',
          borderRadius: 'rounded-lg',
        },
        lg: {
          fontSize: 'text-sm',
          py: 'py-3.5',
          px: 'px-7',
          borderRadius: 'rounded-lg',
        },
      },
      variants: {
        filled: {
          white: {
            background: 'bg-white',
            color: 'text-blue-gray-900',
            shadow: 'shadow-md shadow-blue-gray-500/10',
            hover: 'hover:shadow-lg hover:shadow-blue-gray-500/20',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          black: {
            background: 'bg-gray-900',
            color: 'text-white',
            shadow: 'shadow-md shadow-gray-900/10',
            hover: 'hover:shadow-lg hover:shadow-gray-900/20',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          'blue-gray': {
            background: 'bg-blue-gray-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-blue-gray-500/20',
            hover: 'hover:shadow-lg hover:shadow-blue-gray-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          gray: {
            background: 'bg-gray-900',
            color: 'text-white',
            shadow: 'shadow-md shadow-gray-900/10',
            hover: 'hover:shadow-lg hover:shadow-gray-900/20',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          brown: {
            background: 'bg-brown-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-brown-500/20',
            hover: 'hover:shadow-lg hover:shadow-brown-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          'deep-orange': {
            background: 'bg-deep-orange-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-deep-orange-500/20',
            hover: 'hover:shadow-lg hover:shadow-deep-orange-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          orange: {
            background: 'bg-orange-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-orange-500/20',
            hover: 'hover:shadow-lg hover:shadow-orange-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          amber: {
            background: 'bg-amber-500',
            color: 'text-black',
            shadow: 'shadow-md shadow-amber-500/20',
            hover: 'hover:shadow-lg hover:shadow-amber-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          yellow: {
            background: 'bg-yellow-500',
            color: 'text-black',
            shadow: 'shadow-md shadow-yellow-500/20',
            hover: 'hover:shadow-lg hover:shadow-yellow-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          lime: {
            background: 'bg-lime-500',
            color: 'text-black',
            shadow: 'shadow-md shadow-lime-500/20',
            hover: 'hover:shadow-lg hover:shadow-lime-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          'light-green': {
            background: 'bg-light-green-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-light-green-500/20',
            hover: 'hover:shadow-lg hover:shadow-light-green-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          green: {
            background: 'bg-green-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-green-500/20',
            hover: 'hover:shadow-lg hover:shadow-green-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          teal: {
            background: 'bg-teal-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-teal-500/20',
            hover: 'hover:shadow-lg hover:shadow-teal-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          cyan: {
            background: 'bg-cyan-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-cyan-500/20',
            hover: 'hover:shadow-lg hover:shadow-cyan-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          'light-blue': {
            background: 'bg-light-blue-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-light-blue-500/20',
            hover: 'hover:shadow-lg hover:shadow-light-blue-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          blue: {
            background: 'bg-blue-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-blue-500/20',
            hover: 'hover:shadow-lg hover:shadow-blue-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          indigo: {
            background: 'bg-indigo-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-indigo-500/20',
            hover: 'hover:shadow-lg hover:shadow-indigo-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          'deep-purple': {
            background: 'bg-deep-purple-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-deep-purple-500/20',
            hover: 'hover:shadow-lg hover:shadow-deep-purple-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          purple: {
            background: 'bg-purple-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-purple-500/20',
            hover: 'hover:shadow-lg hover:shadow-purple-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          pink: {
            background: 'bg-pink-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-pink-500/20',
            hover: 'hover:shadow-lg hover:shadow-pink-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          red: {
            background: 'bg-red-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-red-500/20',
            hover: 'hover:shadow-lg hover:shadow-red-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
        },
        gradient: {
          white: {
            background: 'bg-white',
            color: 'text-blue-gray-900',
            shadow: 'shadow-md shadow-blue-gray-500/10',
            hover: 'hover:shadow-lg hover:shadow-blue-gray-500/20',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          black: {
            background: 'bg-gradient-to-tr from-gray-900 to-gray-800',
            color: 'text-white',
            shadow: 'shadow-md shadow-gray-900/10',
            hover: 'hover:shadow-lg hover:shadow-gray-900/20',
            active: 'active:opacity-[0.85]',
          },
          'blue-gray': {
            background: 'bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-blue-gray-500/20',
            hover: 'hover:shadow-lg hover:shadow-blue-gray-500/40',
            active: 'active:opacity-[0.85]',
          },
          gray: {
            background: 'bg-gradient-to-tr from-gray-900 to-gray-800',
            color: 'text-white',
            shadow: 'shadow-md shadow-gray-900/10',
            hover: 'hover:shadow-lg hover:shadow-gray-900/20',
            active: 'active:opacity-[0.85]',
          },
          brown: {
            background: 'bg-gradient-to-tr from-brown-600 to-brown-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-brown-500/20',
            hover: 'hover:shadow-lg hover:shadow-brown-500/40',
            active: 'active:opacity-[0.85]',
          },
          'deep-orange': {
            background: 'bg-gradient-to-tr from-deep-orange-600 to-deep-orange-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-deep-orange-500/20',
            hover: 'hover:shadow-lg hover:shadow-deep-orange-500/40',
            active: 'active:opacity-[0.85]',
          },
          orange: {
            background: 'bg-gradient-to-tr from-orange-600 to-orange-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-orange-500/20',
            hover: 'hover:shadow-lg hover:shadow-orange-500/40',
            active: 'active:opacity-[0.85]',
          },
          amber: {
            background: 'bg-gradient-to-tr from-amber-600 to-amber-400',
            color: 'text-black',
            shadow: 'shadow-md shadow-amber-500/20',
            hover: 'hover:shadow-lg hover:shadow-amber-500/40',
            active: 'active:opacity-[0.85]',
          },
          yellow: {
            background: 'bg-gradient-to-tr from-yellow-600 to-yellow-400',
            color: 'text-black',
            shadow: 'shadow-md shadow-yellow-500/20',
            hover: 'hover:shadow-lg hover:shadow-yellow-500/40',
            active: 'active:opacity-[0.85]',
          },
          lime: {
            background: 'bg-gradient-to-tr from-lime-600 to-lime-400',
            color: 'text-black',
            shadow: 'shadow-md shadow-lime-500/20',
            hover: 'hover:shadow-lg hover:shadow-lime-500/40',
            active: 'active:opacity-[0.85]',
          },
          'light-green': {
            background: 'bg-gradient-to-tr from-light-green-600 to-light-green-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-light-green-500/20',
            hover: 'hover:shadow-lg hover:shadow-light-green-500/40',
            active: 'active:opacity-[0.85]',
          },
          green: {
            background: 'bg-gradient-to-tr from-green-600 to-green-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-green-500/20',
            hover: 'hover:shadow-lg hover:shadow-green-500/40',
            active: 'active:opacity-[0.85]',
          },
          teal: {
            background: 'bg-gradient-to-tr from-teal-600 to-teal-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-teal-500/20',
            hover: 'hover:shadow-lg hover:shadow-teal-500/40',
            active: 'active:opacity-[0.85]',
          },
          cyan: {
            background: 'bg-gradient-to-tr from-cyan-600 to-cyan-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-cyan-500/20',
            hover: 'hover:shadow-lg hover:shadow-cyan-500/40',
            active: 'active:opacity-[0.85]',
          },
          'light-blue': {
            background: 'bg-gradient-to-tr from-light-blue-600 to-light-blue-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-light-blue-500/20',
            hover: 'hover:shadow-lg hover:shadow-light-blue-500/40',
            active: 'active:opacity-[0.85]',
          },
          blue: {
            background: 'bg-gradient-to-tr from-blue-600 to-blue-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-blue-500/20',
            hover: 'hover:shadow-lg hover:shadow-blue-500/40',
            active: 'active:opacity-[0.85]',
          },
          indigo: {
            background: 'bg-gradient-to-tr from-indigo-600 to-indigo-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-indigo-500/20',
            hover: 'hover:shadow-lg hover:shadow-indigo-500/40',
            active: 'active:opacity-[0.85]',
          },
          'deep-purple': {
            background: 'bg-gradient-to-tr from-deep-purple-600 to-deep-purple-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-deep-purple-500/20',
            hover: 'hover:shadow-lg hover:shadow-deep-purple-500/40',
            active: 'active:opacity-[0.85]',
          },
          purple: {
            background: 'bg-gradient-to-tr from-purple-600 to-purple-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-purple-500/20',
            hover: 'hover:shadow-lg hover:shadow-purple-500/40',
            active: 'active:opacity-[0.85]',
          },
          pink: {
            background: 'bg-gradient-to-tr from-pink-600 to-pink-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-pink-500/20',
            hover: 'hover:shadow-lg hover:shadow-pink-500/40',
            active: 'active:opacity-[0.85]',
          },
          red: {
            background: 'bg-gradient-to-tr from-red-600 to-red-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-red-500/20',
            hover: 'hover:shadow-lg hover:shadow-red-500/40',
            active: 'active:opacity-[0.85]',
          },
        },
        outlined: {
          white: {
            border: 'border border-white',
            color: 'text-white',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-white/50',
            active: 'active:opacity-[0.85]',
          },
          black: {
            border: 'border border-gray-900',
            color: 'text-gray-900',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-gray-300',
            active: 'active:opacity-[0.85]',
          },
          'blue-gray': {
            border: 'border border-blue-gray-500',
            color: 'text-blue-gray-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-blue-gray-200',
            active: 'active:opacity-[0.85]',
          },
          gray: {
            border: 'border border-gray-900',
            color: 'text-gray-900',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-gray-300',
            active: 'active:opacity-[0.85]',
          },
          brown: {
            border: 'border border-brown-500',
            color: 'text-brown-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-brown-200',
            active: 'active:opacity-[0.85]',
          },
          'deep-orange': {
            border: 'border border-deep-orange-500',
            color: 'text-deep-orange-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-deep-orange-200',
            active: 'active:opacity-[0.85]',
          },
          orange: {
            border: 'border border-orange-500',
            color: 'text-orange-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-orange-200',
            active: 'active:opacity-[0.85]',
          },
          amber: {
            border: 'border border-amber-500',
            color: 'text-amber-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-amber-200',
            active: 'active:opacity-[0.85]',
          },
          yellow: {
            border: 'border border-yellow-500',
            color: 'text-yellow-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-yellow-200',
            active: 'active:opacity-[0.85]',
          },
          lime: {
            border: 'border border-lime-500',
            color: 'text-lime-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-lime-200',
            active: 'active:opacity-[0.85]',
          },
          'light-green': {
            border: 'border border-light-green-500',
            color: 'text-light-green-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-light-green-200',
            active: 'active:opacity-[0.85]',
          },
          green: {
            border: 'border border-green-500',
            color: 'text-green-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-green-200',
            active: 'active:opacity-[0.85]',
          },
          teal: {
            border: 'border border-teal-500',
            color: 'text-teal-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-teal-200',
            active: 'active:opacity-[0.85]',
          },
          cyan: {
            border: 'border border-cyan-500',
            color: 'text-cyan-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-cyan-200',
            active: 'active:opacity-[0.85]',
          },
          'light-blue': {
            border: 'border border-light-blue-500',
            color: 'text-light-blue-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-light-blue-200',
            active: 'active:opacity-[0.85]',
          },
          blue: {
            border: 'border border-blue-500',
            color: 'text-blue-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-blue-200',
            active: 'active:opacity-[0.85]',
          },
          indigo: {
            border: 'border border-indigo-500',
            color: 'text-indigo-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-indigo-200',
            active: 'active:opacity-[0.85]',
          },
          'deep-purple': {
            border: 'border border-deep-purple-500',
            color: 'text-deep-purple-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-deep-purple-200',
            active: 'active:opacity-[0.85]',
          },
          purple: {
            border: 'border border-purple-500',
            color: 'text-purple-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-purple-200',
            active: 'active:opacity-[0.85]',
          },
          pink: {
            border: 'border border-pink-500',
            color: 'text-pink-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-pink-200',
            active: 'active:opacity-[0.85]',
          },
          red: {
            border: 'border border-red-500',
            color: 'text-red-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-red-200',
            active: 'active:opacity-[0.85]',
          },
        },
        text: {
          white: {
            color: 'text-white',
            hover: 'hover:bg-white/10',
            active: 'active:bg-white/30',
          },
          black: {
            color: 'text-gray-900',
            hover: 'hover:bg-gray-900/10',
            active: 'active:bg-gray-900/20',
          },
          'blue-gray': {
            color: 'text-blue-gray-500',
            hover: 'hover:bg-blue-gray-500/10',
            active: 'active:bg-blue-gray-500/30',
          },
          gray: {
            color: 'text-gray-900',
            hover: 'hover:bg-gray-900/10',
            active: 'active:bg-gray-900/20',
          },
          brown: {
            color: 'text-brown-500',
            hover: 'hover:bg-brown-500/10',
            active: 'active:bg-brown-500/30',
          },
          'deep-orange': {
            color: 'text-deep-orange-500',
            hover: 'hover:bg-deep-orange-500/10',
            active: 'active:bg-deep-orange-500/30',
          },
          orange: {
            color: 'text-orange-500',
            hover: 'hover:bg-orange-500/10',
            active: 'active:bg-orange-500/30',
          },
          amber: {
            color: 'text-amber-500',
            hover: 'hover:bg-amber-500/10',
            active: 'active:bg-amber-500/30',
          },
          yellow: {
            color: 'text-yellow-500',
            hover: 'hover:bg-yellow-500/10',
            active: 'active:bg-yellow-500/30',
          },
          lime: {
            color: 'text-lime-500',
            hover: 'hover:bg-lime-500/10',
            active: 'active:bg-lime-500/30',
          },
          'light-green': {
            color: 'text-light-green-500',
            hover: 'hover:bg-light-green-500/10',
            active: 'active:bg-light-green-500/30',
          },
          green: {
            color: 'text-green-500',
            hover: 'hover:bg-green-500/10',
            active: 'active:bg-green-500/30',
          },
          teal: {
            color: 'text-teal-500',
            hover: 'hover:bg-teal-500/10',
            active: 'active:bg-teal-500/30',
          },
          cyan: {
            color: 'text-cyan-500',
            hover: 'hover:bg-cyan-500/10',
            active: 'active:bg-cyan-500/30',
          },
          'light-blue': {
            color: 'text-light-blue-500',
            hover: 'hover:bg-light-blue-500/10',
            active: 'active:bg-light-blue-500/30',
          },
          blue: {
            color: 'text-blue-500',
            hover: 'hover:bg-blue-500/10',
            active: 'active:bg-blue-500/30',
          },
          indigo: {
            color: 'text-indigo-500',
            hover: 'hover:bg-indigo-500/10',
            active: 'active:bg-indigo-500/30',
          },
          'deep-purple': {
            color: 'text-deep-purple-500',
            hover: 'hover:bg-deep-purple-500/10',
            active: 'active:bg-deep-purple-500/30',
          },
          purple: {
            color: 'text-purple-500',
            hover: 'hover:bg-purple-500/10',
            active: 'active:bg-purple-500/30',
          },
          pink: {
            color: 'text-pink-500',
            hover: 'hover:bg-pink-500/10',
            active: 'active:bg-pink-500/30',
          },
          red: {
            color: 'text-red-500',
            hover: 'hover:bg-red-500/10',
            active: 'active:bg-red-500/30',
          },
        },
      },
    },
  },
  card: {
    defaultProps: {
      variant: 'filled',
      color: 'white',
      shadow: true,
      className: '',
    },
    valid: {
      variants: ['filled', 'gradient'],
      colors: [
        'transparent',
        'white',
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
    },
    styles: {
      base: {
        initial: {
          position: 'relative',
          display: 'flex',
          flexDirection: 'flex-col',
          backgroundClip: 'bg-clip-border',
          borderRadius: 'rounded-xl',
        },
        shadow: {
          boxShadow: 'shadow-md',
        },
      },
      variants: {
        filled: {
          transparent: {
            backgroud: 'bg-transparent',
            color: 'text-gray-700',
            shadow: 'shadow-none',
          },
          white: {
            backgroud: 'bg-white',
            color: 'text-gray-700',
          },
          'blue-gray': {
            backgroud: 'bg-blue-gray-500',
            color: 'text-white',
            shadow: 'shadow-blue-gray-500/40',
          },
          gray: {
            backgroud: 'bg-gray-900',
            color: 'text-white',
            shadow: 'shadow-gray-900/20',
          },
          brown: {
            backgroud: 'bg-brown-500',
            color: 'text-white',
            shadow: 'shadow-brown-500/40',
          },
          'deep-orange': {
            backgroud: 'bg-deep-orange-500',
            color: 'text-white',
            shadow: 'shadow-deep-orange-500/40',
          },
          orange: {
            backgroud: 'bg-orange-500',
            color: 'text-white',
            shadow: 'shadow-orange-500/40',
          },
          amber: {
            backgroud: 'bg-amber-500',
            color: 'text-gray-700',
            shadow: 'shadow-amber-500/40',
          },
          yellow: {
            backgroud: 'bg-yellow-500',
            color: 'text-gray-700',
            shadow: 'shadow-yellow-500/40',
          },
          lime: {
            backgroud: 'bg-lime-500',
            color: 'text-gray-700',
            shadow: 'shadow-lime-500/40',
          },
          'light-green': {
            backgroud: 'bg-light-green-500',
            color: 'text-white',
            shadow: 'shadow-light-green-500/40',
          },
          green: {
            backgroud: 'bg-green-500',
            color: 'text-white',
            shadow: 'shadow-green-500/40',
          },
          teal: {
            backgroud: 'bg-teal-500',
            color: 'text-white',
            shadow: 'shadow-teal-500/40',
          },
          cyan: {
            backgroud: 'bg-cyan-500',
            color: 'text-white',
            shadow: 'shadow-cyan-500/40',
          },
          'light-blue': {
            backgroud: 'bg-light-blue-500',
            color: 'text-white',
            shadow: 'shadow-light-blue-500/40',
          },
          blue: {
            backgroud: 'bg-blue-500',
            color: 'text-white',
            shadow: 'shadow-blue-500/40',
          },
          indigo: {
            backgroud: 'bg-indigo-500',
            color: 'text-white',
            shadow: 'shadow-indigo-500/40',
          },
          'deep-purple': {
            backgroud: 'bg-deep-purple-500',
            color: 'text-white',
            shadow: 'shadow-deep-purple-500/40',
          },
          purple: {
            backgroud: 'bg-purple-500',
            color: 'text-white',
            shadow: 'shadow-purple-500/40',
          },
          pink: {
            backgroud: 'bg-pink-500',
            color: 'text-white',
            shadow: 'shadow-pink-500/40',
          },
          red: {
            backgroud: 'bg-red-500',
            color: 'text-white',
            shadow: 'shadow-red-500/40',
          },
        },
        gradient: {
          transparent: {
            backgroud: 'bg-transparent',
            color: 'text-gray-700',
            shadow: 'shadow-none',
          },
          white: {
            backgroud: 'bg-white',
            color: 'text-gray-700',
          },
          'blue-gray': {
            backgroud: 'bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400',
            color: 'text-white',
            shadow: 'shadow-blue-gray-500/40',
          },
          gray: {
            backgroud: 'bg-gradient-to-tr from-gray-900 to-gray-800',
            color: 'text-white',
            shadow: 'shadow-gray-900/20',
          },
          brown: {
            backgroud: 'bg-gradient-to-tr from-brown-600 to-brown-400',
            color: 'text-white',
            shadow: 'shadow-brown-500/40',
          },
          'deep-orange': {
            backgroud: 'bg-gradient-to-tr from-deep-orange-600 to-deep-orange-400',
            color: 'text-white',
            shadow: 'shadow-deep-orange-500/40',
          },
          orange: {
            backgroud: 'bg-gradient-to-tr from-orange-600 to-orange-400',
            color: 'text-white',
            shadow: 'shadow-orange-500/40',
          },
          amber: {
            backgroud: 'bg-gradient-to-tr from-amber-600 to-amber-400',
            color: 'text-gray-700',
            shadow: 'shadow-amber-500/40',
          },
          yellow: {
            backgroud: 'bg-gradient-to-tr from-yellow-600 to-yellow-400',
            color: 'text-gray-700',
            shadow: 'shadow-yellow-500/40',
          },
          lime: {
            backgroud: 'bg-gradient-to-tr from-lime-600 to-lime-400',
            color: 'text-gray-700',
            shadow: 'shadow-lime-500/40',
          },
          'light-green': {
            backgroud: 'bg-gradient-to-tr from-light-green-600 to-light-green-400',
            color: 'text-white',
            shadow: 'shadow-light-green-500/40',
          },
          green: {
            backgroud: 'bg-gradient-to-tr from-green-600 to-green-400',
            color: 'text-white',
            shadow: 'shadow-green-500/40',
          },
          teal: {
            backgroud: 'bg-gradient-to-tr from-teal-600 to-teal-400',
            color: 'text-white',
            shadow: 'shadow-teal-500/40',
          },
          cyan: {
            backgroud: 'bg-gradient-to-tr from-cyan-600 to-cyan-400',
            color: 'text-white',
            shadow: 'shadow-cyan-500/40',
          },
          'light-blue': {
            backgroud: 'bg-gradient-to-tr from-light-blue-600 to-light-blue-400',
            color: 'text-white',
            shadow: 'shadow-light-blue-500/40',
          },
          blue: {
            backgroud: 'bg-gradient-to-tr from-blue-600 to-blue-400',
            color: 'text-white',
            shadow: 'shadow-blue-500/40',
          },
          indigo: {
            backgroud: 'bg-gradient-to-tr from-indigo-600 to-indigo-400',
            color: 'text-white',
            shadow: 'shadow-indigo-500/40',
          },
          'deep-purple': {
            backgroud: 'bg-gradient-to-tr from-deep-purple-600 to-deep-purple-400',
            color: 'text-white',
            shadow: 'shadow-deep-purple-500/40',
          },
          purple: {
            backgroud: 'bg-gradient-to-tr from-purple-600 to-purple-400',
            color: 'text-white',
            shadow: 'shadow-purple-500/40',
          },
          pink: {
            backgroud: 'bg-gradient-to-tr from-pink-600 to-pink-400',
            color: 'text-white',
            shadow: 'shadow-pink-500/40',
          },
          red: {
            backgroud: 'bg-gradient-to-tr from-red-600 to-red-400',
            color: 'text-white',
            shadow: 'shadow-red-500/40',
          },
        },
      },
    },
  },
  cardBody: {
    defaultProps: {
      className: '',
    },
    styles: {
      base: {
        p: 'p-6',
      },
    },
  },
  cardFooter: {
    defaultProps: {
      className: '',
    },
    styles: {
      base: {
        initial: {
          p: 'p-6',
        },
        divider: {
          borderWidth: 'border-t',
          borderColor: 'border-blue-gray-50',
        },
      },
    },
  },
  cardHeader: {
    defaultProps: {
      variant: 'filled',
      color: 'white',
      shadow: true,
      floated: true,
      className: '',
    },
    valid: {
      variants: ['filled', 'gradient'],
      colors: [
        'transparent',
        'white',
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
    },
    styles: {
      base: {
        initial: {
          position: 'relative',
          backgroundClip: 'bg-clip-border',
          mt: 'mt-4',
          mx: 'mx-4',
          borderRadius: 'rounded-xl',
          overflow: 'overflow-hidden',
        },
        shadow: {
          boxShadow: 'shadow-lg',
        },
        floated: {
          mt: '-mt-6',
        },
      },
      variants: {
        filled: {
          transparent: {
            backgroud: 'bg-transparent',
            color: 'text-gray-700',
            shadow: 'shadow-none',
          },
          white: {
            backgroud: 'bg-white',
            color: 'text-gray-700',
          },
          'blue-gray': {
            backgroud: 'bg-blue-gray-500',
            color: 'text-white',
            shadow: 'shadow-blue-gray-500/40',
          },
          gray: {
            backgroud: 'bg-gray-900',
            color: 'text-white',
            shadow: 'shadow-gray-900/20',
          },
          brown: {
            backgroud: 'bg-brown-500',
            color: 'text-white',
            shadow: 'shadow-brown-500/40',
          },
          'deep-orange': {
            backgroud: 'bg-deep-orange-500',
            color: 'text-white',
            shadow: 'shadow-deep-orange-500/40',
          },
          orange: {
            backgroud: 'bg-orange-500',
            color: 'text-white',
            shadow: 'shadow-orange-500/40',
          },
          amber: {
            backgroud: 'bg-amber-500',
            color: 'text-gray-700',
            shadow: 'shadow-amber-500/40',
          },
          yellow: {
            backgroud: 'bg-yellow-500',
            color: 'text-gray-700',
            shadow: 'shadow-yellow-500/40',
          },
          lime: {
            backgroud: 'bg-lime-500',
            color: 'text-gray-700',
            shadow: 'shadow-lime-500/40',
          },
          'light-green': {
            backgroud: 'bg-light-green-500',
            color: 'text-white',
            shadow: 'shadow-light-green-500/40',
          },
          green: {
            backgroud: 'bg-green-500',
            color: 'text-white',
            shadow: 'shadow-green-500/40',
          },
          teal: {
            backgroud: 'bg-teal-500',
            color: 'text-white',
            shadow: 'shadow-teal-500/40',
          },
          cyan: {
            backgroud: 'bg-cyan-500',
            color: 'text-white',
            shadow: 'shadow-cyan-500/40',
          },
          'light-blue': {
            backgroud: 'bg-light-blue-500',
            color: 'text-white',
            shadow: 'shadow-light-blue-500/40',
          },
          blue: {
            backgroud: 'bg-blue-500',
            color: 'text-white',
            shadow: 'shadow-blue-500/40',
          },
          indigo: {
            backgroud: 'bg-indigo-500',
            color: 'text-white',
            shadow: 'shadow-indigo-500/40',
          },
          'deep-purple': {
            backgroud: 'bg-deep-purple-500',
            color: 'text-white',
            shadow: 'shadow-deep-purple-500/40',
          },
          purple: {
            backgroud: 'bg-purple-500',
            color: 'text-white',
            shadow: 'shadow-purple-500/40',
          },
          pink: {
            backgroud: 'bg-pink-500',
            color: 'text-white',
            shadow: 'shadow-pink-500/40',
          },
          red: {
            backgroud: 'bg-red-500',
            color: 'text-white',
            shadow: 'shadow-red-500/40',
          },
        },
        gradient: {
          transparent: {
            backgroud: 'bg-transparent',
            color: 'text-gray-700',
            shadow: 'shadow-none',
          },
          white: {
            backgroud: 'bg-white',
            color: 'text-gray-700',
          },
          'blue-gray': {
            backgroud: 'bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400',
            color: 'text-white',
            shadow: 'shadow-blue-gray-500/40',
          },
          gray: {
            backgroud: 'bg-gradient-to-tr from-gray-900 to-gray-800',
            color: 'text-white',
            shadow: 'shadow-gray-900/20',
          },
          brown: {
            backgroud: 'bg-gradient-to-tr from-brown-600 to-brown-400',
            color: 'text-white',
            shadow: 'shadow-brown-500/40',
          },
          'deep-orange': {
            backgroud: 'bg-gradient-to-tr from-deep-orange-600 to-deep-orange-400',
            color: 'text-white',
            shadow: 'shadow-deep-orange-500/40',
          },
          orange: {
            backgroud: 'bg-gradient-to-tr from-orange-600 to-orange-400',
            color: 'text-white',
            shadow: 'shadow-orange-500/40',
          },
          amber: {
            backgroud: 'bg-gradient-to-tr from-amber-600 to-amber-400',
            color: 'text-gray-700',
            shadow: 'shadow-amber-500/40',
          },
          yellow: {
            backgroud: 'bg-gradient-to-tr from-yellow-600 to-yellow-400',
            color: 'text-gray-700',
            shadow: 'shadow-yellow-500/40',
          },
          lime: {
            backgroud: 'bg-gradient-to-tr from-lime-600 to-lime-400',
            color: 'text-gray-700',
            shadow: 'shadow-lime-500/40',
          },
          'light-green': {
            backgroud: 'bg-gradient-to-tr from-light-green-600 to-light-green-400',
            color: 'text-white',
            shadow: 'shadow-light-green-500/40',
          },
          green: {
            backgroud: 'bg-gradient-to-tr from-green-600 to-green-400',
            color: 'text-white',
            shadow: 'shadow-green-500/40',
          },
          teal: {
            backgroud: 'bg-gradient-to-tr from-teal-600 to-teal-400',
            color: 'text-white',
            shadow: 'shadow-teal-500/40',
          },
          cyan: {
            backgroud: 'bg-gradient-to-tr from-cyan-600 to-cyan-400',
            color: 'text-white',
            shadow: 'shadow-cyan-500/40',
          },
          'light-blue': {
            backgroud: 'bg-gradient-to-tr from-light-blue-600 to-light-blue-400',
            color: 'text-white',
            shadow: 'shadow-light-blue-500/40',
          },
          blue: {
            backgroud: 'bg-gradient-to-tr from-blue-600 to-blue-400',
            color: 'text-white',
            shadow: 'shadow-blue-500/40',
          },
          indigo: {
            backgroud: 'bg-gradient-to-tr from-indigo-600 to-indigo-400',
            color: 'text-white',
            shadow: 'shadow-indigo-500/40',
          },
          'deep-purple': {
            backgroud: 'bg-gradient-to-tr from-deep-purple-600 to-deep-purple-400',
            color: 'text-white',
            shadow: 'shadow-deep-purple-500/40',
          },
          purple: {
            backgroud: 'bg-gradient-to-tr from-purple-600 to-purple-400',
            color: 'text-white',
            shadow: 'shadow-purple-500/40',
          },
          pink: {
            backgroud: 'bg-gradient-to-tr from-pink-600 to-pink-400',
            color: 'text-white',
            shadow: 'shadow-pink-500/40',
          },
          red: {
            backgroud: 'bg-gradient-to-tr from-red-600 to-red-400',
            color: 'text-white',
            shadow: 'shadow-red-500/40',
          },
        },
      },
    },
  },
  checkbox: {
    defaultProps: {
      color: 'gray',
      ripple: true,
      className: '',
      disabled: false,
    },
    valid: {
      colors: [
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
    },
    styles: {
      base: {
        root: {
          display: 'inline-flex',
          alignItems: 'items-center',
        },
        container: {
          position: 'relative',
          display: 'flex',
          alignItems: 'items-center',
          cursor: 'cursor-pointer',
          p: 'p-3',
          borderRadius: 'rounded-full',
        },
        input: {
          peer: 'peer',
          position: 'relative',
          appearance: 'appearance-none',
          width: 'w-5',
          height: 'h-5',
          borderWidth: 'border',
          borderRadius: 'rounded-md',
          borderColor: 'border-blue-gray-200',
          cursor: 'cursor-pointer',
          transition: 'transition-all',
          before: {
            content: "before:content['']",
            display: 'before:block',
            bg: 'before:bg-blue-gray-500',
            width: 'before:w-12',
            height: 'before:h-12',
            borderRadius: 'before:rounded-full',
            position: 'before:absolute',
            top: 'before:top-2/4',
            left: 'before:left-2/4',
            transform: 'before:-translate-y-2/4 before:-translate-x-2/4',
            opacity: 'before:opacity-0 hover:before:opacity-10',
            transition: 'before:transition-opacity',
          },
        },
        label: {
          color: 'text-gray-700',
          fontWeight: 'font-light',
          userSelect: 'select-none',
          cursor: 'cursor-pointer',
          mt: 'mt-px',
        },
        icon: {
          color: 'text-white',
          position: 'absolute',
          top: 'top-2/4',
          left: 'left-2/4',
          translate: '-translate-y-2/4 -translate-x-2/4',
          pointerEvents: 'pointer-events-none',
          opacity: 'opacity-0 peer-checked:opacity-100',
          transition: 'transition-opacity',
        },
        disabled: {
          opacity: 'opacity-50',
          pointerEvents: 'pointer-events-none',
        },
      },
      colors: {
        'blue-gray': {
          background: 'checked:bg-blue-gray-500',
          border: 'checked:border-blue-gray-500',
          before: 'checked:before:bg-blue-gray-500',
        },
        gray: {
          background: 'checked:bg-gray-900',
          border: 'checked:border-gray-900',
          before: 'checked:before:bg-gray-900',
        },
        brown: {
          background: 'checked:bg-brown-500',
          border: 'checked:border-brown-500',
          before: 'checked:before:bg-brown-500',
        },
        'deep-orange': {
          background: 'checked:bg-deep-orange-500',
          border: 'checked:border-deep-orange-500',
          before: 'checked:before:bg-deep-orange-500',
        },
        orange: {
          background: 'checked:bg-orange-500',
          border: 'checked:border-orange-500',
          before: 'checked:before:bg-orange-500',
        },
        amber: {
          background: 'checked:bg-amber-500',
          border: 'checked:border-amber-500',
          before: 'checked:before:bg-amber-500',
        },
        yellow: {
          background: 'checked:bg-yellow-500',
          border: 'checked:border-yellow-500',
          before: 'checked:before:bg-yellow-500',
        },
        lime: {
          background: 'checked:bg-lime-500',
          border: 'checked:border-lime-500',
          before: 'checked:before:bg-lime-500',
        },
        'light-green': {
          background: 'checked:bg-light-green-500',
          border: 'checked:border-light-green-500',
          before: 'checked:before:bg-light-green-500',
        },
        green: {
          background: 'checked:bg-green-500',
          border: 'checked:border-green-500',
          before: 'checked:before:bg-green-500',
        },
        teal: {
          background: 'checked:bg-teal-500',
          border: 'checked:border-teal-500',
          before: 'checked:before:bg-teal-500',
        },
        cyan: {
          background: 'checked:bg-cyan-500',
          border: 'checked:border-cyan-500',
          before: 'checked:before:bg-cyan-500',
        },
        'light-blue': {
          background: 'checked:bg-light-blue-500',
          border: 'checked:border-light-blue-500',
          before: 'checked:before:bg-light-blue-500',
        },
        blue: {
          background: 'checked:bg-blue-500',
          border: 'checked:border-blue-500',
          before: 'checked:before:bg-blue-500',
        },
        indigo: {
          background: 'checked:bg-indigo-500',
          border: 'checked:border-indigo-500',
          before: 'checked:before:bg-indigo-500',
        },
        'deep-purple': {
          background: 'checked:bg-deep-purple-500',
          border: 'checked:border-deep-purple-500',
          before: 'checked:before:bg-deep-purple-500',
        },
        purple: {
          background: 'checked:bg-purple-500',
          border: 'checked:border-purple-500',
          before: 'checked:before:bg-purple-500',
        },
        pink: {
          background: 'checked:bg-pink-500',
          border: 'checked:border-pink-500',
          before: 'checked:before:bg-pink-500',
        },
        red: {
          background: 'checked:bg-red-500',
          border: 'checked:border-red-500',
          before: 'checked:before:bg-red-500',
        },
      },
    },
  },
  chip: {
    defaultProps: {
      variant: 'filled',
      size: 'md',
      color: 'gray',
      open: true,
      animate: {
        unmount: {},
        mount: {},
      },
      className: '',
    },
    valid: {
      variants: ['filled', 'gradient', 'outlined', 'ghost'],
      sizes: ['sm', 'md', 'lg'],
      colors: [
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
    },
    styles: {
      base: {
        chip: {
          position: 'relative',
          display: 'grid',
          placeItems: 'items-center',
          fontFamily: 'font-sans',
          fontWeight: 'font-bold',
          textTransform: 'uppercase',
          lineHeight: 'leading-none',
          whiteSpace: 'whitespace-nowrap',
          userSelect: 'select-none',
        },
        action: {
          position: '!absolute',
          top: 'top-2/4',
          right: 'right-1',
          translate: '-translate-y-2/4',
          mx: 'mx-px',
          rounded: 'rounded-md',
        },
        icon: {
          position: 'absolute',
          top: 'top-2/4',
          translate: '-translate-y-2/4',
        },
      },
      sizes: {
        sm: {
          chip: {
            py: 'py-1',
            px: 'px-2',
            fontSize: 'text-xs',
            borderRadius: 'rounded-md',
          },
          action: {
            width: 'w-4',
            height: 'h-4',
          },
          icon: {
            width: 'w-4',
            height: 'h-4',
            left: 'left-1',
          },
        },
        md: {
          chip: {
            py: 'py-1.5',
            px: 'px-3',
            fontSize: 'text-xs',
            borderRadius: 'rounded-lg',
          },
          action: {
            width: 'w-5',
            height: 'h-5',
          },
          icon: {
            width: 'w-5',
            height: 'h-5',
            left: 'left-1.5',
          },
        },
        lg: {
          chip: {
            py: 'py-2',
            px: 'px-4',
            fontSize: 'text-xs',
            borderRadius: 'rounded-lg',
          },
          action: {
            width: 'w-6',
            height: 'h-6',
          },
          icon: {
            width: 'w-6',
            height: 'h-6',
            left: 'left-1.5',
          },
        },
      },
      variants: {
        filled: {
          'blue-gray': {
            backgroud: 'bg-blue-gray-500',
            color: 'text-white',
          },
          gray: {
            backgroud: 'bg-gray-900',
            color: 'text-white',
          },
          brown: {
            backgroud: 'bg-brown-500',
            color: 'text-white',
          },
          'deep-orange': {
            backgroud: 'bg-deep-orange-500',
            color: 'text-white',
          },
          orange: {
            backgroud: 'bg-orange-500',
            color: 'text-white',
          },
          amber: {
            backgroud: 'bg-amber-500',
            color: 'text-black',
          },
          yellow: {
            backgroud: 'bg-yellow-500',
            color: 'text-black',
          },
          lime: {
            backgroud: 'bg-lime-500',
            color: 'text-black',
          },
          'light-green': {
            backgroud: 'bg-light-green-500',
            color: 'text-white',
          },
          green: {
            backgroud: 'bg-green-500',
            color: 'text-white',
          },
          teal: {
            backgroud: 'bg-teal-500',
            color: 'text-white',
          },
          cyan: {
            backgroud: 'bg-cyan-500',
            color: 'text-white',
          },
          'light-blue': {
            backgroud: 'bg-light-blue-500',
            color: 'text-white',
          },
          blue: {
            backgroud: 'bg-blue-500',
            color: 'text-white',
          },
          indigo: {
            backgroud: 'bg-indigo-500',
            color: 'text-white',
          },
          'deep-purple': {
            backgroud: 'bg-deep-purple-500',
            color: 'text-white',
          },
          purple: {
            backgroud: 'bg-purple-500',
            color: 'text-white',
          },
          pink: {
            backgroud: 'bg-pink-500',
            color: 'text-white',
          },
          red: {
            backgroud: 'bg-red-500',
            color: 'text-white',
          },
        },
        gradient: {
          'blue-gray': {
            backgroud: 'bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400',
            color: 'text-white',
          },
          gray: {
            backgroud: 'bg-gradient-to-tr from-gray-900 to-gray-800',
            color: 'text-white',
          },
          brown: {
            backgroud: 'bg-gradient-to-tr from-brown-600 to-brown-400',
            color: 'text-white',
          },
          'deep-orange': {
            backgroud: 'bg-gradient-to-tr from-deep-orange-600 to-deep-orange-400',
            color: 'text-white',
          },
          orange: {
            backgroud: 'bg-gradient-to-tr from-orange-600 to-orange-400',
            color: 'text-white',
          },
          amber: {
            backgroud: 'bg-gradient-to-tr from-amber-600 to-amber-400',
            color: 'text-black',
          },
          yellow: {
            backgroud: 'bg-gradient-to-tr from-yellow-600 to-yellow-400',
            color: 'text-black',
          },
          lime: {
            backgroud: 'bg-gradient-to-tr from-lime-600 to-lime-400',
            color: 'text-black',
          },
          'light-green': {
            backgroud: 'bg-gradient-to-tr from-light-green-600 to-light-green-400',
            color: 'text-white',
          },
          green: {
            backgroud: 'bg-gradient-to-tr from-green-600 to-green-400',
            color: 'text-white',
          },
          teal: {
            backgroud: 'bg-gradient-to-tr from-teal-600 to-teal-400',
            color: 'text-white',
          },
          cyan: {
            backgroud: 'bg-gradient-to-tr from-cyan-600 to-cyan-400',
            color: 'text-white',
          },
          'light-blue': {
            backgroud: 'bg-gradient-to-tr from-light-blue-600 to-light-blue-400',
            color: 'text-white',
          },
          blue: {
            backgroud: 'bg-gradient-to-tr from-blue-600 to-blue-400',
            color: 'text-white',
          },
          indigo: {
            backgroud: 'bg-gradient-to-tr from-indigo-600 to-indigo-400',
            color: 'text-white',
          },
          'deep-purple': {
            backgroud: 'bg-gradient-to-tr from-deep-purple-600 to-deep-purple-400',
            color: 'text-white',
          },
          purple: {
            backgroud: 'bg-gradient-to-tr from-purple-600 to-purple-400',
            color: 'text-white',
          },
          pink: {
            backgroud: 'bg-gradient-to-tr from-pink-600 to-pink-400',
            color: 'text-white',
          },
          red: {
            backgroud: 'bg-gradient-to-tr from-red-600 to-red-400',
            color: 'text-white',
          },
        },
        outlined: {
          'blue-gray': {
            border: 'border border-blue-gray-500',
            color: 'text-blue-gray-700',
          },
          gray: {
            border: 'border border-gray-900',
            color: 'text-gray-700',
          },
          brown: {
            border: 'border border-brown-500',
            color: 'text-brown-700',
          },
          'deep-orange': {
            border: 'border border-deep-orange-500',
            color: 'text-deep-orange-700',
          },
          orange: {
            border: 'border border-orange-500',
            color: 'text-orange-700',
          },
          amber: {
            border: 'border border-amber-500',
            color: 'text-amber-700',
          },
          yellow: {
            border: 'border border-yellow-500',
            color: 'text-yellow-700',
          },
          lime: {
            border: 'border border-lime-500',
            color: 'text-lime-700',
          },
          'light-green': {
            border: 'border border-light-green-500',
            color: 'text-light-green-700',
          },
          green: {
            border: 'border border-green-500',
            color: 'text-green-700',
          },
          teal: {
            border: 'border border-teal-500',
            color: 'text-teal-700',
          },
          cyan: {
            border: 'border border-cyan-500',
            color: 'text-cyan-700',
          },
          'light-blue': {
            border: 'border border-light-blue-500',
            color: 'text-light-blue-700',
          },
          blue: {
            border: 'border border-blue-500',
            color: 'text-blue-700',
          },
          indigo: {
            border: 'border border-indigo-500',
            color: 'text-indigo-700',
          },
          'deep-purple': {
            border: 'border border-deep-purple-500',
            color: 'text-deep-purple-700',
          },
          purple: {
            border: 'border border-purple-500',
            color: 'text-purple-700',
          },
          pink: {
            border: 'border border-pink-500',
            color: 'text-pink-700',
          },
          red: {
            border: 'border border-red-500',
            color: 'text-red-700',
          },
        },
        ghost: {
          'blue-gray': {
            backgroud: 'bg-blue-gray-500/20',
            color: 'text-blue-gray-900',
          },
          gray: {
            backgroud: 'bg-gray-900/10',
            color: 'text-gray-900',
          },
          brown: {
            backgroud: 'bg-brown-500/20',
            color: 'text-brown-900',
          },
          'deep-orange': {
            backgroud: 'bg-deep-orange-500/20',
            color: 'text-deep-orange-900',
          },
          orange: {
            backgroud: 'bg-orange-500/20',
            color: 'text-orange-900',
          },
          amber: {
            backgroud: 'bg-amber-500/20',
            color: 'text-amber-900',
          },
          yellow: {
            backgroud: 'bg-yellow-500/20',
            color: 'text-yellow-900',
          },
          lime: {
            backgroud: 'bg-lime-500/20',
            color: 'text-lime-900',
          },
          'light-green': {
            backgroud: 'bg-light-green-500/20',
            color: 'text-light-green-900',
          },
          green: {
            backgroud: 'bg-green-500/20',
            color: 'text-green-900',
          },
          teal: {
            backgroud: 'bg-teal-500/20',
            color: 'text-teal-900',
          },
          cyan: {
            backgroud: 'bg-cyan-500/20',
            color: 'text-cyan-900',
          },
          'light-blue': {
            backgroud: 'bg-light-blue-500/20',
            color: 'text-light-blue-900',
          },
          blue: {
            backgroud: 'bg-blue-500/20',
            color: 'text-blue-900',
          },
          indigo: {
            backgroud: 'bg-indigo-500/20',
            color: 'text-indigo-900',
          },
          'deep-purple': {
            backgroud: 'bg-deep-purple-500/20',
            color: 'text-deep-purple-900',
          },
          purple: {
            backgroud: 'bg-purple-500/20',
            color: 'text-purple-900',
          },
          pink: {
            backgroud: 'bg-pink-500/20',
            color: 'text-pink-900',
          },
          red: {
            backgroud: 'bg-red-500/20',
            color: 'text-red-900',
          },
        },
      },
    },
  },
  dialog: {
    defaultProps: {
      size: 'md',
      dismiss: {},
      animate: {
        unmount: {},
        mount: {},
      },
      className: '',
    },
    valid: {
      sizes: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    styles: {
      base: {
        backdrop: {
          display: 'grid',
          placeItems: 'place-items-center',
          position: 'fixed',
          top: 0,
          left: 0,
          width: 'w-screen',
          height: 'h-screen',
          backgroundColor: 'bg-black',
          backgroundOpacity: 'bg-opacity-60',
          backdropFilter: 'backdrop-blur-sm',
        },
        container: {
          position: 'relative',
          bg: 'bg-white',
          m: 'm-4',
          borderRadius: 'rounded-lg',
          boxShadow: 'shadow-2xl',
          color: 'text-blue-gray-500',
          fontSmoothing: 'antialiased',
          fontFamily: 'font-sans',
          fontSize: 'text-base',
          fontWeight: 'font-light',
          lineHeight: 'leading-relaxed',
        },
      },
      sizes: {
        xs: {
          width: 'w-full md:w-3/5 lg:w-2/5 2xl:w-1/4',
          minWidth: 'min-w-[80%] md:min-w-[60%] lg:min-w-[40%] 2xl:min-w-[25%]',
          maxWidth: 'max-w-[80%] md:max-w-[60%] lg:max-w-[40%] 2xl:max-w-[25%]',
        },
        sm: {
          width: 'w-full md:w-2/3 lg:w-2/4 2xl:w-1/3',
          minWidth: 'min-w-[80%] md:min-w-[66.666667%] lg:min-w-[50%] 2xl:min-w-[33.333333%]',
          maxWidth: 'max-w-[80%] md:max-w-[66.666667%] lg:max-w-[50%] 2xl:max-w-[33.333333%]',
        },
        md: {
          width: 'w-full md:w-3/4 lg:w-3/5 2xl:w-2/5',
          minWidth: 'min-w-[90%] md:min-w-[75%] lg:min-w-[60%] 2xl:min-w-[40%]',
          maxWidth: 'max-w-[90%] md:max-w-[75%] lg:max-w-[60%] 2xl:max-w-[40%]',
        },
        lg: {
          width: 'w-full md:w-5/6 lg:w-3/4 2xl:w-3/5',
          minWidth: 'min-w-[90%] md:min-w-[83.333333%] lg:min-w-[75%] 2xl:min-w-[60%]',
          maxWidth: 'max-w-[90%] md:max-w-[83.333333%] lg:max-w-[75%] 2xl:max-w-[60%]',
        },
        xl: {
          width: 'w-full md:w-5/6 2xl:w-3/4',
          minWidth: 'min-w-[95%] md:min-w-[83.333333%] 2xl:min-w-[75%]',
          maxWidth: 'max-w-[95%] md:max-w-[83.333333%] 2xl:max-w-[75%]',
        },
        xxl: {
          display: 'flex',
          flexDirection: 'flex-col',
          width: 'w-screen',
          minWidth: 'min-w-[100vw]',
          maxWidth: 'max-w-[100vw]',
          height: 'h-screen',
          minHeight: 'min-h-[100vh]',
          maxHeight: 'max-h-[100vh]',
          m: 'm-0',
          borderRadius: 'rounded-none',
        },
      },
    },
  },
  dialogBody: {
    defaultProps: {
      className: '',
      divider: false,
    },
    styles: {
      base: {
        initial: {
          position: 'relative',
          p: 'p-4',
          color: 'text-blue-gray-500',
          fontSmoothing: 'antialiased',
          fontFamily: 'font-sans',
          fontSize: 'text-base',
          fontWeight: 'font-light',
          lineHeight: 'leading-relaxed',
        },
        divider: {
          borderTop: 'border-t',
          borderTopColor: 'border-t-blue-gray-100',
          borderBottom: 'border-b',
          borderBottomColor: 'border-b-blue-gray-100',
        },
      },
    },
  },
  dialogFooter: {
    defaultProps: {
      className: '',
    },
    styles: {
      base: {
        display: 'flex',
        alignItems: 'items-center',
        justifyContent: 'justify-end',
        flexShrink: 'shrink-0',
        flexWrap: 'flex-wrap',
        p: 'p-4',
        color: 'text-blue-gray-500',
      },
    },
  },
  dialogHeader: {
    defaultProps: {
      className: '',
    },
    styles: {
      base: {
        display: 'flex',
        alignItems: 'items-center',
        flexShrink: 'shrink-0',
        p: 'p-4',
        color: 'text-blue-gray-900',
        fontSmoothing: 'antialiased',
        fontFamily: 'font-sans',
        fontSize: 'text-2xl',
        fontWeight: 'font-semibold',
        lineHeight: 'leading-snug',
      },
    },
  },
  iconButton: {
    defaultProps: {
      variant: 'filled',
      size: 'md',
      color: 'gray',
      fullWidth: false,
      ripple: true,
      className: '',
    },
    valid: {
      variants: ['filled', 'outlined', 'gradient', 'text'],
      sizes: ['sm', 'md', 'lg'],
      colors: [
        'white',
        'black',
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
    },
    styles: {
      base: {
        position: 'relative',
        verticalAlign: 'align-middle',
        userSelect: 'select-none',
        fontFamily: 'font-sans',
        fontWeight: 'font-medium',
        textAlign: 'text-center',
        textTransform: 'uppercase',
        transition: 'transition-all',
        disabled: 'disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none',
      },
      sizes: {
        sm: {
          width: 'w-8',
          maxWidth: 'max-w-[32px]',
          height: 'h-8',
          maxHeight: 'max-h-[32px]',
          borderRadius: 'rounded-lg',
          fontSize: 'text-xs',
        },
        md: {
          width: 'w-10',
          maxWidth: 'max-w-[40px]',
          height: 'h-10',
          maxHeight: 'max-h-[40px]',
          borderRadius: 'rounded-lg',
          fontSize: 'text-xs',
        },
        lg: {
          width: 'w-12',
          maxWidth: 'max-w-[48px]',
          height: 'h-12',
          maxHeight: 'max-h-[48px]',
          borderRadius: 'rounded-lg',
          fontSize: 'text-sm',
        },
      },
      variants: {
        filled: {
          white: {
            background: 'bg-white',
            color: 'text-blue-gray-900',
            shadow: 'shadow-md shadow-blue-gray-500/10',
            hover: 'hover:shadow-lg hover:shadow-blue-gray-500/20',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          black: {
            background: 'bg-gray-900',
            color: 'text-white',
            shadow: 'shadow-md shadow-gray-900/10',
            hover: 'hover:shadow-lg hover:shadow-gray-900/20',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          'blue-gray': {
            background: 'bg-blue-gray-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-blue-gray-500/20',
            hover: 'hover:shadow-lg hover:shadow-blue-gray-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          gray: {
            background: 'bg-gray-900',
            color: 'text-white',
            shadow: 'shadow-md shadow-gray-900/10',
            hover: 'hover:shadow-lg hover:shadow-gray-900/20',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          brown: {
            background: 'bg-brown-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-brown-500/20',
            hover: 'hover:shadow-lg hover:shadow-brown-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          'deep-orange': {
            background: 'bg-deep-orange-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-deep-orange-500/20',
            hover: 'hover:shadow-lg hover:shadow-deep-orange-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          orange: {
            background: 'bg-orange-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-orange-500/20',
            hover: 'hover:shadow-lg hover:shadow-orange-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          amber: {
            background: 'bg-amber-500',
            color: 'text-black',
            shadow: 'shadow-md shadow-amber-500/20',
            hover: 'hover:shadow-lg hover:shadow-amber-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          yellow: {
            background: 'bg-yellow-500',
            color: 'text-black',
            shadow: 'shadow-md shadow-yellow-500/20',
            hover: 'hover:shadow-lg hover:shadow-yellow-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          lime: {
            background: 'bg-lime-500',
            color: 'text-black',
            shadow: 'shadow-md shadow-lime-500/20',
            hover: 'hover:shadow-lg hover:shadow-lime-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          'light-green': {
            background: 'bg-light-green-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-light-green-500/20',
            hover: 'hover:shadow-lg hover:shadow-light-green-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          green: {
            background: 'bg-green-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-green-500/20',
            hover: 'hover:shadow-lg hover:shadow-green-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          teal: {
            background: 'bg-teal-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-teal-500/20',
            hover: 'hover:shadow-lg hover:shadow-teal-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          cyan: {
            background: 'bg-cyan-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-cyan-500/20',
            hover: 'hover:shadow-lg hover:shadow-cyan-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          'light-blue': {
            background: 'bg-light-blue-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-light-blue-500/20',
            hover: 'hover:shadow-lg hover:shadow-light-blue-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          blue: {
            background: 'bg-blue-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-blue-500/20',
            hover: 'hover:shadow-lg hover:shadow-blue-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          indigo: {
            background: 'bg-indigo-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-indigo-500/20',
            hover: 'hover:shadow-lg hover:shadow-indigo-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          'deep-purple': {
            background: 'bg-deep-purple-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-deep-purple-500/20',
            hover: 'hover:shadow-lg hover:shadow-deep-purple-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          purple: {
            background: 'bg-purple-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-purple-500/20',
            hover: 'hover:shadow-lg hover:shadow-purple-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          pink: {
            background: 'bg-pink-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-pink-500/20',
            hover: 'hover:shadow-lg hover:shadow-pink-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          red: {
            background: 'bg-red-500',
            color: 'text-white',
            shadow: 'shadow-md shadow-red-500/20',
            hover: 'hover:shadow-lg hover:shadow-red-500/40',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
        },
        gradient: {
          white: {
            background: 'bg-white',
            color: 'text-blue-gray-900',
            shadow: 'shadow-md shadow-blue-gray-500/10',
            hover: 'hover:shadow-lg hover:shadow-blue-gray-500/20',
            focus: 'focus:opacity-[0.85] focus:shadow-none',
            active: 'active:opacity-[0.85] active:shadow-none',
          },
          black: {
            background: 'bg-gradient-to-tr from-gray-900 to-gray-800',
            color: 'text-white',
            shadow: 'shadow-md shadow-gray-900/10',
            hover: 'hover:shadow-lg hover:shadow-gray-900/20',
            active: 'active:opacity-[0.85]',
          },
          'blue-gray': {
            background: 'bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-blue-gray-500/20',
            hover: 'hover:shadow-lg hover:shadow-blue-gray-500/40',
            active: 'active:opacity-[0.85]',
          },
          gray: {
            background: 'bg-gradient-to-tr from-gray-900 to-gray-800',
            color: 'text-white',
            shadow: 'shadow-md shadow-gray-900/10',
            hover: 'hover:shadow-lg hover:shadow-gray-900/20',
            active: 'active:opacity-[0.85]',
          },
          brown: {
            background: 'bg-gradient-to-tr from-brown-600 to-brown-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-brown-500/20',
            hover: 'hover:shadow-lg hover:shadow-brown-500/40',
            active: 'active:opacity-[0.85]',
          },
          'deep-orange': {
            background: 'bg-gradient-to-tr from-deep-orange-600 to-deep-orange-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-deep-orange-500/20',
            hover: 'hover:shadow-lg hover:shadow-deep-orange-500/40',
            active: 'active:opacity-[0.85]',
          },
          orange: {
            background: 'bg-gradient-to-tr from-orange-600 to-orange-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-orange-500/20',
            hover: 'hover:shadow-lg hover:shadow-orange-500/40',
            active: 'active:opacity-[0.85]',
          },
          amber: {
            background: 'bg-gradient-to-tr from-amber-600 to-amber-400',
            color: 'text-black',
            shadow: 'shadow-md shadow-amber-500/20',
            hover: 'hover:shadow-lg hover:shadow-amber-500/40',
            active: 'active:opacity-[0.85]',
          },
          yellow: {
            background: 'bg-gradient-to-tr from-yellow-600 to-yellow-400',
            color: 'text-black',
            shadow: 'shadow-md shadow-yellow-500/20',
            hover: 'hover:shadow-lg hover:shadow-yellow-500/40',
            active: 'active:opacity-[0.85]',
          },
          lime: {
            background: 'bg-gradient-to-tr from-lime-600 to-lime-400',
            color: 'text-black',
            shadow: 'shadow-md shadow-lime-500/20',
            hover: 'hover:shadow-lg hover:shadow-lime-500/40',
            active: 'active:opacity-[0.85]',
          },
          'light-green': {
            background: 'bg-gradient-to-tr from-light-green-600 to-light-green-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-light-green-500/20',
            hover: 'hover:shadow-lg hover:shadow-light-green-500/40',
            active: 'active:opacity-[0.85]',
          },
          green: {
            background: 'bg-gradient-to-tr from-green-600 to-green-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-green-500/20',
            hover: 'hover:shadow-lg hover:shadow-green-500/40',
            active: 'active:opacity-[0.85]',
          },
          teal: {
            background: 'bg-gradient-to-tr from-teal-600 to-teal-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-teal-500/20',
            hover: 'hover:shadow-lg hover:shadow-teal-500/40',
            active: 'active:opacity-[0.85]',
          },
          cyan: {
            background: 'bg-gradient-to-tr from-cyan-600 to-cyan-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-cyan-500/20',
            hover: 'hover:shadow-lg hover:shadow-cyan-500/40',
            active: 'active:opacity-[0.85]',
          },
          'light-blue': {
            background: 'bg-gradient-to-tr from-light-blue-600 to-light-blue-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-light-blue-500/20',
            hover: 'hover:shadow-lg hover:shadow-light-blue-500/40',
            active: 'active:opacity-[0.85]',
          },
          blue: {
            background: 'bg-gradient-to-tr from-blue-600 to-blue-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-blue-500/20',
            hover: 'hover:shadow-lg hover:shadow-blue-500/40',
            active: 'active:opacity-[0.85]',
          },
          indigo: {
            background: 'bg-gradient-to-tr from-indigo-600 to-indigo-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-indigo-500/20',
            hover: 'hover:shadow-lg hover:shadow-indigo-500/40',
            active: 'active:opacity-[0.85]',
          },
          'deep-purple': {
            background: 'bg-gradient-to-tr from-deep-purple-600 to-deep-purple-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-deep-purple-500/20',
            hover: 'hover:shadow-lg hover:shadow-deep-purple-500/40',
            active: 'active:opacity-[0.85]',
          },
          purple: {
            background: 'bg-gradient-to-tr from-purple-600 to-purple-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-purple-500/20',
            hover: 'hover:shadow-lg hover:shadow-purple-500/40',
            active: 'active:opacity-[0.85]',
          },
          pink: {
            background: 'bg-gradient-to-tr from-pink-600 to-pink-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-pink-500/20',
            hover: 'hover:shadow-lg hover:shadow-pink-500/40',
            active: 'active:opacity-[0.85]',
          },
          red: {
            background: 'bg-gradient-to-tr from-red-600 to-red-400',
            color: 'text-white',
            shadow: 'shadow-md shadow-red-500/20',
            hover: 'hover:shadow-lg hover:shadow-red-500/40',
            active: 'active:opacity-[0.85]',
          },
        },
        outlined: {
          white: {
            border: 'border border-white',
            color: 'text-white',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-white/50',
            active: 'active:opacity-[0.85]',
          },
          black: {
            border: 'border border-gray-900',
            color: 'text-gray-900',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-gray-300',
            active: 'active:opacity-[0.85]',
          },
          'blue-gray': {
            border: 'border border-blue-gray-500',
            color: 'text-blue-gray-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-blue-gray-200',
            active: 'active:opacity-[0.85]',
          },
          gray: {
            border: 'border border-gray-900',
            color: 'text-gray-900',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-gray-300',
            active: 'active:opacity-[0.85]',
          },
          brown: {
            border: 'border border-brown-500',
            color: 'text-brown-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-brown-200',
            active: 'active:opacity-[0.85]',
          },
          'deep-orange': {
            border: 'border border-deep-orange-500',
            color: 'text-deep-orange-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-deep-orange-200',
            active: 'active:opacity-[0.85]',
          },
          orange: {
            border: 'border border-orange-500',
            color: 'text-orange-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-orange-200',
            active: 'active:opacity-[0.85]',
          },
          amber: {
            border: 'border border-amber-500',
            color: 'text-amber-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-amber-200',
            active: 'active:opacity-[0.85]',
          },
          yellow: {
            border: 'border border-yellow-500',
            color: 'text-yellow-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-yellow-200',
            active: 'active:opacity-[0.85]',
          },
          lime: {
            border: 'border border-lime-500',
            color: 'text-lime-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-lime-200',
            active: 'active:opacity-[0.85]',
          },
          'light-green': {
            border: 'border border-light-green-500',
            color: 'text-light-green-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-light-green-200',
            active: 'active:opacity-[0.85]',
          },
          green: {
            border: 'border border-green-500',
            color: 'text-green-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-green-200',
            active: 'active:opacity-[0.85]',
          },
          teal: {
            border: 'border border-teal-500',
            color: 'text-teal-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-teal-200',
            active: 'active:opacity-[0.85]',
          },
          cyan: {
            border: 'border border-cyan-500',
            color: 'text-cyan-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-cyan-200',
            active: 'active:opacity-[0.85]',
          },
          'light-blue': {
            border: 'border border-light-blue-500',
            color: 'text-light-blue-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-light-blue-200',
            active: 'active:opacity-[0.85]',
          },
          blue: {
            border: 'border border-blue-500',
            color: 'text-blue-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-blue-200',
            active: 'active:opacity-[0.85]',
          },
          indigo: {
            border: 'border border-indigo-500',
            color: 'text-indigo-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-indigo-200',
            active: 'active:opacity-[0.85]',
          },
          'deep-purple': {
            border: 'border border-deep-purple-500',
            color: 'text-deep-purple-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-deep-purple-200',
            active: 'active:opacity-[0.85]',
          },
          purple: {
            border: 'border border-purple-500',
            color: 'text-purple-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-purple-200',
            active: 'active:opacity-[0.85]',
          },
          pink: {
            border: 'border border-pink-500',
            color: 'text-pink-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-pink-200',
            active: 'active:opacity-[0.85]',
          },
          red: {
            border: 'border border-red-500',
            color: 'text-red-500',
            hover: 'hover:opacity-75',
            focus: 'focus:ring focus:ring-red-200',
            active: 'active:opacity-[0.85]',
          },
        },
        text: {
          white: {
            color: 'text-white',
            hover: 'hover:bg-white/10',
            active: 'active:bg-white/30',
          },
          black: {
            color: 'text-gray-900',
            hover: 'hover:bg-gray-900/10',
            active: 'active:bg-gray-900/20',
          },
          'blue-gray': {
            color: 'text-blue-gray-500',
            hover: 'hover:bg-blue-gray-500/10',
            active: 'active:bg-blue-gray-500/30',
          },
          gray: {
            color: 'text-gray-900',
            hover: 'hover:bg-gray-900/10',
            active: 'active:bg-gray-900/20',
          },
          brown: {
            color: 'text-brown-500',
            hover: 'hover:bg-brown-500/10',
            active: 'active:bg-brown-500/30',
          },
          'deep-orange': {
            color: 'text-deep-orange-500',
            hover: 'hover:bg-deep-orange-500/10',
            active: 'active:bg-deep-orange-500/30',
          },
          orange: {
            color: 'text-orange-500',
            hover: 'hover:bg-orange-500/10',
            active: 'active:bg-orange-500/30',
          },
          amber: {
            color: 'text-amber-500',
            hover: 'hover:bg-amber-500/10',
            active: 'active:bg-amber-500/30',
          },
          yellow: {
            color: 'text-yellow-500',
            hover: 'hover:bg-yellow-500/10',
            active: 'active:bg-yellow-500/30',
          },
          lime: {
            color: 'text-lime-500',
            hover: 'hover:bg-lime-500/10',
            active: 'active:bg-lime-500/30',
          },
          'light-green': {
            color: 'text-light-green-500',
            hover: 'hover:bg-light-green-500/10',
            active: 'active:bg-light-green-500/30',
          },
          green: {
            color: 'text-green-500',
            hover: 'hover:bg-green-500/10',
            active: 'active:bg-green-500/30',
          },
          teal: {
            color: 'text-teal-500',
            hover: 'hover:bg-teal-500/10',
            active: 'active:bg-teal-500/30',
          },
          cyan: {
            color: 'text-cyan-500',
            hover: 'hover:bg-cyan-500/10',
            active: 'active:bg-cyan-500/30',
          },
          'light-blue': {
            color: 'text-light-blue-500',
            hover: 'hover:bg-light-blue-500/10',
            active: 'active:bg-light-blue-500/30',
          },
          blue: {
            color: 'text-blue-500',
            hover: 'hover:bg-blue-500/10',
            active: 'active:bg-blue-500/30',
          },
          indigo: {
            color: 'text-indigo-500',
            hover: 'hover:bg-indigo-500/10',
            active: 'active:bg-indigo-500/30',
          },
          'deep-purple': {
            color: 'text-deep-purple-500',
            hover: 'hover:bg-deep-purple-500/10',
            active: 'active:bg-deep-purple-500/30',
          },
          purple: {
            color: 'text-purple-500',
            hover: 'hover:bg-purple-500/10',
            active: 'active:bg-purple-500/30',
          },
          pink: {
            color: 'text-pink-500',
            hover: 'hover:bg-pink-500/10',
            active: 'active:bg-pink-500/30',
          },
          red: {
            color: 'text-red-500',
            hover: 'hover:bg-red-500/10',
            active: 'active:bg-red-500/30',
          },
        },
      },
    },
  },
  input: {
    defaultProps: {
      variant: 'outlined',
      size: 'md',
      color: 'gray',
      label: '',
      error: false,
      success: false,
      shrink: false,
      className: '',
    },
    valid: {
      variants: ['standard', 'outlined', 'static'],
      sizes: ['md', 'lg'],
      colors: [
        'black',
        'white',
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
    },
    styles: {
      base: {
        container: {
          position: 'relative',
          width: 'w-full',
          minWidth: 'min-w-[200px]',
        },
        input: {
          peer: 'peer',
          width: 'w-full',
          height: 'h-full',
          bg: 'bg-transparent',
          color: 'text-blue-gray-700',
          fontFamily: 'font-sans',
          fontWeight: 'font-normal',
          outline: 'outline outline-0 focus:outline-0',
          disabled: 'disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed',
          transition: 'transition-all',
        },
        label: {
          display: 'flex',
          width: 'w-full',
          height: 'h-full',
          userSelect: 'select-none',
          pointerEvents: 'pointer-events-none',
          position: 'absolute',
          left: 'left-0',
          fontWeight: 'font-normal',
          overflow: '!overflow-visible',
          textOverflow: 'truncate',
          color: 'peer-placeholder-shown:text-blue-gray-500',
          lineHeight: 'leading-tight peer-focus:leading-tight',
          disabled:
            'peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500',
          transition: 'transition-all',
        },
        icon: {
          display: 'grid',
          placeItems: 'place-items-center',
          position: 'absolute',
          color: 'text-blue-gray-500',
        },
        asterisk: {
          display: 'inline-block',
          color: 'text-red-500',
          ml: 'ml-0.5',
        },
      },
      variants: {
        outlined: {
          base: {
            input: {
              borderWidth: 'placeholder-shown:border',
              borderColor:
                'placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200',
              floated: {
                borderWidth: 'border focus:border-2',
                borderColor: 'border-t-transparent focus:border-t-transparent',
              },
              placeholder: 'placeholder:opacity-0 focus:placeholder:opacity-100',
            },
            inputWithIcon: {
              pr: '!pr-9',
            },
            icon: {
              top: 'top-2/4',
              right: 'right-3',
              transform: '-translate-y-2/4',
            },
            label: {
              position: '-top-1.5',
              fontSize: 'peer-placeholder-shown:text-sm',
              floated: {
                fontSize: 'text-[11px] peer-focus:text-[11px]',
              },
              before: {
                content: "before:content[' ']",
                display: 'before:block',
                boxSizing: 'before:box-border',
                width: 'before:w-2.5',
                height: 'before:h-1.5',
                mt: 'before:mt-[6.5px]',
                mr: 'before:mr-1',
                borderColor: 'peer-placeholder-shown:before:border-transparent',
                borderRadius: 'before:rounded-tl-md',
                floated: {
                  bt: 'before:border-t peer-focus:before:border-t-2',
                  bl: 'before:border-l peer-focus:before:border-l-2',
                },
                pointerEvents: 'before:pointer-events-none',
                transition: 'before:transition-all',
                disabled: 'peer-disabled:before:border-transparent',
              },
              after: {
                content: "after:content[' ']",
                display: 'after:block',
                flexGrow: 'after:flex-grow',
                boxSizing: 'after:box-border',
                width: 'after:w-2.5',
                height: 'after:h-1.5',
                mt: 'after:mt-[6.5px]',
                ml: 'after:ml-1',
                borderColor: 'peer-placeholder-shown:after:border-transparent',
                borderRadius: 'after:rounded-tr-md',
                floated: {
                  bt: 'after:border-t peer-focus:after:border-t-2',
                  br: 'after:border-r peer-focus:after:border-r-2',
                },
                pointerEvents: 'after:pointer-events-none',
                transition: 'after:transition-all',
                disabled: 'peer-disabled:after:border-transparent',
              },
            },
          },
          sizes: {
            md: {
              container: {
                height: 'h-10',
              },
              input: {
                fontSize: 'text-sm',
                px: 'px-3',
                py: 'py-2.5',
                borderRadius: 'rounded-[7px]',
              },
              label: {
                lineHeight: 'peer-placeholder-shown:leading-[3.75]',
              },
              icon: {
                width: 'w-5',
                height: 'h-5',
              },
            },
            lg: {
              container: {
                height: 'h-11',
              },
              input: {
                fontSize: 'text-sm',
                px: 'px-3',
                py: 'py-3',
                borderRadius: 'rounded-md',
              },
              label: {
                lineHeight: 'peer-placeholder-shown:leading-[4.1]',
              },
              icon: {
                width: 'w-6',
                height: 'h-6',
              },
            },
          },
          colors: {
            input: {
              black: {
                color: 'text-black',
                borderColor: 'border-black',
                borderColorFocused: 'focus:border-black',
              },
              white: {
                color: '!text-white',
                borderColor: 'border-white',
                borderColorFocused: 'focus:border-white',
              },
              'blue-gray': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-blue-gray-500',
              },
              gray: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-gray-900',
              },
              brown: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-brown-500',
              },
              'deep-orange': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-deep-orange-500',
              },
              orange: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-orange-500',
              },
              amber: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-amber-500',
              },
              yellow: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-yellow-500',
              },
              lime: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-lime-500',
              },
              'light-green': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-light-green-500',
              },
              green: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-green-500',
              },
              teal: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-teal-500',
              },
              cyan: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-cyan-500',
              },
              'light-blue': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-light-blue-500',
              },
              blue: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-blue-500',
              },
              indigo: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-indigo-500',
              },
              'deep-purple': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-deep-purple-500',
              },
              purple: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-purple-500',
              },
              pink: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-pink-500',
              },
              red: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-red-500',
              },
            },
            label: {
              black: {
                color: '!text-black peer-focus:text-black',
                before: 'before:border-black peer-focus:before:!border-black',
                after: 'after:border-black peer-focus:after:!border-black',
              },
              white: {
                color: '!text-white peer-focus:text-white',
                before: 'before:border-white peer-focus:before:!border-white',
                after: 'after:border-white peer-focus:after:!border-white',
              },
              'blue-gray': {
                color: 'text-blue-gray-400 peer-focus:text-blue-gray-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-blue-gray-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-blue-gray-500',
              },
              gray: {
                color: 'text-gray-500 peer-focus:text-gray-900',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-gray-900',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-gray-900',
              },
              brown: {
                color: 'text-blue-gray-400 peer-focus:text-brown-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-brown-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-brown-500',
              },
              'deep-orange': {
                color: 'text-blue-gray-400 peer-focus:text-deep-orange-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-deep-orange-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-deep-orange-500',
              },
              orange: {
                color: 'text-blue-gray-400 peer-focus:text-orange-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-orange-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-orange-500',
              },
              amber: {
                color: 'text-blue-gray-400 peer-focus:text-amber-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-amber-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-amber-500',
              },
              yellow: {
                color: 'text-blue-gray-400 peer-focus:text-yellow-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-yellow-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-yellow-500',
              },
              lime: {
                color: 'text-blue-gray-400 peer-focus:text-lime-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-lime-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-lime-500',
              },
              'light-green': {
                color: 'text-blue-gray-400 peer-focus:text-light-green-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-light-green-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-light-green-500',
              },
              green: {
                color: 'text-blue-gray-400 peer-focus:text-green-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-green-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-green-500',
              },
              teal: {
                color: 'text-blue-gray-400 peer-focus:text-teal-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-teal-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-teal-500',
              },
              cyan: {
                color: 'text-blue-gray-400 peer-focus:text-cyan-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-cyan-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-cyan-500',
              },
              'light-blue': {
                color: 'text-blue-gray-400 peer-focus:text-light-blue-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-light-blue-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-light-blue-500',
              },
              blue: {
                color: 'text-blue-gray-400 peer-focus:text-blue-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-blue-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-blue-500',
              },
              indigo: {
                color: 'text-blue-gray-400 peer-focus:text-indigo-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-indigo-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-indigo-500',
              },
              'deep-purple': {
                color: 'text-blue-gray-400 peer-focus:text-deep-purple-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-deep-purple-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-deep-purple-500',
              },
              purple: {
                color: 'text-blue-gray-400 peer-focus:text-purple-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-purple-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-purple-500',
              },
              pink: {
                color: 'text-blue-gray-400 peer-focus:text-pink-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-pink-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-pink-500',
              },
              red: {
                color: 'text-blue-gray-400 peer-focus:text-red-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-red-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-red-500',
              },
            },
          },
          error: {
            input: {
              borderColor:
                'border-red-500 placeholder-shown:border-t-red-500 placeholder-shown:border-red-500',
              borderColorFocused: 'focus:border-red-500',
            },
            label: {
              color: 'text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500',
              before: 'before:border-red-500 peer-focus:before:border-red-500',
              after: 'after:border-red-500 peer-focus:after:border-red-500',
            },
          },
          success: {
            input: {
              borderColor:
                'border-green-500 placeholder-shown:border-t-green-500 placeholder-shown:border-green-500',
              borderColorFocused: 'focus:border-green-500',
            },
            label: {
              color:
                'text-green-500 peer-focus:text-green-500 peer-placeholder-shown:text-green-500',
              before: 'before:border-green-500 peer-focus:before:border-green-500',
              after: 'after:border-green-500 peer-focus:after:border-green-500',
            },
          },
          shrink: {
            input: {
              borderTop: '!border-t-transparent',
            },
            label: {
              fontSize: '!text-[11px]',
              lineHeight: '!leading-tight',
              borderColor: 'before:!border-blue-gray-200 after:!border-blue-gray-200',
            },
          },
        },
        standard: {
          base: {
            input: {
              borderWidth: 'border-b',
              borderColor: 'placeholder-shown:border-blue-gray-200',
              placeholder: 'placeholder:opacity-0 focus:placeholder:opacity-100',
            },
            inputWithIcon: {
              pr: '!pr-7',
            },
            icon: {
              top: 'top-2/4',
              right: 'right-0',
              transform: '-translate-y-1/4',
            },
            label: {
              position: '-top-1.5',
              fontSize: 'peer-placeholder-shown:text-sm',
              floated: {
                fontSize: 'text-[11px] peer-focus:text-[11px]',
              },
              after: {
                content: "after:content['']",
                display: 'after:block',
                width: 'after:w-full',
                position: 'after:absolute',
                bottom: 'after:-bottom-1.5',
                left: 'left-0',
                borderWidth: 'after:border-b-2',
                scale: 'after:scale-x-0',
                floated: {
                  scale: 'peer-focus:after:scale-x-100',
                },
                transition: 'after:transition-transform after:duration-300',
              },
            },
          },
          sizes: {
            md: {
              container: {
                height: 'h-11',
              },
              input: {
                fontSize: 'text-sm',
                pt: 'pt-4',
                pb: 'pb-1.5',
              },
              label: {
                lineHeight: 'peer-placeholder-shown:leading-[4.25]',
              },
              icon: {
                width: 'w-5',
                height: 'h-5',
              },
            },
            lg: {
              container: {
                height: 'h-12',
              },
              input: {
                fontSize: 'text-sm',
                px: 'px-px',
                pt: 'pt-5',
                pb: 'pb-2',
              },
              label: {
                lineHeight: 'peer-placeholder-shown:leading-[4.875]',
              },
              icon: {
                width: 'w-6',
                height: 'h-6',
              },
            },
          },
          colors: {
            input: {
              black: {
                color: 'text-black',
                borderColor: 'border-black',
                borderColorFocused: 'focus:border-black',
              },
              white: {
                color: '!text-white',
                borderColor: 'border-white',
                borderColorFocused: 'focus:border-white',
              },
              'blue-gray': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-blue-gray-900',
              },
              gray: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-gray-500',
              },
              brown: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-brown-500',
              },
              'deep-orange': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-deep-orange-500',
              },
              orange: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-orange-500',
              },
              amber: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-amber-500',
              },
              yellow: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-yellow-500',
              },
              lime: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-lime-500',
              },
              'light-green': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-light-green-500',
              },
              green: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-green-500',
              },
              teal: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-teal-500',
              },
              cyan: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-cyan-500',
              },
              'light-blue': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-light-blue-500',
              },
              blue: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-blue-500',
              },
              indigo: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-indigo-500',
              },
              'deep-purple': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-deep-purple-500',
              },
              purple: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-purple-500',
              },
              pink: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-pink-500',
              },
              red: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-red-500',
              },
            },
            label: {
              black: {
                color: '!text-black peer-focus:text-black',
                after: 'after:border-black peer-focus:after:border-black',
              },
              white: {
                color: '!text-white peer-focus:text-white',
                after: 'after:border-white peer-focus:after:border-white',
              },
              'blue-gray': {
                color: 'text-blue-gray-500 peer-focus:text-blue-gray-500',
                after: 'after:border-blue-gray-500 peer-focus:after:border-blue-gray-500',
              },
              gray: {
                color: 'text-gray-500 peer-focus:text-gray-900',
                after: 'after:border-gray-500 peer-focus:after:border-gray-900',
              },
              brown: {
                color: 'text-blue-gray-500 peer-focus:text-brown-500',
                after: 'after:border-brown-500 peer-focus:after:border-brown-500',
              },
              'deep-orange': {
                color: 'text-blue-gray-500 peer-focus:text-deep-orange-500',
                after: 'after:border-deep-orange-500 peer-focus:after:border-deep-orange-500',
              },
              orange: {
                color: 'text-blue-gray-500 peer-focus:text-orange-500',
                after: 'after:border-orange-500 peer-focus:after:border-orange-500',
              },
              amber: {
                color: 'text-blue-gray-500 peer-focus:text-amber-500',
                after: 'after:border-amber-500 peer-focus:after:border-amber-500',
              },
              yellow: {
                color: 'text-blue-gray-500 peer-focus:text-yellow-500',
                after: 'after:border-yellow-500 peer-focus:after:border-yellow-500',
              },
              lime: {
                color: 'text-blue-gray-500 peer-focus:text-lime-500',
                after: 'after:border-lime-500 peer-focus:after:border-lime-500',
              },
              'light-green': {
                color: 'text-blue-gray-500 peer-focus:text-light-green-500',
                after: 'after:border-light-green-500 peer-focus:after:border-light-green-500',
              },
              green: {
                color: 'text-blue-gray-500 peer-focus:text-green-500',
                after: 'after:border-green-500 peer-focus:after:border-green-500',
              },
              teal: {
                color: 'text-blue-gray-500 peer-focus:text-teal-500',
                after: 'after:border-teal-500 peer-focus:after:border-teal-500',
              },
              cyan: {
                color: 'text-blue-gray-500 peer-focus:text-cyan-500',
                after: 'after:border-cyan-500 peer-focus:after:border-cyan-500',
              },
              'light-blue': {
                color: 'text-blue-gray-500 peer-focus:text-light-blue-500',
                after: 'after:border-light-blue-500 peer-focus:after:border-light-blue-500',
              },
              blue: {
                color: 'text-blue-gray-500 peer-focus:text-blue-500',
                after: 'after:border-blue-500 peer-focus:after:border-blue-500',
              },
              indigo: {
                color: 'text-blue-gray-500 peer-focus:text-indigo-500',
                after: 'after:border-indigo-500 peer-focus:after:border-indigo-500',
              },
              'deep-purple': {
                color: 'text-blue-gray-500 peer-focus:text-deep-purple-500',
                after: 'after:border-deep-purple-500 peer-focus:after:border-deep-purple-500',
              },
              purple: {
                color: 'text-blue-gray-500 peer-focus:text-purple-500',
                after: 'after:border-purple-500 peer-focus:after:border-purple-500',
              },
              pink: {
                color: 'text-blue-gray-500 peer-focus:text-pink-500',
                after: 'after:border-pink-500 peer-focus:after:border-pink-500',
              },
              red: {
                color: 'text-blue-gray-500 peer-focus:text-red-500',
                after: 'after:border-red-500 peer-focus:after:border-red-500',
              },
            },
          },
          error: {
            input: {
              borderColor: 'border-red-500 placeholder-shown:border-red-500',
              borderColorFocused: 'focus:border-red-500',
            },
            label: {
              color: 'text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500',
              after: 'after:border-red-500 peer-focus:after:border-red-500',
            },
          },
          success: {
            input: {
              borderColor: 'border-green-500 placeholder-shown:border-green-500',
              borderColorFocused: 'focus:border-green-500',
            },
            label: {
              color:
                'text-green-500 peer-focus:text-green-500 peer-placeholder-shown:text-green-500',
              after: 'after:border-green-500 peer-focus:after:border-green-500',
            },
          },
          shrink: {
            input: {},
            label: {
              fontSize: '!text-[11px]',
              lineHeight: '!leading-tight',
            },
          },
        },
        static: {
          base: {
            input: {
              borderWidth: 'border-b',
              borderColor: 'placeholder-shown:border-blue-gray-200',
            },
            inputWithIcon: {
              pr: '!pr-7',
            },
            icon: {
              top: 'top-2/4',
              right: 'right-0',
              transform: '-translate-y-1/4',
            },
            label: {
              position: '-top-2.5',
              fontSize: 'text-sm peer-focus:text-sm',
              after: {
                content: "after:content[' ']",
                display: 'after:block',
                width: 'after:w-full',
                position: 'after:absolute',
                bottom: 'after:-bottom-2.5',
                left: 'left-0',
                borderWidth: 'after:border-b-2',
                scale: 'after:scale-x-0',
                floated: {
                  scale: 'peer-focus:after:scale-x-100',
                },
                transition: 'after:transition-transform after:duration-300',
              },
            },
          },
          sizes: {
            md: {
              container: {
                height: 'h-11',
              },
              input: {
                fontSize: 'text-sm',
                pt: 'pt-4',
                pb: 'pb-1.5',
              },
              label: {
                lineHeight: 'peer-placeholder-shown:leading-tight',
              },
              icon: {
                width: 'w-5',
                height: 'h-5',
              },
            },
            lg: {
              container: {
                height: 'h-12',
              },
              input: {
                fontSize: 'text-sm',
                px: 'px-px',
                pt: 'pt-5',
                pb: 'pb-2',
              },
              label: {
                lineHeight: 'peer-placeholder-shown:leading-tight',
              },
              icon: {
                width: 'w-6',
                height: 'h-6',
              },
            },
          },
          colors: {
            input: {
              black: {
                color: 'text-black',
                borderColor: 'border-black',
                borderColorFocused: 'focus:border-black',
              },
              white: {
                color: '!text-white',
                borderColor: 'border-white',
                borderColorFocused: 'focus:border-white',
              },
              'blue-gray': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-blue-gray-500',
              },
              gray: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-gray-900',
              },
              brown: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-brown-500',
              },
              'deep-orange': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-deep-orange-500',
              },
              orange: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-orange-500',
              },
              amber: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-amber-500',
              },
              yellow: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-yellow-500',
              },
              lime: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-lime-500',
              },
              'light-green': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-light-green-500',
              },
              green: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-green-500',
              },
              teal: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-teal-500',
              },
              cyan: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-cyan-500',
              },
              'light-blue': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-light-blue-500',
              },
              blue: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-blue-500',
              },
              indigo: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-indigo-500',
              },
              'deep-purple': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-deep-purple-500',
              },
              purple: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-purple-500',
              },
              pink: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-pink-500',
              },
              red: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-red-500',
              },
            },
            label: {
              black: {
                color: '!text-black peer-focus:black',
                after: 'after:border-black peer-focus:after:border-black',
              },
              white: {
                color: '!text-white peer-focus:white',
                after: 'after:border-white peer-focus:after:border-white',
              },
              'blue-gray': {
                color: 'text-blue-gray-500 peer-focus:text-blue-gray-500',
                after: 'after:border-blue-gray-500 peer-focus:after:border-blue-gray-500',
              },
              gray: {
                color: 'text-gray-500 peer-focus:text-gray-900',
                after: 'after:border-gray-500 peer-focus:after:border-gray-900',
              },
              brown: {
                color: 'text-blue-gray-500 peer-focus:text-brown-500',
                after: 'after:border-brown-500 peer-focus:after:border-brown-500',
              },
              'deep-orange': {
                color: 'text-blue-gray-500 peer-focus:text-deep-orange-500',
                after: 'after:border-deep-orange-500 peer-focus:after:border-deep-orange-500',
              },
              orange: {
                color: 'text-blue-gray-500 peer-focus:text-orange-500',
                after: 'after:border-orange-500 peer-focus:after:border-orange-500',
              },
              amber: {
                color: 'text-blue-gray-500 peer-focus:text-amber-500',
                after: 'after:border-amber-500 peer-focus:after:border-amber-500',
              },
              yellow: {
                color: 'text-blue-gray-500 peer-focus:text-yellow-500',
                after: 'after:border-yellow-500 peer-focus:after:border-yellow-500',
              },
              lime: {
                color: 'text-blue-gray-500 peer-focus:text-lime-500',
                after: 'after:border-lime-500 peer-focus:after:border-lime-500',
              },
              'light-green': {
                color: 'text-blue-gray-500 peer-focus:text-light-green-500',
                after: 'after:border-light-green-500 peer-focus:after:border-light-green-500',
              },
              green: {
                color: 'text-blue-gray-500 peer-focus:text-green-500',
                after: 'after:border-green-500 peer-focus:after:border-green-500',
              },
              teal: {
                color: 'text-blue-gray-500 peer-focus:text-teal-500',
                after: 'after:border-teal-500 peer-focus:after:border-teal-500',
              },
              cyan: {
                color: 'text-blue-gray-500 peer-focus:text-cyan-500',
                after: 'after:border-cyan-500 peer-focus:after:border-cyan-500',
              },
              'light-blue': {
                color: 'text-blue-gray-500 peer-focus:text-light-blue-500',
                after: 'after:border-light-blue-500 peer-focus:after:border-light-blue-500',
              },
              blue: {
                color: 'text-blue-gray-500 peer-focus:text-blue-500',
                after: 'after:border-blue-500 peer-focus:after:border-blue-500',
              },
              indigo: {
                color: 'text-blue-gray-500 peer-focus:text-indigo-500',
                after: 'after:border-indigo-500 peer-focus:after:border-indigo-500',
              },
              'deep-purple': {
                color: 'text-blue-gray-500 peer-focus:text-deep-purple-500',
                after: 'after:border-deep-purple-500 peer-focus:after:border-deep-purple-500',
              },
              purple: {
                color: 'text-blue-gray-500 peer-focus:text-purple-500',
                after: 'after:border-purple-500 peer-focus:after:border-purple-500',
              },
              pink: {
                color: 'text-blue-gray-500 peer-focus:text-pink-500',
                after: 'after:border-pink-500 peer-focus:after:border-pink-500',
              },
              red: {
                color: 'text-blue-gray-500 peer-focus:text-red-500',
                after: 'after:border-red-500 peer-focus:after:border-red-500',
              },
            },
          },
          error: {
            input: {
              borderColor: 'border-red-500 placeholder-shown:border-red-500',
              borderColorFocused: 'focus:border-red-500',
            },
            label: {
              color: 'text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500',
              after: 'after:border-red-500 peer-focus:after:border-red-500',
            },
          },
          success: {
            input: {
              borderColor: 'border-green-500 placeholder-shown:border-green-500',
              borderColorFocused: 'focus:border-green-500',
            },
            label: {
              color:
                'text-green-500 peer-focus:text-green-500 peer-placeholder-shown:text-green-500',
              after: 'after:border-green-500 peer-focus:after:border-green-500',
            },
          },
          shrink: {
            input: {},
            label: {},
          },
        },
      },
    },
  },
  menu: {
    defaultProps: {
      placement: 'bottom',
      offset: 5,
      dismiss: {
        itemPress: true,
      },
      animate: {
        unmount: {},
        mount: {},
      },
      lockScroll: false,
    },
    styles: {
      base: {
        menu: {
          bg: 'bg-white',
          minWidth: 'min-w-[180px]',
          p: 'p-3',
          border: 'border border-blue-gray-50',
          borderRadius: 'rounded-md',
          boxShadow: 'shadow-lg shadow-blue-gray-500/10',
          fontFamily: 'font-sans',
          fontSize: 'text-sm',
          fontWeight: 'font-normal',
          color: 'text-blue-gray-500',
          overflow: 'overflow-auto',
          outline: 'focus:outline-none',
          zIndex: 'z-[999]',
        },
        item: {
          initial: {
            display: 'block',
            width: 'w-full',
            pt: 'pt-[9px]',
            pb: 'pb-2',
            px: 'px-3',
            borderRadius: 'rounded-md',
            textAlign: 'text-start',
            lightHeight: 'leading-tight',
            cursor: 'cursor-pointer',
            userSelect: 'select-none',
            transition: 'transition-all',
            bg: 'hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80',
            color: 'hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900',
            outline: 'outline-none',
          },
          disabled: {
            opacity: 'opacity-50',
            cursor: 'cursor-not-allowed',
            pointerEvents: 'pointer-events-none',
            userSelect: 'select-none',
            bg: 'hover:bg-transparent focus:bg-transparent active:bg-transparent',
            color: 'hover:text-blue-gray-500 focus:text-blue-gray-500 active:text-blue-gray-500',
          },
        },
      },
    },
  },
  navbar: {
    defaultProps: {
      variant: 'filled',
      color: 'white',
      shadow: true,
      blurred: true,
      fullWidth: false,
      className: '',
    },
    valid: {
      variants: ['filled', 'gradient'],
      colors: [
        'transparent',
        'white',
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
    },
    styles: {
      base: {
        navbar: {
          initial: {
            display: 'block',
            width: 'w-full',
            maxWidth: 'max-w-screen-2xl',
            borderRadius: 'rounded-xl',
            py: 'py-4',
            px: 'px-8',
          },
          shadow: {
            boxShadow: 'shadow-md',
          },
          blurred: {
            backdropFilter: 'backdrop-saturate-200 backdrop-blur-2xl',
            bgOpacity: 'bg-opacity-80',
            borderWidth: 'border',
            borderColor: 'border-white/80',
          },
          fullWidth: {
            width: 'w-full',
            maxWidth: 'max-w-full',
            rounded: 'rounded-none',
            px: 'px-4',
          },
        },
        mobileNav: {
          display: 'block',
          width: 'w-full',
          basis: 'basis-full',
          overflow: 'overflow-hidden',
        },
      },
      variants: {
        filled: {
          transparent: {
            background: 'bg-transparent',
            color: 'text-white',
            boxShadow: 'shadow-none',
          },
          white: {
            background: 'bg-white',
            color: 'text-white',
          },
          'blue-gray': {
            background: 'bg-blue-gray-500',
            color: 'text-white',
          },
          gray: {
            background: 'bg-gray-500',
            color: 'text-white',
          },
          brown: {
            background: 'bg-brown-500',
            color: 'text-white',
          },
          'deep-orange': {
            background: 'bg-deep-orange-500',
            color: 'text-white',
          },
          orange: {
            background: 'bg-orange-500',
            color: 'text-white',
          },
          amber: {
            background: 'bg-amber-500',
            color: 'text-black',
          },
          yellow: {
            background: 'bg-yellow-500',
            color: 'text-black',
          },
          lime: {
            background: 'bg-lime-500',
            color: 'text-black',
          },
          'light-green': {
            background: 'bg-light-green-500',
            color: 'text-white',
          },
          green: {
            background: 'bg-green-500',
            color: 'text-white',
          },
          teal: {
            background: 'bg-teal-500',
            color: 'text-white',
          },
          cyan: {
            background: 'bg-cyan-500',
            color: 'text-white',
          },
          'light-blue': {
            background: 'bg-light-blue-500',
            color: 'text-white',
          },
          blue: {
            background: 'bg-blue-500',
            color: 'text-white',
          },
          indigo: {
            background: 'bg-indigo-500',
            color: 'text-white',
          },
          'deep-purple': {
            background: 'bg-deep-purple-500',
            color: 'text-white',
          },
          purple: {
            background: 'bg-purple-500',
            color: 'text-white',
          },
          pink: {
            background: 'bg-pink-500',
            color: 'text-white',
          },
          red: {
            background: 'bg-red-500',
            color: 'text-white',
          },
        },
        gradient: {
          transparent: {
            background: 'bg-transparent',
            color: 'text-blue-gray-900',
            boxShadow: 'shadow-none',
          },
          white: {
            background: 'bg-white',
            color: 'text-blue-gray-900',
          },
          'blue-gray': {
            background: 'bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400',
            color: 'text-white',
          },
          gray: {
            background: 'bg-gradient-to-tr from-gray-600 to-gray-400',
            color: 'text-white',
          },
          brown: {
            background: 'bg-gradient-to-tr from-brown-600 to-brown-400',
            color: 'text-white',
          },
          'deep-orange': {
            background: 'bg-gradient-to-tr from-deep-orange-600 to-deep-orange-400',
            color: 'text-white',
          },
          orange: {
            background: 'bg-gradient-to-tr from-orange-600 to-orange-400',
            color: 'text-white',
          },
          amber: {
            background: 'bg-gradient-to-tr from-amber-600 to-amber-400',
            color: 'text-black',
          },
          yellow: {
            background: 'bg-gradient-to-tr from-yellow-600 to-yellow-400',
            color: 'text-black',
          },
          lime: {
            background: 'bg-gradient-to-tr from-lime-600 to-lime-400',
            color: 'text-black',
          },
          'light-green': {
            background: 'bg-gradient-to-tr from-light-green-600 to-light-green-400',
            color: 'text-white',
          },
          green: {
            background: 'bg-gradient-to-tr from-green-600 to-green-400',
            color: 'text-white',
          },
          teal: {
            background: 'bg-gradient-to-tr from-teal-600 to-teal-400',
            color: 'text-white',
          },
          cyan: {
            background: 'bg-gradient-to-tr from-cyan-600 to-cyan-400',
            color: 'text-white',
          },
          'light-blue': {
            background: 'bg-gradient-to-tr from-light-blue-600 to-light-blue-400',
            color: 'text-white',
          },
          blue: {
            background: 'bg-gradient-to-tr from-blue-600 to-blue-400',
            color: 'text-white',
          },
          indigo: {
            background: 'bg-gradient-to-tr from-indigo-600 to-indigo-400',
            color: 'text-white',
          },
          'deep-purple': {
            background: 'bg-gradient-to-tr from-deep-purple-600 to-deep-purple-400',
            color: 'text-white',
          },
          purple: {
            background: 'bg-gradient-to-tr from-purple-600 to-purple-400',
            color: 'text-white',
          },
          pink: {
            background: 'bg-gradient-to-tr from-pink-600 to-pink-400',
            color: 'text-white',
          },
          red: {
            background: 'bg-gradient-to-tr from-red-600 to-red-400',
            color: 'text-white',
          },
        },
      },
    },
  },
  popover: {
    defaultProps: {
      placement: 'top',
      offset: 5,
      dismiss: {},
      animate: {
        unmount: {},
        mount: {},
      },
      className: '',
    },
    styles: {
      base: {
        bg: 'bg-white',
        p: 'p-4',
        border: 'border border-blue-gray-50',
        borderRadius: 'rounded-lg',
        boxShadow: 'shadow-lg shadow-blue-gray-500/10',
        fontFamily: 'font-sans',
        fontSize: 'text-sm',
        fontWeight: 'font-normal',
        color: 'text-blue-gray-500',
        outline: 'focus:outline-none',
        overflowWrap: 'break-words',
        whiteSpace: 'whitespace-normal',
      },
    },
  },
  progress: {
    defaultProps: {
      variant: 'filled',
      color: 'gray',
      size: 'md',
      value: 0,
      label: false,
      className: '',
      barProps: {},
    },
    valid: {
      variants: ['filled', 'gradient'],
      colors: [
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
      sizes: ['sm', 'md', 'lg'],
    },
    styles: {
      base: {
        container: {
          initial: {
            display: 'flex',
            justifyContent: 'flex-start',
            bg: 'bg-blue-gray-50',
            overflow: 'overflow-hidden',
            width: 'w-full',
            fontFamily: 'font-sans',
            borderRadius: 'rounded-full',
            fontSize: 'text-xs',
            fontWeight: 'font-medium',
          },
          withLabel: {},
        },
        bar: {
          display: 'flex',
          justifyContent: 'justify-center',
          alignItems: 'items-center',
          height: 'h-full',
          overflow: 'overflow-hidden',
          wordBreak: 'break-all',
          borderRadius: 'rounded-full',
        },
      },
      sizes: {
        sm: {
          container: {
            initial: {
              height: 'h-1.5',
            },
            withLabel: {
              height: 'h-3.5',
            },
          },
          bar: {},
        },
        md: {
          container: {
            initial: {
              height: 'h-2.5',
            },
            withLabel: {
              height: 'h-4',
            },
          },
          bar: {},
        },
        lg: {
          container: {
            initial: {
              height: 'h-3.5',
            },
            withLabel: {
              height: 'h-5',
            },
          },
          bar: {},
        },
      },
      variants: {
        filled: {
          'blue-gray': {
            backgroud: 'bg-blue-gray-500',
            color: 'text-white',
          },
          gray: {
            backgroud: 'bg-gray-900',
            color: 'text-white',
          },
          brown: {
            backgroud: 'bg-brown-500',
            color: 'text-white',
          },
          'deep-orange': {
            backgroud: 'bg-deep-orange-500',
            color: 'text-white',
          },
          orange: {
            backgroud: 'bg-orange-500',
            color: 'text-white',
          },
          amber: {
            backgroud: 'bg-amber-500',
            color: 'text-black',
          },
          yellow: {
            backgroud: 'bg-yellow-500',
            color: 'text-black',
          },
          lime: {
            backgroud: 'bg-lime-500',
            color: 'text-black',
          },
          'light-green': {
            backgroud: 'bg-light-green-500',
            color: 'text-white',
          },
          green: {
            backgroud: 'bg-green-500',
            color: 'text-white',
          },
          teal: {
            backgroud: 'bg-teal-500',
            color: 'text-white',
          },
          cyan: {
            backgroud: 'bg-cyan-500',
            color: 'text-white',
          },
          'light-blue': {
            backgroud: 'bg-light-blue-500',
            color: 'text-white',
          },
          blue: {
            backgroud: 'bg-blue-500',
            color: 'text-white',
          },
          indigo: {
            backgroud: 'bg-indigo-500',
            color: 'text-white',
          },
          'deep-purple': {
            backgroud: 'bg-deep-purple-500',
            color: 'text-white',
          },
          purple: {
            backgroud: 'bg-purple-500',
            color: 'text-white',
          },
          pink: {
            backgroud: 'bg-pink-500',
            color: 'text-white',
          },
          red: {
            backgroud: 'bg-red-500',
            color: 'text-white',
          },
        },
        gradient: {
          'blue-gray': {
            backgroud: 'bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400',
            color: 'text-white',
          },
          gray: {
            backgroud: 'bg-gradient-to-tr from-gray-900 to-gray-800',
            color: 'text-white',
          },
          brown: {
            backgroud: 'bg-gradient-to-tr from-brown-600 to-brown-400',
            color: 'text-white',
          },
          'deep-orange': {
            backgroud: 'bg-gradient-to-tr from-deep-orange-600 to-deep-orange-400',
            color: 'text-white',
          },
          orange: {
            backgroud: 'bg-gradient-to-tr from-orange-600 to-orange-400',
            color: 'text-white',
          },
          amber: {
            backgroud: 'bg-gradient-to-tr from-amber-600 to-amber-400',
            color: 'text-black',
          },
          yellow: {
            backgroud: 'bg-gradient-to-tr from-yellow-600 to-yellow-400',
            color: 'text-black',
          },
          lime: {
            backgroud: 'bg-gradient-to-tr from-lime-600 to-lime-400',
            color: 'text-black',
          },
          'light-green': {
            backgroud: 'bg-gradient-to-tr from-light-green-600 to-light-green-400',
            color: 'text-white',
          },
          green: {
            backgroud: 'bg-gradient-to-tr from-green-600 to-green-400',
            color: 'text-white',
          },
          teal: {
            backgroud: 'bg-gradient-to-tr from-teal-600 to-teal-400',
            color: 'text-white',
          },
          cyan: {
            backgroud: 'bg-gradient-to-tr from-cyan-600 to-cyan-400',
            color: 'text-white',
          },
          'light-blue': {
            backgroud: 'bg-gradient-to-tr from-light-blue-600 to-light-blue-400',
            color: 'text-white',
          },
          blue: {
            backgroud: 'bg-gradient-to-tr from-blue-600 to-blue-400',
            color: 'text-white',
          },
          indigo: {
            backgroud: 'bg-gradient-to-tr from-indigo-600 to-indigo-400',
            color: 'text-white',
          },
          'deep-purple': {
            backgroud: 'bg-gradient-to-tr from-deep-purple-600 to-deep-purple-400',
            color: 'text-white',
          },
          purple: {
            backgroud: 'bg-gradient-to-tr from-purple-600 to-purple-400',
            color: 'text-white',
          },
          pink: {
            backgroud: 'bg-gradient-to-tr from-pink-600 to-pink-400',
            color: 'text-white',
          },
          red: {
            backgroud: 'bg-gradient-to-tr from-red-600 to-red-400',
            color: 'text-white',
          },
        },
      },
    },
  },
  radio: {
    defaultProps: {
      color: 'gray',
      ripple: true,
      className: '',
      disabled: false,
    },
    valid: {
      colors: [
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
    },
    styles: {
      base: {
        root: {
          display: 'inline-flex',
          alignItems: 'items-center',
        },
        container: {
          position: 'relative',
          display: 'flex',
          alignItems: 'items-center',
          cursor: 'cursor-pointer',
          p: 'p-3',
          borderRadius: 'rounded-full',
        },
        input: {
          peer: 'peer',
          position: 'relative',
          appearance: 'appearance-none',
          width: 'w-5',
          height: 'h-5',
          borderWidth: 'border',
          borderRadius: 'rounded-full',
          borderColor: 'border-blue-gray-200',
          cursor: 'cursor-pointer',
          transition: 'transition-all',
          before: {
            content: "before:content['']",
            display: 'before:block',
            bg: 'before:bg-blue-gray-500',
            width: 'before:w-12',
            height: 'before:h-12',
            borderRadius: 'before:rounded-full',
            position: 'before:absolute',
            top: 'before:top-2/4',
            left: 'before:left-2/4',
            transform: 'before:-translate-y-2/4 before:-translate-x-2/4',
            opacity: 'before:opacity-0 hover:before:opacity-10',
            transition: 'before:transition-opacity',
          },
        },
        label: {
          color: 'text-gray-700',
          fontWeight: 'font-light',
          userSelect: 'select-none',
          cursor: 'cursor-pointer',
          mt: 'mt-px',
        },
        icon: {
          position: 'absolute',
          top: 'top-2/4',
          left: 'left-2/4',
          translate: '-translate-y-2/4 -translate-x-2/4',
          pointerEvents: 'pointer-events-none',
          opacity: 'opacity-0 peer-checked:opacity-100',
          transition: 'transition-opacity',
        },
        disabled: {
          opacity: 'opacity-50',
          pointerEvents: 'pointer-events-none',
        },
      },
      colors: {
        'blue-gray': {
          color: 'text-blue-gray-500',
          border: 'checked:border-blue-gray-500',
          before: 'checked:before:bg-blue-gray-500',
        },
        gray: {
          color: 'text-gray-900',
          border: 'checked:border-gray-900',
          before: 'checked:before:bg-gray-900',
        },
        brown: {
          color: 'text-brown-500',
          border: 'checked:border-brown-500',
          before: 'checked:before:bg-brown-500',
        },
        'deep-orange': {
          color: 'text-deep-orange-500',
          border: 'checked:border-deep-orange-500',
          before: 'checked:before:bg-deep-orange-500',
        },
        orange: {
          color: 'text-orange-500',
          border: 'checked:border-orange-500',
          before: 'checked:before:bg-orange-500',
        },
        amber: {
          color: 'text-amber-500',
          border: 'checked:border-amber-500',
          before: 'checked:before:bg-amber-500',
        },
        yellow: {
          color: 'text-yellow-500',
          border: 'checked:border-yellow-500',
          before: 'checked:before:bg-yellow-500',
        },
        lime: {
          color: 'text-lime-500',
          border: 'checked:border-lime-500',
          before: 'checked:before:bg-lime-500',
        },
        'light-green': {
          color: 'text-light-green-500',
          border: 'checked:border-light-green-500',
          before: 'checked:before:bg-light-green-500',
        },
        green: {
          color: 'text-green-500',
          border: 'checked:border-green-500',
          before: 'checked:before:bg-green-500',
        },
        teal: {
          color: 'text-teal-500',
          border: 'checked:border-teal-500',
          before: 'checked:before:bg-teal-500',
        },
        cyan: {
          color: 'text-cyan-500',
          border: 'checked:border-cyan-500',
          before: 'checked:before:bg-cyan-500',
        },
        'light-blue': {
          color: 'text-light-blue-500',
          border: 'checked:border-light-blue-500',
          before: 'checked:before:bg-light-blue-500',
        },
        blue: {
          color: 'text-blue-500',
          border: 'checked:border-blue-500',
          before: 'checked:before:bg-blue-500',
        },
        indigo: {
          color: 'text-indigo-500',
          border: 'checked:border-indigo-500',
          before: 'checked:before:bg-indigo-500',
        },
        'deep-purple': {
          color: 'text-deep-purple-500',
          border: 'checked:border-deep-purple-500',
          before: 'checked:before:bg-deep-purple-500',
        },
        purple: {
          color: 'text-purple-500',
          border: 'checked:border-purple-500',
          before: 'checked:before:bg-purple-500',
        },
        pink: {
          color: 'text-pink-500',
          border: 'checked:border-pink-500',
          before: 'checked:before:bg-pink-500',
        },
        red: {
          color: 'text-red-500',
          border: 'checked:border-red-500',
          before: 'checked:before:bg-red-500',
        },
      },
    },
  },
  select: {
    defaultProps: {
      variant: 'outlined',
      color: 'gray',
      size: 'md',
      label: '',
      error: false,
      success: false,
      offset: 5,
      dismiss: {},
      animate: {
        unmount: {},
        mount: {},
      },
      autoHeight: false,
      lockScroll: false,
      labelProps: {},
      menuProps: {},
      className: '',
      disabled: false,
    },
    valid: {
      variants: ['standard', 'outlined', 'static'],
      sizes: ['md', 'lg'],
      colors: [
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
    },
    styles: {
      base: {
        container: {
          position: 'relative',
          width: 'w-full',
          minWidth: 'min-w-[200px]',
        },
        select: {
          peer: 'peer',
          width: 'w-full',
          height: 'h-full',
          bg: 'bg-transparent',
          color: 'text-blue-gray-700',
          fontFamily: 'font-sans',
          fontWeight: 'font-normal',
          textAlign: 'text-left',
          outline: 'outline outline-0 focus:outline-0',
          disabled: 'disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed',
          transition: 'transition-all',
        },
        arrow: {
          initial: {
            display: 'grid',
            placeItems: 'place-items-center',
            position: 'absolute',
            top: 'top-2/4',
            right: 'right-2',
            pt: 'pt-px',
            width: 'w-5',
            height: 'h-5',
            color: 'text-blue-gray-400',
            transform: 'rotate-0 -translate-y-2/4',
            transition: 'transition-all',
          },
          active: {
            transform: 'rotate-180',
            mt: 'mt-px',
          },
        },
        label: {
          display: 'flex',
          width: 'w-full',
          height: 'h-full',
          userSelect: 'select-none',
          pointerEvents: 'pointer-events-none',
          position: 'absolute',
          left: 'left-0',
          fontWeight: 'font-normal',
          transition: 'transition-all',
        },
        menu: {
          width: 'w-full',
          maxHeight: 'max-h-96',
          bg: 'bg-white',
          p: 'p-3',
          border: 'border border-blue-gray-50',
          borderRadius: 'rounded-md',
          boxShadow: 'shadow-lg shadow-blue-gray-500/10',
          fontFamily: 'font-sans',
          fontSize: 'text-sm',
          fontWeight: 'font-normal',
          color: 'text-blue-gray-500',
          overflow: 'overflow-auto',
          outline: 'focus:outline-none',
        },
        option: {
          initial: {
            pt: 'pt-[9px]',
            pb: 'pb-2',
            px: 'px-3',
            borderRadius: 'rounded-md',
            lightHeight: 'leading-tight',
            cursor: 'cursor-pointer',
            userSelect: 'select-none',
            background: 'hover:bg-blue-gray-50 focus:bg-blue-gray-50',
            opacity: 'hover:bg-opacity-80 focus:bg-opacity-80',
            color: 'hover:text-blue-gray-900 focus:text-blue-gray-900',
            outline: 'outline outline-0',
            transition: 'transition-all',
          },
          active: {
            bg: 'bg-blue-gray-50 bg-opacity-80',
            color: 'text-blue-gray-900',
          },
          disabled: {
            opacity: 'opacity-50',
            cursor: 'cursor-not-allowed',
            userSelect: 'select-none',
            pointerEvents: 'pointer-events-none',
          },
        },
      },
      variants: {
        outlined: {
          base: {
            select: {},
            label: {
              position: '-top-1.5',
              before: {
                content: "before:content[' ']",
                display: 'before:block',
                boxSizing: 'before:box-border',
                width: 'before:w-2.5',
                height: 'before:h-1.5',
                mt: 'before:mt-[6.5px]',
                mr: 'before:mr-1',
                borderRadius: 'before:rounded-tl-md',
                pointerEvents: 'before:pointer-events-none',
                transition: 'before:transition-all',
                disabled: 'peer-disabled:before:border-transparent',
              },
              after: {
                content: "after:content[' ']",
                display: 'after:block',
                flexGrow: 'after:flex-grow',
                boxSizing: 'after:box-border',
                width: 'after:w-2.5',
                height: 'after:h-1.5',
                mt: 'after:mt-[6.5px]',
                ml: 'after:ml-1',
                borderRadius: 'after:rounded-tr-md',
                pointerEvents: 'after:pointer-events-none',
                transition: 'after:transition-all',
                disabled: 'peer-disabled:after:border-transparent',
              },
            },
          },
          sizes: {
            md: {
              container: {
                height: 'h-10',
              },
              select: {
                fontSize: 'text-sm',
                px: 'px-3',
                py: 'py-2.5',
                borderRadius: 'rounded-[7px]',
              },
              label: {
                initial: {},
                states: {
                  close: {
                    lineHeight: 'leading-[3.75]',
                  },
                  open: {
                    lineHeight: 'leading-tight',
                  },
                  withValue: {
                    lineHeight: 'leading-tight',
                  },
                },
              },
            },
            lg: {
              container: {
                height: 'h-11',
              },
              select: {
                fontSize: 'text-sm',
                px: 'px-3',
                py: 'py-3',
                borderRadius: 'rounded-[7px]',
              },
              label: {
                initial: {},
                states: {
                  close: {
                    lineHeight: 'leading-[4.1]',
                  },
                  open: {
                    lineHeight: 'leading-tight',
                  },
                  withValue: {
                    lineHeight: 'leading-tight',
                  },
                },
              },
            },
          },
          colors: {
            select: {
              'blue-gray': {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-blue-gray-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              gray: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-gray-900',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              brown: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-brown-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              'deep-orange': {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-deep-orange-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              orange: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-orange-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              amber: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-amber-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              yellow: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-yellow-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              lime: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-lime-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              'light-green': {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-light-green-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              green: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-green-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              teal: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-teal-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              cyan: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-cyan-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              'light-blue': {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-light-blue-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              blue: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-blue-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              indigo: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-indigo-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              'deep-purple': {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-deep-purple-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              purple: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-purple-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              pink: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-pink-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
              red: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-red-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                  borderTopColor: 'border-t-transparent',
                },
              },
            },
            label: {
              'blue-gray': {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-blue-gray-500',
                  before: 'before:border-blue-gray-500',
                  after: 'after:border-blue-gray-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              gray: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-gray-900',
                  before: 'before:border-gray-900',
                  after: 'after:border-gray-900',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              brown: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-brown-500',
                  before: 'before:border-brown-500',
                  after: 'after:border-brown-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              'deep-orange': {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-deep-orange-500',
                  before: 'before:border-deep-orange-500',
                  after: 'after:border-deep-orange-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              orange: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-orange-500',
                  before: 'before:border-orange-500',
                  after: 'after:border-orange-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              amber: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-amber-500',
                  before: 'before:border-amber-500',
                  after: 'after:border-amber-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              yellow: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-yellow-500',
                  before: 'before:border-yellow-500',
                  after: 'after:border-yellow-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              lime: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-lime-500',
                  before: 'before:border-lime-500',
                  after: 'after:border-lime-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              'light-green': {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-light-green-500',
                  before: 'before:border-light-green-500',
                  after: 'after:border-light-green-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              green: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-green-500',
                  before: 'before:border-green-500',
                  after: 'after:border-green-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              teal: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-teal-500',
                  before: 'before:border-teal-500',
                  after: 'after:border-teal-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              cyan: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-cyan-500',
                  before: 'before:border-cyan-500',
                  after: 'after:border-cyan-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              'light-blue': {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-light-blue-500',
                  before: 'before:border-light-blue-500',
                  after: 'after:border-light-blue-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              blue: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-blue-500',
                  before: 'before:border-blue-500',
                  after: 'after:border-blue-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              indigo: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-indigo-500',
                  before: 'before:border-indigo-500',
                  after: 'after:border-indigo-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              'deep-purple': {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-deep-purple-500',
                  before: 'before:border-deep-purple-500',
                  after: 'after:border-deep-purple-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              purple: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-purple-500',
                  before: 'before:border-purple-500',
                  after: 'after:border-purple-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              pink: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-pink-500',
                  before: 'before:border-pink-500',
                  after: 'after:border-pink-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
              red: {
                close: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-transparent',
                  after: 'after:border-transparent',
                },
                open: {
                  color: 'text-red-500',
                  before: 'before:border-red-500',
                  after: 'after:border-red-500',
                },
                withValue: {
                  color: 'text-blue-gray-400',
                  before: 'before:border-blue-gray-200',
                  after: 'after:border-blue-gray-200',
                },
              },
            },
          },
          states: {
            close: {
              select: {
                borderWidth: 'border',
              },
              label: {
                fontSize: 'text-sm',
                disabled: 'peer-disabled:text-blue-gray-400',
                before: {
                  bt: 'before:border-t-transparent',
                  bl: 'before:border-l-transparent',
                },
                after: {
                  bt: 'after:border-t-transparent',
                  br: 'after:border-r-transparent',
                },
              },
            },
            open: {
              select: {
                borderWidth: 'border-2',
                borderColor: 'border-t-transparent',
              },
              label: {
                fontSize: 'text-[11px]',
                disabled: 'peer-disabled:text-transparent',
                before: {
                  bt: 'before:border-t-2',
                  bl: 'before:border-l-2',
                },
                after: {
                  bt: 'after:border-t-2',
                  br: 'after:border-r-2',
                },
              },
            },
            withValue: {
              select: {
                borderWidth: 'border',
                borderColor: 'border-t-transparent',
              },
              label: {
                fontSize: 'text-[11px]',
                disabled: 'peer-disabled:text-transparent',
                before: {
                  bt: 'before:border-t',
                  bl: 'before:border-l',
                },
                after: {
                  bt: 'after:border-t',
                  br: 'after:border-r',
                },
              },
            },
          },
          error: {
            select: {
              initial: {},
              states: {
                close: {
                  borderColor: 'border-red-500',
                },
                open: {
                  borderColor: 'border-red-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-red-500',
                  borderTopColor: 'border-t-transparent',
                },
              },
            },
            label: {
              initial: {},
              states: {
                close: {
                  color: 'text-red-500',
                  before: 'before:border-red-500',
                  after: 'after:border-red-500',
                },
                open: {
                  color: 'text-red-500',
                  before: 'before:border-red-500',
                  after: 'after:border-red-500',
                },
                withValue: {
                  color: 'text-red-500',
                  before: 'before:border-red-500',
                  after: 'after:border-red-500',
                },
              },
            },
          },
          success: {
            select: {
              initial: {},
              states: {
                close: {
                  borderColor: 'border-green-500',
                },
                open: {
                  borderColor: 'border-green-500',
                  borderTopColor: 'border-t-transparent',
                },
                withValue: {
                  borderColor: 'border-green-500',
                  borderTopColor: 'border-t-transparent',
                },
              },
            },
            label: {
              initial: {},
              states: {
                close: {
                  color: 'text-green-500',
                  before: 'before:border-green-500',
                  after: 'after:border-green-500',
                },
                open: {
                  color: 'text-green-500',
                  before: 'before:border-green-500',
                  after: 'after:border-green-500',
                },
                withValue: {
                  color: 'text-green-500',
                  before: 'before:border-green-500',
                  after: 'after:border-green-500',
                },
              },
            },
          },
        },
        standard: {
          base: {
            select: {},
            label: {
              position: '-top-1.5',
              after: {
                content: "after:content[' ']",
                display: 'after:block',
                width: 'after:w-full',
                position: 'after:absolute',
                bottom: 'after:-bottom-1.5',
                left: 'left-0',
                borderWidth: 'after:border-b-2',
                transition: 'after:transition-transform after:duration-300',
              },
            },
          },
          sizes: {
            md: {
              container: {
                height: 'h-11',
              },
              select: {
                fontSize: 'text-sm',
                pt: 'pt-4',
                pb: 'pb-1.5',
              },
              label: {
                initial: {},
                states: {
                  close: {
                    lineHeight: 'leading-[4.25]',
                  },
                  open: {
                    lineHeight: 'leading-tight',
                  },
                  withValue: {
                    lineHeight: 'leading-tight',
                  },
                },
              },
            },
            lg: {
              container: {
                height: 'h-12',
              },
              select: {
                fontSize: 'text-sm',
                px: 'px-px',
                pt: 'pt-5',
                pb: 'pb-2',
              },
              label: {
                initial: {},
                states: {
                  close: {
                    lineHeight: 'leading-[4.875]',
                  },
                  open: {
                    lineHeight: 'leading-tight',
                  },
                  withValue: {
                    lineHeight: 'leading-tight',
                  },
                },
              },
            },
          },
          colors: {
            select: {
              'blue-gray': {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-blue-gray-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              gray: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-gray-900',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              brown: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-brown-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              'deep-orange': {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-deep-orange-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              orange: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-orange-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              amber: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-amber-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              yellow: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-yellow-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              lime: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-lime-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              'light-green': {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-light-green-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              green: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-green-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              teal: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-teal-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              cyan: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-cyan-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              'light-blue': {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-light-blue-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              blue: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-blue-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              indigo: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-indigo-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              'deep-purple': {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-deep-purple-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              purple: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-purple-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              pink: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-pink-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              red: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-red-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
            },
            label: {
              'blue-gray': {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-blue-gray-500',
                },
                open: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-blue-gray-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-blue-gray-50',
                },
              },
              gray: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-gray-500',
                },
                open: {
                  color: 'text-gray-900',
                  after: 'after:border-gray-900',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-gray-500',
                },
              },
              brown: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-brown-500',
                },
                open: {
                  color: 'text-brown-500',
                  after: 'after:border-brown-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-brown-500',
                },
              },
              'deep-orange': {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-deep-orange-500',
                },
                open: {
                  color: 'text-deep-orange-500',
                  after: 'after:border-deep-orange-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-deep-orange-500',
                },
              },
              orange: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-orange-500',
                },
                open: {
                  color: 'text-orange-500',
                  after: 'after:border-orange-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-orange-500',
                },
              },
              amber: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-amber-500',
                },
                open: {
                  color: 'text-amber-500',
                  after: 'after:border-amber-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-amber-500',
                },
              },
              yellow: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-yellow-500',
                },
                open: {
                  color: 'text-yellow-500',
                  after: 'after:border-yellow-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-yellow-500',
                },
              },
              lime: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-lime-500',
                },
                open: {
                  color: 'text-lime-500',
                  after: 'after:border-lime-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-lime-500',
                },
              },
              'light-green': {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-light-green-500',
                },
                open: {
                  color: 'text-light-green-500',
                  after: 'after:border-light-green-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-light-green-500',
                },
              },
              green: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-green-500',
                },
                open: {
                  color: 'text-green-500',
                  after: 'after:border-green-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-green-500',
                },
              },
              teal: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-teal-500',
                },
                open: {
                  color: 'text-teal-500',
                  after: 'after:border-teal-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-teal-500',
                },
              },
              cyan: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-cyan-500',
                },
                open: {
                  color: 'text-cyan-500',
                  after: 'after:border-cyan-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-cyan-500',
                },
              },
              'light-blue': {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-light-blue-500',
                },
                open: {
                  color: 'text-light-blue-500',
                  after: 'after:border-light-blue-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-light-blue-500',
                },
              },
              blue: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-blue-500',
                },
                open: {
                  color: 'text-blue-500',
                  after: 'after:border-blue-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-blue-500',
                },
              },
              indigo: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-indigo-500',
                },
                open: {
                  color: 'text-indigo-500',
                  after: 'after:border-indigo-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-indigo-500',
                },
              },
              'deep-purple': {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-deep-purple-500',
                },
                open: {
                  color: 'text-deep-purple-500',
                  after: 'after:border-deep-purple-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-deep-purple-500',
                },
              },
              purple: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-purple-500',
                },
                open: {
                  color: 'text-purple-500',
                  after: 'after:border-purple-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-purple-500',
                },
              },
              pink: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-pink-500',
                },
                open: {
                  color: 'text-pink-500',
                  after: 'after:border-pink-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-pink-500',
                },
              },
              red: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-red-500',
                },
                open: {
                  color: 'text-red-500',
                  after: 'after:border-red-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-red-500',
                },
              },
            },
          },
          states: {
            close: {
              select: {
                borderWidth: 'border-b',
              },
              label: {
                fontSize: 'text-sm',
                disabled: 'peer-disabled:text-blue-gray-400',
                after: {
                  transform: 'after:scale-x-0',
                },
              },
            },
            open: {
              select: {
                borderWidth: 'border-b',
              },
              label: {
                fontSize: 'text-[11px]',
                disabled: 'peer-disabled:text-transparent',
                after: {
                  transform: 'after:scale-x-100',
                },
              },
            },
            withValue: {
              select: {
                borderWidth: 'border-b',
              },
              label: {
                fontSize: 'text-[11px]',
                disabled: 'peer-disabled:text-transparent',
                after: {
                  transform: 'after:scale-x-0',
                },
              },
            },
          },
          error: {
            select: {
              initial: {},
              states: {
                close: {
                  borderColor: 'border-red-500',
                },
                open: {
                  borderColor: 'border-red-500',
                },
                withValue: {
                  borderColor: 'border-red-500',
                },
              },
            },
            label: {
              initial: {},
              states: {
                close: {
                  color: 'text-red-500',
                  after: 'after:border-red-500',
                },
                open: {
                  color: 'text-red-500',
                  after: 'after:border-red-500',
                },
                withValue: {
                  color: 'text-red-500',
                  after: 'after:border-red-500',
                },
              },
            },
          },
          success: {
            select: {
              initial: {},
              states: {
                close: {
                  borderColor: 'border-green-500',
                },
                open: {
                  borderColor: 'border-green-500',
                },
                withValue: {
                  borderColor: 'border-green-500',
                },
              },
            },
            label: {
              initial: {},
              states: {
                close: {
                  color: 'text-green-500',
                  after: 'after:border-green-500',
                },
                open: {
                  color: 'text-green-500',
                  after: 'after:border-green-500',
                },
                withValue: {
                  color: 'text-green-500',
                  after: 'after:border-green-500',
                },
              },
            },
          },
        },
        static: {
          base: {
            select: {},
            label: {
              position: '-top-2.5',
              after: {
                content: "after:content[' ']",
                display: 'after:block',
                width: 'after:w-full',
                position: 'after:absolute',
                bottom: 'after:-bottom-2.5',
                left: 'left-0',
                borderWidth: 'after:border-b-2',
                transition: 'after:transition-transform after:duration-300',
              },
            },
          },
          sizes: {
            md: {
              container: {
                height: 'h-11',
              },
              select: {
                fontSize: 'text-sm',
                pt: 'pt-4',
                pb: 'pb-1.5',
              },
              label: {
                initial: {},
                states: {
                  close: {
                    lineHeight: 'leading-tight',
                  },
                  open: {
                    lineHeight: 'leading-tight',
                  },
                  withValue: {
                    lineHeight: 'leading-tight',
                  },
                },
              },
            },
            lg: {
              container: {
                height: 'h-12',
              },
              select: {
                fontSize: 'text-sm',
                px: 'px-px',
                pt: 'pt-5',
                pb: 'pb-2',
              },
              label: {
                initial: {},
                states: {
                  close: {
                    lineHeight: 'leading-tight',
                  },
                  open: {
                    lineHeight: 'leading-tight',
                  },
                  withValue: {
                    lineHeight: 'leading-tight',
                  },
                },
              },
            },
          },
          colors: {
            select: {
              'blue-gray': {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-blue-gray-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              gray: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-gray-900',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              brown: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-brown-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              'deep-orange': {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-deep-orange-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              orange: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-orange-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              amber: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-amber-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              yellow: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-yellow-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              lime: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-lime-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              'light-green': {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-light-green-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              green: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-green-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              teal: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-teal-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              cyan: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-cyan-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              'light-blue': {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-light-blue-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              blue: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-blue-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              indigo: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-indigo-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              'deep-purple': {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-deep-purple-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              purple: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-purple-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              pink: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-pink-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
              red: {
                close: {
                  borderColor: 'border-blue-gray-200',
                },
                open: {
                  borderColor: 'border-red-500',
                },
                withValue: {
                  borderColor: 'border-blue-gray-200',
                },
              },
            },
            label: {
              'blue-gray': {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-blue-gray-500',
                },
                open: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-blue-gray-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-blue-gray-50',
                },
              },
              gray: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-gray-500',
                },
                open: {
                  color: 'text-gray-900',
                  after: 'after:border-gray-900',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-gray-500',
                },
              },
              brown: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-brown-500',
                },
                open: {
                  color: 'text-brown-500',
                  after: 'after:border-brown-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-brown-500',
                },
              },
              'deep-orange': {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-deep-orange-500',
                },
                open: {
                  color: 'text-deep-orange-500',
                  after: 'after:border-deep-orange-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-deep-orange-500',
                },
              },
              orange: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-orange-500',
                },
                open: {
                  color: 'text-orange-500',
                  after: 'after:border-orange-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-orange-500',
                },
              },
              amber: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-amber-500',
                },
                open: {
                  color: 'text-amber-500',
                  after: 'after:border-amber-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-amber-500',
                },
              },
              yellow: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-yellow-500',
                },
                open: {
                  color: 'text-yellow-500',
                  after: 'after:border-yellow-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-yellow-500',
                },
              },
              lime: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-lime-500',
                },
                open: {
                  color: 'text-lime-500',
                  after: 'after:border-lime-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-lime-500',
                },
              },
              'light-green': {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-light-green-500',
                },
                open: {
                  color: 'text-light-green-500',
                  after: 'after:border-light-green-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-light-green-500',
                },
              },
              green: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-green-500',
                },
                open: {
                  color: 'text-green-500',
                  after: 'after:border-green-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-green-500',
                },
              },
              teal: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-teal-500',
                },
                open: {
                  color: 'text-teal-500',
                  after: 'after:border-teal-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-teal-500',
                },
              },
              cyan: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-cyan-500',
                },
                open: {
                  color: 'text-cyan-500',
                  after: 'after:border-cyan-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-cyan-500',
                },
              },
              'light-blue': {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-light-blue-500',
                },
                open: {
                  color: 'text-light-blue-500',
                  after: 'after:border-light-blue-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-light-blue-500',
                },
              },
              blue: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-blue-500',
                },
                open: {
                  color: 'text-blue-500',
                  after: 'after:border-blue-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-blue-500',
                },
              },
              indigo: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-indigo-500',
                },
                open: {
                  color: 'text-indigo-500',
                  after: 'after:border-indigo-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-indigo-500',
                },
              },
              'deep-purple': {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-deep-purple-500',
                },
                open: {
                  color: 'text-deep-purple-500',
                  after: 'after:border-deep-purple-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-deep-purple-500',
                },
              },
              purple: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-purple-500',
                },
                open: {
                  color: 'text-purple-500',
                  after: 'after:border-purple-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-purple-500',
                },
              },
              pink: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-pink-500',
                },
                open: {
                  color: 'text-pink-500',
                  after: 'after:border-pink-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-pink-500',
                },
              },
              red: {
                close: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-red-500',
                },
                open: {
                  color: 'text-red-500',
                  after: 'after:border-red-500',
                },
                withValue: {
                  color: 'text-blue-gray-500',
                  after: 'after:border-red-500',
                },
              },
            },
          },
          states: {
            close: {
              select: {
                borderWidth: 'border-b',
              },
              label: {
                fontSize: 'text-sm',
                disabled: 'peer-disabled:text-blue-gray-400',
                after: {
                  transform: 'after:scale-x-0',
                },
              },
            },
            open: {
              select: {
                borderWidth: 'border-b',
              },
              label: {
                fontSize: 'text-sm',
                disabled: 'peer-disabled:text-transparent',
                after: {
                  transform: 'after:scale-x-100',
                },
              },
            },
            withValue: {
              select: {
                borderWidth: 'border-b',
              },
              label: {
                fontSize: 'text-sm',
                disabled: 'peer-disabled:text-transparent',
                after: {
                  transform: 'after:scale-x-0',
                },
              },
            },
          },
          error: {
            select: {
              initial: {},
              states: {
                close: {
                  borderColor: 'border-red-500',
                },
                open: {
                  borderColor: 'border-red-500',
                },
                withValue: {
                  borderColor: 'border-red-500',
                },
              },
            },
            label: {
              initial: {},
              states: {
                close: {
                  color: 'text-red-500',
                  after: 'after:border-red-500',
                },
                open: {
                  color: 'text-red-500',
                  after: 'after:border-red-500',
                },
                withValue: {
                  color: 'text-red-500',
                  after: 'after:border-red-500',
                },
              },
            },
          },
          success: {
            select: {
              initial: {},
              states: {
                close: {
                  borderColor: 'border-green-500',
                },
                open: {
                  borderColor: 'border-green-500',
                },
                withValue: {
                  borderColor: 'border-green-500',
                },
              },
            },
            label: {
              initial: {},
              states: {
                close: {
                  color: 'text-green-500',
                  after: 'after:border-green-500',
                },
                open: {
                  color: 'text-green-500',
                  after: 'after:border-green-500',
                },
                withValue: {
                  color: 'text-green-500',
                  after: 'after:border-green-500',
                },
              },
            },
          },
        },
      },
    },
  },
  switch: {
    defaultProps: {
      color: 'gray',
      label: '',
      ripple: true,
      className: '',
      disabled: false,
    },
    valid: {
      colors: [
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
    },
    styles: {
      base: {
        root: {
          display: 'inline-flex',
          alignItems: 'items-center',
        },
        container: {
          position: 'relative',
          display: 'inline-block',
          width: 'w-8',
          height: 'h-4',
          cursor: 'cursor-pointer',
          borderRadius: 'rounded-full',
        },
        input: {
          peer: 'peer',
          appearance: 'appearance-none',
          width: 'w-8',
          height: 'h-4',
          position: 'absolute',
          background: 'bg-blue-gray-100',
          borderRadius: 'rounded-full',
          cursor: 'cursor-pointer',
          transition: 'transition-colors duration-300',
        },
        circle: {
          bg: 'bg-white',
          width: 'w-5',
          height: 'h-5',
          borderWidth: 'border',
          borderColor: 'border-blue-gray-100',
          borderRadius: 'rounded-full',
          boxShadow: 'shadow-md',
          position: 'absolute',
          top: 'top-2/4',
          left: '-left-1',
          transform: '-translate-y-2/4 peer-checked:translate-x-full',
          transition: 'transition-all duration-300',
          cursor: 'cursor-pointer',
          before: {
            content: "before:content['']",
            display: 'before:block',
            bg: 'before:bg-blue-gray-500',
            width: 'before:w-10',
            height: 'before:h-10',
            borderRadius: 'before:rounded-full',
            position: 'before:absolute',
            top: 'before:top-2/4',
            left: 'before:left-2/4',
            transform: 'before:-translate-y-2/4 before:-translate-x-2/4',
            transition: 'before:transition-opacity',
            opacity: 'before:opacity-0 hover:before:opacity-10',
          },
        },
        ripple: {
          display: 'inline-block',
          top: 'top-2/4',
          left: 'left-2/4',
          transform: '-translate-x-2/4 -translate-y-2/4',
          p: 'p-5',
          borderRadius: 'rounded-full',
        },
        label: {
          color: 'text-gray-700',
          fontWeight: 'font-light',
          userSelect: 'select-none',
          cursor: 'cursor-pointer',
          mt: 'mt-px',
          ml: 'ml-3',
          mb: 'mb-0',
        },
        disabled: {
          opacity: 'opacity-50',
          pointerEvents: 'pointer-events-none',
        },
      },
      colors: {
        'blue-gray': {
          input: 'checked:bg-blue-gray-500',
          circle: 'peer-checked:border-blue-gray-500',
          before: 'peer-checked:before:bg-blue-gray-500',
        },
        gray: {
          input: 'checked:bg-gray-900',
          circle: 'peer-checked:border-gray-900',
          before: 'peer-checked:before:bg-gray-900',
        },
        brown: {
          input: 'checked:bg-brown-500',
          circle: 'peer-checked:border-brown-500',
          before: 'peer-checked:before:bg-brown-500',
        },
        'deep-orange': {
          input: 'checked:bg-deep-orange-500',
          circle: 'peer-checked:border-deep-orange-500',
          before: 'peer-checked:before:bg-deep-orange-500',
        },
        orange: {
          input: 'checked:bg-orange-500',
          circle: 'peer-checked:border-orange-500',
          before: 'peer-checked:before:bg-orange-500',
        },
        amber: {
          input: 'checked:bg-amber-500',
          circle: 'peer-checked:border-amber-500',
          before: 'peer-checked:before:bg-amber-500',
        },
        yellow: {
          input: 'checked:bg-yellow-500',
          circle: 'peer-checked:border-yellow-500',
          before: 'peer-checked:before:bg-yellow-500',
        },
        lime: {
          input: 'checked:bg-lime-500',
          circle: 'peer-checked:border-lime-500',
          before: 'peer-checked:before:bg-lime-500',
        },
        'light-green': {
          input: 'checked:bg-light-green-500',
          circle: 'peer-checked:border-light-green-500',
          before: 'peer-checked:before:bg-light-green-500',
        },
        green: {
          input: 'checked:bg-green-500',
          circle: 'peer-checked:border-green-500',
          before: 'peer-checked:before:bg-green-500',
        },
        teal: {
          input: 'checked:bg-teal-500',
          circle: 'peer-checked:border-teal-500',
          before: 'peer-checked:before:bg-teal-500',
        },
        cyan: {
          input: 'checked:bg-cyan-500',
          circle: 'peer-checked:border-cyan-500',
          before: 'peer-checked:before:bg-cyan-500',
        },
        'light-blue': {
          input: 'checked:bg-light-blue-500',
          circle: 'peer-checked:border-light-blue-500',
          before: 'peer-checked:before:bg-light-blue-500',
        },
        blue: {
          input: 'checked:bg-blue-500',
          circle: 'peer-checked:border-blue-500',
          before: 'peer-checked:before:bg-blue-500',
        },
        indigo: {
          input: 'checked:bg-indigo-500',
          circle: 'peer-checked:border-indigo-500',
          before: 'peer-checked:before:bg-indigo-500',
        },
        'deep-purple': {
          input: 'checked:bg-deep-purple-500',
          circle: 'peer-checked:border-deep-purple-500',
          before: 'peer-checked:before:bg-deep-purple-500',
        },
        purple: {
          input: 'checked:bg-purple-500',
          circle: 'peer-checked:border-purple-500',
          before: 'peer-checked:before:bg-purple-500',
        },
        pink: {
          input: 'checked:bg-pink-500',
          circle: 'peer-checked:border-pink-500',
          before: 'peer-checked:before:bg-pink-500',
        },
        red: {
          input: 'checked:bg-red-500',
          circle: 'peer-checked:border-red-500',
          before: 'peer-checked:before:bg-red-500',
        },
      },
    },
  },
  tab: {
    defaultProps: {
      className: '',
      activeClassName: '',
      disabled: false,
    },
    styles: {
      base: {
        tab: {
          initial: {
            display: 'flex',
            alignItems: 'items-center',
            justifyContent: 'justify-center',
            textAlign: 'text-center',
            width: 'w-full',
            height: 'h-full',
            position: 'relative',
            bg: 'bg-transparent',
            py: 'py-1',
            px: 'px-2',
            color: 'text-blue-gray-900',
            fontSmoothing: 'antialiased',
            fontFamily: 'font-sans',
            fontSize: 'text-base',
            fontWeight: 'font-normal',
            lineHeight: 'leading-relaxed',
            userSelect: 'select-none',
            cursor: 'cursor-pointer',
          },
          disabled: {
            opacity: 'opacity-50',
            cursor: 'cursor-not-allowed',
            pointerEvents: 'pointer-events-none',
            userSelect: 'select-none',
          },
        },
        indicator: {
          position: 'absolute',
          inset: 'inset-0',
          zIndex: 'z-10',
          height: 'h-full',
          bg: 'bg-white',
          borderRadius: 'rounded-md',
          boxShadow: 'shadow',
        },
      },
    },
  },
  tabs: {
    defaultProps: {
      className: '',
      orientation: 'horizontal',
    },
    styles: {
      base: {
        overflow: 'overflow-hidden',
      },
      horizontal: {
        display: 'block',
      },
      vertical: {
        display: 'flex',
      },
    },
  },
  tabsBody: {
    defaultProps: {
      animate: {
        unmount: {},
        mount: {},
      },
      className: '',
    },
    styles: {
      base: {
        display: 'block',
        width: 'w-full',
        position: 'relative',
        bg: 'bg-transparent',
        overflow: 'overflow-hidden',
      },
    },
  },
  tabsHeader: {
    defaultProps: {
      className: '',
    },
    styles: {
      base: {
        display: 'flex',
        position: 'relative',
        bg: 'bg-blue-gray-50',
        bgOpacity: 'bg-opacity-60',
        borderRadius: 'rounded-lg',
        p: 'p-1',
      },
      horizontal: {
        flexDirection: 'flex-row',
      },
      vertical: {
        flexDirection: 'flex-col',
      },
    },
  },
  tabPanel: {
    defaultProps: {
      className: '',
    },
    styles: {
      base: {
        width: 'w-full',
        height: 'h-max',
        color: 'text-gray-700',
        p: 'p-4',
        fontSmoothing: 'antialiased',
        fontFamily: 'font-sans',
        fontSize: 'text-base',
        fontWeight: 'font-light',
        lineHeight: 'leading-relaxed',
      },
    },
  },
  textarea: {
    defaultProps: {
      variant: 'outlined',
      size: 'md',
      color: 'gray',
      label: '',
      error: false,
      success: false,
      resize: true,
      shrink: false,
      className: '',
    },
    valid: {
      variants: ['standard', 'outlined', 'static'],
      sizes: ['md', 'lg'],
      colors: [
        'black',
        'white',
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
    },
    styles: {
      base: {
        container: {
          position: 'relative',
          width: 'w-full',
          minWidth: 'min-w-[200px]',
        },
        textarea: {
          peer: 'peer',
          width: 'w-full',
          height: 'h-full',
          minHeight: 'min-h-[100px]',
          bg: 'bg-transparent',
          color: 'text-blue-gray-700',
          fontFamily: 'font-sans',
          fontWeight: 'font-normal',
          outline: 'outline outline-0 focus:outline-0',
          resize: 'resize-y',
          disabled:
            'disabled:bg-blue-gray-50 disabled:border-0 disabled:resize-none disabled:cursor-not-allowed',
          transition: 'transition-all',
        },
        label: {
          display: 'flex',
          width: 'w-full',
          height: 'h-full',
          userSelect: 'select-none',
          pointerEvents: 'pointer-events-none',
          position: 'absolute',
          left: 'left-0',
          fontWeight: 'font-normal',
          color: 'peer-placeholder-shown:text-blue-gray-500',
          lineHeight: 'leading-tight peer-focus:leading-tight',
          disabled:
            'peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500',
          transition: 'transition-all',
        },
        asterisk: {
          display: 'inline-block',
          color: 'text-red-500',
          ml: 'ml-0.5',
        },
      },
      variants: {
        outlined: {
          base: {
            textarea: {
              borderWidth: 'placeholder-shown:border',
              borderColor:
                'placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200',
              floated: {
                borderWidth: 'border focus:border-2',
                borderColor: 'border-t-transparent focus:border-t-transparent',
              },
            },
            label: {
              position: '-top-1.5',
              fontSize: 'peer-placeholder-shown:text-sm',
              floated: {
                fontSize: 'text-[11px] peer-focus:text-[11px]',
              },
              before: {
                content: "before:content[' ']",
                display: 'before:block',
                boxSizing: 'before:box-border',
                width: 'before:w-2.5',
                height: 'before:h-1.5',
                mt: 'before:mt-[6.5px]',
                mr: 'before:mr-1',
                borderColor: 'peer-placeholder-shown:before:border-transparent',
                borderRadius: 'before:rounded-tl-md',
                floated: {
                  bt: 'before:border-t peer-focus:before:border-t-2',
                  bl: 'before:border-l peer-focus:before:border-l-2',
                },
                pointerEvents: 'before:pointer-events-none',
                transition: 'before:transition-all',
                disabled: 'peer-disabled:before:border-transparent',
              },
              after: {
                content: "after:content[' ']",
                display: 'after:block',
                flexGrow: 'after:flex-grow',
                boxSizing: 'after:box-border',
                width: 'after:w-2.5',
                height: 'after:h-1.5',
                mt: 'after:mt-[6.5px]',
                ml: 'after:ml-1',
                borderColor: 'peer-placeholder-shown:after:border-transparent',
                borderRadius: 'after:rounded-tr-md',
                floated: {
                  bt: 'after:border-t peer-focus:after:border-t-2',
                  br: 'after:border-r peer-focus:after:border-r-2',
                },
                pointerEvents: 'after:pointer-events-none',
                transition: 'after:transition-all',
                disabled: 'peer-disabled:after:border-transparent',
              },
            },
          },
          sizes: {
            md: {
              container: {
                height: 'h-10',
              },
              textarea: {
                fontSize: 'text-sm',
                px: 'px-3',
                py: 'py-2.5',
                borderRadius: 'rounded-[7px]',
              },
              label: {
                lineHeight: 'peer-placeholder-shown:leading-[3.75]',
              },
            },
            lg: {
              container: {
                height: 'h-11',
              },
              textarea: {
                fontSize: 'text-sm',
                px: 'px-3',
                py: 'py-3',
                borderRadius: 'rounded-md',
              },
              label: {
                lineHeight: 'peer-placeholder-shown:leading-[4.1]',
              },
            },
          },
          colors: {
            textarea: {
              'blue-gray': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-blue-gray-500',
              },
              gray: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-gray-900',
              },
              brown: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-brown-500',
              },
              'deep-orange': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-deep-orange-500',
              },
              orange: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-orange-500',
              },
              amber: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-amber-500',
              },
              yellow: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-yellow-500',
              },
              lime: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-lime-500',
              },
              'light-green': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-light-green-500',
              },
              green: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-green-500',
              },
              teal: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-teal-500',
              },
              cyan: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-cyan-500',
              },
              'light-blue': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-light-blue-500',
              },
              blue: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-blue-500',
              },
              indigo: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-indigo-500',
              },
              'deep-purple': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-deep-purple-500',
              },
              purple: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-purple-500',
              },
              pink: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-pink-500',
              },
              red: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-red-500',
              },
            },
            label: {
              'blue-gray': {
                color: 'text-blue-gray-400 peer-focus:text-blue-gray-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-blue-gray-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-blue-gray-500',
              },
              gray: {
                color: 'text-blue-gray-400 peer-focus:text-gray-900',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-gray-900',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-gray-900',
              },
              brown: {
                color: 'text-blue-gray-400 peer-focus:text-brown-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-brown-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-brown-500',
              },
              'deep-orange': {
                color: 'text-blue-gray-400 peer-focus:text-deep-orange-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-deep-orange-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-deep-orange-500',
              },
              orange: {
                color: 'text-blue-gray-400 peer-focus:text-orange-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-orange-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-orange-500',
              },
              amber: {
                color: 'text-blue-gray-400 peer-focus:text-amber-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-amber-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-amber-500',
              },
              yellow: {
                color: 'text-blue-gray-400 peer-focus:text-yellow-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-yellow-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-yellow-500',
              },
              lime: {
                color: 'text-blue-gray-400 peer-focus:text-lime-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-lime-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-lime-500',
              },
              'light-green': {
                color: 'text-blue-gray-400 peer-focus:text-light-green-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-light-green-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-light-green-500',
              },
              green: {
                color: 'text-blue-gray-400 peer-focus:text-green-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-green-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-green-500',
              },
              teal: {
                color: 'text-blue-gray-400 peer-focus:text-teal-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-teal-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-teal-500',
              },
              cyan: {
                color: 'text-blue-gray-400 peer-focus:text-cyan-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-cyan-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-cyan-500',
              },
              'light-blue': {
                color: 'text-blue-gray-400 peer-focus:text-light-blue-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-light-blue-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-light-blue-500',
              },
              blue: {
                color: 'text-blue-gray-400 peer-focus:text-blue-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-blue-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-blue-500',
              },
              indigo: {
                color: 'text-blue-gray-400 peer-focus:text-indigo-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-indigo-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-indigo-500',
              },
              'deep-purple': {
                color: 'text-blue-gray-400 peer-focus:text-deep-purple-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-deep-purple-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-deep-purple-500',
              },
              purple: {
                color: 'text-blue-gray-400 peer-focus:text-purple-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-purple-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-purple-500',
              },
              pink: {
                color: 'text-blue-gray-400 peer-focus:text-pink-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-pink-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-pink-500',
              },
              red: {
                color: 'text-blue-gray-400 peer-focus:text-red-500',
                before: 'before:border-blue-gray-200 peer-focus:before:!border-red-500',
                after: 'after:border-blue-gray-200 peer-focus:after:!border-red-500',
              },
            },
          },
          error: {
            textarea: {
              borderColor:
                'border-red-500 placeholder-shown:border-t-red-500 placeholder-shown:border-red-500',
              borderColorFocused: 'focus:border-red-500',
            },
            label: {
              color: 'text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500',
              before: 'before:border-red-500 peer-focus:before:border-red-500',
              after: 'after:border-red-500 peer-focus:after:border-red-500',
            },
          },
          success: {
            textarea: {
              borderColor:
                'border-green-500 placeholder-shown:border-t-green-500 placeholder-shown:border-green-500',
              borderColorFocused: 'focus:border-green-500',
            },
            label: {
              color:
                'text-green-500 peer-focus:text-green-500 peer-placeholder-shown:text-green-500',
              before: 'before:border-green-500 peer-focus:before:border-green-500',
              after: 'after:border-green-500 peer-focus:after:border-green-500',
            },
          },
          shrink: {
            textarea: {
              borderTop: '!border-t-transparent',
            },
            label: {
              fontSize: '!text-[11px]',
              lineHeight: '!leading-tight',
              borderColor: 'before:!border-blue-gray-200 after:!border-blue-gray-200',
            },
          },
        },
        standard: {
          base: {
            textarea: {
              borderWidth: 'border-b',
              borderColor: 'placeholder-shown:border-blue-gray-200',
            },
            label: {
              position: '-top-1.5',
              fontSize: 'peer-placeholder-shown:text-sm',
              floated: {
                fontSize: 'text-[11px] peer-focus:text-[11px]',
              },
              after: {
                content: "after:content[' ']",
                display: 'after:block',
                width: 'after:w-full',
                position: 'after:absolute',
                bottom: 'after:-bottom-0',
                left: 'left-0',
                borderWidth: 'after:border-b-2',
                scale: 'after:scale-x-0',
                floated: {
                  scale: 'peer-focus:after:scale-x-100',
                },
                transition: 'after:transition-transform after:duration-300',
              },
            },
          },
          sizes: {
            md: {
              container: {
                height: 'h-11',
              },
              textarea: {
                fontSize: 'text-sm',
                pt: 'pt-4',
                pb: 'pb-1.5',
                mt: 'mt-1.5',
              },
              label: {
                lineHeight: 'peer-placeholder-shown:leading-[4.25]',
              },
            },
            lg: {
              container: {
                height: 'h-12',
              },
              textarea: {
                fontSize: 'text-sm',
                px: 'px-px',
                pt: 'pt-5',
                pb: 'pb-2',
              },
              label: {
                lineHeight: 'peer-placeholder-shown:leading-[4.875]',
              },
            },
          },
          colors: {
            textarea: {
              'blue-gray': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-blue-gray-500',
              },
              gray: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-gray-900',
              },
              brown: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-brown-500',
              },
              'deep-orange': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-deep-orange-500',
              },
              orange: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-orange-500',
              },
              amber: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-amber-500',
              },
              yellow: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-yellow-500',
              },
              lime: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-lime-500',
              },
              'light-green': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-light-green-500',
              },
              green: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-green-500',
              },
              teal: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-teal-500',
              },
              cyan: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-cyan-500',
              },
              'light-blue': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-light-blue-500',
              },
              blue: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-blue-500',
              },
              indigo: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-indigo-500',
              },
              'deep-purple': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-deep-purple-500',
              },
              purple: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-purple-500',
              },
              pink: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-pink-500',
              },
              red: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-red-500',
              },
            },
            label: {
              'blue-gray': {
                color: 'text-blue-gray-500 peer-focus:text-blue-gray-500',
                after: 'after:border-blue-gray-500 peer-focus:after:!border-blue-gray-500',
              },
              gray: {
                color: 'text-gray-500 peer-focus:text-gray-900',
                after: 'after:border-gray-500 peer-focus:after:!border-gray-900',
              },
              brown: {
                color: 'text-blue-gray-500 peer-focus:text-brown-500',
                after: 'after:border-brown-500 peer-focus:after:!border-brown-500',
              },
              'deep-orange': {
                color: 'text-blue-gray-500 peer-focus:text-deep-orange-500',
                after: 'after:border-deep-orange-500 peer-focus:after:!border-deep-orange-500',
              },
              orange: {
                color: 'text-blue-gray-500 peer-focus:text-orange-500',
                after: 'after:border-orange-500 peer-focus:after:!border-orange-500',
              },
              amber: {
                color: 'text-blue-gray-500 peer-focus:text-amber-500',
                after: 'after:border-amber-500 peer-focus:after:!border-amber-500',
              },
              yellow: {
                color: 'text-blue-gray-500 peer-focus:text-yellow-500',
                after: 'after:border-yellow-500 peer-focus:after:!border-yellow-500',
              },
              lime: {
                color: 'text-blue-gray-500 peer-focus:text-lime-500',
                after: 'after:border-lime-500 peer-focus:after:!border-lime-500',
              },
              'light-green': {
                color: 'text-blue-gray-500 peer-focus:text-light-green-500',
                after: 'after:border-light-green-500 peer-focus:after:!border-light-green-500',
              },
              green: {
                color: 'text-blue-gray-500 peer-focus:text-green-500',
                after: 'after:border-green-500 peer-focus:after:!border-green-500',
              },
              teal: {
                color: 'text-blue-gray-500 peer-focus:text-teal-500',
                after: 'after:border-teal-500 peer-focus:after:!border-teal-500',
              },
              cyan: {
                color: 'text-blue-gray-500 peer-focus:text-cyan-500',
                after: 'after:border-cyan-500 peer-focus:after:!border-cyan-500',
              },
              'light-blue': {
                color: 'text-blue-gray-500 peer-focus:text-light-blue-500',
                after: 'after:border-light-blue-500 peer-focus:after:!border-light-blue-500',
              },
              blue: {
                color: 'text-blue-gray-500 peer-focus:text-blue-500',
                after: 'after:border-blue-500 peer-focus:after:!border-blue-500',
              },
              indigo: {
                color: 'text-blue-gray-500 peer-focus:text-indigo-500',
                after: 'after:border-indigo-500 peer-focus:after:!border-indigo-500',
              },
              'deep-purple': {
                color: 'text-blue-gray-500 peer-focus:text-deep-purple-500',
                after: 'after:border-deep-purple-500 peer-focus:after:!border-deep-purple-500',
              },
              purple: {
                color: 'text-blue-gray-500 peer-focus:text-purple-500',
                after: 'after:border-purple-500 peer-focus:after:!border-purple-500',
              },
              pink: {
                color: 'text-blue-gray-500 peer-focus:text-pink-500',
                after: 'after:border-pink-500 peer-focus:after:!border-pink-500',
              },
              red: {
                color: 'text-blue-gray-500 peer-focus:text-red-500',
                after: 'after:border-red-500 peer-focus:after:!border-red-500',
              },
            },
          },
          error: {
            textarea: {
              borderColor: 'border-red-500 placeholder-shown:border-red-500',
              borderColorFocused: 'focus:border-red-500',
            },
            label: {
              color: 'text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500',
              after: 'after:border-red-500 peer-focus:after:border-red-500',
            },
          },
          success: {
            textarea: {
              borderColor: 'border-green-500 placeholder-shown:border-green-500',
              borderColorFocused: 'focus:border-green-500',
            },
            label: {
              color:
                'text-green-500 peer-focus:text-green-500 peer-placeholder-shown:text-green-500',
              after: 'after:border-green-500 peer-focus:after:border-green-500',
            },
          },
          shrink: {
            textarea: {},
            label: {
              fontSize: '!text-[11px]',
              lineHeight: '!leading-tight',
            },
          },
        },
        static: {
          base: {
            textarea: {
              borderWidth: 'border-b',
              borderColor: 'placeholder-shown:border-blue-gray-200',
            },
            label: {
              position: '-top-2.5',
              fontSize: 'text-sm peer-focus:text-sm',
              after: {
                content: "after:content[' ']",
                display: 'after:block',
                width: 'after:w-full',
                position: 'after:absolute',
                bottom: 'after:-bottom-1',
                left: 'left-0',
                borderWidth: 'after:border-b-2',
                scale: 'after:scale-x-0',
                floated: {
                  scale: 'peer-focus:after:scale-x-100',
                },
                transition: 'after:transition-transform after:duration-300',
              },
            },
          },
          sizes: {
            md: {
              container: {
                height: 'h-11',
              },
              textarea: {
                fontSize: 'text-sm',
                pt: 'pt-4',
                pb: 'pb-1.5',
                mt: 'mt-1.5',
              },
              label: {
                lineHeight: 'peer-placeholder-shown:leading-tight',
              },
            },
            lg: {
              container: {
                height: 'h-12',
              },
              textarea: {
                fontSize: 'text-sm',
                px: 'px-px',
                pt: 'pt-5',
                pb: 'pb-2',
              },
              label: {
                lineHeight: 'peer-placeholder-shown:leading-tight',
              },
            },
          },
          colors: {
            textarea: {
              'blue-gray': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-blue-gray-500',
              },
              gray: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-gray-900',
              },
              brown: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-brown-500',
              },
              'deep-orange': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-deep-orange-500',
              },
              orange: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-orange-500',
              },
              amber: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-amber-500',
              },
              yellow: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-yellow-500',
              },
              lime: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-lime-500',
              },
              'light-green': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-light-green-500',
              },
              green: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-green-500',
              },
              teal: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-teal-500',
              },
              cyan: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-cyan-500',
              },
              'light-blue': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-light-blue-500',
              },
              blue: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-blue-500',
              },
              indigo: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-indigo-500',
              },
              'deep-purple': {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-deep-purple-500',
              },
              purple: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-purple-500',
              },
              pink: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-pink-500',
              },
              red: {
                borderColor: 'border-blue-gray-200',
                borderColorFocused: 'focus:border-red-500',
              },
            },
            label: {
              'blue-gray': {
                color: 'text-blue-gray-500 peer-focus:text-blue-gray-500',
                after: 'after:border-blue-gray-500 peer-focus:after:border-blue-gray-500',
              },
              gray: {
                color: 'text-gray-500 peer-focus:text-gray-900',
                after: 'after:border-gray-500 peer-focus:after:border-gray-900',
              },
              brown: {
                color: 'text-blue-gray-500 peer-focus:text-brown-500',
                after: 'after:border-brown-500 peer-focus:after:border-brown-500',
              },
              'deep-orange': {
                color: 'text-blue-gray-500 peer-focus:text-deep-orange-500',
                after: 'after:border-deep-orange-500 peer-focus:after:border-deep-orange-500',
              },
              orange: {
                color: 'text-blue-gray-500 peer-focus:text-orange-500',
                after: 'after:border-orange-500 peer-focus:after:border-orange-500',
              },
              amber: {
                color: 'text-blue-gray-500 peer-focus:text-amber-500',
                after: 'after:border-amber-500 peer-focus:after:border-amber-500',
              },
              yellow: {
                color: 'text-blue-gray-500 peer-focus:text-yellow-500',
                after: 'after:border-yellow-500 peer-focus:after:border-yellow-500',
              },
              lime: {
                color: 'text-blue-gray-500 peer-focus:text-lime-500',
                after: 'after:border-lime-500 peer-focus:after:border-lime-500',
              },
              'light-green': {
                color: 'text-blue-gray-500 peer-focus:text-light-green-500',
                after: 'after:border-light-green-500 peer-focus:after:border-light-green-500',
              },
              green: {
                color: 'text-blue-gray-500 peer-focus:text-green-500',
                after: 'after:border-green-500 peer-focus:after:border-green-500',
              },
              teal: {
                color: 'text-blue-gray-500 peer-focus:text-teal-500',
                after: 'after:border-teal-500 peer-focus:after:border-teal-500',
              },
              cyan: {
                color: 'text-blue-gray-500 peer-focus:text-cyan-500',
                after: 'after:border-cyan-500 peer-focus:after:border-cyan-500',
              },
              'light-blue': {
                color: 'text-blue-gray-500 peer-focus:text-light-blue-500',
                after: 'after:border-light-blue-500 peer-focus:after:border-light-blue-500',
              },
              blue: {
                color: 'text-blue-gray-500 peer-focus:text-blue-500',
                after: 'after:border-blue-500 peer-focus:after:border-blue-500',
              },
              indigo: {
                color: 'text-blue-gray-500 peer-focus:text-indigo-500',
                after: 'after:border-indigo-500 peer-focus:after:border-indigo-500',
              },
              'deep-purple': {
                color: 'text-blue-gray-500 peer-focus:text-deep-purple-500',
                after: 'after:border-deep-purple-500 peer-focus:after:border-deep-purple-500',
              },
              purple: {
                color: 'text-blue-gray-500 peer-focus:text-purple-500',
                after: 'after:border-purple-500 peer-focus:after:border-purple-500',
              },
              pink: {
                color: 'text-blue-gray-500 peer-focus:text-pink-500',
                after: 'after:border-pink-500 peer-focus:after:border-pink-500',
              },
              red: {
                color: 'text-blue-gray-500 peer-focus:text-red-500',
                after: 'after:border-red-500 peer-focus:after:border-red-500',
              },
            },
          },
          error: {
            textarea: {
              borderColor: 'border-red-500 placeholder-shown:border-red-500',
              borderColorFocused: 'focus:border-red-500',
            },
            label: {
              color: 'text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500',
              after: 'after:border-red-500 peer-focus:after:border-red-500',
            },
          },
          success: {
            textarea: {
              borderColor: 'border-green-500 placeholder-shown:border-green-500',
              borderColorFocused: 'focus:border-green-500',
            },
            label: {
              color:
                'text-green-500 peer-focus:text-green-500 peer-placeholder-shown:text-green-500',
              after: 'after:border-green-500 peer-focus:after:border-green-500',
            },
          },
          shrink: {
            textarea: {},
            label: {},
          },
        },
      },
    },
  },
  tooltip: {
    defaultProps: {
      interactive: false,
      placement: 'top',
      offset: 5,
      dismiss: {},
      animate: {
        unmount: {},
        mount: {},
      },
      className: '',
    },
    styles: {
      base: {
        bg: 'bg-black',
        py: 'py-1.5',
        px: 'px-3',
        borderRadius: 'rounded-lg',
        fontFamily: 'font-sans',
        fontSize: 'text-sm',
        fontWeight: 'font-normal',
        color: 'text-white',
        outline: 'focus:outline-none',
        overflowWrap: 'break-words',
        zIndex: 'z-[999]',
        whiteSpace: 'whitespace-normal',
      },
    },
  },
  typography: {
    defaultProps: {
      variant: 'paragraph',
      color: 'inherit',
      textGradient: false,
      className: '',
    },
    valid: {
      variants: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'lead', 'paragraph', 'small'],
      colors: [
        'inherit',
        'current',
        'black',
        'white',
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
    },
    styles: {
      variants: {
        h1: {
          display: 'block',
          fontSmoothing: 'antialiased',
          letterSpacing: 'tracking-normal',
          fontFamily: 'font-sans',
          fontSize: 'text-5xl',
          fontWeight: 'font-semibold',
          lineHeight: 'leading-tight',
        },
        h2: {
          display: 'block',
          fontSmoothing: 'antialiased',
          letterSpacing: 'tracking-normal',
          fontFamily: 'font-sans',
          fontSize: 'text-4xl',
          fontWeight: 'font-semibold',
          lineHeight: 'leading-[1.3]',
        },
        h3: {
          display: 'block',
          fontSmoothing: 'antialiased',
          letterSpacing: 'tracking-normal',
          fontFamily: 'font-sans',
          fontSize: 'text-3xl',
          fontWeight: 'font-semibold',
          lineHeight: 'leading-snug',
        },
        h4: {
          display: 'block',
          fontSmoothing: 'antialiased',
          letterSpacing: 'tracking-normal',
          fontFamily: 'font-sans',
          fontSize: 'text-2xl',
          fontWeight: 'font-semibold',
          lineHeight: 'leading-snug',
        },
        h5: {
          display: 'block',
          fontSmoothing: 'antialiased',
          letterSpacing: 'tracking-normal',
          fontFamily: 'font-sans',
          fontSize: 'text-xl',
          fontWeight: 'font-semibold',
          lineHeight: 'leading-snug',
        },
        h6: {
          display: 'block',
          fontSmoothing: 'antialiased',
          letterSpacing: 'tracking-normal',
          fontFamily: 'font-sans',
          fontSize: 'text-base',
          fontWeight: 'font-semibold',
          lineHeight: 'leading-relaxed',
        },
        lead: {
          display: 'block',
          fontSmoothing: 'antialiased',
          fontFamily: 'font-sans',
          fontSize: 'text-xl',
          fontWeight: 'font-normal',
          lineHeight: 'leading-relaxed',
        },
        paragraph: {
          display: 'block',
          fontSmoothing: 'antialiased',
          fontFamily: 'font-sans',
          fontSize: 'text-base',
          fontWeight: 'font-light',
          lineHeight: 'leading-relaxed',
        },
        small: {
          display: 'block',
          fontSmoothing: 'antialiased',
          fontFamily: 'font-sans',
          fontSize: 'text-sm',
          fontWeight: 'font-light',
          lineHeight: 'leading-normal',
        },
      },
      textGradient: {
        bgClip: 'bg-clip-text',
        color: 'text-transparent',
      },
      colors: {
        inherit: {
          color: 'text-inherit',
        },
        current: {
          color: 'text-current',
        },
        black: {
          color: 'text-black',
        },
        white: {
          color: 'text-white',
        },
        'blue-gray': {
          color: 'text-blue-gray-900',
          gradient: 'bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400',
        },
        gray: {
          color: 'text-gray-700',
          gradient: 'bg-gradient-to-tr from-gray-600 to-gray-400',
        },
        brown: {
          color: 'text-brown-500',
          gradient: 'bg-gradient-to-tr from-brown-600 to-brown-400',
        },
        'deep-orange': {
          color: 'text-deep-orange-500',
          gradient: 'bg-gradient-to-tr from-deep-orange-600 to-deep-orange-400',
        },
        orange: {
          color: 'text-orange-500',
          gradient: 'bg-gradient-to-tr from-orange-600 to-orange-400',
        },
        amber: {
          color: 'text-amber-500',
          gradient: 'bg-gradient-to-tr from-amber-600 to-amber-400',
        },
        yellow: {
          color: 'text-yellow-500',
          gradient: 'bg-gradient-to-tr from-yellow-600 to-yellow-400',
        },
        lime: {
          color: 'text-lime-500',
          gradient: 'bg-gradient-to-tr from-lime-600 to-lime-400',
        },
        'light-green': {
          color: 'text-light-green-500',
          gradient: 'bg-gradient-to-tr from-light-green-600 to-light-green-400',
        },
        green: {
          color: 'text-green-500',
          gradient: 'bg-gradient-to-tr from-green-600 to-green-400',
        },
        teal: {
          color: 'text-teal-500',
          gradient: 'bg-gradient-to-tr from-teal-600 to-teal-400',
        },
        cyan: {
          color: 'text-cyan-500',
          gradient: 'bg-gradient-to-tr from-cyan-600 to-cyan-400',
        },
        'light-blue': {
          color: 'text-light-blue-500',
          gradient: 'bg-gradient-to-tr from-light-blue-600 to-light-blue-400',
        },
        blue: {
          color: 'text-blue-500',
          gradient: 'bg-gradient-to-tr from-blue-600 to-blue-400',
        },
        indigo: {
          color: 'text-indigo-500',
          gradient: 'bg-gradient-to-tr from-indigo-600 to-indigo-400',
        },
        'deep-purple': {
          color: 'text-deep-purple-500',
          gradient: 'bg-gradient-to-tr from-deep-purple-600 to-deep-purple-400',
        },
        purple: {
          color: 'text-purple-500',
          gradient: 'bg-gradient-to-tr from-purple-600 to-purple-400',
        },
        pink: {
          color: 'text-pink-500',
          gradient: 'bg-gradient-to-tr from-pink-600 to-pink-400',
        },
        red: {
          color: 'text-red-500',
          gradient: 'bg-gradient-to-tr from-red-600 to-red-400',
        },
      },
    },
  },
  collapse: {
    defaultProps: {
      animate: {
        unmount: {},
        mount: {},
      },
      className: '',
    },
    styles: {
      base: {
        display: 'block',
        width: 'w-full',
        basis: 'basis-full',
        overflow: 'overflow-hidden',
      },
    },
  },
  list: {
    defaultProps: {
      ripple: true,
      className: '',
    },
    styles: {
      base: {
        list: {
          display: 'flex',
          flexDirection: 'flex-col',
          gap: 'gap-1',
          minWidth: 'min-w-[240px]',
          p: 'p-2',
          fontFamily: 'font-sans',
          fontSize: 'text-base',
          fontWeight: 'font-normal',
          color: 'text-blue-gray-700',
        },
        item: {
          initial: {
            display: 'flex',
            alignItems: 'items-center',
            width: 'w-full',
            padding: 'p-3',
            borderRadius: 'rounded-lg',
            textAlign: 'text-start',
            lightHeight: 'leading-tight',
            transition: 'transition-all',
            bg: 'hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80',
            color: 'hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900',
            outline: 'outline-none',
          },
          selected: {
            bg: 'bg-blue-gray-50/50',
            color: 'text-blue-gray-700',
          },
          disabled: {
            opacity: 'opacity-50',
            cursor: 'cursor-not-allowed',
            pointerEvents: 'pointer-events-none',
            userSelect: 'select-none',
            bg: 'hover:bg-transparent focus:bg-transparent active:bg-transparent',
            color: 'hover:text-blue-gray-500 focus:text-blue-gray-500 active:text-blue-gray-500',
          },
        },
        itemPrefix: {
          display: 'grid',
          placeItems: 'place-items-center',
          marginRight: 'mr-4',
        },
        itemSuffix: {
          display: 'grid',
          placeItems: 'place-items-center',
          marginRight: 'ml-auto justify-self-end',
        },
      },
    },
  },
  buttonGroup: {
    defaultProps: {
      variant: 'filled',
      size: 'md',
      color: 'gray',
      fullWidth: false,
      ripple: true,
      className: '',
    },
    valid: {
      variants: ['filled', 'outlined', 'gradient', 'text'],
      sizes: ['sm', 'md', 'lg'],
      colors: [
        'white',
        'black',
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
    },
    styles: {
      base: {
        initial: {
          display: 'flex',
          flexDirection: 'row',
        },
        fullWidth: {
          width: 'w-full',
        },
      },
      dividerColor: {
        white: {
          divideColor: 'divide-blue-gray-50',
        },
        black: {
          divideColor: 'divide-gray-800',
        },
        'blue-gray': {
          divideColor: 'divide-blue-gray-600',
        },
        gray: {
          divideColor: 'divide-gray-800',
        },
        brown: {
          divideColor: 'divide-brown-600',
        },
        'deep-orange': {
          divideColor: 'divide-deep-orange-600',
        },
        orange: {
          divideColor: 'divide-orange-600',
        },
        amber: {
          divideColor: 'divide-amber-600',
        },
        yellow: {
          divideColor: 'divide-yellow-600',
        },
        lime: {
          divideColor: 'divide-lime-600',
        },
        'light-green': {
          divideColor: 'divide-light-green-600',
        },
        green: {
          divideColor: 'divide-green-600',
        },
        teal: {
          divideColor: 'divide-teal-600',
        },
        cyan: {
          divideColor: 'divide-cyan-600',
        },
        'light-blue': {
          divideColor: 'divide-light-blue-600',
        },
        blue: {
          divideColor: 'divide-blue-600',
        },
        indigo: {
          divideColor: 'divide-indigo-600',
        },
        'deep-purple': {
          divideColor: 'divide-deep-purple-600',
        },
        purple: {
          divideColor: 'divide-purple-600',
        },
        pink: {
          divideColor: 'divide-pink-600',
        },
        red: {
          divideColor: 'divide-red-600',
        },
      },
    },
  },
  carousel: {
    defaultProps: {
      autoplay: false,
      autoplayDelay: 5000,
      transition: {
        type: 'tween',
        duration: 0.5,
      },
      loop: false,
      className: '',
    },
    styles: {
      base: {
        carousel: {
          position: 'relative',
          width: 'w-full',
          height: 'h-full',
          overflowX: 'overflow-x-hidden',
          display: 'flex',
        },
        slide: {
          width: 'w-full',
          height: 'h-full',
          display: 'inline-block',
          flex: 'flex-none',
        },
      },
    },
  },
  drawer: {
    defaultProps: {
      size: 300,
      overlay: true,
      placement: 'left',
      className: '',
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
    styles: {
      base: {
        drawer: {
          position: 'fixed',
          zIndex: 'z-[9999]',
          pointerEvents: 'pointer-events-auto',
          backgroundColor: 'bg-white',
          boxSizing: 'box-border',
          width: 'w-full',
          boxShadow: 'shadow-2xl shadow-blue-gray-900/10',
        },
        overlay: {
          position: 'absolute',
          inset: 'inset-0',
          width: 'w-full',
          height: 'h-full',
          pointerEvents: 'pointer-events-auto',
          zIndex: 'z-[9995]',
          backgroundColor: 'bg-black',
          backgroundOpacity: 'bg-opacity-60',
          backdropBlur: 'backdrop-blur-sm',
        },
      },
    },
  },
  badge: {
    defaultProps: {
      color: 'red',
      invisible: false,
      withBorder: false,
      overlap: 'square',
      placement: 'top-end',
    },
    valid: {
      colors: [
        'white',
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
      overlaps: ['circular', 'square'],
      placements: ['top-start', 'top-end', 'bottom-start', 'bottom-end'],
    },
    styles: {
      base: {
        container: {
          position: 'relative',
          display: 'inline-flex',
        },
        badge: {
          initial: {
            position: 'absolute',
            minWidth: 'min-w-[12px]',
            minHeight: 'min-h-[12px]',
            borderRadius: 'rounded-full',
            paddingY: 'py-1',
            paddingX: 'px-1',
            fontSize: 'text-xs',
            fontWeight: 'font-medium',
            content: "content-['']",
            lineHeight: 'leading-none',
            display: 'grid',
            placeItems: 'place-items-center',
          },
          withBorder: {
            borderWidth: 'border-2',
            borderColor: 'border-white',
          },
          withContent: {
            minWidth: 'min-w-[24px]',
            minHeight: 'min-h-[24px]',
          },
        },
      },
      placements: {
        'top-start': {
          square: {
            top: 'top-[4%]',
            left: 'left-[2%]',
            translateX: '-translate-x-2/4',
            translateY: '-translate-y-2/4',
          },
          circular: {
            top: 'top-[14%]',
            left: 'left-[14%]',
            translateX: '-translate-x-2/4',
            translateY: '-translate-y-2/4',
          },
        },
        'top-end': {
          square: {
            top: 'top-[4%]',
            right: 'right-[2%]',
            translateX: 'translate-x-2/4',
            translateY: '-translate-y-2/4',
          },
          circular: {
            top: 'top-[14%]',
            right: 'right-[14%]',
            translateX: 'translate-x-2/4',
            translateY: '-translate-y-2/4',
          },
        },
        'bottom-start': {
          square: {
            bottom: 'bottom-[4%]',
            left: 'left-[2%]',
            translateX: '-translate-x-2/4',
            translateY: 'translate-y-2/4',
          },
          circular: {
            bottom: 'bottom-[14%]',
            left: 'left-[14%]',
            translateX: '-translate-x-2/4',
            translateY: 'translate-y-2/4',
          },
        },
        'bottom-end': {
          square: {
            bottom: 'bottom-[4%]',
            right: 'right-[2%]',
            translateX: 'translate-x-2/4',
            translateY: 'translate-y-2/4',
          },
          circular: {
            bottom: 'bottom-[14%]',
            right: 'right-[14%]',
            translateX: 'translate-x-2/4',
            translateY: 'translate-y-2/4',
          },
        },
      },
      colors: {
        white: {
          backgroud: 'bg-white',
          color: 'text-blue-gray-900',
        },
        'blue-gray': {
          backgroud: 'bg-blue-gray-500',
          color: 'text-white',
        },
        gray: {
          backgroud: 'bg-gray-500',
          color: 'text-white',
        },
        brown: {
          backgroud: 'bg-brown-500',
          color: 'text-white',
        },
        'deep-orange': {
          backgroud: 'bg-deep-orange-500',
          color: 'text-white',
        },
        orange: {
          backgroud: 'bg-orange-500',
          color: 'text-white',
        },
        amber: {
          backgroud: 'bg-amber-500',
          color: 'text-black',
        },
        yellow: {
          backgroud: 'bg-yellow-500',
          color: 'text-black',
        },
        lime: {
          backgroud: 'bg-lime-500',
          color: 'text-black',
        },
        'light-green': {
          backgroud: 'bg-light-green-500',
          color: 'text-white',
        },
        green: {
          backgroud: 'bg-green-500',
          color: 'text-white',
        },
        teal: {
          backgroud: 'bg-teal-500',
          color: 'text-white',
        },
        cyan: {
          backgroud: 'bg-cyan-500',
          color: 'text-white',
        },
        'light-blue': {
          backgroud: 'bg-light-blue-500',
          color: 'text-white',
        },
        blue: {
          backgroud: 'bg-blue-500',
          color: 'text-white',
        },
        indigo: {
          backgroud: 'bg-indigo-500',
          color: 'text-white',
        },
        'deep-purple': {
          backgroud: 'bg-deep-purple-500',
          color: 'text-white',
        },
        purple: {
          backgroud: 'bg-purple-500',
          color: 'text-white',
        },
        pink: {
          backgroud: 'bg-pink-500',
          color: 'text-white',
        },
        red: {
          backgroud: 'bg-red-500',
          color: 'text-white',
        },
      },
    },
  },
  rating: {
    defaultProps: {
      count: 5,
      value: 0,
      ratedIcon: {
        type: 'svg',
        key: null,
        props: {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 24 24',
          fill: 'currentColor',
          className: 'w-6 h-6',
          children: {
            type: 'path',
            key: null,
            props: {
              fillRule: 'evenodd',
              d: 'M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z',
              clipRule: 'evenodd',
            },
            _owner: null,
            _store: {},
          },
        },
        _owner: null,
        _store: {},
      },
      unratedIcon: {
        type: 'svg',
        key: null,
        props: {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          strokeWidth: 1.5,
          stroke: 'currentColor',
          className: 'w-6 h-6',
          children: {
            type: 'path',
            key: null,
            props: {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              d: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z',
            },
            _owner: null,
            _store: {},
          },
        },
        _owner: null,
        _store: {},
      },
      ratedColor: 'yellow',
      unratedColor: 'blue-gray',
      readonly: false,
    },
    valid: {
      colors: [
        'white',
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
    },
    styles: {
      base: {
        rating: {
          display: 'inline-flex',
          alignItems: 'items-center',
        },
        icon: {
          width: 'w-5',
          height: 'h-5',
          color: 'text-inherit',
          cursor: 'cursor-pointer',
        },
      },
      colors: {
        white: {
          color: 'text-white',
        },
        'blue-gray': {
          color: 'text-blue-gray-500',
        },
        gray: {
          color: 'text-gray-500',
        },
        brown: {
          color: 'text-brown-500',
        },
        'deep-orange': {
          color: 'text-deep-orange-500',
        },
        orange: {
          color: 'text-orange-500',
        },
        amber: {
          color: 'text-amber-500',
        },
        yellow: {
          color: 'text-yellow-700',
        },
        lime: {
          color: 'text-lime-500',
        },
        'light-green': {
          color: 'text-light-green-500',
        },
        green: {
          color: 'text-green-500',
        },
        teal: {
          color: 'text-teal-500',
        },
        cyan: {
          color: 'text-cyan-500',
        },
        'light-blue': {
          color: 'text-light-blue-500',
        },
        blue: {
          color: 'text-blue-500',
        },
        indigo: {
          color: 'text-indigo-500',
        },
        'deep-purple': {
          color: 'text-deep-purple-500',
        },
        purple: {
          color: 'text-purple-500',
        },
        pink: {
          color: 'text-pink-500',
        },
        red: {
          color: 'text-red-500',
        },
      },
    },
  },
  slider: {
    defaultProps: {
      color: 'gray',
      size: 'md',
      step: 'any',
      className: '',
      trackClassName: '',
      thumbClassName: '',
      barClassName: '',
    },
    valid: {
      sizes: ['sm', 'md', 'lg'],
      colors: [
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
    },
    styles: {
      base: {
        container: {
          position: 'relative',
          width: 'w-full',
          minWidth: 'min-w-[200px]',
        },
        slider: {
          width: 'w-full',
          position: 'absolute',
          inset: 'inset-0',
          backgroundColor: 'bg-transparent',
          cursor: 'cursor-pointer',
          outline: 'focus:outline-none focus:outline-0',
          appearance: 'appearance-none [-webkit-appearance:none]',
        },
        track: {
          height: '[&::-webkit-slider-runnable-track]:h-full [&::-moz-range-track]:h-full',
          borderRadius:
            '[&::-webkit-slider-runnable-track]:rounded-full [&::-moz-range-track]:rounded-full',
          backgroundColor:
            '[&::-webkit-slider-runnable-track]:bg-blue-gray-100 [&::-moz-range-track]:bg-blue-gray-100',
        },
        thumb: {
          appearance:
            '[&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:[-webkit-appearance:none] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:[-webkit-appearance:none]',
          borderRadius: '[&::-moz-range-thumb]:rounded-full [&::-webkit-slider-thumb]:rounded-full',
          border: '[&::-moz-range-thumb]:border-0 [&::-webkit-slider-thumb]:border-0',
          ringWidth: '[&::-moz-range-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-2',
          ringColor: '[&::-moz-range-thumb]:ring-current [&::-webkit-slider-thumb]:ring-current',
          backgroundColor: '[&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:bg-white',
          position: '[&::-moz-range-thumb]:relative [&::-webkit-slider-thumb]:relative',
          zIndex: '[&::-moz-range-thumb]:z-20 [&::-webkit-slider-thumb]:z-20',
        },
        bar: {
          position: 'absolute',
          inset: 'inset-0',
          zIndex: 'z-10',
          borderRadius: 'rounded-l-full',
          height: 'h-full',
          pointerEvents: 'pointer-events-none',
          backgroundColor: 'bg-current',
        },
      },
      sizes: {
        sm: {
          container: {
            height: 'h-1',
          },
          thumb: {
            width: '[&::-moz-range-thumb]:w-2.5 [&::-webkit-slider-thumb]:w-2.5',
            height: '[&::-moz-range-thumb]:h-2.5 [&::-webkit-slider-thumb]:h-2.5',
            marginTop: '[&::-moz-range-thumb]:-mt-[3px] [&::-webkit-slider-thumb]:-mt-[3px]',
          },
          slider: {},
          track: {},
          bar: {},
        },
        md: {
          container: {
            height: 'h-2',
          },
          thumb: {
            width: '[&::-moz-range-thumb]:w-3.5 [&::-webkit-slider-thumb]:w-3.5',
            height: '[&::-moz-range-thumb]:h-3.5 [&::-webkit-slider-thumb]:h-3.5',
            marginTop: '[&::-moz-range-thumb]:-mt-[3px] [&::-webkit-slider-thumb]:-mt-[3px]',
          },
          slider: {},
          track: {},
          bar: {},
        },
        lg: {
          container: {
            height: 'h-3',
          },
          thumb: {
            width: '[&::-moz-range-thumb]:w-5 [&::-webkit-slider-thumb]:w-5',
            height: '[&::-moz-range-thumb]:h-5 [&::-webkit-slider-thumb]:h-5',
            marginTop: '[&::-moz-range-thumb]:-mt-1 [&::-webkit-slider-thumb]:-mt-1',
          },
          slider: {},
          track: {},
          bar: {},
        },
      },
      colors: {
        'blue-gray': {
          color: 'text-blue-gray-500',
        },
        gray: {
          color: 'text-gray-900',
        },
        brown: {
          color: 'text-brown-500',
        },
        'deep-orange': {
          color: 'text-deep-orange-500',
        },
        orange: {
          color: 'text-orange-500',
        },
        amber: {
          color: 'text-amber-500',
        },
        yellow: {
          color: 'text-yellow-500',
        },
        lime: {
          color: 'text-lime-500',
        },
        'light-green': {
          color: 'text-light-green-500',
        },
        green: {
          color: 'text-green-500',
        },
        teal: {
          color: 'text-teal-500',
        },
        cyan: {
          color: 'text-cyan-500',
        },
        'light-blue': {
          color: 'text-light-blue-500',
        },
        blue: {
          color: 'text-blue-500',
        },
        indigo: {
          color: 'text-indigo-500',
        },
        'deep-purple': {
          color: 'text-deep-purple-500',
        },
        purple: {
          color: 'text-purple-500',
        },
        pink: {
          color: 'text-pink-500',
        },
        red: {
          color: 'text-red-500',
        },
      },
    },
  },
  spinner: {
    defaultProps: {
      color: 'gray',
      className: '',
    },
    valid: {
      colors: [
        'white',
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
    },
    styles: {
      base: {
        color: 'text-gray-300',
        animation: 'animate-spin',
      },
      colors: {
        white: {
          color: 'text-white',
        },
        'blue-gray': {
          color: 'text-blue-gray-500',
        },
        gray: {
          color: 'text-gray-900',
        },
        brown: {
          color: 'text-brown-500',
        },
        'deep-orange': {
          color: 'text-deep-orange-500',
        },
        orange: {
          color: 'text-orange-500',
        },
        amber: {
          color: 'text-amber-500',
        },
        yellow: {
          color: 'text-yellow-500',
        },
        lime: {
          color: 'text-lime-500',
        },
        'light-green': {
          color: 'text-light-green-500',
        },
        green: {
          color: 'text-green-500',
        },
        teal: {
          color: 'text-teal-500',
        },
        cyan: {
          color: 'text-cyan-500',
        },
        'light-blue': {
          color: 'text-light-blue-500',
        },
        blue: {
          color: 'text-blue-500',
        },
        indigo: {
          color: 'text-indigo-500',
        },
        'deep-purple': {
          color: 'text-deep-purple-500',
        },
        purple: {
          color: 'text-purple-500',
        },
        pink: {
          color: 'text-pink-500',
        },
        red: {
          color: 'text-red-500',
        },
      },
    },
  },
  timeline: {
    styles: {
      base: {
        display: 'w-full',
        position: 'flex',
        flexDirection: 'flex-col',
      },
    },
  },
  timelineItem: {
    defaultProps: {
      color: 'gray',
      variant: 'filled',
    },
    valid: {
      colors: [
        'white',
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
      variants: ['filled', 'outlined', 'ghost', 'gradient'],
    },
    styles: {
      base: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'flex-col',
        gap: 'gap-2',
      },
    },
  },
  timelineIcon: {
    defaultProps: {
      color: 'gray',
      variant: 'filled',
    },
    valid: {
      colors: [
        'white',
        'blue-gray',
        'gray',
        'brown',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'red',
      ],
      variants: ['filled', 'outlined', 'ghost', 'gradient'],
    },
    styles: {
      base: {
        width: 'w-max',
        height: 'w-max',
        padding: 'p-1.5',
        position: 'relative',
        zIndex: 'z-[2]',
        flexShrink: 'flex-shrink-0',
        borderRadius: 'rounded-full',
        overflow: 'overflow-hidden',
      },
      variants: {
        ghost: {
          transparent: {
            backgroud: 'bg-transparent',
            color: 'text-blue-gray-900',
          },
          white: {
            color: 'text-white',
            background: 'bg-white/10',
          },
          'blue-gray': {
            color: 'text-blue-gray-500',
            background: 'bg-blue-gray-500/10',
          },
          gray: {
            color: 'text-gray-900',
            background: 'bg-gray-900/10',
          },
          brown: {
            color: 'text-brown-500',
            background: 'bg-brown-500/10',
          },
          'deep-orange': {
            color: 'text-deep-orange-500',
            background: 'bg-deep-orange-500/10',
          },
          orange: {
            color: 'text-orange-500',
            background: 'bg-orange-500/10',
          },
          amber: {
            color: 'text-amber-500',
            background: 'bg-amber-500/10',
          },
          yellow: {
            color: 'text-yellow-500',
            background: 'bg-yellow-500/10',
          },
          lime: {
            color: 'text-lime-500',
            background: 'bg-lime-500/10',
          },
          'light-green': {
            color: 'text-light-green-500',
            background: 'bg-light-green-500/10',
          },
          green: {
            color: 'text-green-500',
            background: 'bg-green-500/10',
          },
          teal: {
            color: 'text-teal-500',
            background: 'bg-teal-500/10',
          },
          cyan: {
            color: 'text-cyan-500',
            background: 'bg-cyan-500/10',
          },
          'light-blue': {
            color: 'text-light-blue-500',
            background: 'bg-light-blue-500/10',
          },
          blue: {
            color: 'text-blue-500',
            background: 'bg-blue-500/10',
          },
          indigo: {
            color: 'text-indigo-500',
            background: 'bg-indigo-500/10',
          },
          'deep-purple': {
            color: 'text-deep-purple-500',
            background: 'bg-deep-purple-500/10',
          },
          purple: {
            color: 'text-purple-500',
            background: 'bg-purple-500/10',
          },
          pink: {
            color: 'text-pink-500',
            background: 'bg-pink-500/10',
          },
          red: {
            color: 'text-red-500',
            background: 'bg-red-500/10',
          },
        },
        filled: {
          transparent: {
            backgroud: 'bg-transparent',
            color: 'text-blue-gray-900',
          },
          white: {
            backgroud: 'bg-white',
            color: 'text-blue-gray-900',
          },
          'blue-gray': {
            backgroud: 'bg-blue-gray-500',
            color: 'text-white',
          },
          gray: {
            backgroud: 'bg-gray-900',
            color: 'text-white',
          },
          brown: {
            backgroud: 'bg-brown-500',
            color: 'text-white',
          },
          'deep-orange': {
            backgroud: 'bg-deep-orange-500',
            color: 'text-white',
          },
          orange: {
            backgroud: 'bg-orange-500',
            color: 'text-white',
          },
          amber: {
            backgroud: 'bg-amber-500',
            color: 'text-black',
          },
          yellow: {
            backgroud: 'bg-yellow-500',
            color: 'text-black',
          },
          lime: {
            backgroud: 'bg-lime-500',
            color: 'text-black',
          },
          'light-green': {
            backgroud: 'bg-light-green-500',
            color: 'text-white',
          },
          green: {
            backgroud: 'bg-green-500',
            color: 'text-white',
          },
          teal: {
            backgroud: 'bg-teal-500',
            color: 'text-white',
          },
          cyan: {
            backgroud: 'bg-cyan-500',
            color: 'text-white',
          },
          'light-blue': {
            backgroud: 'bg-light-blue-500',
            color: 'text-white',
          },
          blue: {
            backgroud: 'bg-blue-500',
            color: 'text-white',
          },
          indigo: {
            backgroud: 'bg-indigo-500',
            color: 'text-white',
          },
          'deep-purple': {
            backgroud: 'bg-deep-purple-500',
            color: 'text-white',
          },
          purple: {
            backgroud: 'bg-purple-500',
            color: 'text-white',
          },
          pink: {
            backgroud: 'bg-pink-500',
            color: 'text-white',
          },
          red: {
            backgroud: 'bg-red-500',
            color: 'text-white',
          },
        },
        outlined: {
          transparent: {
            backgroud: 'bg-transparent',
            color: 'text-blue-gray-900',
          },
          white: {
            border: 'border border-white',
            color: 'text-white',
          },
          'blue-gray': {
            border: 'border border-blue-gray-500',
            color: 'text-blue-gray-500',
          },
          gray: {
            border: 'border border-gray-900',
            color: 'text-gray-900',
          },
          brown: {
            border: 'border border-brown-500',
            color: 'text-brown-500',
          },
          'deep-orange': {
            border: 'border border-deep-orange-500',
            color: 'text-deep-orange-500',
          },
          orange: {
            border: 'border border-orange-500',
            color: 'text-orange-500',
          },
          amber: {
            border: 'border border-amber-500',
            color: 'text-amber-500',
          },
          yellow: {
            border: 'border border-yellow-500',
            color: 'text-yellow-500',
          },
          lime: {
            border: 'border border-lime-500',
            color: 'text-lime-500',
          },
          'light-green': {
            border: 'border border-light-green-500',
            color: 'text-light-green-500',
          },
          green: {
            border: 'border border-green-500',
            color: 'text-green-500',
          },
          teal: {
            border: 'border border-teal-500',
            color: 'text-teal-500',
          },
          cyan: {
            border: 'border border-cyan-500',
            color: 'text-cyan-500',
          },
          'light-blue': {
            border: 'border border-light-blue-500',
            color: 'text-light-blue-500',
          },
          blue: {
            border: 'border border-blue-500',
            color: 'text-blue-500',
          },
          indigo: {
            border: 'border border-indigo-500',
            color: 'text-indigo-500',
          },
          'deep-purple': {
            border: 'border border-deep-purple-500',
            color: 'text-deep-purple-500',
          },
          purple: {
            border: 'border border-purple-500',
            color: 'text-purple-500',
          },
          pink: {
            border: 'border border-pink-500',
            color: 'text-pink-500',
          },
          red: {
            border: 'border border-red-500',
            color: 'text-red-500',
          },
        },
        gradient: {
          transparent: {
            backgroud: 'bg-transparent',
            color: 'text-blue-gray-900',
          },
          white: {
            backgroud: 'bg-white',
            color: 'text-blue-gray-900',
          },
          'blue-gray': {
            backgroud: 'bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400',
            color: 'text-white',
          },
          gray: {
            backgroud: 'bg-gradient-to-tr from-gray-900 to-gray-800',
            color: 'text-white',
          },
          brown: {
            backgroud: 'bg-gradient-to-tr from-brown-600 to-brown-400',
            color: 'text-white',
          },
          'deep-orange': {
            backgroud: 'bg-gradient-to-tr from-deep-orange-600 to-deep-orange-400',
            color: 'text-white',
          },
          orange: {
            backgroud: 'bg-gradient-to-tr from-orange-600 to-orange-400',
            color: 'text-white',
          },
          amber: {
            backgroud: 'bg-gradient-to-tr from-amber-600 to-amber-400',
            color: 'text-black',
          },
          yellow: {
            backgroud: 'bg-gradient-to-tr from-yellow-600 to-yellow-400',
            color: 'text-black',
          },
          lime: {
            backgroud: 'bg-gradient-to-tr from-lime-600 to-lime-400',
            color: 'text-black',
          },
          'light-green': {
            backgroud: 'bg-gradient-to-tr from-light-green-600 to-light-green-400',
            color: 'text-white',
          },
          green: {
            backgroud: 'bg-gradient-to-tr from-green-600 to-green-400',
            color: 'text-white',
          },
          teal: {
            backgroud: 'bg-gradient-to-tr from-teal-600 to-teal-400',
            color: 'text-white',
          },
          cyan: {
            backgroud: 'bg-gradient-to-tr from-cyan-600 to-cyan-400',
            color: 'text-white',
          },
          'light-blue': {
            backgroud: 'bg-gradient-to-tr from-light-blue-600 to-light-blue-400',
            color: 'text-white',
          },
          blue: {
            backgroud: 'bg-gradient-to-tr from-blue-600 to-blue-400',
            color: 'text-white',
          },
          indigo: {
            backgroud: 'bg-gradient-to-tr from-indigo-600 to-indigo-400',
            color: 'text-white',
          },
          'deep-purple': {
            backgroud: 'bg-gradient-to-tr from-deep-purple-600 to-deep-purple-400',
            color: 'text-white',
          },
          purple: {
            backgroud: 'bg-gradient-to-tr from-purple-600 to-purple-400',
            color: 'text-white',
          },
          pink: {
            backgroud: 'bg-gradient-to-tr from-pink-600 to-pink-400',
            color: 'text-white',
          },
          red: {
            backgroud: 'bg-gradient-to-tr from-red-600 to-red-400',
            color: 'text-white',
          },
        },
      },
    },
  },
  timelineHeader: {
    styles: {
      base: {
        display: 'flex',
        alignItems: 'items-center',
        gap: 'gap-4',
      },
    },
  },
  timelineBody: {
    styles: {
      base: {
        display: 'flex',
        gap: 'gap-4',
      },
    },
  },
  timelineConnector: {
    styles: {
      base: {
        container: {
          position: 'absolute',
          left: 'left-0',
          display: 'grid',
          justifyContent: 'justify-center',
          backgroundColor: 'bg-transparent',
          transition: 'transition-opacity duration-200',
        },
        line: {
          width: 'w-0.5',
          height: 'h-full',
          backgroundColor: 'bg-blue-gray-100',
        },
      },
    },
  },
  step: {
    styles: {
      base: {
        initial: {
          position: 'relative',
          zIndex: 'z-10',
          display: 'grid',
          placeItems: 'place-items-center',
          width: 'w-10',
          height: 'h-10',
          borderRadius: 'rounded-full',
          backgroundColor: 'bg-gray-300',
          color: 'text-gray-900',
          fontWeight: 'font-bold',
          transition: 'transition-all duration-300',
        },
        active: {
          backgroundColor: 'bg-gray-900',
          color: 'text-white',
        },
        completed: {
          backgroundColor: 'bg-gray-900',
          color: 'text-white',
        },
      },
    },
  },
  stepper: {
    styles: {
      base: {
        stepper: {
          width: 'w-full',
          position: 'relative',
          display: 'flex',
          alignItems: 'items-center',
          justifyContent: 'justify-between',
        },
        line: {
          initial: {
            position: 'absolute',
            left: 'left-0',
            top: 'top-2/4',
            height: 'h-0.5',
            width: 'w-full',
            transform: '-translate-y-2/4',
            backgroundColor: 'bg-gray-300',
          },
          active: {
            backgroundColor: 'bg-gray-900',
            transition: 'transition-all',
            duration: 'duration-500',
          },
        },
      },
    },
  },
  speedDial: {
    defaultProps: {
      offset: 5,
      placement: 'top',
      animate: {
        unmount: {},
        mount: {},
      },
    },
  },
  speedDialContent: {
    styles: {
      padding: 'p-0.5',
      width: 'w-max',
      display: 'flex',
      flexDirection: 'flex-col',
      alignItems: 'items-center',
      gap: 'gap-1',
    },
  },
  speedDialAction: {
    styles: {
      display: 'flex',
      flexDirection: 'flex-col',
      alignItems: 'items-center',
      justifyContent: 'justify-center',
      gap: 'gap-1',
      padding: 'p-1',
      margin: 'm-0.5',
      borderWidth: 'border',
      minWidth: 'min-w-[48px]',
      fontFamily: 'font-normal',
      minHeight: 'min-h-[48px]',
      backgroundColor: 'bg-white',
      borderRadius: 'rounded-full',
      borderColor: 'border-blue-gray-50',
      scale: 'hover:scale-110 focus:scale-110 active:scale-100',
      transition: 'transition-transform duration-300 ease-in-out',
    },
  },
};
