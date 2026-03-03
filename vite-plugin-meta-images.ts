import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

/**
 * Vite plugin that updates og:image and twitter:image to absolute URLs
 * using the deployment domain (Render, Replit, etc.).
 */
export function metaImagesPlugin(): Plugin {
  return {
    name: 'vite-plugin-meta-images',
    transformIndexHtml(html) {
      const baseUrl = getDeploymentUrl();
      const publicDir = path.resolve(process.cwd(), 'client', 'public');
      const imagePath = path.join(publicDir, 'dp.jpg');

      if (!baseUrl) {
        log('[meta-images] no deployment URL found, keeping existing og:image');
        return html;
      }

      if (!fs.existsSync(imagePath)) {
        log('[meta-images] dp.jpg not found in client/public, skipping');
        return html;
      }

      const imageUrl = `${baseUrl.replace(/\/$/, '')}/dp.jpg`;
      log('[meta-images] setting og:image and twitter:image to:', imageUrl);

      html = html.replace(
        /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/g,
        `<meta property="og:image" content="${imageUrl}" />`
      );
      html = html.replace(
        /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/g,
        `<meta name="twitter:image" content="${imageUrl}" />`
      );

      return html;
    },
  };
}

function getDeploymentUrl(): string | null {
  // Render sets this when building
  if (process.env.RENDER_EXTERNAL_URL) {
    const url = process.env.RENDER_EXTERNAL_URL.startsWith('http')
      ? process.env.RENDER_EXTERNAL_URL
      : `https://${process.env.RENDER_EXTERNAL_URL}`;
    log('[meta-images] using RENDER_EXTERNAL_URL:', url);
    return url;
  }
  if (process.env.REPLIT_INTERNAL_APP_DOMAIN) {
    return `https://${process.env.REPLIT_INTERNAL_APP_DOMAIN}`;
  }
  if (process.env.REPLIT_DEV_DOMAIN) {
    return `https://${process.env.REPLIT_DEV_DOMAIN}`;
  }
  return null;
}

function log(...args: any[]): void {
  if (process.env.NODE_ENV === 'production') {
    console.log(...args);
  }
}
