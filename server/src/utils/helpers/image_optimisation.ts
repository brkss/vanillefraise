/*
import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";

export const optimize = async () => {
  const files = await imagemin(["images/*.{jpg,png}"], {
    destination: "cdn/images",
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8],
      }),
      imageminJpegtran(),
    ],
  });
  console.log("file => ", files);
};*/
