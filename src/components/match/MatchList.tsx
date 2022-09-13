import React from 'react'
import MatchItem from './MatchItem'
import { MatchData } from './mock/index'
import styles from './MatchList.module.scss'
import classNames from 'classnames/bind'
import { observer } from 'mobx-react-lite'
import { useMatchStore } from '../../contexts'

const cx = classNames.bind(styles)

const MatchList = observer(() => {
  const { selectedMenu } = useMatchStore()
  const matchData = MatchData.filter((data) => data.sports === selectedMenu)

  return (
    <div className={cx('container')}>
      {matchData.map((data) => (
        <MatchItem key={data.id} item={data} />
      ))}
    </div>
  )
})

export default MatchList
