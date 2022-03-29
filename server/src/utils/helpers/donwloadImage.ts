import fs from "fs";
import axios from "axios";
import path from "path";

export const downloadImage = async (url: string, dest: string) => {
  const dir = path.join(__dirname, dest);
  axios({
    url,
    responseType: "stream",
  }).then((response) =>
    new Promise<void>((resolve, reject) => {
      response.data
        .pipe(fs.createWriteStream(dir))
        .on("finish", () => resolve())
        .on("error", (e: any) => reject(e));
    }).catch((e) => {
      console.log("error => ", e);
    })
  );
};
