// app/sitemap/page.tsx
"use client";

import { motion } from "framer-motion";
import { SITE_URL, ROUTES } from "@/lib/sitemap-routes";

const routesWithoutSitemap = ROUTES.filter((r) => r.path !== "/sitemap");

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4">
            Sitemap
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora todas las páginas disponibles del Dr. Jaime Lumbán
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
            <span className="text-lg font-medium text-gray-700">{routesWithoutSitemap.length}</span>
            <span className="text-gray-500">páginas</span>
          </div>
        </motion.div>
      </section>

      {/* TABLE */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">URL</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Priority</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Frequency</th>
                </tr>
              </thead>
              <tbody>
                {routesWithoutSitemap.map((route, index) => (
                  <motion.tr
                    key={route.path}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.01 }}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <a
                        href={`${SITE_URL}${route.path}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {route.path}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{route.priority}</td>
                    <td className="px-6 py-4 text-gray-500">{route.changefreq}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}