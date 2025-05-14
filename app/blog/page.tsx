import { RecentPosts } from "../../components/blog/RecentPosts";
import ContentWrapper from "../../components/layout/ContentWrapper";
import { getAllPosts } from "../../lib/api";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <ContentWrapper className="bg-gradient-to-b from-black to-[#0a0f08]">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-5 bg-gradient-to-r from-white to-[#5cdb95] bg-clip-text text-transparent leading-tight">
            Blog
          </h1>
        </header>

        <RecentPosts posts={posts} />
      </div>
    </ContentWrapper>
  );
}
