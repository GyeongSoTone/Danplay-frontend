import React from 'react'
import styles from './LabeledInput.module.scss'
import classNames from 'classnames/bind'
import Input from '../common/Input'

type LabeledInputProps = {
  label: string
  placeholder: string
  type: string
}

const LabeledInput = ({ label, placeholder, type }: LabeledInputProps) => {
  const cx = classNames.bind(styles)

  return (
    <div className={cx('container')}>
      <div className={cx('label')}>{label}</div>
      <Input placeholder={placeholder} type={type} />
    </div>
  )
}

export default LabeledInput
