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
          inputs:
            "generate a cool and short description for a brand. The brand name is: waterbeer. The slogan is: Water, the source of life. Beer too!. The keywords are: #beer #taste. add the keyword at the end of the description.",
          parameters: {
            max_new_tokens: 100,
            temperature: 0.5,
          },
        }),
      }
    );

    console.log(response);
    res.status(200).json("ok");
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
