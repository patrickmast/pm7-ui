#!/bin/bash

# PM7-UI Vercel Production Deployment Script
# Usage: ./deploy-to-vercel.sh

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 PM7-UI Vercel Production Deployment${NC}"
echo -e "${GREEN}=====================================>${NC}\n"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${RED}❌ Vercel CLI is not installed${NC}"
    echo -e "${YELLOW}Please install it with: npm i -g vercel${NC}"
    exit 1
fi

# Check if we're in the correct directory
if [ ! -f "package.json" ] || [ ! -d "packages/core" ]; then
    echo -e "${RED}❌ This script must be run from the PM7-UI root directory${NC}"
    exit 1
fi

# Build the project
echo -e "${YELLOW}📦 Building PM7-UI...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed successfully${NC}\n"

# Deploy to Vercel production
echo -e "${YELLOW}🌐 Deploying to Vercel production...${NC}"
echo -e "${YELLOW}This will deploy the built docs directory${NC}\n"

# Deploy with production flag from docs directory
# The --prod flag ensures it goes to production
# The --yes flag skips confirmation prompts
cd docs && vercel --prod --yes

if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}✅ Deployment successful!${NC}"
    echo -e "${GREEN}🎉 PM7-UI is now live on production${NC}"
    echo -e "${GREEN}🔗 Visit: https://pm7-ui.vercel.app${NC}"
else
    echo -e "\n${RED}❌ Deployment failed${NC}"
    exit 1
fi