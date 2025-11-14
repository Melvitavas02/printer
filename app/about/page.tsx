'use client';

import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl text-balance">
            About PrintPress
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Your trusted partner in premium printing and design
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground text-balance">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2010, PrintPress has been delivering exceptional printing and design solutions to businesses of all sizes. What started as a small print shop has grown into a full-service printing and creative agency.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're passionate about helping our clients make a lasting impression through high-quality printed materials and innovative design. Our team of experienced professionals is dedicated to bringing your vision to life.
              </p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-8 h-64 flex items-center justify-center">
              <span className="text-foreground/30 text-lg">Company Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <Card className="p-8 border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional printing and design solutions that help businesses communicate effectively and make lasting impressions on their audiences.
              </p>
            </Card>
            <Card className="p-8 border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and innovative printing partner, known for quality, reliability, and creative excellence in everything we do.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-16 text-center text-balance">
            Why Choose PrintPress
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              { title: 'Quality Materials', description: 'We use premium materials and cutting-edge equipment to ensure exceptional results.' },
              { title: 'Fast Turnaround', description: 'Quick turnaround times without compromising on quality or attention to detail.' },
              { title: 'Expert Design Team', description: 'Our talented designers create stunning visuals that capture your brand identity.' },
              { title: 'Competitive Pricing', description: 'Best value for your investment with transparent pricing and no hidden fees.' },
              { title: 'Customer Support', description: '24/7 customer support to answer questions and address any concerns.' },
              { title: 'Sustainability', description: 'Eco-friendly printing practices and sustainable material options available.' },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
