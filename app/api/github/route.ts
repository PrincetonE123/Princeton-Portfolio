import { NextResponse } from "next/server";

export async function GET() {
  const username = "PrincetonE123";
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 3600 }, // caches for 1 hour
    }
  );

  const data = await res.json();

  const cleaned = (Array.isArray(data) ? data : [])
    .filter((r: any) => !r.fork && !r.archived)
    .sort((a: any, b: any) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());

  return NextResponse.json(cleaned);
}
