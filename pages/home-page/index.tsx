import { Hero } from "../../components/hero";
import { RecentPosts } from "../../components/blog/RecentPosts";
import Link from "next/link";
import { ArrowRightIcon } from "../../components/blog/icons/ArrowRightIcon";

// Placeholder for where you might fetch your blog post data
// We'll use a simple array of objects for now, same as in the blog page
const posts = [
  {
    slug: "first-post",
    title: "My First Blog Post",
    date: "May 13, 2025",
    excerpt: "This is a short summary of my first blog post...",
  },
  {
    slug: "second-post",
    title: "Another Interesting Topic",
    date: "May 14, 2025",
    excerpt: "A brief look into another interesting topic...",
  },
  // Add more posts here if you like, or fetch them from a CMS/API
];

// Get the most recent posts (e.g., the latest 3)
const recentPosts = posts.slice(0, 3);

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0a0f08]">
      <Hero />
      <RecentPosts posts={recentPosts} />
      <div className="text-center mb-16 -mt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full border border-[#5cdb95]/40 text-white hover:bg-[#5cdb95]/10 hover:border-[#5cdb95]/60 transition-all"
        >
          View All Posts
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
