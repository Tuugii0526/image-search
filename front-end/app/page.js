import Initial from "@/components/modal/Initial";
import { getBlogs } from "@/lib/blogs/getBlogs";
export default async function Home() {
  const res= await getBlogs()
  return (
   <Initial res={res} />
  );
}
