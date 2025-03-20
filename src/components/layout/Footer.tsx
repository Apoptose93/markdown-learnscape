
import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@/components/ui/Container';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-white border-t py-12 mt-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-xl font-display font-semibold tracking-tight">
              LearnScape
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              An open-source platform for creating and sharing markdown-based learning content,
              with automatic GitHub Pages deployment.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Markdown Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  GitHub Pages
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} LearnScape. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
