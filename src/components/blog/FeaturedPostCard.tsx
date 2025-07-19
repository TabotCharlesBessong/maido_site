import type { BlogPost } from "../../constants/types";

const FeaturedPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
    <div className="relative">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-64 object-cover"
      />
      <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
        <img
          src={post.author.avatarUrl}
          alt={post.author.name}
          className="w-6 h-6 rounded-full"
        />
        <span className="text-sm font-semibold text-text-dark">
          {post.author.name}
        </span>
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-text-dark">{post.title}</h3>
      <p className="mt-2 text-gray-600 flex-grow">{post.excerpt}</p>
      <a
        href="#"
        className="inline-block mt-6 px-6 py-3 font-semibold text-white bg-primary-blue rounded-lg hover:bg-opacity-90 transition-all duration-300 text-center w-full sm:w-auto"
      >
        Read More
      </a>
    </div>
  </div>
);

export default FeaturedPostCard