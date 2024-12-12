import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div
      className={"h-screen w-full bg-white flex items-center justify-center"}
    >
      <div className="flex flex-col items-center justify-center">
        <Button>I'm a shadcn button</Button>
        <p className="mt-4">
          If u want to use shadcn components, first access to{" "}
          <a className="text-blue-600" href="https://ui.shadcn.com/docs">
            https://ui.shadcn.com/docs
          </a>{" "}
          and read the section for the component you want
        </p>
        <p className="mt-4">
          To use zustand to store your data{" "}
          <a className="text-blue-600" href="https://github.com/pmndrs/zustand">
            https://github.com/pmndrs/zustand
          </a>{" "}
        </p>
        <p className="mt-4">
          To navigate between pages{" "}
          <a
            className="text-blue-600"
            href="https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating"
          >
            https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating
          </a>{" "}
        </p>
      </div>
    </div>
  );
}
