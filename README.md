# Moises Extensions Boilerplate

A starter template for building Moises Extensions using Next.js and the official Moises Design System.

## Features

- Built with [Next.js](https://nextjs.org) for a modern React framework
- Integrated [Moises Design System](https://design-system.moises.ai/?path=/docs/introduction--docs) components
- Moises Extensions   for building powerful Moises platform extensions
- Example extension showcasing   capabilities
- Optimized for quick development and easy customization
- Responsive layout with proper styling

## Quick Start

You can create a new project based on this boilerplate using:

```bash
npx create-moises-extension my-extension
```

Or clone and install manually:

```bash
git clone https://github.com/moises-ai/boilerplate-moises-extensions.git my-extension
cd my-extension
npm install
```

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.js`. The page auto-updates as you edit the file.

## Creating Moises Extensions

This boilerplate includes a generic example extension that demonstrates the capabilities of the Moises Extensions  .

To create your own extension:

1. Create a new directory under `src/app/` for your extension (e.g., `src/app/my-extension/`)
2. Create a page.js file with your extension code, using the Extension  :

```jsx
'use client';

import { initMoisesExtension } from '@moises.ai/extension';

// Initialize your extension
const useMoisesExtension = initMoisesExtension({
  id: 'your-extension-id',
  name: 'Your Extension Name',
  description: 'Description of your extension',
  icon: '🔌', // Emoji or icon for your extension
  author: 'Your Name',
  version: '1.0.0',
});

export default function YourExtension() {
  const { moises, isConnected } = useMoisesExtension();
  
  // Your extension logic goes here
  
  return (
    // Your extension UI
  );
}
```

3. Check the example extension at `src/app/example-extension/` for more implementation details.

## Moises Design System

This boilerplate includes the official Moises Design System. To learn more about available components and styling options:

- [Design System Documentation](https://design-system.moises.ai/?path=/docs/introduction--docs)
- [Component Examples](https://design-system.moises.ai/?path=/docs/components-button--docs)

## Deployment

You can deploy your extension as a standalone application or integrate it with the Moises platform.

For standalone deployment, follow Next.js deployment guides:
- [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)

## License

MIT
