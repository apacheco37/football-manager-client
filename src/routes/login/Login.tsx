import { useContext, useState } from "react";
import styled from "@emotion/styled";
import { useMutation } from "@apollo/client";
import { Alert, Button, Form, Input } from "antd";
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
  const [login, { loading }] = useMutation(Login_LoginDocument);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [showError, setShowError] = useState<boolean>(false);

  function handleLogin(values: FormFields) {
    login({
      variables: {
        loginInput: values,
      },
      onCompleted: ({ user }) => {
        if (user) {
          setUser(user);
          navigate(`/dashboard`, { replace: true });
        } else {
          setShowError(true);
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
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          disabled={loading}
        >
          Log in
        </Button>
      </Form.Item>

      {showError && (
        <Alert
          message="Incorrect credentials"
          type="error"
          closable
          onClose={() => setShowError(false)}
        />
      )}
    </StyledForm>
  );
}
