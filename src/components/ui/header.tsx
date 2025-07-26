import { Search, User, Settings } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";

export const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-primary font-display">Valoi</h1>
          <span className="text-sm text-muted-foreground bg-accent px-2 py-1 rounded-full">AI</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search books, authors, or subjects..." 
              className="pl-10 bg-muted/50 border-border focus:bg-background transition-colors"
            />
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            Continue Reading
          </Button>
          <Button variant="ghost" size="sm">
            Watch Now
          </Button>
          <Button variant="ghost" size="sm">
            Trending
          </Button>
          <Button variant="ghost" size="sm">
            Explore
          </Button>
          <Button variant="ghost" size="sm">
            New Releases
          </Button>
          
          <div className="h-6 w-px bg-border mx-2" />
          
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button variant="default" size="sm">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};