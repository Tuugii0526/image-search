import { getBase64ImageUrl } from "../blurUrl/getBase64ImageUrl";
import { isGif } from "../blurUrl/isGif";

export async function getBlogs() {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}?per_page=500`);
    const blogs = await res.json();
    const noGifBlogs = blogs.filter(
      ({ cover_image }) => cover_image && !isGif(cover_image)
    );

    const blurImagePromises = noGifBlogs.map(({ cover_image }) =>
      getBase64ImageUrl(cover_image)
    );
    const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);
    for (let i = 0; i < noGifBlogs.length; i++) {
      if (imagesWithBlurDataUrls[i].success) {
        noGifBlogs[i].blurDataUrl = imagesWithBlurDataUrls[i].base64Url;
      }
    }
    const noGifYesBlurDataUrl = noGifBlogs.filter(
      ({ blurDataUrl }) => blurDataUrl
    );

    return {
      success: true,
      blogs: noGifYesBlurDataUrl,
    };
  } catch (error) {
    return {
      success: false,
      message: `${error}`,
    };
  }
}
