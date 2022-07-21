import { Button, ButtonProps } from "antd";
import styles from './index.module.css';

export type JoyButtonProps = ButtonProps & {
  color?: string;
};

export default function JoyButton(props: JoyButtonProps) {
  return <Button className={styles.button} {...props} />;
}
