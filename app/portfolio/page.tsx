'use client';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl text-balance">
            Our Portfolio
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Showcase of our best work and client projects
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <div
                key={item}
                className="group overflow-hidden rounded-lg border border-border aspect-square hover:shadow-lg transition-shadow bg-secondary cursor-pointer"
              >
                <div className="h-full w-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                  <span className="text-5xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Info */}
      <section className="py-20 md:py-32 bg-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
            Ready to see what we can do for you?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Each project in our portfolio represents our commitment to quality, creativity, and customer satisfaction.
          </p>
        </div>
      </section>
    </div>
  );
}
