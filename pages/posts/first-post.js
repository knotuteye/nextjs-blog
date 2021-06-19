import Link from "next/link";

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
