import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    rounded = false,
    disabled = false,
    children,
    className,
    onClick,
    passProps,
}) {
    let Comp = 'button';
    const _props = {
        onClick,
        ...passProps,
    };

    if(disabled) {
        Object.keys(_props).forEach(key => {
            if(key.startsWith('on') && typeof _props[key]  === 'function') {
                delete _props[key];
            }
        })
    }

    if (to) {
        _props.to = to;
        Comp = Link;
    } else if (href) {
        _props.href = href;
        Comp = 'a';
    }
    
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        disabled,
        rounded,
        small,
        large,
    });

    return (
        <Comp className={classes} {..._props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
