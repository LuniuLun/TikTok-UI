import classNames from "classnames/bind";
import style from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img 
                className={cx('avatar')} 
                src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/352190380_1278408896439958_8519865347595882913_n.jpg?_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=HNFhZdML7hQAX_uN_Y-&_nc_ht=scontent.fhan14-1.fna&oh=00_AfBPc1w5VXfMpZObafQ0KlVaIQTKIyz3CkFvQaLDKhMsow&oe=64AF5E23" 
                alt="NhiLun"/>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Duc Van</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </p>
                <span className={(cx('username'))}>LuniuLun</span>
            </div>
        </div>
    );
}

export default AccountItem;