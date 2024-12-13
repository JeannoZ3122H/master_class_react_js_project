import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.post(
      "https://singing-shadows-duty-loan.trycloudflare.com/imagine/generate",
      {
        prompt: req.body.prompt,
        img_size: req.body?.size || 800,
        guidance_scale: 7.5,
        num_inference_steps: 20,
      },
      {
        responseType: "arraybuffer",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer wise-radiant-wave-b77c84b64e9efa2ebf8710ca",
        },
      }
    );

    const buffer = response.data;
    const base64String = buffer.toString("base64");
    res.status(200).json({ base64String });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
