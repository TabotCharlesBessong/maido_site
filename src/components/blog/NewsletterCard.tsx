import { FiMail } from "react-icons/fi";

const NewsletterCard: React.FC = () => (
  <div className="flex items-center gap-4 p-3 bg-white rounded-2xl shadow-md">
    <div className="flex-shrink-0 p-4 bg-primary-blue rounded-xl">
      <FiMail className="w-8 h-8 text-white" />
    </div>
    <div className="flex-grow flex flex-col sm:flex-row items-center gap-2">
      <input
        type="email"
        placeholder="Subscribe via enter your mail"
        className="w-full px-2 py-1 border-none focus:ring-0 text-sm"
      />
      <button className="flex-shrink-0 w-full sm:w-auto px-4 py-2 text-sm font-semibold text-primary-blue bg-white border border-gray-300 rounded-lg hover:bg-slate-100 transition-colors">
        Subscribe Now
      </button>
    </div>
  </div>
);

export default NewsletterCard