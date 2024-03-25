import SvgIcon from "@/components/SvgIcon"
import { EyeOutlined } from "@ant-design/icons";
import { Button, Carousel } from "antd"

const Project = ()=>{
    const list = [
        { id:1 },
        { id:2 },
        { id:3 },
    ]

    const contentStyle: React.CSSProperties = {
        height: '400px',
        color: '#fff',
        textAlign: 'center',
        background: '#364d79',
      };
      

    return (<div className="w-full mt-4 project">
        <h1 className="text-center">个人开源项目</h1>
        <div className="project-list">
            { list.map((m,i)=>{
                return (
                    <div key={m.id} className={[
                            'flex flex-col-reverse project-list-item md:flex-row',
                            (i % 2) === 0 ? '' : 'md:!flex-row-reverse !flex-col-reverse',
                        ].join(' ')}>
                        <div className="desc w-[100%] md:w-[45%]">
                            <div className="flex items-center">
                                <SvgIcon iconStyle={{ width: '40px', height:'40px' }} name="Vue" />
                                <span className="text-xl font-bold">WAdmin-Vue3</span>
                            </div>
                            <div className="my-4 text-[#666]">
                            🚀🚀🚀 WAdmin-React，基于 React18、React-Router v6、React-Hooks、Redux && Redux-Toolkit、TypeScript、Vite4、Ant-Design 5 开源的一套后台管理框架 开源的一套后台管理模板，目前利用空余时间开发。项目中很多样式都是借鉴其它的管理系统，但是代码都是自己敲的，整个项目还有很多地方不完善，后期会持续更新，希望大家能多提意见。(声明一下，我的React使用的并不是很熟练，我开发这个项目真的是为了学习React，希望大家多提提issuse，我会努力修改的)
                            </div>
                            <div className="flex items-center justify-center">
                                <Button type="primary" className="flex items-center">
                                    <SvgIcon iconStyle={{ width: '20px', height:'20px', fill:'#fff' }} name="GitHub" />
                                    <span className="ml-2">仓库</span>   
                                </Button>
                                <Button type="primary" className="ml-4">
                                    <EyeOutlined />
                                    <span>预览</span>
                                </Button>
                            </div>
                        </div>
                        <div className="imgs w-[100%] md:w-[55%]">
                            <Carousel autoplay>
                                <div>
                                    <div style={contentStyle}>1</div>
                                </div>
                                <div>
                                    <div style={contentStyle}>2</div>
                                </div>
                                <div>
                                    <div style={contentStyle}>3</div>
                                </div>
                                <div>
                                    <div style={contentStyle}>4</div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                )
            }) }
        </div>
    </div>)
}

export default Project