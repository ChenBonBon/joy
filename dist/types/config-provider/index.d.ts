import { ConfigConsumer, ConfigConsumerProps, ConfigContext, CSPConfig, DirectionType, Theme } from "antd/lib/config-provider/context";
import { RenderEmptyHandler } from "antd/lib/config-provider/defaultRenderEmpty";
import type { SizeType } from "antd/lib/config-provider/SizeContext";
import SizeContext from "antd/lib/config-provider/SizeContext";
import type { RequiredMark } from "antd/lib/form/Form";
import type { Locale } from "antd/lib/locale-provider";
import type { ValidateMessages } from "rc-field-form/lib/interface";
import * as React from "react";
export type { RenderEmptyHandler, CSPConfig, DirectionType, ConfigConsumerProps, };
export { ConfigContext, ConfigConsumer };
interface JoyTheme extends Theme {
    variables?: Record<string, string>;
}
export declare const configConsumerProps: string[];
export interface ConfigProviderProps {
    getTargetContainer?: () => HTMLElement;
    getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
    prefixCls?: string;
    iconPrefixCls?: string;
    children?: React.ReactNode;
    renderEmpty?: RenderEmptyHandler;
    csp?: CSPConfig;
    autoInsertSpaceInButton?: boolean;
    form?: {
        validateMessages?: ValidateMessages;
        requiredMark?: RequiredMark;
        colon?: boolean;
    };
    input?: {
        autoComplete?: string;
    };
    pagination?: {
        showSizeChanger?: boolean;
    };
    locale?: Locale;
    pageHeader?: {
        ghost: boolean;
    };
    componentSize?: SizeType;
    componentDisabled?: boolean;
    direction?: DirectionType;
    space?: {
        size?: SizeType | number;
    };
    virtual?: boolean;
    dropdownMatchSelectWidth?: boolean;
}
export declare const defaultPrefixCls = "ant";
export declare const defaultIconPrefixCls = "anticon";
declare function getGlobalIconPrefixCls(): string;
declare const setGlobalConfig: ({ prefixCls, iconPrefixCls, theme, }: Pick<ConfigProviderProps, "prefixCls" | "iconPrefixCls"> & {
    theme?: JoyTheme | undefined;
}) => void;
export declare const globalConfig: () => {
    getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
    getIconPrefixCls: typeof getGlobalIconPrefixCls;
    getRootPrefixCls: (rootPrefixCls?: string, customizePrefixCls?: string) => string;
};
declare const ConfigProvider: React.FC<ConfigProviderProps> & {
    ConfigContext: typeof ConfigContext;
    SizeContext: typeof SizeContext;
    config: typeof setGlobalConfig;
};
export default ConfigProvider;
