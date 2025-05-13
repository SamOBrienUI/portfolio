import Link from "next/link";
import { ArrowRightIcon } from "./icons/ArrowRightIcon";

type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block focus:outline-none focus:ring-2 focus:ring-[#5cdb95] focus:ring-offset-2 focus:ring-offset-black rounded-3xl overflow-hidden"
    >
      <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#080b03]/90 to-[#5cdb95]/5 border border-[#5cdb95]/20 shadow-lg transition-all duration-300 hover:border-[#5cdb95]/40 hover:shadow-xl">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold text-white group-hover:text-[#00c2ff] transition-colors leading-snug">
            {post.title}
          </h3>
          <p className="text-xs font-medium text-[#b3e6d5] opacity-80 tracking-wide">
            {post.date}
          </p>
          <p className="text-gray-300 leading-relaxed text-base mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-2 mt-auto">
            <span className="text-sm font-semibold text-[#5cdb95] group-hover:text-[#00c2ff] transition-colors">
              Read post
            </span>
            <span className="ml-auto inline-flex items-center justify-center p-2 rounded-full bg-black/40 group-hover:bg-[#00c2ff]/10 transition-colors">
              <ArrowRightIcon className="text-[#5cdb95] group-hover:text-[#00c2ff] transition-transform duration-200 transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
