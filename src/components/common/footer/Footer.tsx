import React from 'react'
import styles from './Footer.module.scss'
import classNames from 'classnames/bind'

const Footer = () => {
  const cx = classNames.bind(styles)

  return (
    <div className={cx('footer')}>
      <footer className={cx('container')}>
        <div className={cx('content')}>
          <div className={cx('information')}>
            <div>
              <span>
                <a href="/term">이용약관 |</a>
                <a href="/privacy">&nbsp;개인정보 처리방침</a>
              </span>
              <span className={cx('email')}>대표메일 danplay@gmail.com</span>
            </div>
            <div className={cx('copyright')}>
              <span>
                Copyright <b>©Danplay</b> All Rights Reserved.
              </span>
            </div>
          </div>
          <img
            className={cx('logo')}
            alt="logo-main"
            src="image/danplay_logo.png"
          />
        </div>
      </footer>
    </div>
  )
}

export default Footer
