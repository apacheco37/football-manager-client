import { FormEvent, useContext, useState } from "react";
import styled from "@emotion/styled";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../App";
import { Login_LoginDocument } from "../../graphql-generated";

const Form = styled.form({
  display: "flex",
  flexDirection: "column",
});

const FormLabel = styled.label({
  margin: "1rem",
});

const SubmitButton = styled.button({
  marginTop: "2rem",
});

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [login] = useMutation(Login_LoginDocument);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // What the fuck should be this type, React types have wrong target type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleFormInputChange(event: any) {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    login({
      variables: {
        loginInput: formData,
      },
      onCompleted: (data) => {
        if (data.user) {
          setUser(data.user);
          navigate(`/dashboard`, { replace: true });
        }
      },
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>Username:</FormLabel>
      <input
        type="text"
        value={formData.username}
        name="username"
        onChange={handleFormInputChange}
      />
      <FormLabel>Password:</FormLabel>
      <input
        type="password"
        value={formData.password}
        name="password"
        onChange={handleFormInputChange}
      />
      <SubmitButton type="submit">Log In</SubmitButton>
    </Form>
  );
}

export default Login;
