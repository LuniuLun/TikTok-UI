import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useEffect, useState } from 'react';

const cx = classNames.bind(style);
const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn, hideOnClick = false, ...passProps }) {
    const [history, setHistory] = useState([{ data: items }]);
    // console.log(history.length);

    //phải làm như này vì để thay đổi menu item khi đăng nhập thành công
    useEffect(() => {
        setHistory([{ data: items }]);
      }, [items]);
    const current = history[history.length - 1];
    // console.log(history);
    // console.log(current);
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children; //convert sang boolean
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            {...passProps}
            hideOnClick={hideOnClick}
            offset={[10, 12]}
            delay={[0, 500]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.bool,
    hideOnClick: PropTypes.func,
};

export default Menu;
