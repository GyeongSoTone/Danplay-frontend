import React from 'react'
import styles from './Login.module.scss'
import classNames from 'classnames/bind'
import Input from '../components/login/Input'
import LoginMessage from '../components/login/LoginMessage'

const Login = () => {
  const cx = classNames.bind(styles)

  return (
    <div className={cx('container')}>
      <LoginMessage />
      <form className={cx('login-form')}>
        <div>
          <Input placeholder={'단국대학교 이메일'} type="text" />
          <Input placeholder={'비밀번호'} type="password" />
        </div>
        <div className={cx('save-id')}>
          <input type="checkbox" id="save-id" />
          <label htmlFor="save-id" />
          <p>이메일 저장</p>
        </div>
        <div>
          <button type="submit">로그인</button>
        </div>
      </form>
      <div className={cx('login-sub-area')}>
        <div>비밀번호 찾기</div>
        <a href="/register">
          <b>회원가입</b>
        </a>
      </div>
    </div>
  )
}

export default Login
