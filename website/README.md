# BridgeX Website

The official website for BridgeX - an open-source graphical interface for converting files to Markdown.

## Features

- 🌐 **Multilingual**: Available in English, Spanish, and Portuguese (Brazil)
- 🌓 **Dark/Light Mode**: Theme toggle with system preference detection
- 📱 **Responsive Design**: Fully adaptive for mobile, tablet, and desktop
- ✨ **Modern UI**: Glassmorphism design with smooth animations
- ⚡ **Fast**: Built with React and Vite for optimal performance

## Pages

- **Home**: Landing page with features, screenshots, and CTA
- **Downloads**: Platform-specific download options (Windows .exe, pip install)
- **Documentation**: Installation guides, usage instructions, troubleshooting
- **About**: Project information, what BridgeX does and doesn't do
- **Licenses**: Third-party license information (Markitdown, PySide6, etc.)

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast builds
- **React Router** for navigation
- **i18next** for internationalization
- **Axios** for API calls
- **Lucide React** for icons

## Development

### Prerequisites

- Node.js 18+ 
- npm 9+

### Setup

```bash
cd website
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

The website is automatically deployed when changes are pushed to the `web` branch.

1. **Create the `web` branch** (if not exists):
   ```bash
   git checkout -b web
   git push origin web
   ```

2. **Configure GitHub Pages**:
   - Go to your repository Settings → Pages
   - Under "Build and deployment", select "GitHub Actions" as the source
   - The workflow at `.github/workflows/deploy-website.yml` will handle deployment

3. **Push changes to `web` branch**:
   ```bash
   git checkout web
   git merge main  # or your development branch
   git push origin web
   ```

The website will be available at: `https://<username>.github.io/<repo-name>/`

### Option 2: Manual Deployment

1. Build the website:
   ```bash
   cd website
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider

### Configuration

The base URL is configured in `vite.config.ts`. Update it if you're deploying to a different path:

```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

## Project Structure

```
website/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── common/      # Reusable components
│   │   ├── layout/      # Layout components (Navbar, Footer)
│   │   └── sections/    # Page sections (Hero, Features, etc.)
│   ├── contexts/        # React contexts (Theme)
│   ├── hooks/           # Custom React hooks
│   ├── i18n/
│   │   ├── locales/     # Translation files (en, es, pt)
│   │   └── index.ts     # i18n configuration
│   ├── pages/           # Page components
│   ├── services/        # API services
│   ├── styles/          # Global styles
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Color Palette

Colors extracted from the BridgeX logo:

| Color | Hex | Usage |
|-------|-----|-------|
| Green | `#22c55e` | Primary actions, success states |
| Yellow | `#eab308` | Secondary actions, warnings |
| Red | `#ef4444` | Accent, errors, important notices |

## Translations

To add a new language:

1. Create a new file in `src/i18n/locales/` (e.g., `fr.json`)
2. Copy the structure from `en.json`
3. Translate all values
4. Add the language to `src/i18n/index.ts`:
   ```typescript
   import fr from './locales/fr.json';
   
   const resources = {
     // ...
     fr: { translation: fr }
   };
   ```
5. Add the language option to `src/components/layout/Navbar.tsx`

## License

MIT License - © 2025 Dev2Forge
