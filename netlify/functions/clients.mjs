import { getStore } from "@netlify/blobs";

export default async (req) => {
  const key = req.headers.get("x-sync-key") || "";
  if (!process.env.SYNC_KEY || key !== process.env.SYNC_KEY) {
    return new Response("Unauthorized", { status: 401 });
  }
  const store = getStore("ddd");

  if (req.method === "GET") {
    const data = await store.get("db", { type: "json" });
    return Response.json(data || { clients: {}, lastNr: 0 });
  }

  if (req.method === "PUT") {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object" || typeof body.clients !== "object") {
      return new Response("Bad request", { status: 400 });
    }
    await store.setJSON("db", { clients: body.clients, lastNr: Number(body.lastNr) || 0 });
    return Response.json({ ok: true });
  }

  return new Response("Method not allowed", { status: 405 });
};

export const config = { path: "/api/clients" };
