export default async function generatImage(prompt, size) {
  const res = await instance.post(
    "https://singing-shadows-duty-loan.trycloudflare.com/imagine/generate",
    {
      prompt,
      img_size: size | 800,
      guidance_scale: 7.5,
      num_inference_steps: 20,
    },
    {
      responseType: "arraybuffer",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer wise-radiant-wave-b77c84b64e9efa2ebf8710ca`,
      },
    }
  );

  const buffer = res.data;
  const base64Image = Buffer.from(buffer).toString("base64");
  const imageUrl = `data:image/png;base64,${base64Image}`;
  return imageUrl;
}
