// COMPONENTS
import { HomeContainer } from "@/components";

export default function RootPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HomeContainer />
      </main>
    </div>
  );
}
