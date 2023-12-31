// * Vite
declare type Recordable<T extends object = any> = Record<string, T>;

declare type ViteEnv = {
    VITE_PROJECT_NAME: string;
    VITE_PORT: number;
    VITE_DEV_OPEN: boolean;
    VITE_DROP_CONSOLE: boolean;
    VITE_REPORT: boolean;
    VITE_PROXY_URL: string;
    VITE_PROJECT_LOGO: string;
    VITE_API_URL: string;
    VITE_ROUTER_HISTORY: 'hash' | 'h5';
    VITE_PUBLIC_PATH: string
}

declare module 'loadsh'