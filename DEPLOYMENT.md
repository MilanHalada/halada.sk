# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages for free hosting.

## Prerequisites

- GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step-by-Step Deployment

### 1. Install Dependencies

First, install the gh-pages package:

```bash
npm install
```

### 2. Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository: `halada.sk` (or any name you prefer)
5. Make it **Public** (required for free GitHub Pages)
6. Don't initialize with README (since you already have files)
7. Click "Create repository"

### 3. Initialize Git and Push Code

In your project directory, run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/halada.sk.git

# Push to GitHub
git push -u origin main
```

### 4. Deploy to GitHub Pages

Run the deployment command:

```bash
npm run deploy
```

This will:
- Build your React app
- Create a `gh-pages` branch
- Push the built files to GitHub Pages

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch and "/ (root)" folder
6. Click "Save"

### 6. Access Your Live Site

Your portfolio will be available at:
`https://YOUR_USERNAME.github.io/halada.sk`

## Updating Your Site

Whenever you make changes to your portfolio:

1. Make your changes
2. Commit and push to main branch:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Custom Domain Setup (Optional)

If you want to use your own domain (halada.sk):

### 1. Add CNAME File

Create a file named `public/CNAME` with your domain:

```
halada.sk
```

### 2. Update package.json

Change the homepage field in package.json:

```json
"homepage": "https://halada.sk"
```

### 3. Configure DNS

In your domain registrar's DNS settings, add:

- **Type**: CNAME
- **Name**: www
- **Value**: YOUR_USERNAME.github.io

And optionally:

- **Type**: A
- **Name**: @
- **Value**: 185.199.108.153
- **Value**: 185.199.109.153
- **Value**: 185.199.110.153
- **Value**: 185.199.111.153

### 4. Enable Custom Domain in GitHub

1. Go to repository Settings > Pages
2. Under "Custom domain", enter: `halada.sk`
3. Check "Enforce HTTPS"

## Troubleshooting

### Common Issues

1. **404 Error**: Make sure the repository is public and GitHub Pages is enabled
2. **Build Fails**: Check that all dependencies are installed with `npm install`
3. **Custom Domain Not Working**: Wait up to 24 hours for DNS propagation

### Useful Commands

```bash
# Check deployment status
npm run deploy

# Force rebuild and redeploy
rm -rf build
npm run build
npm run deploy

# Check gh-pages branch
git checkout gh-pages
git log --oneline
```

## Benefits of GitHub Pages

- ✅ **Free hosting**
- ✅ **Custom domain support**
- ✅ **HTTPS by default**
- ✅ **Automatic deployments**
- ✅ **Version control integration**
- ✅ **Professional URL**

Your portfolio will be live and accessible worldwide once deployed!
