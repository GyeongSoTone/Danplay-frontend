import React from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'

const Header = () => {
  const cx = classNames.bind(styles)

  return (
    <div>
      <header className={cx('container')}>
        <img
          className={cx('logo-main')}
          alt="logo-main"
          src="image/danplay_logo.png"
        />
        <div className={cx('user-menu')}>
          <AccountCircleOutlinedIcon
            className={cx('user-icon')}
            sx={{ stroke: '#ffffff', strokeWidth: 1 }}
          />
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
