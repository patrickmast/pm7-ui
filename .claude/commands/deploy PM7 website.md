# Deploy Examples Site to Vercel

Deploy the PM7 UI Style Guide examples app in "/Users/patrickmast/Dev/pm7-ui-style-guide" to Vercel production via Vercel CLI.

## What this command does:
1. Changes to the PM7 UI Style Guide project directory
2. Builds the examples app for production
3. Deploys to Vercel using Vercel CLI and the examples build configuration
4. Provides deployment URL and status

## Usage:
```
/deploy
```

## Commands to run:
```bash
# Navigate to PM7 UI Style Guide project directory
cd /Users/patrickmast/Dev/pm7-ui-style-guide

# Build the examples app for production
npm run build:examples

# Deploy to Vercel via Vercel CLI from project root (with auto-confirmation)
npx vercel --prod --yes
```

## Prerequisites:
- Vercel CLI must be installed: `npm install -g vercel`
- Must be logged in to Vercel: `vercel login`
- Project must be linked to Vercel: `vercel link` (if not done already)

## Expected output:
- Build artifacts in `examples/dist/`
- Vercel deployment URL
- Production site updated at configured domain