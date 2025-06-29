// Vite plugin for SPA-style routing with clean URLs
export function spaFallback() {
  return {
    name: 'spa-fallback',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url;
        const componentMatch = url.match(/^\/components\/([\w-]+)(?:\/([\w-]+))?$/);

        if (componentMatch) {
          const [, component, tab] = componentMatch;
          req.url = `/components/${component}.html`;
          if (tab) {
            req.url += `?tab=${tab}`;
          }
        }
        
        next();
      });
    },
  };
}