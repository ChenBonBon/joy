import { ConfigProvider } from "antd";
import { ConfigProviderProps } from "antd/lib/config-provider";

const setTheme = (theme: any) => {
  console.log(theme);
};

const JoyConfigProvider: React.FC<ConfigProviderProps> & {
  ConfigContext: typeof ConfigProvider.ConfigContext;
  SizeContext: typeof ConfigProvider.SizeContext;
  config: typeof ConfigProvider.config;
  theme?: typeof setTheme;
} = ConfigProvider;

JoyConfigProvider.theme = setTheme;

export default JoyConfigProvider;
