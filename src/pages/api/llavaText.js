import axios from "axios";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
  try {
    const response = await axios.post(
      "https://supplement-convenient-scores-forgotten.trycloudflare.com/llava/generate",
      {
        inputs: req.body.query,
        parameters: {
          max_new_tokens: 100,
        },
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer Mklm9M70UL39aQhBLiDSDM2yv1V73uXWMA-GBN1LBDU",
        },
      }
    );

    const data = response.data?.generated_text;
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
