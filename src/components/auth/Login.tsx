import { FormEvent, useContext, useState } from "react";
import styled from "@emotion/styled";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../App";

const Form = styled.form({
  display: "flex",
  flexDirection: "column",
});

const FormItem = styled.label({
  margin: "1rem",
});

const LOGIN = gql`
  mutation Login($loginInput: LoginInput!) {
    user: login(input: $loginInput) {
      id
      username
      team {
        id
        name
      }
    }
  }
`;

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [login] = useMutation(LOGIN);
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
