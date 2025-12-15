import Link from "next/link";

export default function Nav() {
  return (
    <div className="bg-lime-400 space-x-2">
      <Link href={"/"}>Home</Link>
      <Link href={"/myblog"}>Blog</Link>
      <Link href={"/products"}>Products</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/articles/id123?lang=en"}>Read in English</Link>
      <Link href={"/articles/id123?lang=fr"}>Read in French</Link>
      <Link href={"/sea"}>Sea</Link>
    </div>
  );
}
