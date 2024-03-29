/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/cocktail", // Matches requests to /cocktail
      destination: "http://127.0.0.1:8000/cocktail", // Forward to backend URL
    },
    {
      source: "/cocktail", // Matches requests to /cocktail
      destination: "https://march28-2twnlcizjq-wl.a.run.app/cocktail", // Forward to backend URL
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
