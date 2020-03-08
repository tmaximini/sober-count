import * as React from "react";
import { useRouter, Router } from "next/router";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { useCookies } from "react-cookie";

import { withApollo } from "../lib/apollo";

import Layout from "../components/layoutComp";
import LoginForm from "../components/LoginForm";

import { Heading } from "@chakra-ui/core";
import Nav from "../components/nav";

const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    loginUserByUsername(username: $username, password: $password) {
      status
      token
    }
  }
`;

interface ICreateProps {}

type LoginUserProps = {
  email: string;
  password: string;
};

const Login = (props: ICreateProps) => {
  const [loginUser, { data, error }] = useMutation(LOGIN_USER);
  const [cookies, setCookie, removeCookie] = useCookies(["auth"]);

  const router = useRouter();

  const onSubmit = async (vals: LoginUserProps) => {
    const result = await loginUser({ variables: vals });

    if (result?.data?.loginUserByUsername?.status === "SUCCESS") {
      const token = result?.data?.loginUserByUsername?.token;

      setCookie("_auth", token, {
        maxAge: 60 * 60 * 24 * 7
      });

      router.push("/profile");
    } else {
      // show error
      console.error("error logging in", data?.loginUserByUsername);
    }
  };

  return (
    <Layout>
      <Nav />
      <Heading>Login</Heading>
      <div className="flex-col sm:flex-row md:flex-col lg:flex-col xl:flex-col">
        <LoginForm onSubmit={onSubmit} />
      </div>
    </Layout>
  );
};

export default withApollo(Login);
