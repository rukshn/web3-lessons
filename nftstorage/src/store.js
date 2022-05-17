import { NFTStorage, File } from "nft.storage";
import fs from "fs";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const { NFT_STORE_API_KEY } = process.env;

export const storeAsset = async () => {
  const client = new NFTStorage({ token: NFT_STORE_API_KEY });
  const metaData = await client.store({
    name: "Example NFT",
    description: "Testing IPFS network",
    image: new File([await fs.promises.readFile("test.jpeg")], "test.jpeg", {
      type: "image/jpeg",
    }),
  });

  return metaData.url;
};

export const ipfsToHttp = (url) => {
  return url.replace("ipfs://", "https://cloudflare-ipfs.com/ipfs/");
};

export const getMetaData = async (url) => {
  const metaData = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  return metaData;
};
