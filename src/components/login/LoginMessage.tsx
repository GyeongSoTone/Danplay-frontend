import React from 'react'
import styles from './LoginMessage.module.scss'
import classNames from 'classnames/bind'

const LoginMessage = () => {
  const cx = classNames.bind(styles)

  return (
    <div className={cx('login-message')}>
      <b>DanPlay</b>에 로그인하고,
      <br />
      단국대 학우들과 스포츠 매치를 즐겨보세요!
    </div>
  )
}

export default LoginMessage
