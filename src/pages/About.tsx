
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';
import { Github, Twitter, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h1 className="text-4xl font-display font-medium tracking-tight sm:text-5xl mb-6">
                About LearnScape
              </h1>
            </FadeIn>
            
            <FadeIn delay={100}>
              <p className="text-lg text-muted-foreground mb-8">
                LearnScape is an open-source project designed to make it easy to create beautiful documentation and learning content from markdown files, with automatic deployment to GitHub Pages.
              </p>
            </FadeIn>
            
            <div className="space-y-12">
              <FadeIn delay={200}>
                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Our Mission</h2>
                  <p className="text-muted-foreground">
                    We believe that knowledge should be accessible, beautiful, and easy to share. LearnScape was created to empower educators, developers, and content creators to create high-quality learning materials without having to worry about complex web development or design.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={300}>
                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Open Source</h2>
                  <p className="text-muted-foreground">
                    LearnScape is completely open source and free to use. We believe in the power of community contribution and welcome pull requests, feature suggestions, and bug reports. The source code is available on GitHub under the MIT license.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={400}>
                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">How It's Built</h2>
                  <p className="text-muted-foreground mb-4">
                    LearnScape is built with modern web technologies to ensure a fast, responsive, and beautiful experience:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>React for the user interface</li>
                    <li>TypeScript for type safety</li>
                    <li>Tailwind CSS for styling</li>
                    <li>GitHub Actions for automatic deployment</li>
                    <li>Markdown processing for content</li>
                  </ul>
                </div>
              </FadeIn>
              
              <FadeIn delay={500}>
                <div>
                  <h2 className="text-2xl font-display font-medium mb-4">Get In Touch</h2>
                  <p className="text-muted-foreground mb-6">
                    We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, here's how to reach us:
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <a href="https://github.com" className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80 text-foreground">
                      <Github className="h-5 w-5" />
                      GitHub
                    </a>
                    <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80 text-foreground">
                      <Twitter className="h-5 w-5" />
                      Twitter
                    </a>
                    <a href="mailto:hello@example.com" className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80 text-foreground">
                      <Mail className="h-5 w-5" />
                      Email
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
