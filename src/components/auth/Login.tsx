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

const FormItem = styled.label({
  margin: "1rem",
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
      <FormItem>
        Username:
        <input
          type="text"
          value={formData.username}
          name="username"
          onChange={handleFormInputChange}
        />
      </FormItem>
      <FormItem>
        Password:
        <input
          type="password"
          value={formData.password}
          name="password"
          onChange={handleFormInputChange}
        />
      </FormItem>
      <button type="submit">Submit</button>
    </Form>
  );
}

export default Login;
