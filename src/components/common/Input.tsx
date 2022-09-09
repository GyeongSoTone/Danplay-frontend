import React from 'react'
import styles from './Input.module.scss'
import classNames from 'classnames/bind'

const Input = ({ placeholder, type }) => {
  const cx = classNames.bind(styles)

  return <input className={cx('input')} placeholder={placeholder} type={type} />
}

export default Input
