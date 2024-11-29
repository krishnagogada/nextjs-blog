import { poppins } from "../../../utils";
import Head from "next/head";
import Image from "next/image";
import { api } from "../../../../agility.lib";

export const getServerSideProps = async (ctx: any) => {
  const { slug } = ctx.query;

  const posts = await api.getContentList({
    referenceName: "posts",
    languageCode: "en-us",
    sort: "properties.date",
  });

  const post = posts.items?.find((post: any) => post.fields.slug === slug);

  return {
    props: {
      post: post.fields,
    },
  };
};

const PostItem = ({ post }: any) => {
  return (
    <div className={`${poppins.className}`}>
      <Head>
        <title>{"post.title"} - XenTravels Posts</title>
      </Head>
      <main className={"pb-14 mt-28 max-w-[800px] mx-auto"}>
        <Image
          src={post.image.url}
          alt={`${post.title} img`}
          width={300}
          height={300}
          className={
            "w-full max-h-[500px] object-cover object-center rounded-md shadow-md"
          }
        />
        <div
          className={
            "mt-10 border-b-2 pb-3 border-[#ccc] flex justify-between items-center"
          }
        >
          <h1 className={"font-bold text-3xl capitalize leading-relaxed"}>
            {post.title}
          </h1>
        </div>
        <div
          className={"blog-body mt-10"}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </main>
    </div>
  );
};

export default PostItem;
