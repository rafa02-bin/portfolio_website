# Modern React Portfolio

A responsive, elegant portfolio website built with React and Tailwind CSS. This project features a clean design with neon glow aesthetics, smooth SVG wave transitions between sections, and interactive components to showcase skills and projects.

## Features

- **Responsive Design:** Fully responsive layout optimized for mobile, tablet, and desktop devices.
- **Elegant UI:**
  - **Wave Transitions:** Smooth SVG wave dividers connecting sections (Hero, Projects, Skills, Contact).
  - **Neon Glow Effects:** Subtle glow animations on cards and buttons.
  - **Gradient Backgrounds:** Soft pastel gradients for a modern look.
- **Sections:**
  - **Hero:** Introduction with profile image and call-to-action.
  - **Projects:** Grid layout showcasing featured work with hover effects.
  - **Skills:** Categorized display of technical proficiencies.
  - **Contact:** Contact links and copy-to-clipboard functionality for email.

## Tech Stack

- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **Icons:** SVG / React Icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd portfolio_website_react
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```
    *(Or `npm start` depending on your build tool)*

4.  Open your browser and navigate to the local server address (usually `http://localhost:5173` or `http://localhost:3000`).

## Customization

You can easily update the content by modifying the data arrays found in the component files:
- **Projects:** `src/components/Projects.jsx`
- **Skills:** `src/components/Skills.jsx`
- **Contact Info:** `src/components/Contact.jsx`