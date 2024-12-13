import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import useGenerateText from "@/hooks/useGenerateText";
import { useForm } from "react-hook-form";
import useGenerateImage from "@/hooks/useGenerateImage";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const { generate: generateText, description, loading } = useGenerateText();
  const {
    generate: generateImage,
    url,
    loading: loadingImage,
  } = useGenerateImage();

  const onSubmit = (values) => {
    console.log(values);
    generateText(values.query);
    generateImage(values.query);
  };

  return (
    <div
      className={
        "h-screen w-full bg-white flex flex-col items-center justify-center"
      }
    ></div>
  );
}
