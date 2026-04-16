# AGENTS.md

## Proyecto

Sitio web del Dr. Jaime Lumbán - Otorrinolaringólogo en Tijuana. Sitio bilingüe (ES/EN) con exportación estática.

## Comandos

```bash
npm run dev      # Desarrollo en localhost:3000
npm run build   # Build + genera sitemap automáticamente (postbuild)
npm run lint    # Linting (eslint + typescript)
npm start       # Servir build de producción
```

## Build

- **Exportación estática**: `next.config.ts` usa `output: "export"`. Genera archivos estáticos en `/out`.
- **Sitemap automático**: `scripts/generate-sitemap.js` corre después del build (`postbuild`). Si agregas rutas nuevas, agrégalas a este script.

## i18n

- Usa `react-i18next` con `i18next-browser-languagedetector`.
- Rutas centralizadas en `app/i18n/routeMap.ts`.
- Para agregar rutas: editar `ROUTE_PAIRS` en `routeMap.ts`.

## Importación

- Componentes: `@components/Nombre` (tsconfig paths configured).
- Rutas i18n: `import { getRouteByKey, Lang } from "../i18n/routeMap"`.

## Stack

- **Next.js 16** con App Router
- **React 19** 
- **Tailwind CSS v4** (configuración vía `@theme` en CSS)
- **Framer Motion** para animaciones
- **Fonts**: Montserrat y Raleway (via @fontsource-variable)

## Verificación post-cambios

```bash
npm run lint  # Verificar eslint/typescript
```

## Skills Disponibles

- `.claude/skills/` - Guías de best practices (accessibility, next-best-practices, seo, etc.)
- `.agents/skills/` - Duplicado de skills (para respaldo en git)
