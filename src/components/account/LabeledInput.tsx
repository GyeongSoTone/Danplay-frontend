import React from 'react'
import styles from './LabeledInput.module.scss'
import classNames from 'classnames/bind'
import Input from './Input'

type LabeledInputProps = {
  label: string
  placeholder?: string
  type?: string
  pattern?: string
}

const LabeledInput = ({
  label,
  placeholder,
  type,
  pattern,
}: LabeledInputProps) => {
  const cx = classNames.bind(styles)

  return (
    <div className={cx('container')}>
      <div className={cx('label')}>{label}</div>
      <Input placeholder={placeholder} type={type} pattern={pattern} />
    </div>
  )
}

export default LabeledInput
