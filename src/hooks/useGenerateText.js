import generateText from "@/api/useLlava";
import { instance } from "./useAxios";
import { useState } from "react";

export default function useGenerateText() {
  const [description, setDescription] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const generate = async (query) => {
    try {
      setLoading(true);
      const inputs = `generate a cool and short description for a brand. The brand name is: waterbeer. The slogan is: Water, the source of life. Beer too!. The keywords are: #beer #taste. add the keyword at the end of the description.`;
      const testPrompt = `generate a cool and short description for a brand. The intention of the post is: {${query}}. Add related hashtag at the end too`;
      const res = await instance.post("/api/llavaText/", { query: testPrompt });
      console.log(res.data);
      //setDescription(JSON.parse(res?.generated_text));
    } catch (error) {
      console.log(error);
      setError("An unknown error has occured. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return {
    description,
    generate,
    loading,
    error,
  };
}
