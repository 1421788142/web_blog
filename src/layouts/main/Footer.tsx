import SvgIcon from '@/components/SvgIcon';
import { Divider, Tag } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom'

const Footer = ()=>{
    const navigate  = useNavigate()
    const { pathname }  = useLocation()

    const toLink = (url: string)=>{
        window.open(url)
    }

    const tags = [
        { title:'主页', url:'/' },
        { title:'文章', url:'/article' },
        { title:'资源', url:'/resource' },
        { title:'个人', url:'/user' },
        { title:'留言', url:'/notice' },
    ]

    const tagClick = (url:string)=>{
        if(pathname === url) return
        navigate(url)
    }



    return <div className="py-2 layout-mian-footer bg-[#fff]">
        <div className='max-w-[1400px] m-auto'>
            <div className='flex-auto'>
                <div>xiaowu•blog 记录美好学习时光、分享学习点点滴滴</div>
                <div className='mb-2'>
                    { tags.map(m=>{
                        return <Tag className='cursor-pointer' onClick={()=>tagClick(m.url)} key={m.url}>{ m.title }</Tag>
                    }) }
                </div>
            </div>
            <div className='flex-auto'>
                <a target='_blank' className='link' href='https://beian.miit.gov.cn/#/Integrated/index'>© 2023 xiaowu.blog</a>
                <div className='text-reight'>
                    
                    <a target='_blank' className='link' href='https://beian.mps.gov.cn/#/query/webSearch'>公网安备123456789号</a>
                </div>
            </div>
            <Divider className='bg-[#ddd] my-2' />
            <div className='flex justify-end'>
                <div onClick={()=>toLink('https://github.com/1421788142/web_blog')}>
                    <SvgIcon iconStyle={{ width: '40px', height: '40px', cursor: 'pointer' }} name="GitHub" />
                </div>
            </div>
        </div>
    </div>
}

export default Footer