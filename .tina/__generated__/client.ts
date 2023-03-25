import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/02a33ae9-0eaa-44b4-88b8-17fd2c23a8bd/github/main', token: '1e6cc8b3c8849bd96bd715a4c4810e12efff88c5', queries });
export default client;
  