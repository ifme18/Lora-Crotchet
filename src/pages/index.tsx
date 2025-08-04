import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Craft&nbsp;</span>
          <span className={title({ color: "primary" })}>cozy&nbsp;</span>
          <br />
          <span className={title()}>
            crochet creations with Lora Crochets.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Handmade patterns, kits, and tutorials for every crocheter.
          </div>
        </div>

        <div className="flex gap-3">
          <button
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
          >
            Shop Patterns
          </button>
          <button
            className={buttonStyles({ variant: "bordered", radius: "full" })}
          >
            View Tutorials
          </button>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Start your crochet journey with{" "}
              <Code color="secondary">Lora Crochets</Code>
            </span>
          </Snippet>
        </div>

        <div className="mt-8 w-full max-w-md">
          <img
            src="IMG_0391.jpg"
            alt="Lora Crochets handmade blanket"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={title({ size: "sm", class: "text-center mb-12" })}>
            Featured Patterns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-default-50 rounded-lg p-6 shadow-sm">
              <div className="aspect-square bg-default-100 rounded-lg mb-4 flex items-center justify-center">
                <span> <img
            src="💕✨.jpeg"
            alt="Lora Crochets handmade blanket"
            className="w-full h-auto rounded-lg shadow-md"
          /></span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Our  girl wears</h3>
              <p className="text-default-600 mb-4">Perfect for beginners, this classic pattern creates beautiful texture and warmth.</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-yellow-600">kes3000 </span>
                
              </div>
            </div>

            <div className="bg-default-50 rounded-lg p-6 shadow-sm">
              <div className="aspect-square bg-default-100 rounded-lg mb-4 flex items-center justify-center">
                <span > <img
            src="download.jpeg"
            alt="Lora Crochets handmade blanket"
            className="w-full h-auto rounded-lg shadow-md"
          /></span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fancy Wheelchair</h3>
              <p className="text-default-600 mb-4">Complete kit with yarn, pattern, and stuffing for an adorable teddy bear.</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-yellow-600">kes900.99</span>
                
              </div>
            </div>

            <div className="bg-default-50 rounded-lg p-6 shadow-sm">
              <div className="aspect-square bg-default-100 rounded-lg mb-4 flex items-center justify-center">
                <span > <img
            src="public/bag.jpeg"
            alt="Lora Crochets handmade blanket"
            className="w-full h-auto rounded-lg shadow-md"
          /></span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Chunky Handbag Pattern</h3>
              <p className="text-default-600 mb-4">Quick weekend project that's perfect for gift-giving season.</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-yellow-600">kes 1800</span>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-default-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={title({ size: "sm", class: "mb-8" })}>
            About Lora Crochets
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-default-700 mb-6">
                Welcome to Lora Crochets, where passion meets craftsmanship. I'm Lora, 
                and I've been crocheting for over 15 years, creating patterns that bring 
                joy and comfort to homes around the world.
              </p>
              <p className="text-lg text-default-700 mb-6">
                Each pattern is carefully designed and tested to ensure you have the best 
                possible crafting experience. Whether you're a complete beginner or an 
                experienced crocheter, you'll find patterns that inspire and challenge you.
              </p>
              <button className={buttonStyles({ variant: "bordered", radius: "full" })}>
                Read My Story
              </button>
            </div>
            <div className="aspect-square bg-default-100 rounded-lg flex items-center justify-center">
              <span > <img
            src="1000601074.jpg"
            alt="Lora Crochets handmade blanket"
            className="w-full h-auto rounded-lg shadow-md"
          /></span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={title({ size: "sm", class: "text-center mb-12" })}>
            What Crocheters Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-default-50 rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
              <p className="text-default-700 mb-4">
                "Lora's patterns are so clear and easy to follow. I made my first blanket 
                using her granny square pattern and it turned out perfectly!"
              </p>
              <p className="text-sm text-default-500">- Sarah M.</p>
            </div>

            <div className="bg-default-50 rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
              <p className="text-default-700 mb-4">
                "The amigurumi kits are fantastic! Everything you need is included, 
                and the instructions are beginner-friendly."
              </p>
              <p className="text-sm text-default-500">- Jennifer K.</p>
            </div>

            <div className="bg-default-50 rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
              <p className="text-default-700 mb-4">
                "I've been crocheting for years, and Lora's advanced patterns still 
                challenge and inspire me. Beautiful designs!"
              </p>
              <p className="text-sm text-default-500">- Maria L.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-yellow-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className={title({ size: "sm", class: "mb-4" })}>
            Stay Connected
          </h2>
          <p className={subtitle({ class: "mb-8" })}>
            Get new patterns, tutorials, and crochet tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-full border border-default-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              className={buttonStyles({
                color: "bg-yellow",
                radius: "full",
                variant: "shadow",
              })}
            >
              Subscribe
            </button>
          </div>
          <p className="text-sm text-default-500 mt-4">
            No spam, unsubscribe anytime. Free pattern included with signup!
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={title({ size: "sm", class: "mb-4" })}>
            Ready to Start Crocheting?
          </h2>
          <p className={subtitle({ class: "mb-8" })}>
            Browse our collection of patterns and kits to find your next project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className={buttonStyles({
                color: "bg-yellow",
                radius: "full",
                variant: "shadow",
                size: "lg",
              })}
            >
              Shop All Patterns
            </button>
            <button
              className={buttonStyles({
                variant: "bordered",
                radius: "full",
                size: "lg",
              })}
            >
              Browse Tutorials
            </button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
