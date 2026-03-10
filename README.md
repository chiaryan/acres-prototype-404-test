# GitHub Pages test

This is a minimum working example of a Vite + React SPA deployed to GitHub Pages using GitHub Actions.

## How to Publish this Page

1. **Commit and Push**
   Commit these files and push your repository to GitHub. Ensure you are pushing to the `main` branch.

   ```bash
   git add .
   git commit -m "Initialize Vite React app"
   git push origin main
   ```

2. **Enable GitHub Actions for Pages**
   1. Go to your repository on GitHub.
   2. Navigate to **Settings** -> **Pages** (on the left sidebar).
   3. Under **Build and deployment**, open the **Source** dropdown and select **GitHub Actions**.

3. **Verify Deployment**
   - Head over to the **Actions** tab in your repository. You should see the `Deploy static content to Pages` workflow running.
   - Once it finishes successfully, your site will be published at `https://<USERNAME>.github.io/github-pages-test/`.

## Local Development

To run this project locally:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build the project:
   ```bash
   npm run build
   ```