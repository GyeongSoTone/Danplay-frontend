import React from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import { Link } from 'react-router-dom'
import ROUTES from '../../../constants/routes'

const Header = () => {
  const cx = classNames.bind(styles)

  // 로그인 확인 로직 (임시)
  const isLogined = false
  const userPage = isLogined ? ROUTES.MYPAGE : ROUTES.LOGIN

  return (
    <div className={cx('header')}>
      <header className={cx('container')}>
        <Link to={ROUTES.ROOT}>
          <img
            className={cx('logo-main')}
            alt="logo-main"
            src="image/danplay_logo.png"
          />
        </Link>
        <div className={cx('user-menu')}>
          <Link to={userPage}>
            <AccountCircleOutlinedIcon
              className={cx('user-icon')}
              sx={{ stroke: '#ffffff', strokeWidth: 1 }}
            />
          </Link>
          <MoreHorizOutlinedIcon
            className={cx('more-icon')}
            sx={{ stroke: '#ffffff', strokeWidth: 1 }}
          />
        </div>
      </header>
    </div>
  )
}

export default Header
