import React, { ReactElement } from "react";
import { useQuery } from "@apollo/react-hooks";
import UserPreview from "./UserPreview";

import gql from "graphql-tag";
import { shuffleArray } from "../helpers";
import { User } from "./types";

export const GET_USERS = gql`
  query getUsers {
    users {
      username
      slug
      tagline
      claps
      since
    }
  }
`;

interface Props {
  showDays?: boolean;
}

export default function userList({ showDays }: Props): ReactElement {
  const { loading, error, data } = useQuery(GET_USERS);

  if (error) return <div>Error</div>;
  if (loading) return <div>Loading</div>;

  const { users }: { users: User[] } = data;

  return (
    <figure className="my-4 max-w-full max-h-screen overflow-hidden overflow-x-auto">
      {shuffleArray(users)
        .slice(0, 5)
        .map(user => (
          <UserPreview key={user.username} user={user} showDays={showDays} />
        ))}
    </figure>
  );
}
