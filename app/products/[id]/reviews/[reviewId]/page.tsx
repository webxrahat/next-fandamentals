export default async function page({
  params,
}: {
  params: Promise<{ reviewId: string }>;
}) {
  const reviewId = (await params).reviewId;
  return <div>reviews page {reviewId}</div>;
}
