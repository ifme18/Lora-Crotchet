import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

const posts = [
  {
    title: "Reviving Traditional Crochet Art in Sub-Saharan Africa",
    summary:
      "Across Sub-Saharan Africa, crochet is making a cultural comeback as young artisans blend ancestral patterns with modern fashion trends.",
    date: "August 4, 2025",
  },
  {
    title: "Women Empowerment Through Crochet",
    summary:
      "Crochet is more than a hobby — it’s a livelihood. Discover how women are building businesses and communities around yarn and hook.",
    date: "July 29, 2025",
  },
  {
    title: "Sustainable Fashion with African Yarns",
    summary:
      "From organic cotton to plant-based dyes, crocheters in Africa are leading the way in eco-conscious textile creation.",
    date: "July 20, 2025",
  },
];

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-2xl text-center">
          <h1 className={title()}>Lora Crotchets Blog</h1>
          <p className="mt-2 text-lg text-gray-500">
            Stories and stitches from across Sub-Saharan Africa
          </p>
        </div>

        <div className="mt-10 grid max-w-4xl gap-6 px-4 md:grid-cols-3">
          {posts.map((post, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600">{post.summary}</p>
              <p className="mt-4 text-xs text-gray-400">{post.date}</p>
            </div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}

