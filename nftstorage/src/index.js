import { getMetaData, ipfsToHttp, storeAsset } from "./store";

const main = async () => {
  const asset = await storeAsset();
  const metaDateUrl = ipfsToHttp(asset);
  const meta = await getMetaData(metaDateUrl);

  const image = ipfsToHttp(meta.image);
  console.log(image);
};

main();
