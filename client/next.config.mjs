/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/cocktail",
      destination: "http://127.0.0.1:8000/cocktail",
    },
    {
      source: "/cocktail",
      destination: `https://cocktail-may8-2twnlcizjq-wl.a.run.app/cocktail`,
    },
    {
      source: "/add_recipe",
      destination: "http://127.0.0.1:8000/add_recipe",
    },
    {
      source: "/add_recipe",
      destination: `https://cocktail-may8-2twnlcizjq-wl.a.run.app/add_recipe/`,
    },
    {
      source: "/latest_recipes",
      destination: `http://127.0.0.1:8000/latest_recipes/`,
    },
    {
      source: "/latest_recipes",
      destination: `https://cocktail-may8-2twnlcizjq-wl.a.run.app/latest_recipes/`,
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
