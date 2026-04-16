# KoinX Tax Loss Harvesting Interface

A professional-grade React application for simulating Tax Loss Harvesting. This tool allows users to visualize the impact of realizing capital losses on their total tax liability.

## ✨ Features

- **Real-time Calculations**: Instantly see how selecting specific holdings affects your short-term and long-term capital gains.
- **Visual Blueprint**: Matches the professional KoinX Figma design, including:
  - Collapsible **Notes & Disclaimers** section.
  - **Pre-Harvesting vs After-Harvesting** side-by-side comparison.
  - **Dynamic Savings Alert**: Shows exactly how much tax can be saved.
- **Responsive Table**: Interactive holdings table with sorted data and multi-select capabilities.
- **Premium Design**: Built with a custom HSL design system, Glassmorphism elements, and smooth animations using Framer Motion.

## 🛠 Tech Stack

- **React + TypeScript**
- **Vite** (for blazing fast development)
- **Vanilla CSS** (for precise control over the design system)
- **Framer Motion** (for premium micro-interactions)
- **Lucide React** (for modern iconography)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd tax-loss-harvesting-interface
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 📈 Logic Highlights

- **Net Capital Gains**: Calculated as `Profits - Losses`.
- **Harvesting Logic**:
  - Selecting an asset with a **positive gain** adds that gain to the `profits` category.
  - Selecting an asset with a **negative gain** adds the absolute value to the `losses` category.
- **Savings Calculation**: Savings are displayed if the Post-Harvesting Realized Gains are lower than the Pre-Harvesting Realized Gains.

## 📸 Screenshots

*(Add screenshots here after running the app)*

---

Developed as part of the KoinX Frontend Assignment.
