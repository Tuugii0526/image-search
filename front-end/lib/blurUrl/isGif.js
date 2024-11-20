export const isGif = (url) => {
  try {
    const match = url.match(/\.(jpg|jpeg|png|gif|webp|svg|bmp|tiff|ico)$/i);
    if (match[1] === "gif") {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};
