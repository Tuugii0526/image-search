import Initial from "@/components/modal/Initial";
import { getBlogs } from "@/lib/blogs/getBlogs";
export default async function Home() {
  const res = await getBlogs();
  return <Initial res={res} />;
}
// 1. Vercel back-end point was not matched . So error is fixed .
// 2. In vercel , env was given as string .
