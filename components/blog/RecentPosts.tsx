import Link from "next/link";
import { PostCard } from "./PostCard";
import { ArrowRightIcon } from "./icons/ArrowRightIcon";

type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

interface RecentPostsProps {
  posts: Post[];
}

export function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <section id="recent-posts" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-white to-[#5cdb95] bg-clip-text text-transparent">
            Recent Blog Posts
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
            Explore my latest thoughts on tech career growth, front-end
            development, and continuous learning.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          {posts.map((post) => (
            <div key={post.slug} className="w-full px-4 pb-8 sm:w-1/2 lg:w-1/2">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
