import Head from "next/head";
import { poppins } from "@/utils";
import Link from "next/link";
import Image from "next/image";
import { api } from "../../../agility.lib";

export const getServerSideProps = async () => {
  const posts = await api.getContentList({
    referenceName: "posts",
    languageCode: "en-us",
    sort: "properties.date",
  });
  console.log(posts, ">>>From server side<<<");
  return {
    props: {
      posts: posts.items,
    },
  };
};

export default function Blog({ posts }: any) {
  return (
    <div className={`${poppins.className}`}>
      <Head>
        <title>Travel Blog - XenTravels</title>
      </Head>
      <main className={`pb-14 mt-28 max-w-[800px] mx-auto`}>
        <ul className={"grid grid-cols-3 gap-x-4 gap-y-8 items-center"}>
          {posts.map((post: any) => (
            <li key={post.contentID}>
              <Link
                href={`/blog/${post.fields.slug}`}
                className={
                  "block bg-white rounded-md shadow-md transition-all hover:scale-125"
                }
              >
                <Image
                  src={post.fields.image.url}
                  width={400}
                  height={400}
                  alt={`${post.fields.title} img`}
                  className={
                    "rounded-t-md object-cover object-[50%_50%] max-h-[170px]"
                  }
                />
                <span className={"px-5 pb-6 mt-5 block font-medium capitalize"}>
                  {post.fields.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
