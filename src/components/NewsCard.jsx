import { FaRegEye, FaStar, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { format } from 'date-fns';
import { Link } from "react-router";


const NewsCard = ({ news }) => {
    const { id, title,
        details,
        image_url,
        author,
        total_view,
        rating,

    } = news;
    return (
        <div className="card bg-base-100 shadow-md  rounded-xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-base-200">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-medium">{author?.name}</h3>
                        <p className="text-sm text-gray-500">
                            {format(new Date(author?.published_date), "yyyy-MM-dd")}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                    <FaRegBookmark className="cursor-pointer hover:text-primary" />
                    <FaShareAlt className="cursor-pointer hover:text-primary" />
                </div>
            </div>

            {/* Body */}
            <div className="p-4">
                <h2 className="text-lg font-bold mb-3 hover:text-primary transition-colors">
                    {title}
                </h2>
                <img
                    src={image_url}
                    alt={title}
                    className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 leading-relaxed">
                    {details.slice(0, 250)}...
                    <Link to={`/news-details/${id}`} className="text-primary font-semibold cursor-pointer hover:underline">
                        Read More
                    </Link>
                </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-3 border-t text-sm text-gray-600">
                {/* Rating */}
                <div className="flex items-center gap-1 text-orange-500">
                    {[...Array(rating?.number || 0)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="ml-2 text-gray-700 font-medium">
                        {rating?.number?.toFixed(1) || 0}
                    </span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-1">
                    <FaRegEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;