import { ButtonHTMLAttributes, DOMAttributes, FC, forwardRef, ReactNode } from "react";

type ButtonEventAttrs = Pick<
  DOMAttributes<HTMLButtonElement>,
  'onClick' | 'onMouseDown' | 'onMouseMove' | 'onMouseUp'
>

type ButtonProps = {
  type?: 'solid' | 'outline' | 'ghost' | 'soft' | 'white' | 'link'
  size?: 'small' | 'default' | 'large'
  color?: 'coral' | 'red' | 'blue' | 'green' | 'gray' | 'indigo' | 'purple' | 'pink' | 'white' | 'blank'
  children?: ReactNode
  className?: string
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type']
} & ButtonEventAttrs

const ButtonSizes = {
  default: 'py-3 px-4',
  small: 'py-2 px-3',
  large: 'py-3 px-4 sm:p-5',
}

const ButtonTypeStyles = {
  primary:
    'inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800',
  secondary:
    'inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500',
  tertiary:
    'inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm',
  brutalist: 'inline-flex justify-center items-center gap-2 rounded-md bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm',
  brutalistSecondary: 'inline-flex justify-center items-center gap-2 rounded-md bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm',
  backToTop:
    'inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800',
  navbar: 'py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm',
}


const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const {
    type,
    size,
    htmlType = 'button',
    color,
    className,
    children,
    ...rest
  } = props
  return (
    <button {...rest}></button>
  )
}

export default Button