
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from '@/components/ui/separator';
import { Book, FileText, Code, ExternalLink } from 'lucide-react';

const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h1 className="text-4xl font-display font-medium tracking-tight sm:text-5xl mb-6">
                Documentation
              </h1>
            </FadeIn>
            
            <FadeIn delay={100}>
              <p className="text-lg text-muted-foreground mb-12">
                Everything you need to know about getting started with LearnScape, customizing your site, and adding content.
              </p>
            </FadeIn>
            
            <div className="mb-12">
              <FadeIn delay={200}>
                <div className="p-6 border rounded-lg bg-secondary/30">
                  <h2 className="text-xl font-medium mb-2 flex items-center">
                    <Book className="mr-2 h-5 w-5" />
                    Quick Start Guide
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Follow these steps to create your LearnScape site and deploy it to GitHub Pages.
                  </p>
                  
                  <ol className="space-y-4 pl-6 list-decimal">
                    <li className="text-muted-foreground">
                      <span className="text-foreground font-medium">Create a new repository</span>
                      <p>Use the LearnScape template to create a new repository on GitHub.</p>
                    </li>
                    <li className="text-muted-foreground">
                      <span className="text-foreground font-medium">Clone the repository</span>
                      <p>Clone the repository to your local machine using Git.</p>
                      <pre className="mt-2 p-3 bg-zinc-900 text-zinc-100 rounded text-sm overflow-x-auto">
                        <code>git clone https://github.com/yourusername/your-repo.git</code>
                      </pre>
                    </li>
                    <li className="text-muted-foreground">
                      <span className="text-foreground font-medium">Add your content</span>
                      <p>Add your Markdown files to the content directory. The directory structure will be reflected in the navigation of your site.</p>
                    </li>
                    <li className="text-muted-foreground">
                      <span className="text-foreground font-medium">Push your changes</span>
                      <p>Commit and push your changes to GitHub. Your site will be automatically built and deployed to GitHub Pages.</p>
                      <pre className="mt-2 p-3 bg-zinc-900 text-zinc-100 rounded text-sm overflow-x-auto">
                        <code>git add .<br/>git commit -m "Add content"<br/>git push</code>
                      </pre>
                    </li>
                  </ol>
                  
                  <div className="mt-6">
                    <Button variant="outline" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      View Full Documentation
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <Separator className="my-12" />
            
            <FadeIn delay={300}>
              <h2 className="text-2xl font-display font-medium mb-6">Documentation Topics</h2>
              
              <Tabs defaultValue="getting-started" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                  <TabsTrigger value="customization">Customization</TabsTrigger>
                  <TabsTrigger value="content">Content</TabsTrigger>
                </TabsList>
                
                <TabsContent value="getting-started" className="p-4">
                  <ul className="space-y-4">
                    <li>
                      <a href="#" className="flex items-start p-3 rounded-md hover:bg-secondary/50 transition-colors">
                        <FileText className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                        <div>
                          <h3 className="font-medium mb-1">Installation Guide</h3>
                          <p className="text-sm text-muted-foreground">Complete guide to installing and setting up LearnScape</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-start p-3 rounded-md hover:bg-secondary/50 transition-colors">
                        <FileText className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                        <div>
                          <h3 className="font-medium mb-1">GitHub Pages Deployment</h3>
                          <p className="text-sm text-muted-foreground">How to deploy your LearnScape site to GitHub Pages</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-start p-3 rounded-md hover:bg-secondary/50 transition-colors">
                        <FileText className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                        <div>
                          <h3 className="font-medium mb-1">Configuration Options</h3>
                          <p className="text-sm text-muted-foreground">Learn about the available configuration options</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </TabsContent>
                
                <TabsContent value="customization" className="p-4">
                  <ul className="space-y-4">
                    <li>
                      <a href="#" className="flex items-start p-3 rounded-md hover:bg-secondary/50 transition-colors">
                        <Code className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                        <div>
                          <h3 className="font-medium mb-1">Theming Guide</h3>
                          <p className="text-sm text-muted-foreground">Customize the look and feel of your site</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-start p-3 rounded-md hover:bg-secondary/50 transition-colors">
                        <Code className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                        <div>
                          <h3 className="font-medium mb-1">Custom Components</h3>
                          <p className="text-sm text-muted-foreground">Create and use custom components in your content</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-start p-3 rounded-md hover:bg-secondary/50 transition-colors">
                        <Code className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                        <div>
                          <h3 className="font-medium mb-1">Navigation Customization</h3>
                          <p className="text-sm text-muted-foreground">Customize the navigation structure of your site</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </TabsContent>
                
                <TabsContent value="content" className="p-4">
                  <ul className="space-y-4">
                    <li>
                      <a href="#" className="flex items-start p-3 rounded-md hover:bg-secondary/50 transition-colors">
                        <Book className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                        <div>
                          <h3 className="font-medium mb-1">Markdown Guide</h3>
                          <p className="text-sm text-muted-foreground">Learn how to write effective Markdown content</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-start p-3 rounded-md hover:bg-secondary/50 transition-colors">
                        <Book className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                        <div>
                          <h3 className="font-medium mb-1">Organizing Content</h3>
                          <p className="text-sm text-muted-foreground">Best practices for organizing your content files</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-start p-3 rounded-md hover:bg-secondary/50 transition-colors">
                        <Book className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                        <div>
                          <h3 className="font-medium mb-1">Media Embeds</h3>
                          <p className="text-sm text-muted-foreground">How to embed images, videos, and other media in your content</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </TabsContent>
              </Tabs>
            </FadeIn>
          </div>
        </Container>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
