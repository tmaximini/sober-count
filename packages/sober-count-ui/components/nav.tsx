import React, { ReactElement } from "react";
import Link from "next/link";

import { Flex, Box } from "@chakra-ui/core";

const NavLink = ({ children, href, color }) => {
  return (
    <Link href={href}>
      <a
        href={href}
        className={`${color} font-semibold text-lg p-4 sm:p-4 md:p-6 md:text-xl lg:p-8`}
      >
        {children}
      </a>
    </Link>
  );
};

interface Props {
  light?: boolean;
}

export default function Nav({ light }: Props): ReactElement {
  const color: string = light ? "text-white" : "text-gray-800";

  return (
    <nav
      style={{
        margin: "20px 0",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      }}
    >
      <Flex w="100%" justifyContent="space-between" alignItems="center">
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          <Box>
            <NavLink color={color} href="/">
              Sober Count
            </NavLink>
            <NavLink color={color} href="/about">
              about
            </NavLink>
          </Box>
        </Flex>
        {/* <Box>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/create">Make yours!</NavLink>
      </Box> */}
      </Flex>
    </nav>
  );
}
