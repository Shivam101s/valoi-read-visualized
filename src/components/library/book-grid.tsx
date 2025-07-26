import { Play, Clock, Star, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface Book {
  id: string;
  title: string;
  author: string;
  duration: string;
  rating: number;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  verified: boolean;
  progress?: number;
  thumbnail?: string;
}

const mockBooks: Book[] = [
  {
    id: "1",
    title: "Three Questions",
    author: "Leo Tolstoy",
    duration: "12 min",
    rating: 4.8,
    category: "Short Stories",
    difficulty: "Intermediate",
    verified: true,
    progress: 35,
  },
  {
    id: "2",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    duration: "4h 32min",
    rating: 4.6,
    category: "Novels",
    difficulty: "Advanced",
    verified: true,
    progress: 0,
  },
  {
    id: "3",
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    duration: "2h 15min",
    rating: 4.7,
    category: "Plays",
    difficulty: "Advanced",
    verified: true,
    progress: 100,
  },
  {
    id: "4",
    title: "Introduction to Physics",
    author: "Richard Feynman",
    duration: "6h 45min",
    rating: 4.9,
    category: "Textbooks",
    difficulty: "Beginner",
    verified: true,
    progress: 12,
  },
  {
    id: "5",
    title: "The Road Not Taken",
    author: "Robert Frost",
    duration: "8 min",
    rating: 4.5,
    category: "Poetry",
    difficulty: "Beginner",
    verified: true,
    progress: 0,
  },
  {
    id: "6",
    title: "Essays on Freedom",
    author: "John Stuart Mill",
    duration: "1h 23min",
    rating: 4.4,
    category: "Essays",
    difficulty: "Intermediate",
    verified: true,
    progress: 67,
  },
  {
    id: "7",
    title: "Daily Science News",
    author: "Nature Publishing",
    duration: "15 min",
    rating: 4.3,
    category: "Newspapers",
    difficulty: "Intermediate",
    verified: true,
    progress: 0,
  },
  {
    id: "8",
    title: "Psychology Today",
    author: "American Psychological Association",
    duration: "25 min",
    rating: 4.6,
    category: "Journals",
    difficulty: "Advanced",
    verified: true,
    progress: 45,
  },
];

const getDifficultyColor = (difficulty: Book["difficulty"]) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-success/10 text-success";
    case "Intermediate":
      return "bg-warning/10 text-warning";
    case "Advanced":
      return "bg-destructive/10 text-destructive";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export const BookGrid = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-foreground">Discover Books</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Sort by Popularity
          </Button>
          <Button variant="outline" size="sm">
            Filter by Semi
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockBooks.map((book) => (
          <Card key={book.id} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-0">
              {/* Thumbnail / Video Preview */}
              <div className="relative aspect-video bg-gradient-primary rounded-t-lg overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <Button 
                    size="icon" 
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30"
                    variant="outline"
                  >
                    <Play className="h-5 w-5 text-white fill-white" />
                  </Button>
                </div>
                
                {/* Progress Bar */}
                {book.progress > 0 && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
                    <div 
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${book.progress}%` }}
                    />
                  </div>
                )}
                
                {/* Verified Badge */}
                {book.verified && (
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                )}
                
                {/* Duration */}
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-black/40 text-white border-white/20">
                    <Clock className="h-3 w-3 mr-1" />
                    {book.duration}
                  </Badge>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">{book.title}</h3>
                    <p className="text-sm text-muted-foreground truncate">{book.author}</p>
                  </div>
                  <div className="flex items-center space-x-1 ml-2">
                    <Star className="h-4 w-4 text-warning fill-warning" />
                    <span className="text-sm font-medium">{book.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline">{book.category}</Badge>
                  <Badge className={getDifficultyColor(book.difficulty)}>
                    {book.difficulty}
                  </Badge>
                </div>
                
                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    {book.progress > 0 ? "Continue" : "Watch Now"}
                  </Button>
                  {book.progress === 100 && (
                    <Button size="sm" variant="outline">
                      Quiz
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};