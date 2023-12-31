import * as types from "@/redux/actionTypes";
import { configStoreType } from '@/redux/interface/index'

export const setTheme = (theme: configStoreType['theme']) => ({
    type: types.SET_THEME,
    theme
})

export const setComponent = (component: configStoreType['component']) => ({
    type: types.SET_COMPONENT,
    component
})

export const resetConfig = () => ({
    type: types.RESET_CONFIG
})