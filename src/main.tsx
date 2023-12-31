import ReactDOM from "react-dom/client";
import App from "@/App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux";
import 'virtual:svg-icons-register' //本地icon
import 'antd/dist/reset.css'
// 挂载css
import "@/styles/tailwind.less";
import "@/styles/common.less";


ReactDOM.createRoot(document.getElementById("root")!).render(
  //让所有子组件拿到store
  <Provider store={store}>
    {/* 持久化 */}
    <PersistGate persistor={persistor}>
        {/* <React.StrictMode> */}
          <App />
        {/* </React.StrictMode> */}
    </PersistGate>
  </Provider>
);
