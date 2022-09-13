import React from 'react'
import styles from './Input.module.scss'
import classNames from 'classnames/bind'

type InputProps = {
  className?: string
  placeholder?: string
  type?: React.HTMLInputTypeAttribute
  value?: string
  step?: number
  pattern?: string
  min?: number
  max?: number
}

const Input = ({
  className,
  placeholder,
  type,
  value,
  step,
  pattern,
  min,
  max,
}: InputProps) => {
  const cx = classNames.bind(styles)

  return (
    <input
      className={cx('input', cx(className))}
      placeholder={placeholder}
      type={type}
      value={value}
      step={step}
      pattern={pattern}
      min={min}
      max={max}
    />
  )
}

export default Input
