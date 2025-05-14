import { notFound } from "next/navigation";
import Link from "next/link";
import ContentWrapper from "../../../components/layout/ContentWrapper";
import { getAllPosts, getPostById } from "../../../lib/api";

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { title } = await getPostById(slug);
  return {
    title,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { html, title, date } = await getPostById(slug);

  if (!html) {
    notFound();
  }

  return (
    <ContentWrapper className="bg-gradient-to-b from-black to-[#0a0f08]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#5cdb95] mb-8 font-medium hover:text-[#00c2ff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5cdb95] focus:ring-offset-2 focus:ring-offset-[#0a0f08] rounded-md py-1 px-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Arrow left</title>
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            Back to all posts
          </Link>

          <article className="bg-[rgba(8,11,3,0.7)] backdrop-blur-sm border border-[rgba(92,219,149,0.2)] rounded-2xl p-8 md:p-10 shadow-lg">
            <header className="mb-10 pb-8 border-b border-[rgba(255,255,255,0.15)]">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#ffffff] to-[#5cdb95] bg-clip-text text-transparent leading-tight">
                {title}
              </h1>
              <p className="text-[#b3e6d5] font-medium">{date}</p>
            </header>

            <div
              className="prose prose-invert prose-lg max-w-none text-gray-200
                prose-headings:text-[#5cdb95] prose-headings:font-semibold prose-headings:mt-8 prose-headings:mb-4
                prose-h2:text-2xl prose-h3:text-xl
                prose-p:leading-relaxed prose-p:my-5 prose-p:text-gray-200
                prose-a:text-[#00c2ff] prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                prose-strong:text-white prose-strong:font-semibold prose-code:text-[#ff4ecd] prose-code:bg-[rgba(255,78,205,0.1)] prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-ul:my-5 prose-ol:my-5
                prose-li:text-gray-200 prose-li:my-2 prose-li:marker:text-[#5cdb95]"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>
        </div>
      </div>
    </ContentWrapper>
  );
}

export const dynamicParams = false;
