import Image from "next/image"
export default function Initial({res}){
    return (
        <div className="grid  grid-cols-1  gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <div className="h-[300px] row-span-3 sm:col-span-2 lg:h-auto lg:col-span-1 lg:row-span-2  bg-pink-50 rounded-lg ">
          {!res.success 
          ? <p className="text-red-500">{res.message}</p>
          : <>
          <p>Success</p>
          </>}
        </div>
       {
        res.success && 
        res.blogs.map((blog)=>{
          return <Image key={blog?.id}  src={blog.cover_image} width={1000} height={420} placeholder="blur" blurDataURL={blog.blurDataUrl} alt="kid" sizes="
          (max-width:640px) 100vw ,(max-width:1280px) 50vw,(max-width:1536px) 33vw,25vw" className="rounded-lg shadow-highlight cursor-zoom-in "/>
        })
       }
    </div>
    )
}