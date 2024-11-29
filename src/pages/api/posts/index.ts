import postsData from "../../../../posts.json";

export default function handler(req: any, res: any) {
  const posts = postsData.posts;
  res.status(200).json(posts);
}
