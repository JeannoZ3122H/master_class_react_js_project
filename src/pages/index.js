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
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-8/12 mx-auto items-center space-x-2"
      >
        <Input
          type="query"
          maxLength={70}
          placeholder="What is your post about? (100 characters .max)"
          {...register("query")}
        />
        <Button type="submit" disabled={loading}>
          {loading && <Loader2 className="animate-spin" />} Generate a
          description
        </Button>
      </form>

      {description && !loading && (
        <div className="mt-3 flex w-8/12 mx-auto items-center space-x-2 py-2 px-3 rounded-md bg-slate-300">
          <p className="text-sm">{description}</p>
        </div>
      )}

      {!loadingImage ? (
        <div className="h-[200] w-[200] mx-auto mt-3 bg-slate-300 overflow-hidden rounded-sm">
          {url && <img src={url} className="h-full w-full" />}
        </div>
      ) : (
        <p className="mt-5 text-sm mx-auto self-center">
          loading image, please wait...
        </p>
      )}
    </div>
  );
}
