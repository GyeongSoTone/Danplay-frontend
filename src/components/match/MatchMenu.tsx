import React from 'react'
import styles from './MatchMenu.module.scss'
import classNames from 'classnames/bind'
import { observer } from 'mobx-react-lite'
import { useMatchStore } from '../../contexts'
import { SPORTS } from '../../constants/match'

const MatchMenu = observer(() => {
  const cx = classNames.bind(styles)
  const { selectedMenu, setSelectedMenu } = useMatchStore()

  const handleClickMenu = (sports: string) => {
    setSelectedMenu(sports)
  }

  return (
    <div className={cx('container')}>
      <div
        className={cx('menu-item', {
          selected: selectedMenu === SPORTS.FUTSAL,
        })}
        onClick={() => handleClickMenu(SPORTS.FUTSAL)}
      >
        풋살
      </div>
      <div
        className={cx('menu-item', {
          selected: selectedMenu === SPORTS.SOCCER,
        })}
        onClick={() => handleClickMenu(SPORTS.SOCCER)}
      >
        축구
      </div>
      <div
        className={cx('menu-item', {
          selected: selectedMenu === SPORTS.BASKETBALL,
        })}
        onClick={() => handleClickMenu(SPORTS.BASKETBALL)}
      >
        농구
      </div>
      <div
        className={cx('menu-item', {
          selected: selectedMenu === SPORTS.TENNIS,
        })}
        onClick={() => handleClickMenu(SPORTS.TENNIS)}
      >
        테니스
      </div>
    </div>
  )
})

export default MatchMenu
