'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Printer, Palette, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-8 text-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-primary md:text-6xl lg:text-7xl text-balance">
                Premium Printing Solutions
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto text-pretty">
                Transform your ideas into stunning printed materials. From offset to digital printing and creative design services.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-32 bg-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl text-balance">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Professional printing solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Offset Printing */}
            <Card className="flex flex-col gap-6 p-8 border-border hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Printer className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Offset Printing</h3>
                <p className="mt-2 text-muted-foreground">
                  High-quality offset printing for large volume projects. Perfect for brochures, catalogs, and packaging.
                </p>
              </div>
              <Link href="/services" className="text-primary hover:text-primary/80 font-medium inline-flex gap-2 items-center">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>

            {/* Digital Printing */}
            <Card className="flex flex-col gap-6 p-8 border-border hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Digital Printing</h3>
                <p className="mt-2 text-muted-foreground">
                  Fast turnaround digital printing for short runs. Ideal for business cards, flyers, and personalized materials.
                </p>
              </div>
              <Link href="/services" className="text-primary hover:text-primary/80 font-medium inline-flex gap-2 items-center">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>

            {/* Design & Branding */}
            <Card className="flex flex-col gap-6 p-8 border-border hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Design & Branding</h3>
                <p className="mt-2 text-muted-foreground">
                  Creative design services to bring your vision to life. Logos, branding, and custom graphics.
                </p>
              </div>
              <Link href="/services" className="text-primary hover:text-primary/80 font-medium inline-flex gap-2 items-center">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl text-balance">
              Recent Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore some of our latest and greatest work
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group overflow-hidden rounded-lg bg-secondary border border-border aspect-square hover:shadow-lg transition-shadow"
              >
                <div className="h-full w-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary/30">Project {item}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="gap-2">
                View All Projects <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold md:text-4xl text-balance mb-6">
            Ready to start your project?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Get in touch with our team today and let's create something amazing together.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="gap-2">
              Contact Us Now <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
