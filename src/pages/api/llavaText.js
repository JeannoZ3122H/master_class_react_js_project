import axios from "axios";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://cu-vertical-dimensional-continuity.trycloudflare.com/phi3/generate",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer AEulafWZQ1xhIkeLgjcp5nhL7d0cLPWiXAU34DTVvXI",
        },
        body: JSON.stringify({
          inputs: req.body.query,
          parameters: {
            max_new_tokens: 100,
            temperature: 0.5,
          },
        }),
      }
    );

    res.status(200).json(JSON.stringify(response.body));
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
