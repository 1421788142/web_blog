import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import SvgIcon from '@/components/SvgIcon';
import { useNavigate, useLocation } from 'react-router-dom'

const iconStyle = { width: '20px', height: '20px' };

const items: MenuProps['items'] = [
  {
    label: '主页',
    key: '/',
    icon: <SvgIcon iconStyle={iconStyle} name="home" />,
  },
  {
    label: '文章管理',
    key: '/article',
    icon: <SvgIcon iconStyle={iconStyle} name="article" />,
  },
  {
    label: '资源管理',
    key: '/resource',
    icon: <SvgIcon iconStyle={iconStyle} name="resource" />,
  },
  {
    label: '个人空间',
    key: '/user',
    icon: <SvgIcon iconStyle={iconStyle} name="user" />,
  },
  {
    label: '留言管理',
    key: '/notice',
    icon: <SvgIcon iconStyle={iconStyle} name="notice" />,
  },
];

const MenuContainer: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation()
  const [current, setCurrent] = useState(pathname);

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  React.useEffect(()=>{
    setCurrent(pathname)
  },[ pathname ])

  return <Menu
    rootClassName='layout-mian-menu'
    onClick={onClick}
    selectedKeys={[current]}
    mode="horizontal"
    items={items}
  />;
};

export default MenuContainer;