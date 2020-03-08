import React, { ReactElement } from "react";

import Link from "next/link";

import { Button } from "@chakra-ui/core";

interface Props {
  url: string;
  title: string;
}

export default function CallToAction({ url, title }: Props): ReactElement {
  return (
    <div className="my-4">
      <Link href={url}>
        <a href={url}>
          <Button size="lg" variantColor="pink" variant="solid">
            {title}
          </Button>
        </a>
      </Link>
    </div>
  );
}
