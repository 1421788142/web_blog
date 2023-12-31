import * as types from "@/redux/actionTypes";
import { userStoreType } from '@/redux/interface/index'

export const updateUserInfo = (userInfo: userStoreType['userInfo']) => ({
    type: types.UPDATE_USER_INFO,
    userInfo
})

export const setToken = (token: userStoreType['token']) => ({
    type: types.SET_TOKEN,
    token
})

export const setVerifyCode = (verifyCode: userStoreType['verifyCode']) => ({
    type: types.SET_VERIFY_CODE,
    verifyCode
})

export const loginOut = () => ({
    type: types.LOGIN_OUT
})