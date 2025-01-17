import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 bg-no-repeat bg-cover bg-wallpaper ">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start  "></main>

      <Footer />
    </div>
  );
}
