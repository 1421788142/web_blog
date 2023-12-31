import { userResType } from "@/apis/user";
import type { SizeType } from "antd/lib/config-provider/SizeContext";

export type pageType = 1 | 2 | 3 | 4 | 5
export type menuType = 'vertical' | 'classic' | 'transverse' | 'columns'

// userStore
export type userStoreType = {
    token: string,
    verifyCode: string,//图像验证码
    userInfo: userResType | null;//用户信息
}

// configStore
export type configStoreType = {
    theme: {
        weakOrGray: 'weak' | 'gray' | ''// 色弱模式(weak) || 灰色模式(gray)
        primary: string,// 默认 primary 主题颜色
        isDark: boolean,// 深色模式
        isHappy: boolean, //按钮特效
    },
    component: {
        borderRadius: number,//圆角
        size: SizeType,//尺寸
    }
}

// 类型集合
export type StoreType = {
    configStore: configStoreType,
    userStore: userStoreType,
}
