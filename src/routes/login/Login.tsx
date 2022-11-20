import { useContext } from "react";
import styled from "@emotion/styled";
import { useMutation } from "@apollo/client";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { Login_LoginDocument } from "graphql-generated";
import UserContext from "contexts/UserContext";

const StyledForm = styled(Form)({
  maxWidth: "300px",
});

interface FormFields {
  username: string;
  password: string;
}

export default function Login() {
  const [login] = useMutation(Login_LoginDocument);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogin(values: FormFields) {
    login({
      variables: {
        loginInput: values,
      },
      onCompleted: ({ user }) => {
        if (user) {
          setUser(user);
          navigate(`/dashboard`, { replace: true });
        }
      },
    });
  }

  return (
    <StyledForm
      name="login"
      onFinish={(values) => handleLogin(values as FormFields)}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </StyledForm>
  );
}
