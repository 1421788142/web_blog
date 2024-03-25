import { Outlet } from "react-router-dom"

const Container = ()=>{
    return <div className="layout-mian-content">
        <Outlet />
    </div>
}

export default Container