# Learning react
**To create React app** : `npx create-react-app appName`

**To run/start a project**: `npm run start`

**To create build folder**(which is pushed into production): 
`npm run build`

### Using Vite: 
```
npm create vite@latest
npm install` / `npm 
npm run dev
```

**Tailwind with vite**
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**tailwind.config.js**
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**index.css**

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```