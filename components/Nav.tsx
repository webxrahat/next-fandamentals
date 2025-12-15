import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <Link href={"/myblog"}>Blog</Link>
      <Link href={"/products"}>Products</Link>
    </div>
  );
}
