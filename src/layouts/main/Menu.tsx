import React, { useState } from 'react';
import {  } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import SvgIcon from '@/components/SvgIcon';

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

const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu
    rootClassName='layout-mian-menu'
    onClick={onClick}
    selectedKeys={[current]}
    mode="horizontal"
    items={items}
  />;
};

export default App;