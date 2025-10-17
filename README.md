# MozDevz Community Website

This repository contains the code for the MozDevz Community website, the largest developer community in Mozambique.

![MozDevz Logo](public/images/brand/mozdevz-300*43.svg)

## 🚀 About The Project

MozDevz is dedicated to molding the future of technology in Mozambique. Our website serves as a hub for developers to develop their skills, participate in projects, and share knowledge in a community that values continuous growth.

## 🔧 Built With

- [Next.js 15](https://nextjs.org/) - The React framework with App Router
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Static typing
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icon set

## 🔍 Project Structure

```
mozdevz_remodeling/application/
├── public/             # Static assets (images, fonts, etc.)
├── src/
│   ├── app/            # Next.js App Router pages and layouts
│   ├── components/     # Reusable UI components
│   │   ├── layout/     # Layout components (Header, Footer)
│   │   └── ui/         # UI components (TeamCard, etc.)
│   ├── constants/      # Application constants and data
│   ├── fonts/          # Font configuration
│   ├── lib/            # Utility functions
│   └── types/          # TypeScript type definitions
├── .next/              # Next.js build output
├── next.config.ts      # Next.js configuration
└── package.json        # Project dependencies and scripts
```

## 🚦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Bun](https://bun.sh/) (preferred) or npm/yarn

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/yourusername/mozdevz_remodeling.git
   cd mozdevz_remodeling/application
   ```

2. Install dependencies
   ```sh
   bun install
   # or
   npm install
   ```

3. Start the development server
   ```sh
   bun dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Development

### Scripts

- `bun dev` - Start the development server with Turbopack
- `bun build` - Build the production application
- `bun start` - Start the production server
- `bun lint` - Run ESLint

### Component Structure

Components are organized following these conventions:

- Each component has its own directory
- Component directories contain:
  - `Component.tsx` - Component implementation
  - `index.tsx` - Export file
  - Additional files as needed (e.g., `Form.tsx`)

### Types

The project uses TypeScript for type safety. Custom types are defined in the `src/types` directory.

## 🌐 Pages

- Home (`/`) - Landing page with introduction and team members
- About (`/about`) - Information about the community
- Events (`/events`) - Upcoming and past events
- Community (`/community`) - Community resources and information
- Blog (`/blog`) - Articles and news
- Training (`/training`) - Training programs and resources
- Login (`/login`) - User authentication

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

MozDevz Community - [contacto@mozdevz.org](mailto:contacto@mozdevz.org)

- Website: [mozdevz.org](https://mozdevz.org)
- Location: CoWork Lab 7, Avenida Marginal, nº 9149A Maputo, 1102
- Phone: +258 85 696 1877

### Social Media

- [Facebook](https://www.facebook.com/mozdevz)
- [Instagram](https://www.instagram.com/mozdevz)
- [Twitter](https://www.twitter.com/mozdevz)
- [LinkedIn](https://www.linkedin.com/company/mozdevz)

---

© 2023 Mozdevz Community. All Rights Reserved