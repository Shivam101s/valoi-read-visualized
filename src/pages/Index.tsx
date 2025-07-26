import { Header } from "@/components/ui/header";
import { CategorySidebar } from "@/components/library/category-sidebar";
import { BookGrid } from "@/components/library/book-grid";
import { VideoPlayer } from "@/components/video/video-player";
import { useState } from "react";

const Index = () => {
  const [currentView, setCurrentView] = useState<"library" | "player">("library");

  if (currentView === "player") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-6">
          <VideoPlayer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <CategorySidebar />
        <main className="flex-1">
          <BookGrid />
        </main>
      </div>
    </div>
  );
};

export default Index;
