import Link from "next/link";

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" }>;
}) {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <div>
      <h1>New Article {articleId}</h1>
      <p>Reading in {lang}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>Read in English</Link>
      </div>
      <div>
        <Link href={`/articles/${articleId}?lang=fr`}>Read in French</Link>
      </div>
    </div>
  );
}
