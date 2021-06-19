import React from "react";
import Link from "next/Link";
export default function FirstPost({}) {
  return (
    <>
      <h1>First Post</h1>
      <h3>
        Back to <Link href="/">home</Link>
      </h3>
    </>
  );
}
