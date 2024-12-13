import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import useGenerateText from "@/hooks/useGenerateText";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const { generate, description, loading, error } = useGenerateText();

  const onSubmit = (values) => {
    console.log(values);
    generate(values.query);
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
          placeholder="What is your post about? (100 characters .max)"
          {...register("query")}
        />
        <Button type="submit" disabled={loading}>
          {loading && <Loader2 className="animate-spin" />} Generate a
          description
        </Button>
      </form>

      {description && !loading && <p className="mt-3">{description}</p>}
    </div>
  );
}
