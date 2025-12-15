export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const slug = (await params).slug;

  console.log("slug", slug);

  if (slug?.length === 2) {
    return <div>catch all segment page {slug[1]}</div>;
  }

  if (slug?.length === 1) {
    return <div>catch all segment page {slug[0]}</div>;
  }

  return <div>root docs</div>;
}
