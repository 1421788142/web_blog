import { Input, Button, Avatar } from 'antd'
import './index.less'
import SvgIcon from '@/components/SvgIcon'
import { CommentOutlined, UserOutlined } from '@ant-design/icons'

const Article = () => {
    return (
        <div className='notice-wrapper'>
            <div className='blog-wrapper'>
                <div className='title'>
                    Welcome to leave a message
                </div>
                <div className='msg-cont'>
                    <Input.TextArea
                        placeholder='请输入你的留言内容'
                        autoSize={{ minRows: 5, maxRows: 8 }}
                        bordered={false}
                        maxLength={200}
                        showCount
                    ></Input.TextArea>
                    <div className='msg-btn'>
                        <div>
                            <SvgIcon iconStyle={{
                                width: '40px',
                                height: '40px',
                                cursor: 'pointer',
                            }} name='laugh'></SvgIcon>
                        </div>
                        <div>
                            <Button type='primary'>提交</Button>
                        </div>
                    </div>
                </div>
                <div className='msg-list'>
                    <div className='msg-list-item'>
                        <div className='flex'>
                            <Avatar size={64} icon={<UserOutlined />} />
                            <div className='flex-1 ml-2'>
                                <div className='text-xl font-bold'>彭于晏</div>
                                <div className='w-[100%] text-[#333]'>因为我那时修改了一下登录逻辑，登录本地调试要改登录回调地址，费事，然后在线上调试的，出现了短暂的服务器错误！因为我那时修改了一下登录逻辑，登录本地调试要改登录回调地址，费事，然后在线上调试的，出现了短暂的服务器错误！因为我那时修改了一下登录逻辑，登录本地调试要改登录回调地址，费事，然后在线上调试的，出现了短暂的服务器错误！因为我那时修改了一下登录逻辑，登录本地调试要改登录回调地址，费事，然后在线上调试的，出现了短暂的服务器错误！</div>
                            </div>
                        </div>
                        <div className='flex justify-between px-2 mt-4'>
                            <div className='text-[#999]'>
                                <span className='mr-2'>一小时前</span>
                                <span>江苏.无锡</span>
                            </div>
                            <div>
                                <CommentOutlined className='text-2xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Article