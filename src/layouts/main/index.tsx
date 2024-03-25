import HeaderContainer from "./Header";
import './index.less'
import { FloatButton } from 'antd';
import React from "react";
import SvgIcon from "@/components/SvgIcon";
import Footer from "./Footer";
import Container from "./Container";
import Music from "./Music";

const MainContainer = React.memo(() => <Container />)

const MainLayout:React.FC = () => {
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
            <HeaderContainer show={show} hide={hide} />
            <div className="layout-mian-content">
                <MainContainer/>
            </div>
            <FloatButton.BackTop
                rootClassName="custom-back-top"
                visibilityHeight={500}
                style={{ right: 20, bottom: 150 }}
                target={()=>document.querySelector('#layout-mian') as HTMLElement}
                icon={ <SvgIcon name="backTop" /> }
            />
            <Footer/>
            <Music/>
        </div>
    )
}

export default MainLayout