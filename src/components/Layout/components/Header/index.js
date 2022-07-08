import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import images from "~/assets/images";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { InboxIcon, MessageIcon,  UploadIcon } from "~/components/Icons";
import Images from "~/components/Images";
import Search from "../Search";
import { Link } from "react-router-dom";
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

const currentuser = true;
function Header() {
  
  const MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: "English",
      children: {
        title: "Language",
        data: [
          {
            type: "language",
            code: "en",
            title: "English",
          },
          {
            type: "language",
            code: "vi",
            title: "Tiếng Việt",
          },
        ],
      },
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: "Feedback and help",
      to: "/feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: "Keyboard shortcuts",
    },
  ];

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        //Handle change language
        break;

      default:
        break;
    }
  };

  const userMenu =[
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/profile",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Setting",
      to: "/setting",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate : true,
    },
  ]
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
         <Link to={routesConfig.home} className={cx('logo-link')}><img src={images.logo} alt="Tiktok" /></Link> 
        </div>
        
        <Search/>

        <div className={cx("actions")}>
          {currentuser ? (
            <>
              <Tippy delay={[0, 60]} content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                    <UploadIcon/>
                </button>
                
              </Tippy>

              <Tippy delay={[0, 60]} content="Message" placement="bottom">
                <button className={cx("action-btn")}>
                    <MessageIcon/>
                </button>
                
              </Tippy>

              <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                <button className={cx("action-btn")}>
                    <InboxIcon/>
                    <span className={cx('badge')}>12</span>
                </button>
                
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu items={currentuser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentuser ? (
              <Images
                className={cx("user-avatar")}
                src="https://pbs.twimg.com/profile_images/1295678762508382208/29pyF28V_400x400.jpg"
                alt="Nhật Hào"
              ></Images>
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
