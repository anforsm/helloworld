import { NextResponse } from "next/server";

const moods = ["😃", "😢", "🤬", "🤔", "😴", "🤯", "🥳", "😍", "🤢", "😱"];


const backend = "http://localhost:8080"

export async function GET() {
  return NextResponse.json({ "result": moods[Math.floor(Math.random() * moods.length)] });
}
