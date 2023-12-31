import { AnyAction } from "redux";
import produce from "immer";
import type { userStoreType } from '@/redux/interface/index'
import * as types from "@/redux/actionTypes";

const userState: userStoreType = {
    token: '', //项目暂时没有启用token模式 可以按需使用
    userInfo: null,
    verifyCode: "",// 前端生成的验证码（按实际需求替换）
}

const userStore = (state: userStoreType = userState, action: AnyAction) =>
    produce(state, draftState => {
        switch (action.type) {
            case types.UPDATE_USER_INFO:
                draftState.userInfo = action.userInfo;
                break;
            case types.SET_TOKEN:
                draftState.token = action.token;
                break;
            case types.SET_VERIFY_CODE:
                draftState.verifyCode = action.verifyCode;
                break;
            case types.LOGIN_OUT:
                draftState.token = '';
                draftState.userInfo = null;
                break;
            default:
                return draftState;
        }
    })
export default userStore;