// Vite plugin for SPA-style routing with clean URLs
export function spaFallback() {
  return {
    name: 'spa-fallback',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // Parse the URL
        const url = req.url;
        
        // Component pages with tab routing
        const componentMatch = url.match(/^\/components\/(\w+)\/(\w+)$/);
        if (componentMatch) {
          const [, component, tab] = componentMatch;
          // Rewrite to the component HTML file with tab as query parameter
          req.url = `/components/${component}.html?tab=${tab}`;
          return next();
        }
        
        // Clean URLs for component pages (without tab)
        const cleanComponentMatch = url.match(/^\/components\/(\w+)$/);
        if (cleanComponentMatch) {
          const [, component] = cleanComponentMatch;
          req.url = `/components/${component}.html`;
          return next();
        }
        
        next();
      });
    },
  };
}