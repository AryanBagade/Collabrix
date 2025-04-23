
# Collaborative Document Editing Application

This project is a collaborative document editing application built with Next.js, React, Liveblocks, TipTap editor, and other modern web technologies. It allows multiple users to edit documents in real-time with rich text formatting, image support, and more.

## Table of Contents

- [Collaborative Document Editing Application](#collaborative-document-editing-application)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
    - [Development Server](#development-server)
    - [Production Build](#production-build)
  - [Linting](#linting)
  - [Technologies Used](#technologies-used)
  - [Environment Variables](#environment-variables)


## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14.x or higher recommended)
- **npm** or **yarn** package manager

## Installation

Follow these steps to set up the project locally:

1. **Unzip the file **

2. **Navigate to the project directory**

3. **Install dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

4. **Set up environment variables**

   Create a `.env.local` file in the root of the project and add the necessary environment variables. See [Environment Variables](#environment-variables) for more details.

## Running the Project

### Development Server

Start the development server with:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

### Production Build

To build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Linting

To check for linting errors:

```bash
npm run lint
```

## Technologies Used

- **Next.js**: React framework for server-side rendering and generating static websites.
- **React**: JavaScript library for building user interfaces.
- **Liveblocks**: Real-time collaboration infrastructure.
- **TipTap**: Headless rich-text editor framework for React.
- **Tailwind CSS**: Utility-first CSS framework.
- **Clerk**: Authentication solution for React applications.
- **Radix UI**: Unstyled, accessible UI components.
- **Zustand**: State management library.
- **TypeScript**: Typed superset of JavaScript.
- **ESLint**: Pluggable linting utility for JavaScript and TypeScript.

## Environment Variables

The application requires certain environment variables to function correctly. Create a `.env.local` file in the root directory and add the following variables:

```bash
# Liveblocks API key
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your-liveblocks-public-key

# Clerk API keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key

# Convex deployment URL
NEXT_PUBLIC_CONVEX_URL=your-convex-deployment-url
```

Replace the placeholder values with your actual API keys and URLs. You may need to sign up for these services to obtain the necessary credentials.






