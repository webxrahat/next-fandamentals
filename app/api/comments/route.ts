import comments from "@/app/data/comments";

export async function GET() {
  return Response.json(comments);
}
