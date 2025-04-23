/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const truncateText = (title: string, wordLimit: number) => {
    const words = title.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : title;
}  
const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white shadow-[0px_0px_20px_theme(colors.blue.600)] hover:shadow-lg hover:shadow-blue-600 rounded-2xl overflow-hidden transition-transform hover:scale-105">
    <div className="relative">
      <img src={blog.urlToImage} alt={blog.title} className="w-full h-48 object-cover" />
      <span className="absolute top-2 right-2 bg-green-600 text-white text-sm px-3 py-1 rounded-md">
        {blog.publishedAt}
      </span>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{truncateText(blog.title, 5)}</h3>
      <p className="text-gray-600 w-80 text-sm mt-2">
        {truncateText(blog.description, 15)}{" "}
        <Link href={`/blogs/${blog.id}`} className="text-blue-500 font-medium hover:underline">
          Read More →
        </Link>
      </p>
      <div className="flex items-center text-gray-600 text-sm mt-2">
        <span className="mr-2">👤 By Admin</span>
        <span className="mr-2">👁 455</span>
        <span>💬 20</span>
      </div>
    </div>
  </div>
  );
};

export default BlogCard;
