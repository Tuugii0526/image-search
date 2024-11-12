import next from "next";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
const url =
  "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2jgoby2pjfilgs31kueh.png";
export default async function Home() {
  let blurUrl;
  try {
    const buffer = await fetch(url).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );
    const { base64 } = await getPlaiceholder(buffer);
    blurUrl = base64;
  } catch (err) {
    err;
  }
  return (
    <></>
  );
}
