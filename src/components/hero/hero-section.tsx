import { Play, Sparkles, BookOpen, Video, Users, TrendingUp, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import heroBackground from "@/assets/hero-background.jpg";

interface HeroSectionProps {
  onEnterLibrary?: () => void;
}

export const HeroSection = ({ onEnterLibrary }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-20000 hover:scale-105"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero backdrop-blur-[1px]" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-primary/20 rounded-2xl backdrop-blur-md border border-white/30 flex items-center justify-center shadow-glow">
            <BookOpen className="w-10 h-10 text-white drop-shadow-lg" />
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-24 h-24 bg-purple-500/20 rounded-full backdrop-blur-md border border-white/30 flex items-center justify-center shadow-glow">
            <Video className="w-12 h-12 text-white drop-shadow-lg" />
          </div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-16 bg-pink-500/20 rounded-2xl backdrop-blur-md border border-white/30 flex items-center justify-center shadow-glow">
            <Sparkles className="w-8 h-8 text-white drop-shadow-lg" />
          </div>
        </div>
        <div className="absolute top-60 left-1/3 animate-float" style={{ animationDelay: '3s' }}>
          <div className="w-14 h-14 bg-blue-500/20 rounded-xl backdrop-blur-md border border-white/30 flex items-center justify-center shadow-glow">
            <Users className="w-7 h-7 text-white drop-shadow-lg" />
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
          
          {/* Main Heading with Video Effect */}
          <div className="space-y-6">
            <h1 className="text-7xl md:text-9xl font-bold text-white leading-tight animate-pulse-glow">
              Valoi
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent animate-pulse">
                .ai
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl text-white/90 font-medium animate-fade-in">
              Transform Books into Immersive Video Experiences
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Revolutionizing reading for dyslexic learners through AI-powered text-to-video technology. 
              Watch, learn, and comprehend like never before.
            </p>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-strong px-10 py-6 text-xl font-semibold transform hover:scale-105 transition-all duration-300"
            >
              <Play className="w-6 h-6 mr-3" />
              Watch Demo Video
            </Button>
            <Button 
              size="lg" 
              onClick={onEnterLibrary}
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-10 py-6 text-xl transform hover:scale-105 transition-all duration-300" 
              variant="outline"
            >
              Enter Library
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
          
          {/* Enhanced Stats with Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center transform hover:scale-105 hover:bg-white/15 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <Users className="w-12 h-12 text-white mr-3 group-hover:animate-pulse" />
                  <span className="text-4xl font-bold text-white">50K+</span>
                </div>
                <p className="text-white/80 text-lg">Active Learners</p>
                <p className="text-white/60 text-sm mt-2">Growing daily</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center transform hover:scale-105 hover:bg-white/15 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <BookOpen className="w-12 h-12 text-white mr-3 group-hover:animate-pulse" />
                  <span className="text-4xl font-bold text-white">1,200+</span>
                </div>
                <p className="text-white/80 text-lg">Books Available</p>
                <p className="text-white/60 text-sm mt-2">All categories covered</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center transform hover:scale-105 hover:bg-white/15 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="w-12 h-12 text-white mr-3 group-hover:animate-pulse" />
                  <span className="text-4xl font-bold text-white">95%</span>
                </div>
                <p className="text-white/80 text-lg">Improvement Rate</p>
                <p className="text-white/60 text-sm mt-2">Proven results</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={onEnterLibrary}>
        <div className="flex flex-col items-center space-y-2">
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-2 h-4 bg-white/80 rounded-full mt-2 animate-pulse" />
          </div>
          <ChevronDown className="w-6 h-6 text-white/60 animate-bounce" />
          <span className="text-white/60 text-sm">Explore Library</span>
        </div>
      </div>
    </section>
  );
};