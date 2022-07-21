import { Button, ButtonProps } from "antd";
import React from "react";

export type JoyButtonProps = ButtonProps & {
  color?: string;
};

export default function JoyButton(props: JoyButtonProps) {
  return <Button {...props} />;
}
