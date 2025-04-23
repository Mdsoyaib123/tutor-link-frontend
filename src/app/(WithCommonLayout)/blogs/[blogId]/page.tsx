import Image from 'next/image';
import React from 'react'
type Props = {
  params: {
    id: string;
  };
};
const BlogDetailsPage = async({ params }: Props) => {
  const decodedParams = decodeURIComponent(params?.blogId);

  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a893a3bfa6ff4d6ba04ffebee2a4e707",
    {
      next: { revalidate: 30 },
    }
  );
  const BlogData = await res.json()
  const singleBlog = BlogData?.articles?.filter((item)=>item.author === decodedParams )
  console.log(singleBlog[0]?.urlToImage)
  return (
    <div className=" max-w-7xl mx-auto py-24 text-black dark:text-white">
    <div className=" mx-auto p-6 shadow-md rounded-lg mt-6">
      <Image
        src={singleBlog[0]?.urlToImage}
        alt={singleBlog[0]?.title}
        width={600}
        height={400}
        className="w-full h-60 object-cover rounded-lg"
      />
      <h1 className="text-xl md:text-3xl my-10 font-bold dark:text-gray-100 mt-4">{singleBlog[0].title}</h1>
      <div className="dark:text-gray-200 text-sm mt-1">📅 {singleBlog[0].publishedAt}</div>
      <p className="dark:text-gray-300 text-lg mt-6">{singleBlog[0].description} {singleBlog[0].description} {singleBlog[0].description}</p>
    </div>
  </div>
  )
}

export default BlogDetailsPage 

