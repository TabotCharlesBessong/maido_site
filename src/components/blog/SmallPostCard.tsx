import type { BlogPost } from "../../constants/types";

const SmallPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <a
    href="#"
    className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
  >
    <img
      src={post.imageUrl}
      alt={post.title}
      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
    />
    <div>
      <h4 className="font-bold text-text-dark leading-tight">{post.title}</h4>
      <p className="text-sm text-gray-500 mt-1">{post.excerpt}</p>
    </div>
  </a>
);

export default SmallPostCard