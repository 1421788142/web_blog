import { HashRouter } from "react-router-dom";
import { ConfigProvider, theme, App } from "antd";
import Router from "@/routers/index";
import React, { memo } from "react";
import { connect } from "react-redux";
import { StoreType } from "./redux/interface";
import { HappyProvider } from '@ant-design/happy-work-theme';
import useTheme from "@/hooks/useTheme";
import AuthRouter from "@/routers/utils/AuthRouter";

const RouterView = memo(()=>{
  return (
    <AuthRouter>
      <Router />
    </AuthRouter>
  )
})

const Root = (props?:StoreType['configStore']) => {
  const { theme:sysTheme, component } = props as StoreType['configStore'];
  
  React.useEffect(()=>{
    useTheme(props as StoreType['configStore'])
  },[])

  return (
    <HashRouter>
      <ConfigProvider
        componentSize={component.size}
        theme={{
          algorithm:sysTheme.isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
          token: {
            colorPrimary: sysTheme.primary,
            borderRadius: component.borderRadius,
          },
        }}
      >
        <HappyProvider disabled={!sysTheme.isHappy}>
            <App>
              { <RouterView /> }
            </App>
        </HappyProvider>
      </ConfigProvider>
    </HashRouter>
  );
}

const mapStateToProps = (state: StoreType) => state.configStore;
export default connect(mapStateToProps)(Root);
