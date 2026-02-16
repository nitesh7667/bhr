import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/", // Assuming you might have an admin section later
    },
    sitemap: "https://www.bhardwajinternationalschool.in/sitemap.xml",
  };
}
