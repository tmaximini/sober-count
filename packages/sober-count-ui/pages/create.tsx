import * as React from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import slugify from "slugify";

import { withApollo } from "../lib/apollo";

import Layout from "../components/layoutComp";
import CreateUserForm from "../components/createUserForm";

import { Heading } from "@chakra-ui/core";
import Nav from "../components/nav";

const CREATE_USER = gql`
  mutation CreateUser(
    $username: String!
    $email: String!
    $since: String!
    $tagline: String
    $avatarUrl: String
    $password: String!
  ) {
    createUser(
      username: $username
      email: $email
      password: $password
      tagline: $tagline
      since: $since
      avatarUrl: $avatarUrl
    ) {
      username
      email
      since
    }
  }
`;

interface ICreateProps {}

type CreateUserProps = {
  username: string;
  email: string;
  tagline?: string;
  since: Date;
  avatarUrl?: string;
};

const Create = (props: ICreateProps) => {
  const [createUser, { data, error }] = useMutation(CREATE_USER);

  const router = useRouter();

  const onSubmit = async (vals: CreateUserProps) => {
    const result = await createUser({ variables: vals });

    // todo: what if createUser errors?
    result.data && router.push(`/u/${slugify(vals.username)}`);
  };

  return (
    <Layout>
      <Nav />
      <Heading>Create your Page</Heading>
      <div className="flex-col sm:flex-row md:flex-col lg:flex-col xl:flex-col">
        <CreateUserForm onSubmit={onSubmit} />

        <img className="px-4 py-2" src="/motivation.jpg" />
      </div>
    </Layout>
  );
};

export default withApollo(Create);
