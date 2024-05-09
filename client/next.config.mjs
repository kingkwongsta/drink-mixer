/** @type {import('next').NextConfig} */
const nextConfig = {
  // GCP_BACKEND_CONTAINER
  env: {
    API_URL: process.env.NEXT_PUBLIC_GCP_BACKEND_CONTAINER,
  },
  rewrites: async () => [
    {
      source: "/cocktail",
      destination: "http://127.0.0.1:8000/cocktail",
    },
    {
      source: "/cocktail",
      destination: `${process.env.API_URL}/cocktail`,
    },
    {
      source: "/add_recipe",
      destination: "http://127.0.0.1:8000/add_recipe",
    },
    {
      source: "/add_recipe",
      destination: `${process.env.API_URL}/add_recipe/`,
    },
  ],
  async headers() {
    return [
      {
        // matching all API routes
        source: "/",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
