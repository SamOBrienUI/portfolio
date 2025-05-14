import Link from "next/link";
import { RecentPosts } from "../components/blog/RecentPosts";
import { ArrowRightIcon } from "../components/blog/icons/ArrowRightIcon";
import { Hero } from "../components/hero";
import { getAllPosts } from "../lib/api";

export default async function HomePage() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 4);

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
