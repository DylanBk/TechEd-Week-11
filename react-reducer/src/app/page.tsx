import Counter from "@/components/Counter";

export default function Home() {
  return (
    <div className="w-fit mt-44 flex flex-col gap-20 items-center mx-auto">
      <h1 className="text-5xl">React Reducer</h1>

      <Counter />
    </div>
  );
}
