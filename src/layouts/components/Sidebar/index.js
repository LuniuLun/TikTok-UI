import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeIconActive,
    UserGroupIconActive,
    LiveIconActive,
    ExploreIcon,
    ExploreIconActive,
} from '~/components/Icon';
import SuggestedAccount from '~/components/SuggestedAccount';

const cx = classNames.bind(style);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupIconActive />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreIconActive />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconActive />} />
                <SuggestedAccount lable="Suggested accounts" />
                <SuggestedAccount lable="Flowwing accounts" />
            </Menu>
        </aside>
    );
}

export default Sidebar;
