import { NextRequest, NextResponse } from "next/server";
import comments from "@/app/data/comments";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✅ FIX

  const comment = comments.find((c) => c.id === Number(id));

  if (!comment) {
    return NextResponse.json({ message: "Comment not found" }, { status: 404 });
  }

  return NextResponse.json(comment);
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✅ FIX

  const commentIndex = comments.findIndex((c) => c.id === Number(id));

  if (commentIndex === -1) {
    return NextResponse.json({ message: "Comment not found" }, { status: 404 });
  }

  comments.splice(commentIndex, 1);

  return NextResponse.json(
    { message: "Comment deleted successfully" },
    { status: 200 }
  );
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✅ FIX
  const updatedData = await request.json();

  const comment = comments.find((c) => c.id === Number(id));

  if (!comment) {
    return NextResponse.json({ message: "Comment not found" }, { status: 404 });
  }

  comment.text = updatedData.text || comment.text;

  return NextResponse.json(comment, { status: 200 });
}
