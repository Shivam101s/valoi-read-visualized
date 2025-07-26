import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Text Types", count: 1247 },
  { name: "Novels", count: 892 },
  { name: "Textbooks", count: 634 },
  { name: "Short Stories", count: 421 },
  { name: "Poetry", count: 298 },
  { name: "Newspapers", count: 156 },
  { name: "Plays", count: 187 },
  { name: "Essays", count: 203 },
  { name: "Journals", count: 89 }
];

interface CategorySidebarProps {
  className?: string;
}

export const CategorySidebar = ({ className }: CategorySidebarProps) => {
  return (
    <aside className={cn("w-64 bg-muted/30 border-r border-border p-6", className)}>
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-foreground mb-4">Library Selection</h2>
        
        {categories.map((category) => (
          <Button
            key={category.name}
            variant="ghost"
            className="w-full justify-between text-left h-auto py-3 px-3 hover:bg-accent/50 transition-colors"
          >
            <span className="text-foreground">{category.name}</span>
            <span className="text-muted-foreground text-sm">{category.count}</span>
          </Button>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-border">
        <h3 className="text-sm font-medium text-muted-foreground mb-3">Filter by</h3>
        <div className="space-y-2">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            Difficulty Level
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            Duration
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            Language
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            Publisher
          </Button>
        </div>
      </div>
    </aside>
  );
};