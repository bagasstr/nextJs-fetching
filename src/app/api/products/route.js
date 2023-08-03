import { NextResponse } from "next/server";
import data from "../../../../dataTerbaru.json";

export async function GET(req) {
  return new NextResponse(JSON.stringify(data));
}
