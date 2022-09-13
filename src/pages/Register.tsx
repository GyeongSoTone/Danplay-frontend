import React from 'react'
import styles from './Register.module.scss'
import classNames from 'classnames/bind'
import Input from '../components/account/Input'
import LoginMessage from '../components/account/HeaderMessage'
import LabeledInput from '../components/account/LabeledInput'

const Register = () => {
  const cx = classNames.bind(styles)

  return (
    <div className={cx('container')}>
      <LoginMessage />
      <form className={cx('register-form')}>
        <LabeledInput
          label="아이디"
          placeholder="영문, 숫자 6자 이상 12자 이하"
          type="text"
        />
        <LabeledInput
          label="비밀번호"
          placeholder="영문, 숫자 6자 이상 12자 이하"
          type="password"
        />
        <LabeledInput label="비밀번호 확인" type="password" />
        <div className={cx('authentication-input')}>
          <LabeledInput
            label="단국대학교 이메일"
            placeholder="ex) 12345678@dankook.ac.kr"
            type="email"
          />
          <button className={cx('input-btn')}>이메일 인증</button>
        </div>
        <div className={cx('authentication-text')}>
          이메일 인증 후 서비스를 이용하실 수 있습니다.
        </div>
        <div className={cx('authentication-input')}>
          <LabeledInput label="인증번호" type="text" />
          <button className={cx('input-btn')}>확인하기</button>
        </div>
        <div className={cx('authentication-text')}>2분 59초 남았습니다.</div>
        <LabeledInput label="이름" type="text" />
        <LabeledInput
          label="휴대폰 번호"
          placeholder="ex) 010-1234-5678"
          type="tel"
          pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
        />
        <div className={cx('label')}>생년월일</div>
        <div className={cx('birth')}>
          <Input
            className={cx('birth-input')}
            placeholder="년(4자)"
            type="number"
            min={1970}
            max={2005}
          />
          <Input
            className={cx('birth-input')}
            placeholder="월"
            type="number"
            min={1}
            max={12}
          />
          <Input
            className={cx('birth-input')}
            placeholder="일"
            type="number"
            min={1}
            max={31}
          />
        </div>
        <div className={cx('label')}>성별</div>
        <div className={cx('check', 'radio')}>
          <input type="radio" id="male" name="gender" />
          <label htmlFor="male">
            <div className={cx('check-box', 'checked')} />
            남자
          </label>
          <input type="radio" id="female" name="gender" />
          <label htmlFor="female">
            <div className={cx('check-box')} />
            여자
          </label>
        </div>
        <div className={cx('preferred-sports')}>
          <div className={cx('label')}>선호 종목</div>
          <div className={cx('text')}>중복 선택이 가능합니다!</div>
        </div>
        <div className={cx('check')}>
          <input type="checkbox" id="futsal" name="sports" />
          <label htmlFor="futsal">
            <div className={cx('check-box')} />
            풋살
          </label>
          <input type="checkbox" id="soccer" name="sports" />
          <label htmlFor="soccer">
            <div className={cx('check-box')} />
            축구
          </label>
          <input type="checkbox" id="basketball" name="sports" />
          <label htmlFor="basketball">
            <div className={cx('check-box')} />
            농구
          </label>
          <input type="checkbox" id="tennis" name="sports" />
          <label htmlFor="tennis">
            <div className={cx('check-box')} />
            테니스
          </label>
        </div>
        <button className={cx('submit')} type="submit">
          회원가입
        </button>
      </form>
    </div>
  )
}

export default Register
