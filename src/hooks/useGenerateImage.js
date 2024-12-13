import generateText from "@/api/useLlava";
import { instance } from "./useAxios";
import { useState } from "react";

export default function useGenerateImage() {
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const generate = async (query) => {
    try {
      setLoading(true);
      const prompt = `A social media post  with this description: {${query}}`;
      const res = await instance.post("/api/sdxlImage/", { prompt });
      if (res.data?.base64String) {
        setUrl(`data:image/png;base64,${res.data?.base64String}`);
      }
    } catch (error) {
      console.log(error);
      setError("An unknown error has occured. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return {
    url,
    generate,
    loading,
    error,
  };
}
