import { generate } from "@ant-design/colors";
import IconContext from "@ant-design/icons/lib/components/Context";
import { TinyColor } from "@ctrl/tinycolor";
import {
  ConfigConsumer,
  ConfigConsumerProps,
  ConfigContext,
  CSPConfig,
  DirectionType,
  Theme,
} from "antd/lib/config-provider/context";
import { RenderEmptyHandler } from "antd/lib/config-provider/defaultRenderEmpty";
import { DisabledContextProvider } from "antd/lib/config-provider/DisabledContext";
import type { SizeType } from "antd/lib/config-provider/SizeContext";
import SizeContext, {
  SizeContextProvider,
} from "antd/lib/config-provider/SizeContext";
import type { RequiredMark } from "antd/lib/form/Form";
import type { Locale } from "antd/lib/locale-provider";
import LocaleProvider, { ANT_MARK } from "antd/lib/locale-provider";
import LocaleReceiver from "antd/lib/locale-provider/LocaleReceiver";
import defaultLocale from "antd/lib/locale/default";
import message from "antd/lib/message";
import notification from "antd/lib/notification";
import { FormProvider as RcFormProvider } from "rc-field-form";
import type { ValidateMessages } from "rc-field-form/lib/interface";
import canUseDom from "rc-util/lib/Dom/canUseDom";
import { updateCSS } from "rc-util/lib/Dom/dynamicCSS";
import useMemo from "rc-util/lib/hooks/useMemo";
import * as React from "react";

export type {
  RenderEmptyHandler,
  CSPConfig,
  DirectionType,
  ConfigConsumerProps,
};
export { ConfigContext, ConfigConsumer };

interface JoyTheme extends Theme {
  variables?: Record<string, string>;
}

export const configConsumerProps = [
  "getTargetContainer",
  "getPopupContainer",
  "rootPrefixCls",
  "getPrefixCls",
  "renderEmpty",
  "csp",
  "autoInsertSpaceInButton",
  "locale",
  "pageHeader",
];

// These props is used by `useContext` directly in sub component
const PASSED_PROPS: Exclude<
  keyof ConfigConsumerProps,
  "rootPrefixCls" | "getPrefixCls"
>[] = [
  "getTargetContainer",
  "getPopupContainer",
  "renderEmpty",
  "pageHeader",
  "input",
  "pagination",
  "form",
];

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

interface ProviderChildrenProps extends ConfigProviderProps {
  parentContext: ConfigConsumerProps;
  legacyLocale: Locale;
}

const dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;

export const defaultPrefixCls = "ant";
export const defaultIconPrefixCls = "anticon";
let globalPrefixCls: string;
let globalIconPrefixCls: string;

function getGlobalPrefixCls() {
  return globalPrefixCls || defaultPrefixCls;
}

function getGlobalIconPrefixCls() {
  return globalIconPrefixCls || defaultIconPrefixCls;
}

const setGlobalConfig = ({
  prefixCls,
  iconPrefixCls,
  theme,
}: Pick<ConfigProviderProps, "prefixCls" | "iconPrefixCls"> & {
  theme?: JoyTheme;
}) => {
  if (prefixCls !== undefined) {
    globalPrefixCls = prefixCls;
  }
  if (iconPrefixCls !== undefined) {
    globalIconPrefixCls = iconPrefixCls;
  }

  if (theme) {
    registerTheme(getGlobalPrefixCls(), theme);
  }
};

export const globalConfig = () => ({
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls
      ? `${getGlobalPrefixCls()}-${suffixCls}`
      : getGlobalPrefixCls();
  },
  getIconPrefixCls: getGlobalIconPrefixCls,
  getRootPrefixCls: (rootPrefixCls?: string, customizePrefixCls?: string) => {
    // Customize rootPrefixCls is first priority
    if (rootPrefixCls) {
      return rootPrefixCls;
    }

    // If Global prefixCls provided, use this
    if (globalPrefixCls) {
      return globalPrefixCls;
    }

    // [Legacy] If customize prefixCls provided, we cut it to get the prefixCls
    if (customizePrefixCls && customizePrefixCls.includes("-")) {
      return customizePrefixCls.replace(/^(.*)-[^-]*$/, "$1");
    }

    // Fallback to default prefixCls
    return getGlobalPrefixCls();
  },
});

function getStyle(globalPrefixCls: string, theme: JoyTheme) {
  const variables: Record<string, string> = {};

  const formatColor = (
    color: TinyColor,
    updater?: (cloneColor: TinyColor) => TinyColor | undefined
  ) => {
    let clone = color.clone();
    clone = updater?.(clone) || clone;
    return clone.toRgbString();
  };

  const fillColor = (colorVal: string, type: string) => {
    const baseColor = new TinyColor(colorVal);
    const colorPalettes = generate(baseColor.toRgbString());

    variables[`${type}-color`] = formatColor(baseColor);
    variables[`${type}-color-disabled`] = colorPalettes[1];
    variables[`${type}-color-hover`] = colorPalettes[4];
    variables[`${type}-color-active`] = colorPalettes[7];
    variables[`${type}-color-outline`] = baseColor
      .clone()
      .setAlpha(0.2)
      .toRgbString();
    variables[`${type}-color-deprecated-bg`] = colorPalettes[1];
    variables[`${type}-color-deprecated-border`] = colorPalettes[3];
  };

  // ================ Primary Color ================
  if (theme.primaryColor) {
    fillColor(theme.primaryColor, "primary");

    const primaryColor = new TinyColor(theme.primaryColor);
    const primaryColors = generate(primaryColor.toRgbString());

    // Legacy - We should use semantic naming standard
    primaryColors.forEach((color, index) => {
      variables[`primary-${index + 1}`] = color;
    });
    // Deprecated
    variables["primary-color-deprecated-l-35"] = formatColor(
      primaryColor,
      (c) => c.lighten(35)
    );
    variables["primary-color-deprecated-l-20"] = formatColor(
      primaryColor,
      (c) => c.lighten(20)
    );
    variables["primary-color-deprecated-t-20"] = formatColor(
      primaryColor,
      (c) => c.tint(20)
    );
    variables["primary-color-deprecated-t-50"] = formatColor(
      primaryColor,
      (c) => c.tint(50)
    );
    variables["primary-color-deprecated-f-12"] = formatColor(
      primaryColor,
      (c) => c.setAlpha(c.getAlpha() * 0.12)
    );

    const primaryActiveColor = new TinyColor(primaryColors[0]);
    variables["primary-color-active-deprecated-f-30"] = formatColor(
      primaryActiveColor,
      (c) => c.setAlpha(c.getAlpha() * 0.3)
    );
    variables["primary-color-active-deprecated-d-02"] = formatColor(
      primaryActiveColor,
      (c) => c.darken(2)
    );
  }

  // ================ Success Color ================
  if (theme.successColor) {
    fillColor(theme.successColor, "success");
  }

  // ================ Warning Color ================
  if (theme.warningColor) {
    fillColor(theme.warningColor, "warning");
  }

  // ================= Error Color =================
  if (theme.errorColor) {
    fillColor(theme.errorColor, "error");
  }

  // ================= Info Color ==================
  if (theme.infoColor) {
    fillColor(theme.infoColor, "info");
  }

  const themeVariables = theme.variables || {};
  Object.keys(themeVariables).forEach((cssVariable) => {
    variables[cssVariable] = themeVariables[cssVariable];
  });

  // Convert to css variables
  const cssList = Object.keys(variables).map(
    (key) => `--${globalPrefixCls}-${key}: ${variables[key]};`
  );

  return `
  :root {
    ${cssList.join("\n")}
  }
  `.trim();
}

function registerTheme(globalPrefixCls: string, theme: Theme) {
  const style = getStyle(globalPrefixCls, theme);

  if (canUseDom()) {
    updateCSS(style, `${dynamicStyleMark}-dynamic-theme`);
  } else {
    console.error("SSR do not support dynamic theme with css variables.");
  }
}

const ProviderChildren: React.FC<ProviderChildrenProps> = (props) => {
  const {
    children,
    csp,
    autoInsertSpaceInButton,
    form,
    locale,
    componentSize,
    direction,
    space,
    virtual,
    dropdownMatchSelectWidth,
    legacyLocale,
    parentContext,
    iconPrefixCls,
    componentDisabled,
  } = props;

  const getPrefixCls = React.useCallback(
    (suffixCls?: string, customizePrefixCls?: string) => {
      const { prefixCls } = props;

      if (customizePrefixCls) return customizePrefixCls;

      const mergedPrefixCls = prefixCls || parentContext.getPrefixCls("");

      return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
    },
    [parentContext.getPrefixCls, props.prefixCls]
  );

  const config = {
    ...parentContext,
    csp,
    autoInsertSpaceInButton,
    locale: locale || legacyLocale,
    direction,
    space,
    virtual,
    dropdownMatchSelectWidth,
    getPrefixCls,
  };

  // Pass the props used by `useContext` directly with child component.
  // These props should merged into `config`.
  PASSED_PROPS.forEach((propName) => {
    const propValue: any = props[propName];
    if (propValue) {
      (config as any)[propName] = propValue;
    }
  });

  // https://github.com/ant-design/ant-design/issues/27617
  const memoedConfig = useMemo(
    () => config,
    config,
    (prevConfig: Record<string, any>, currentConfig) => {
      const prevKeys = Object.keys(prevConfig);
      const currentKeys = Object.keys(currentConfig);
      return (
        prevKeys.length !== currentKeys.length ||
        prevKeys.some((key) => prevConfig[key] !== currentConfig[key])
      );
    }
  );

  const memoIconContextValue = React.useMemo(
    () => ({ prefixCls: iconPrefixCls, csp }),
    [iconPrefixCls, csp]
  );

  let childNode = children;
  // Additional Form provider
  let validateMessages: ValidateMessages = {};

  if (locale) {
    validateMessages =
      locale.Form?.defaultValidateMessages ||
      defaultLocale.Form?.defaultValidateMessages ||
      {};
  }
  if (form && form.validateMessages) {
    validateMessages = { ...validateMessages, ...form.validateMessages };
  }

  if (Object.keys(validateMessages).length > 0) {
    childNode = (
      <RcFormProvider validateMessages={validateMessages}>
        {children}
      </RcFormProvider>
    );
  }

  if (locale) {
    childNode = (
      <LocaleProvider locale={locale} _ANT_MARK__={ANT_MARK}>
        {childNode}
      </LocaleProvider>
    );
  }

  if (iconPrefixCls || csp) {
    childNode = (
      <IconContext.Provider value={memoIconContextValue}>
        {childNode}
      </IconContext.Provider>
    );
  }

  if (componentSize) {
    childNode = (
      <SizeContextProvider size={componentSize}>
        {childNode}
      </SizeContextProvider>
    );
  }

  if (componentDisabled !== undefined) {
    childNode = (
      <DisabledContextProvider disabled={componentDisabled}>
        {childNode}
      </DisabledContextProvider>
    );
  }

  return (
    <ConfigContext.Provider value={memoedConfig}>
      {childNode}
    </ConfigContext.Provider>
  );
};

const ConfigProvider: React.FC<ConfigProviderProps> & {
  ConfigContext: typeof ConfigContext;
  SizeContext: typeof SizeContext;
  config: typeof setGlobalConfig;
} = (props) => {
  React.useEffect(() => {
    if (props.direction) {
      message.config({
        rtl: props.direction === "rtl",
      });
      notification.config({
        rtl: props.direction === "rtl",
      });
    }
  }, [props.direction]);

  return (
    <LocaleReceiver>
      {(_, __, legacyLocale) => (
        <ConfigConsumer>
          {(context) => (
            <ProviderChildren
              parentContext={context}
              legacyLocale={legacyLocale as Locale}
              {...props}
            />
          )}
        </ConfigConsumer>
      )}
    </LocaleReceiver>
  );
};

/** @private internal Usage. do not use in your production */
ConfigProvider.ConfigContext = ConfigContext;
ConfigProvider.SizeContext = SizeContext;
ConfigProvider.config = setGlobalConfig;

export default ConfigProvider;
