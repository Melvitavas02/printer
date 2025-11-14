'use client';

import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl text-balance">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive printing and design solutions
          </p>
        </div>
      </section>

      {/* Offset Printing */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground text-balance">Offset Printing</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our offset printing service is perfect for high-volume projects requiring exceptional quality and vibrant colors. We use state-of-the-art equipment and premium paper stocks.
              </p>
              <ul className="space-y-3">
                {['Brochures & Catalogs', 'Business Cards', 'Packaging & Labels', 'Posters & Banners', 'Custom Books'].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-8 h-64 flex items-center justify-center">
              <span className="text-foreground/30 text-lg">Offset Printing Demo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Printing */}
      <section className="py-20 md:py-32 bg-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div className="bg-secondary border border-border rounded-lg p-8 h-64 flex items-center justify-center order-last md:order-first">
              <span className="text-foreground/30 text-lg">Digital Printing Demo</span>
            </div>
            <div className="space-y-6 order-first md:order-last">
              <h2 className="text-3xl font-bold text-foreground text-balance">Digital Printing</h2>
              <p className="text-muted-foreground leading-relaxed">
                Fast, flexible, and affordable. Our digital printing service is ideal for short-run projects and quick turnarounds without sacrificing quality.
              </p>
              <ul className="space-y-3">
                {['Personalized Marketing Materials', 'Event Materials', 'Short-Run Items', 'Variable Data Printing', 'Same-Day Printing'].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design & Branding */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground text-balance">Design & Branding</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our creative team transforms your ideas into visually stunning designs that capture your brand essence and resonate with your audience.
              </p>
              <ul className="space-y-3">
                {['Logo Design', 'Brand Identity', 'Print Design', 'Packaging Design', 'Custom Graphics'].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-8 h-64 flex items-center justify-center">
              <span className="text-foreground/30 text-lg">Design & Branding Demo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-32 bg-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-16 text-center text-balance">
            Service Pricing
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { name: 'Starter', price: '$299', features: ['Up to 5 designs', 'Basic printing', 'Standard turnaround', 'Email support'] },
              { name: 'Professional', price: '$799', features: ['Unlimited designs', 'Premium materials', 'Fast turnaround', 'Priority support'] },
              { name: 'Enterprise', price: 'Custom', features: ['Full branding suite', 'Custom solutions', 'Dedicated account manager', '24/7 support'] },
            ].map((plan) => (
              <Card key={plan.name} className="p-8 border-border flex flex-col gap-6">
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-3xl font-bold text-primary">{plan.price}</p>
                <ul className="space-y-3 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2 items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
