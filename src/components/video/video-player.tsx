import { Play, Pause, Volume2, Maximize, Settings, SkipBack, SkipForward } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

interface VideoPlayerProps {
  title?: string;
  author?: string;
  duration?: string;
  currentTime?: string;
}

export const VideoPlayer = ({ 
  title = "Three Questions", 
  author = "Leo Tolstoy",
  duration = "12:00",
  currentTime = "4:32"
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState([35]);

  return (
    <div className="space-y-6">
      {/* Video Player */}
      <Card className="overflow-hidden">
        <div className="relative aspect-video bg-gradient-primary">
          {/* Video Content Area */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h2 className="text-3xl font-bold mb-2">{title}</h2>
              <p className="text-xl opacity-90">by {author}</p>
              <p className="text-lg opacity-75 mt-4">
                "Remember then: there is only one time that is important—Now! 
                It is the most important time because it is the only time when we have any power."
              </p>
            </div>
          </div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Button 
              size="icon" 
              className="w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30"
              variant="outline"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="h-8 w-8 text-white" />
              ) : (
                <Play className="h-8 w-8 text-white fill-white" />
              )}
            </Button>
          </div>
          
          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            {/* Progress Bar */}
            <div className="mb-4">
              <Slider
                value={progress}
                onValueChange={setProgress}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
            
            {/* Control Buttons */}
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-3">
                <Button size="icon" variant="ghost" className="text-white hover:text-white hover:bg-white/20">
                  <SkipBack className="h-5 w-5" />
                </Button>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="text-white hover:text-white hover:bg-white/20"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:text-white hover:bg-white/20">
                  <SkipForward className="h-5 w-5" />
                </Button>
                <div className="flex items-center space-x-2">
                  <Volume2 className="h-5 w-5" />
                  <Slider value={[75]} max={100} step={1} className="w-20" />
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-sm">{currentTime} / {duration}</span>
                <Button size="icon" variant="ghost" className="text-white hover:text-white hover:bg-white/20">
                  <Settings className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:text-white hover:bg-white/20">
                  <Maximize className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Video Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-4">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Badge variant="outline">Verified Text</Badge>
              <Badge variant="outline">3A Translations</Badge>
            </div>
            <h1 className="text-2xl font-bold text-foreground">{title}</h1>
            <p className="text-lg text-muted-foreground">by {author}</p>
          </div>
          
          <p className="text-foreground leading-relaxed">
            One day it occurred to a certain emperor that if he only knew the answers to three questions, 
            he would never stray in any matter. What is the best time to do each thing? Who are the most 
            important people to work with? What is the most important thing to do at all times?
          </p>
        </div>
        
        {/* Comprehension Quiz */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Comprehension Quiz</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">1. What is the main moral lesson the King learns?</h4>
              <div className="space-y-2 text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="q1" className="text-primary" />
                  <span>A. Wisdom is found in nature</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="q1" className="text-primary" />
                  <span>B. Action is less important than intention</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="q1" className="text-primary" />
                  <span>C. The most important time is now, the most important person is the one you are with, their most important action is to do good</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="q1" className="text-primary" />
                  <span>D. None of these</span>
                </label>
              </div>
            </div>
            
            <Button className="w-full" variant="outline">
              Submit Answer
            </Button>
            
            <div className="text-xs text-muted-foreground">
              Question 1 of 10 📖
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};