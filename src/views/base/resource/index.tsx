import Waves from "@/components/Waves"
import { getAssets } from "@/utils"
import { Image } from 'antd'
import './index.less'

const Article = () => {
    const list = [
        { id:1, title:'标题', desc:'90后双鱼座普通逗比男青年。' },
        { id:2, title:'标题', desc:'90后双鱼座普通逗比男青年，目前专注于前端与PHP技术的学习。90后双鱼座普通逗比男青年，目前专注于前端与PHP技术的学习。' },
        { id:3, title:'标题', desc:'90后双鱼座普通逗比男青年，目前专注于前端与PHP技术的学习。' },
        { id:4, title:'标题', desc:'90后双鱼座普通逗比男青年，目前专注于前端与PHP技术的学习。90后双鱼座普通逗比男青年，目前专注于前端与PHP技术的学习。' },
    ]
    return (
        <div className="w-full resource-wrapper">
            <div className='relative w-full'>
                <Image preview={false} src={getAssets('/image/home/banner.png')}></Image>
                <Waves/>
            </div>
            <div className="block w-full md:grid blog-wrapper resource-list">
                { list.map(m=>{
                    return (
                        <div key={m.id} className="bg-white resource-list-item rounded-xl">
                            <Image src="https://avatars2.githubusercontent.com/u/23181508?s=460&v=4"></Image>
                            <div className="title">{ m.title }</div>
                            <div className="desc">{ m.desc }</div>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}


export default Article