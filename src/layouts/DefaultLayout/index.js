import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Sidebar from '../components/Sidebar';
import style from './DefaultLayout.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    const [login, setLogin] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    const setLoginSidebar = (value) => {
        setLogin(value);
    };

    const setLoginHeader = (isLogin, user) => {
        setLogin(isLogin);
        setCurrentUser(user);
    };

    useEffect(() => {}, [login]);

    return (
        <div className={cx('wrapper')}>
            <Header setLoginSidebar={setLoginSidebar} login={login} currentUser={currentUser} />
            <div className={cx('container')}>
                <Sidebar login={login} setLoginHeader={setLoginHeader} />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
