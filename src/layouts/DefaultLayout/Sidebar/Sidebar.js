import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

function Sidebar() {
    return <aside className={cx('wrapper')}>
        Side bar
    </aside>
}

export default Sidebar;