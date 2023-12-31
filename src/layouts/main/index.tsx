import { Navigate, useLocation, useOutlet } from "react-router-dom";
import Header from "./Header";
import './index.less'
import { Avatar, FloatButton, Dropdown } from 'antd';
import React from "react";
import SvgIcon from "@/components/SvgIcon";
import { getAssets } from "@/utils";
import Menu from "./Menu";
import { DownOutlined } from "@ant-design/icons";
import Footer from "./Footer";

const MainLayout:React.FC = () => {
    const { VITE_PROJECT_NAME, VITE_PROJECT_LOGO } = import.meta.env
    const outlet = useOutlet()
    const [ show, setShow ] = React.useState<boolean>(false)
    const [ scrollTop, setScrollTop ] = React.useState<number>(0)
    const scrollWrapBox = React.useRef<HTMLDivElement>(null)

    const scrollToTop = () => {
        let scroll = scrollWrapBox.current?.scrollTop || 0;
        setShow(()=>scrollTop > scroll)
        setScrollTop(scroll)
    }

    const hide = React.useMemo(()=>{
        return scrollTop > 60
    },[ scrollTop ])
    
    React.useEffect(()=>{
        if(!scrollWrapBox.current) return
        scrollWrapBox.current.removeEventListener('scroll', scrollToTop)
        return scrollWrapBox.current.addEventListener('scroll', scrollToTop)
    },[scrollTop])

    return (
        <div className="layout-mian" id="layout-mian" ref={scrollWrapBox}>
            <Header hide={hide} show={show}>
                <div className="flex items-center justify-between w-full h-full px-4 mx-auto blog-content-bg">
                    <div className="flex items-center h-full">
                        <Avatar size={50} src={getAssets(VITE_PROJECT_LOGO)} />
                        <div className="ml-3 text-xl font-bold">{ VITE_PROJECT_NAME }</div>
                    </div>
                    <div className="flex-1 w-[10px] h-full">
                        <Menu />
                    </div>
                    <Dropdown menu={{ items:[
                        { label:'登录', key:'login'  }
                    ] }}>
                        <span>彭于晏 <DownOutlined /></span>
                    </Dropdown>
                </div>
            </Header>
            <div className="layout-mian-content">
                { outlet }
            </div>
            <FloatButton.BackTop
                rootClassName="custom-back-top"
                visibilityHeight={500}
                target={()=>document.querySelector('#layout-mian') as HTMLElement}
                icon={ <SvgIcon name="backTop" /> }
            />
            <Footer/>
        </div>
    )
}

export default MainLayout