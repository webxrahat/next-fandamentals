import comments from "@/app/data/comments";
import { header } from "motion/react-client";
import { text } from "stream/consumers";

export async function GET() {
  return Response.json(comments);
}
export async function POST(request: Request) {
  const comment = await request.json();

  const newComment = {
    id: comments.length + 1,
    text: comment.text,
    createdAt: new Date().toISOString(),
  };
  comments.push(newComment);
  return Response.json(newComment, {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
