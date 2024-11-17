export const isGif=(url)=>{
 return url.match(/\.(jpg|jpeg|png|gif|webp|svg|bmp|tiff|ico)$/i)[1] ==='gif'
}