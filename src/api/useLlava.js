import { instance } from "@/hooks/useAxios";

export default async function generateText(inputs) {
  const res = await fetch(
    "https://supplement-convenient-scores-forgotten.trycloudflare.com/llava/generate/",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer Mklm9M70UL39aQhBLiDSDM2yv1V73uXWMA-GBN1LBDU",
      },
      body: JSON.stringify({
        inputs,
        parameters: {
          max_new_tokens: 100,
        },
      }),
    }
  );

  return res.data;
}
