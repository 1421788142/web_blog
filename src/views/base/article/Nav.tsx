import { UserOutlined } from "@ant-design/icons"
import { Avatar, Input, Tag, Button } from "antd"

const Container = ()=>{
    return (<div className="w-full md:w-[28%]">
        <div className="flex flex-col items-center p-4 mb-4 bg-white shadow-xl rounded-xl">
            <Avatar size={64} icon={<UserOutlined />} />
            <div className="my-4">彭于晏</div>
            <div>
                <Tag color="success">文章:22</Tag>
                <Tag color="warning">关注我</Tag>
            </div>
        </div>
        <div className="p-4 mb-4 bg-white shadow-xl rounded-xl">
            <Input placeholder="请输入文章类型"></Input>
            <div className="grid grid-rows-3 gap-2 mt-4">
                <Button type="primary">全部文章</Button>
                <Button>前端</Button>
                <Button>后端</Button>
                <Button>数据库</Button>
                <Button>组件库</Button>
            </div>
        </div>
        <div className="p-4 mb-4 bg-white shadow-xl rounded-xl">
            <Tag color="warning">Vue</Tag>
            <Tag color="warning">React</Tag>
            <Tag color="warning">Nestjs</Tag>
        </div>
    </div>)
}

export default Container