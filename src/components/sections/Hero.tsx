
import React from 'react';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-1/3 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-l from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl opacity-40"></div>
      </div>

      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl font-display font-medium tracking-tight sm:text-5xl md:text-6xl">
              Open Source Learning<br />Made Beautiful
            </h1>
          </FadeIn>
          
          <FadeIn delay={150}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Create beautiful documentation sites from Markdown files and automatically deploy them to GitHub Pages.
            </p>
          </FadeIn>
          
          <FadeIn delay={300}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/documentation">
                  Get Started
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com">
                  View on GitHub
                </a>
              </Button>
            </div>
          </FadeIn>
          
          <FadeIn delay={450}>
            <div className="mt-16 relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/30 to-indigo-500/30 blur-sm"></div>
              <div className="relative rounded-lg overflow-hidden border shadow-lg">
                <div className="bg-zinc-900 h-8 flex items-center px-4">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="bg-white p-6 text-left">
                  <pre className="text-xs md:text-sm overflow-x-auto">
                    <code className="text-zinc-800">
                      # Welcome to LearnScape

                      ## Getting Started

                      LearnScape makes it easy to create beautiful documentation
                      from your markdown files.

                      ```bash
                      # Clone the repository
                      git clone https://github.com/username/learnscape.git
                      ```

                      Your content will be transformed into a beautiful website.
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
