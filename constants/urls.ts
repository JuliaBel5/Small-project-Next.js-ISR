import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const urls = {
  products: {
    getProducts: `${publicRuntimeConfig.baseUrl}/products`,
  },
};
