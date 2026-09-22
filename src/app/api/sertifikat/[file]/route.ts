import { readFile } from "node:fs/promises";
import path from "node:path";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

const CERT_DIR = path.join(process.cwd(), "certificates");

export async function GET(
  request: NextRequest,
  ctx: { params: Promise<{ file: string }> }
) {
  const dest = request.headers.get("sec-fetch-dest");
  if (dest === "document" || dest === "iframe" || dest === "frame") {
    return new Response("Forbidden", { status: 403 });
  }

  const { file } = await ctx.params;
  const name = path.basename(decodeURIComponent(file ?? ""));

  if (!name.toLowerCase().endsWith(".pdf")) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const data = await readFile(path.join(CERT_DIR, name));
    return new Response(new Uint8Array(data), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${name}"`,
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
        "X-Content-Type-Options": "nosniff",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
