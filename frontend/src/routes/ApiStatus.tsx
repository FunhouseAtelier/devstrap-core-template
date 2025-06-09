// frontend/src/routes/ApiStatus.tsx

import { useLoaderData } from "react-router-dom";
import { API_BASE_URL } from "@/utils/api";

type LoaderData = {
  status: string;
};

export async function loader(): Promise<LoaderData> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/health`);
    if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
    return res.json();
  } catch (err) {
    console.error(err);
    return { status: "error" };
  }
}

export default function ApiStatus() {
  const data = useLoaderData() as LoaderData;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">API Health Check</h2>
      <p className="text-lg">
        Status:{" "}
        <span
          className={
            data.status === "ok"
              ? "text-green-600 font-semibold"
              : "text-red-600 font-semibold"
          }
        >
          {data.status}
        </span>
      </p>
    </div>
  );
}
