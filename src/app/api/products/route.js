import { NextResponse } from "next/server";
import data from "../data/dataTerbaru.json";

export async function GET(req) {
  return NextResponse.json(data);
}