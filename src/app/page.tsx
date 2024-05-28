import { Live } from "@/components/liveblocks";
import Navbar from "@/layouts/Navbar";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden">
      <Navbar />

      <section className="flex h-full flex-row">
        <Live />
      </section>
    </main>
  );
}
