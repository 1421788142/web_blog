import { AnyAction } from "redux";
import produce from "immer";
import type { configStoreType } from '@/redux/interface/index'
import * as types from "@/redux/actionTypes";

const stateMeta = {
    theme: {
        weakOrGray: '',
        primary: "#FE4F70",
        isDark: false,
        isHappy: true,
    },
    component: {
        borderRadius: 10,
        size: 'middle',
    }
} as configStoreType

const configState: configStoreType = Object.assign({}, stateMeta)

const configStore = (state: configStoreType = configState, action: AnyAction) =>
    produce(state, draftState => {
        switch (action.type) {
            case types.SET_THEME:
                draftState.theme = action.theme;
                break;
            case types.SET_COMPONENT:
                draftState.component = action.component;
                break;
            case types.RESET_CONFIG:
                draftState.theme = stateMeta.theme
                draftState.component = stateMeta.component
                break;
            default:
                return draftState;
        }
    })

export default configStore;