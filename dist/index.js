import 'antd/dist/antd.variable.css';
import { jsx } from 'react/jsx-runtime';
import { Button } from 'antd';

function JoyButton() {
  return jsx(Button, {
    type: "primary",
    children: "Click"
  });
}

var packages = {
  Button: JoyButton
};

export { packages as default };
