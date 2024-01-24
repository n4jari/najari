import * as contentful from "contentful";

const Client = contentful.createClient({
  space: import.meta.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});
export default Client;
