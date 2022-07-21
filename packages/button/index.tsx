import { Button, ButtonProps } from "antd";

export type JoyButtonProps = ButtonProps & {
  color?: string;
};

export default function JoyButton(props: JoyButtonProps) {
  return <Button {...props} />;
}
