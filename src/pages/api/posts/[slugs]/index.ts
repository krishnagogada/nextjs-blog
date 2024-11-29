import postsData from "../../../../../posts.json";

export default function handler(req: any, res: any) {
  const { slug } = req.query;
  const post = postsData.posts.find((post) => post.slug === slug);
  res.status(200).json(post);
}
