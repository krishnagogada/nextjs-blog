import agility from "@agility/content-fetch";
const instanceGuid = "9c155e60-u";

export const api = agility.getApi({
  guid: instanceGuid,
  apiKey:
    "defaultlive.ecf20361457b07ef487682bcd56f757f7ff67c48fae59b8dc68d6842d58bcaad",
  isPreview: false,
});
