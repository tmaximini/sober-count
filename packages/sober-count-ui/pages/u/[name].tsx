import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/react-hooks";

import Head from "next/head";

import { withApollo } from "../../lib/apollo";

import { Heading, Flex } from "@chakra-ui/core";

import Addiction from "../../components/addiction";
import SoberSince from "../../components/SoberSince";
import Layout from "../../components/layoutComp";
import UserPreview from "../../components/UserPreview";
import UserClaps from "../../components/userClaps";
import ClapButton from "../../components/ClapButton";
import Nav from "../../components/nav";

import gql from "graphql-tag";

export const GET_USER_BY_NAME = gql`
  query getUser($name: String!) {
    user(name: $name) {
      username
      slug
      claps
      since
      tagline
      avatarUrl
    }
  }
`;

const ADD_CLAPS = gql`
  mutation AddClaps($username: String!, $claps: Int!) {
    addClaps(username: $username, claps: $claps) {
      claps
    }
  }
`;

const UserPage = () => {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_USER_BY_NAME, {
    variables: {
      name: router.query.name
    }
  });

  const [addClaps] = useMutation(ADD_CLAPS);

  if (error) return <div>Error</div>;
  if (loading) return <div>Loading</div>;

  const { user } = data;

  const [nrOfClaps, setNrOfClaps] = useState(0);

  const writeClapsToDb = () => {
    console.log("writing claps to DB");
    addClaps({
      variables: { username: user.username, claps: nrOfClaps }
    });
  };

  useEffect(() => {
    return function cleanup() {
      writeClapsToDb();
    };
  }, [false]);

  return (
    <Layout>
      <Head>
        <title>{user.username} gets Sober!</title>
      </Head>
      <Nav />
      <div className="text-center">
        <Heading size="2xl">{user.username} is sober!</Heading>
        <p className="text-lg">
          Support them by hitting that clap button or leaving a comment!
        </p>

        <canvas
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            pointerEvents: "none"
          }}
          id="confetti"
        />

        <Flex className="flex-wrap sm:flex-wrap md:flex lg:flex justify-center">
          <Flex className="md:p-8 lg:p-16">
            <SoberSince date={user.since} />
          </Flex>
          <Flex className="md:p-8 lg:p-16">
            <UserClaps claps={user.claps + nrOfClaps} />
          </Flex>
        </Flex>

        <ClapButton setNrOfClaps={setNrOfClaps} claps={user.claps} />

        <Addiction since={user.since} />

        <UserPreview user={user} showTagline />
      </div>
    </Layout>
  );
};

export default withApollo(UserPage);
