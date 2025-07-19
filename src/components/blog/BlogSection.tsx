import { blogData } from "../../constants/data";
import FeaturedPostCard from "./FeaturedPostCard";
import NewsletterCard from "./NewsletterCard";
import SmallPostCard from "./SmallPostCard";

const BlogSection: React.FC = () => {
  const featuredPost = blogData.find((p) => p.isFeatured);
  const otherPosts = blogData.filter((p) => !p.isFeatured);

  return (
    <section className="py-20 bg-slate-50 sm:py-24">
      <div className="max-w-6xl px-4 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-primary-blue border border-primary-blue rounded-full">
              Our Blog
            </span>
            <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">
              Know More About Liva
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover everything about Liva by reading our blog, where we cover
              everything from key features and unique functionalities to the
              benefits of using Liva for enhancing patient care and practice
              efficiency.
            </p>
          </div>
          <a
            href="#"
            className="flex-shrink-0 mt-6 lg:mt-0 px-6 py-2 font-semibold text-primary-blue border-2 border-gray-300 rounded-full hover:bg-gray-300 hover:border-gray-300 transition-all duration-300"
          >
            Read More
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Featured Post */}
          <div className="lg:col-span-3">
            {featuredPost && <FeaturedPostCard post={featuredPost} />}
          </div>

          {/* Other Posts & Newsletter */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {otherPosts.map((post) => (
              <SmallPostCard key={post.id} post={post} />
            ))}
            <NewsletterCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
