import React from 'react'
import styles from './Input.module.scss'
import classNames from 'classnames/bind'

type InputProps = {
  placeholder: string
  type: React.HTMLInputTypeAttribute
}

const Input = ({ placeholder, type }: InputProps) => {
  const cx = classNames.bind(styles)

  return <input className={cx('input')} placeholder={placeholder} type={type} />
}

export default Input
