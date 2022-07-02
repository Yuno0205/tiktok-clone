import classNames from "classnames/bind"
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
        <img className={cx("avatar")} src="https://i.pinimg.com/originals/81/0a/74/810a742030020a56494db336bb4b96c7.jpg" alt="img"></img>
        <div className={cx("info")}>
            <h4 className={cx("name")}>
                <span>Nhật Hào</span>
                <FontAwesomeIcon className={cx("check")} icon={faCheckCircle}/>
            </h4>
            <span className={cx("username")}>yuno0205</span>
        </div>
    </div>
  )
}

export default AccountItem