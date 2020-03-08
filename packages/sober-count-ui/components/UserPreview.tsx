import React, { ReactElement } from "react";
import Link from "next/link";
import { daysSince } from "../helpers";

import { User } from "./types";
import { Avatar } from "@chakra-ui/core";

interface Props {
  user: User;
  showDays?: boolean;
  showTagline?: boolean;
}

export default function UserPreview({
  user,
  showDays,
  showTagline
}: Props): ReactElement {
  console.log(user);

  return (
    <div className="flex items-center p-4">
      <Link href={`/u/${user.slug}`}>
        <a href={`/u/${user.slug}`}>
          <Avatar size="lg" name={user.username} src={user.avatarUrl} />
        </a>
      </Link>
      <div className="flex flex-col px-2 items-start justify-start">
        <a href={`/u/${user.slug}`}>
          {" "}
          <span className="text-m block text-gray-800">
            {user.username}
          </span>{" "}
        </a>
        {showTagline && (
          <span className="text-s block text-gray-500">
            {user.tagline || `Booyaka`}
          </span>
        )}
        {showDays && (
          <span className="text-s block text-gray-500">
            {daysSince(new Date(user.since)).toFixed(0)} days
          </span>
        )}
      </div>
    </div>
  );
}
