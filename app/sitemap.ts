import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vendonexa.com";
  const routes = [
    "",
    "/about",
    "/solutions/vendor-management",
    "/solutions/hospital-management",
    "/solutions/cybersecurity",
    "/solutions/custom-software",
    "/solutions/enterprise-integrations",
    "/industries",
    "/implementation",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
