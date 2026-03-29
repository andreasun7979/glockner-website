import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Neuigkeiten und Einblicke rund um KI, Automatisierung und digitale Transformation.",
};

// TODO: Fetch blog posts from Sanity when connected
// import { sanityClient } from "../../../sanity/lib/client";
// const posts = await sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc)`);

export default function BlogPage() {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Neuigkeiten und Einblicke rund um KI, Automatisierung und digitale
            Transformation.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
            <p className="text-gray-500 text-lg mb-2">
              Hier erscheinen bald Blog-Beiträge.
            </p>
            <p className="text-gray-400 text-sm">
              Beiträge werden über Sanity Studio verwaltet — unter{" "}
              <code className="bg-gray-100 px-2 py-0.5 rounded">/studio</code>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
