import { getPlaiceholder } from "plaiceholder";
const cache=new Map()
export async function getBase64ImageUrl(url){
    try {
        let base64Url=cache.get(url)
        if(base64Url)
        {
          return base64Url
        }
        const buffer = await fetch(url).then(async (res) =>
          Buffer.from(await res.arrayBuffer())
        );
        const { base64 } = await getPlaiceholder(buffer);
        cache.set(url,base64Url)
        return {
            success:true,
            base64Url:base64
        }
      } catch (err) {
        return{
            success:false
        };
      }
}