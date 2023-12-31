import SvgIcon from "@/components/SvgIcon";
import { getAssets } from "@/utils";
import { Card, Tag } from "antd"
import React from "react";
import { itemsType } from "./type";

export const items = [
    { title:'Html', svgName:'html' },
    { title:'Css', svgName:'css' },
    { title:'Js', svgName:'JavaScript' },
    { title:'Vue', svgName:'Vue' },
    { title:'React', svgName:'react' },
    { title:'TypeScript', svgName:'typescript' },
    { title:'小程序', svgName:'xcx' },
    { title:'BI', svgName:'bi' },
    { title:'uni-app', imgName:'/image/home/uni.png' },
    { title:'NodeJS', svgName:'Nodejs' },
    { title:'Nestjs', svgName:'nestjs' },
] as itemsType

const Lan:React.FC = ()=>{
    const iconStyle = { width: '20px', height: '20px' };
    return (
        <Card title="技术栈" className='shadow-2xl rounded-xl'>
            <div className='flex flex-wrap'>
                { items.map(m=>{
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

export default Lan