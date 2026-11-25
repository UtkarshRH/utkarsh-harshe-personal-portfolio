import type { MetadataRoute } from "next";
import { SELECTED_PROJECTS, SITE_CONFIG } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const projectRoutes: MetadataRoute.Sitemap = SELECTED_PROJECTS.map(
    (project) => ({
      url: `${SITE_CONFIG.siteUrl}/work/${project.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [
    {
      url: SITE_CONFIG.siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectRoutes,
  ];
}
