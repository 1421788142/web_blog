import SvgIcon from "@/components/SvgIcon";
import { getAssets } from "@/utils";
import { Card, Tag } from "antd"
import React from "react";
import { items } from "./Lan";
import { itemsType } from "./type";

const newIems = [
    { title:'Pinia', svgName:'pinia' },
    { title:'VueUse', svgName:'use' },
    { title:'VueRouter', svgName:'Vue' },
    { title:'Antd', svgName:'antd' },
    { title:'Element', svgName:'element' },
    { title:'Tailwind Css', svgName:'tailwindcss' },
    { title:'Vite', svgName:'vite' },
    { title:'Webpack', svgName:'webpack' },
    { title:'Redux', svgName:'redux' },
    { title:'React Router', svgName:'reactRouter' },
] as itemsType

const Ecology:React.FC = ()=>{
    const iconStyle = { width: '20px', height: '20px' };
    return (
        <Card title="使用过的生态（ 常用 ）" className='mt-4 shadow-2xl rounded-xl'>
            <div className='flex flex-wrap'>
                { newIems.map(m=>{
                    return (
                    <Tag key={m.title} className='flex items-center py-1 mb-1'>
                        { m.svgName && <SvgIcon iconStyle={iconStyle} name={ m.svgName }></SvgIcon> }
                        { m.imgName && <img style={iconStyle} src={ getAssets(m.imgName) }></img> }
                        <span className="ml-1">{ m.title }</span>
                    </Tag>
                    )
                }) }
            </div>
        </Card>
    )
}

export default Ecology