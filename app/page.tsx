import HeroSection from "@/screens/home/hero-section";
import SearchSection from "@/screens/home/search-section";

export const metadata = {
  title: {
    default: "Online music",
  },
  description: "Users can search their lovely music",
};

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <SearchSection />
    </main>
  );
}
