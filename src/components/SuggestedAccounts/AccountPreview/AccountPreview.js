import Button from '@/components/Button';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1668002400&x-signature=r%2B%2FT3AjqLc1SHTyJ14S4mmg0ocg%3D"
                    alt=""
                />
                <Button primary className={cx('follow-btn')}>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>TheAnh28</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Thế Anh 28 Entertaiment</p>
            </div>
            <p className={cx('analytics')}>
                <strong className={cx('value')}>8.2M </strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>8.2M </strong>
                <span className={cx('label')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountPreview;
