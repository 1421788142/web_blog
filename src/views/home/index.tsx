import { Image, Tag } from 'antd'
import dayjs from 'dayjs'
import Lan from './Lan'
import Ecology from './Ecology'
import Waves from './Waves'
import './index.less'
import { getAssets } from '@/utils'
import Project from './Project'

const Home:React.FC = ()=>{
    const age = dayjs().diff('2001-09-12', 'year') 
    const workYear = dayjs().diff('2021-03-01', 'year') 

    return (<div className="">
        <div className='relative w-full'>
            <Image preview={false} src={getAssets('/image/home/banner.png')}></Image>
            <Waves/>
        </div>
        <div className="px-4 md:px-0 flex mt-[100px] md:!mt-[-200px] flex-col blog-wrapper md:flex-row">
            <div className='w-[100%] z-[99] md:w-[68%] '>
                <div className="w-full p-6 bg-white shadow-2xl rounded-xl">
                    <h1 className="text-4xl font-bold">欢迎大家来到我的博客</h1>
                    <div className="text-[16px] text-[#666]">
                        <div>1.自我介绍一下</div>
                        <div className='my-2'>
                            <Tag color="orange">性别：男</Tag>
                            <Tag color="orange">年龄：{age}岁</Tag>
                            <Tag color="orange">学历：大专</Tag>
                            <Tag color="orange">工作年龄：{workYear}年</Tag>
                        </div>
                        <div>一个在小型创业公司待过一年、停车自研公司待过两年的前端开发，正在努力成为全栈工程师。</div>
                        <div className="my-2">
                            说说我的优势：由于待过的公司都是自研项目为主，且公司前端人员不多，所有早早的走上了工程化的道路。
                            加上自己对前端的不断学习和摸索、所以自己算是啥都干的前端、可以负责项目的整条开发流程
                            （框架选型、组件库选型、开发规范、底层封装直到项目测试结束、上线）。
                            <br />
                        </div>
                        <div className="mt-2">
                            有优势肯定有劣势：非科班出身，学历不够，年纪和经验不匹配(导致很多人以为我是培训机构刚出来经验包装的)
                        </div>
                    </div>
                </div>
                <div className="w-full p-6 mt-4 bg-white shadow-2xl rounded-xl">
                    <h1 className="text-2xl text-center">职业规划</h1>
                    <div className="text-[16px] text-[#666]">
                        1.将前端将 Vue 和 React 使用到精通、提升阅读源码的能力、并且持续学习Nodejs、学习Electron开发桌面端程序、熟练掌握前端工程化、开发更多优秀的前端开源项目。 <br />
                        2.学习后端 Java、玩转Java全家桶、熟练使用Sql数据库。 <br />
                        3.开发一套商城系统、音乐播放器桌面端。
                    </div>
                </div>
            </div>

            <div className="flex-1 mt-4 ml-0 md:ml-10 md:mt-0">
                <Lan />
                <Ecology />
            </div>
        </div>
        <div className='px-4 blog-wrapper md:px-0'>
            <Project />
        </div>
    </div>)
}

export default Home