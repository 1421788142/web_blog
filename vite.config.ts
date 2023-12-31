import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import { resolve } from 'path'
import { wrapperEnv } from './src/utils/getEnvConfig'
import setupPlugins from './vitePlugins'
/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

/** 设置别名 */
const alias: Record<string, string> | Array<{ find: string | RegExp, replacement: string }> = {
  "@": pathResolve("src"),
  "@img": pathResolve("./src/assets/image/"),
  "@com": pathResolve("./src/components/"),
  "@api": pathResolve("./src/apis/"),
  "@s": pathResolve("./src/styles/"),
  "@u": pathResolve("./src/utils/"),
  "@v": pathResolve("./src/views/")
};

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }: ConfigEnv):UserConfig=>{
  const isBuild = command === 'build' ? true : false
  const env = loadEnv(mode, process.cwd());
  const viteEnv = wrapperEnv(env);

  return {
    base: viteEnv.VITE_PUBLIC_PATH,
    plugins: setupPlugins(viteEnv, isBuild),
    resolve: {
      alias
    },
    server:{
      host: '0.0.0.0',
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_DEV_OPEN,
      cors: true,
      // 跨域代理配置
      // proxy: {
      //   "/dev": {
      //     target: "http://localhost:5556", // fastmock
      //     changeOrigin: true,
      //     rewrite: path => path.replace(/^\/dev/, "")
      //   }
      // }
    },
    build: {
      outDir: "dist",
      assetsDir: "assets", //指定静态资源存放路径
      sourcemap: false, //是否构建source map 文件
      terserOptions: viteEnv.VITE_DROP_CONSOLE ? {
        // 生产环境移除console
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      } : {},
    },
    // global css
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        }
      }
    },
  }
})
