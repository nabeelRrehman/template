import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";

import Auxiliary from "util/Auxiliary";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import IntlMessages from "../../util/IntlMessages";
import { connect } from "react-redux";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class SidebarContent extends Component {

  getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };

  componentWillMount() {
    const { language } = this.props

    this.setState({
      language
    })
  }

  componentWillReceiveProps(props) {
    if (props.language) {
      this.setState({
        language: props.language
      })
    }
  }

  render() {
    const { themeType, navStyle, pathname, locale } = this.props;
    const { language } = this.state;
    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split('/')[1];
    return (
      <Auxiliary>
        <SidebarLogo />
        <div className="gx-sidebar-content">
          <div className={`gx-sidebar-notifications ${this.getNoHeaderClass(navStyle)}`}>
            <UserProfile />
            {/* <AppsNavigation /> */}
          </div>
          <CustomScrollbars className="gx-layout-sider-scrollbar">
            <Menu
              defaultOpenKeys={[defaultOpenKeys]}
              selectedKeys={[selectedKeys]}
              openKeys={['sub1']}
              theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
              mode="inline">
              {/* <Menu.Item key="main/dashboard/crypto">
                  <Link to="/main/dashboard/crypto">
                    <i className="icon icon-crypto" />
                    <IntlMessages id="sidebar.dashboard" />
                  </Link>
                </Menu.Item> */}
              <Menu.Item key="main/dashboard">
                <Link to="/main/dashboard">
                  <i className="icon icon-dasbhoard" style={{ width: '20px', height: '20px' }} />
                  <IntlMessages id={language.dashboard} />
                </Link>
              </Menu.Item>

              <MenuItemGroup key="main" className="gx-menu-group" title={<IntlMessages id={language.main} />}>
                {/* <SubMenu key="dashboard" className={this.getNavStyleSubMenuClass(navStyle)}
                  title={<span> <i className="icon icon-dasbhoard" />
                    <IntlMessages id="sidebar.dashboard" /></span>}> */}


                <Menu.Item key="main/prevent">
                  <Link to="/main/prevent">
                    {/* <i className="icon icon-crm" /> */}
                    <img className={'icon icon-crm'} style={{ width: '20px', height: '20px' }} src={require('../../assets/sideBarIcons/prevent.png')} />
                    <IntlMessages id={language.forebygga} />
                  </Link>
                </Menu.Item>
                <Menu.Item key="main/akut">
                  <Link to="/main/akut">
                    {/* <i className="icon icon-listing-dbrd" /> */}
                    <img className={'icon icon-listing-dbrd'} style={{ width: '20px', height: '20px' }} src={require('../../assets/sideBarIcons/emergency.png')} />
                    <IntlMessages id={language.akut} />
                  </Link>
                </Menu.Item>

                <Menu.Item key="main/efter">
                  <Link to="/main/efter">
                    {/* <i className="icon icon-widgets" /> */}
                    <img className={'icon icon-widgets'} style={{ width: '20px', height: '20px' }} src={require('../../assets/sideBarIcons/aftericon.png')} />
                    <IntlMessages id={language.efter} /></Link>
                </Menu.Item>

                <Menu.Item key="main/contact">
                  <Link to="/main/contact">
                    {/* <i className="icon icon-phone" /> */}
                    <img className={'icon icon-phone'} style={{ width: '20px', height: '20px' }} src={require('../../assets/sideBarIcons/phonelist.png')} />
                    <IntlMessages id={language.contact} /></Link>
                </Menu.Item>

              </MenuItemGroup>


              <MenuItemGroup key="feature" className="gx-menu-group" title={<IntlMessages id={language.feature} />}>


                <SubMenu key="sub1"
                  title={<div className={'cursorDisable'}> <img className="icon icon-phone" style={{ width: '20px', height: '20px' }} src={require('../../assets/sideBarIcons/Icon-Push-notification.png')} />
                    {language.pushMsg}</div>}>

                  <Menu.Item key="main/push/automatic">
                    <Link to="/main/push/automatic">
                      {/* <i className="icon icon-phone" /> */}
                      <img className={'icon icon-phone'} style={{ width: '15px', height: '15px' }} src={require('../../assets/sideBarIcons/auto.png')} />
                      <IntlMessages id={language.auto} /></Link>
                  </Menu.Item>


                  <Menu.Item key="main/push/emergency">
                    <Link to="/main/push/emergency">
                      {/* <i className="icon icon-phone" /> */}
                      <img className={'icon icon-phone'} style={{ width: '15px', height: '15px' }} src={require('../../assets/sideBarIcons/emergencyiocn.png')} />
                      <IntlMessages id={language.emerMail} /></Link>
                  </Menu.Item>

                </SubMenu>

                <Menu.Item key="main/advertise">
                  <Link to="/main/advertise">
                    {/* <i className="icon icon-phone" /> */}
                    <img className={'icon icon-phone'} style={{ width: '20px', height: '20px' }} src={require('../../assets/sideBarIcons/emergencyiocn.png')} />
                    <IntlMessages id={language.advert} /></Link>
                </Menu.Item>

              </MenuItemGroup>

            </Menu>
          </CustomScrollbars>
        </div>
      </Auxiliary>
    );
  }
}

SidebarContent.propTypes = {};
const mapStateToProps = ({ settings }) => {
  const { navStyle, themeType, locale, pathname, language } = settings;
  return { navStyle, themeType, locale, pathname, language }
};
export default connect(mapStateToProps)(SidebarContent);

