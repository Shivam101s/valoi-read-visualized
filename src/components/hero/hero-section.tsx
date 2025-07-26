import { Play, Sparkles, BookOpen, Video, Users, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero backdrop-blur-[1px]" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-bounce-slow">
          <div className="w-16 h-16 bg-primary/20 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce-slow" style={{ animationDelay: '1s' }}>
          <div className="w-20 h-20 bg-purple-500/20 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <Video className="w-10 h-10 text-white" />
          </div>
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce-slow" style={{ animationDelay: '2s' }}>
          <div className="w-12 h-12 bg-pink-500/20 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-6 py-2 text-base">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Learning Revolution
            </Badge>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-7xl md:text-8xl font-bold text-white leading-tight">
              Valoi
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                .ai
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-white/90 font-medium">
              Transform Books into Immersive Video Experiences
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing reading for dyslexic learners through AI-powered text-to-video technology. 
              Watch, learn, and comprehend like never before.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-strong px-8 py-4 text-lg font-semibold">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg">
              Start Learning Free
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-8 h-8 text-white mr-2" />
                  <span className="text-3xl font-bold text-white">50K+</span>
                </div>
                <p className="text-white/80">Active Learners</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="w-8 h-8 text-white mr-2" />
                  <span className="text-3xl font-bold text-white">1,200+</span>
                </div>
                <p className="text-white/80">Books Available</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-white mr-2" />
                  <span className="text-3xl font-bold text-white">95%</span>
                </div>
                <p className="text-white/80">Improvement Rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};