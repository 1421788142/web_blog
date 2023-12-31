import { useMemo } from "react"
import { HeaderPropsType } from "./type"

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

export default Header