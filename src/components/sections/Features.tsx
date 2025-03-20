
import React from 'react';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';
import { FileText, Github, Globe, Sparkles } from 'lucide-react';

const features = [
  {
    name: 'Markdown Support',
    description: 'Write content in Markdown with full support for GitHub Flavored Markdown syntax and extensions.',
    icon: FileText,
  },
  {
    name: 'GitHub Pages Integration',
    description: 'Automatically deploy your documentation site to GitHub Pages with every push to your repository.',
    icon: Github,
  },
  {
    name: 'Beautiful Design',
    description: 'Your content is presented in a beautiful, responsive design that works on all devices.',
    icon: Sparkles,
  },
  {
    name: 'Open Source',
    description: 'LearnScape is fully open source, allowing you to customize and extend it to your needs.',
    icon: Globe,
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl font-display font-medium tracking-tight sm:text-4xl">
              Everything you need to create great documentation
            </h2>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="mt-4 text-lg text-muted-foreground">
              Focus on writing great content while LearnScape handles the rest
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16">
          {features.map((feature, index) => (
            <FadeIn 
              key={feature.name} 
              direction="up" 
              delay={index * 100}
              className="flex flex-col items-start p-6 rounded-xl border bg-white hover:shadow-md animate-hover-up"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium">{feature.name}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
