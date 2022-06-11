import React from 'react'
import styles from './Input.module.scss'
import classNames from 'classnames/bind'

type InputProps = {
  placeholder?: string
  type?: React.HTMLInputTypeAttribute
  value?: string
  step?: string
}

const Input = ({ placeholder, type, value, step }: InputProps) => {
  const cx = classNames.bind(styles)

  return (
    <input
      className={cx('input')}
      placeholder={placeholder}
      type={type}
      value={value}
      step={step}
    />
  )
}

export default Input
