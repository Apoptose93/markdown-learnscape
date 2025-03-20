
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import { ArrowRight, Terminal, Book, Lightbulb, GitPullRequest } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* How it works section */}
        <section className="py-20 bg-secondary/50">
          <Container>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <FadeIn>
                <h2 className="text-3xl font-display font-medium tracking-tight sm:text-4xl">
                  How it works
                </h2>
              </FadeIn>
              <FadeIn delay={150}>
                <p className="mt-4 text-lg text-muted-foreground">
                  Create and deploy beautiful documentation sites in minutes, not hours
                </p>
              </FadeIn>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute top-0 left-9 h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
                
                <div className="space-y-16">
                  {[
                    {
                      title: 'Create your repository',
                      description: 'Start by creating a new GitHub repository using the LearnScape template.',
                      icon: Terminal,
                    },
                    {
                      title: 'Add your Markdown content',
                      description: 'Add your content as Markdown files in the content directory. Organize them however you want.',
                      icon: Book,
                    },
                    {
                      title: 'Customize styling (optional)',
                      description: 'Customize the look and feel by editing the theme configuration file.',
                      icon: Lightbulb,
                    },
                    {
                      title: 'Push and deploy',
                      description: 'Push your changes to GitHub, and your site will be automatically built and deployed to GitHub Pages.',
                      icon: GitPullRequest,
                    },
                  ].map((step, index) => (
                    <FadeIn key={index} delay={index * 100}>
                      <div className="relative flex gap-6">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white z-10 shrink-0">
                          <step.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium">{step.title}</h3>
                          <p className="mt-2 text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* CTA section */}
        <section className="py-20">
          <Container>
            <FadeIn>
              <div className="bg-primary/5 border border-primary/10 rounded-2xl px-6 py-12 md:p-12 text-center">
                <h2 className="text-3xl font-display font-medium">Ready to get started?</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Start creating beautiful documentation sites today. It's free, open-source, and easy to use.
                </p>
                <div className="mt-8">
                  <Button size="lg" className="group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
