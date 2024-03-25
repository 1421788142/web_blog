import React, { useMemo } from "react"
import { HeaderPropsType } from "./type"
import { Avatar, Dropdown } from "antd"
import { getAssets } from "@/utils"
import Menu from "./Menu";
import { DownOutlined } from "@ant-design/icons";

const Header:React.FC<HeaderPropsType> = (props)=>{
    const { hide, show, children } = props

    const rootClass = useMemo(()=>{
        return [
            'layout-mian-header fixed left-0 top-0 z-[999]',
            ( hide ? 'hide' : ''),
            ( show ? 'show' : ''),
        ].join(' ')
    },[ props ])

    return (
        <div className={rootClass}>
            { children }
        </div>
    )
}

const MenuContainer = React.memo(() => {
    return (
        <Menu />
    )
})

const HeaderContainer:React.FC<Omit<HeaderPropsType,'children'>> = (props) => {
    const { hide, show } = props
    const { VITE_PROJECT_NAME, VITE_PROJECT_LOGO } = import.meta.env

    return (
        <Header hide={hide} show={show}>
            <div className="flex items-center justify-between w-full h-full px-4 mx-auto blog-content-bg">
                <div className="flex items-center h-full">
                    <Avatar size={50} src={getAssets(VITE_PROJECT_LOGO)} />
                    <div className="ml-3 text-xl font-bold">{ VITE_PROJECT_NAME }</div>
                </div>
                <div className="flex-1 w-[10px] h-full">
                    <MenuContainer />
                </div>
                <Dropdown menu={{ items:[
                    { label:'登录', key:'login'  }
                ] }}>
                    <span>彭于晏 <DownOutlined /></span>
                </Dropdown>
            </div>
        </Header>
    )
}

export default HeaderContainer