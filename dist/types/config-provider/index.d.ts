/// <reference types="react" />
import { ConfigProvider } from "antd";
import { ConfigProviderProps } from "antd/lib/config-provider";
declare const setTheme: (theme: any) => void;
declare const JoyConfigProvider: React.FC<ConfigProviderProps> & {
    ConfigContext: typeof ConfigProvider.ConfigContext;
    SizeContext: typeof ConfigProvider.SizeContext;
    config: typeof ConfigProvider.config;
    theme?: typeof setTheme;
};
export default JoyConfigProvider;
