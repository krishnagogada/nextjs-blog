import agility from "@agility/content-fetch";
const instanceGuid = "9c155e60-u";

export const api = agility.getApi({
  guid: instanceGuid,
  apiKey: process.env.AGILITY_API_KEY,
  isPreview: false,
});
