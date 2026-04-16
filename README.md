# 📊 KoinX Tax Loss Harvesting Interface

A professional-grade, high-performance React application designed to simulate **Tax Loss Harvesting**. This tool empowers users to visualize and calculate the impact of realizing capital losses to offset capital gains, ultimately reducing their total tax liability.

---

## 🚀 Overview

Tax loss harvesting is a strategy of selling securities at a loss to offset a capital gains tax liability. This interface provides a seamless, interactive experience for crypto investors to see their "Pre-Harvesting" and "After-Harvesting" positions in real-time.

## ✨ Pinpoint Features

### 1. Dynamic Tax Simulation
- **Real-time Recalculation**: Every checkbox toggle triggers a precise recalculation of Net Capital Gains (Profits - Losses).
- **Dual Perspective**: Side-by-side comparison of current tax standing vs. optimized tax standing after harvesting selected losses.
- **Smart Savings Indicator**: Highlights the exact amount of tax saved based on selected strategies.

### 2. Advanced Assets Management
- **Holdings Table**: An interactive table featuring:
  - **Asset Identification**: Logos and ticker symbols for clear visibility.
  - **Categorized Gains**: Split between Short-Term Capital Gains (STCG) and Long-Term Capital Gains (LTCG).
  - **Amount to Sell**: Clearly displays the volume needed to be sold to achieve the displayed harvesting results.
  - **Multi-select**: Bulk selection for rapid simulation.

### 3. Premium UI/UX (KoinX Design System)
- **Glassmorphism**: Modern, sleek elements with backdrop blurs and subtle borders.
- **Micro-animations**: Powered by `framer-motion` for fluid transitions and attention to detail.
- **Responsive Layout**: Designed to adapt from wide desktops to mobile devices (Responsiveness improvements in progress).
- **Informative Banners**: Collapsible section for essential tax regulations and platform disclaimers.

---

## 🛠 Technical Architecture

### Tech Stack
- **Framework**: [React](https://reactjs.org/) (v18+) with **TypeScript** for type-safe development.
- **Build Tool**: [Vite](https://vitejs.dev/) for near-instant HMR (Hot Module Replacement).
- **Styling**: **Vanilla CSS** with a custom-engineered **HSL Design System**.
- **Icons**: [Lucide React](https://lucide.dev/) for a consistent and lightweight icon set.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for high-performance physics-based animations.

### Project Structure (Pinpoint Everything)
```text
/src
├── components/          # Reusable UI building blocks
│   ├── GainsSection     # Displays the comparison cards
│   ├── Header           # Navigation and branding
│   ├── HoldingsTable    # The core interactive data grid
│   └── NotesBanner      # Important disclaimers and tooltips
├── hooks/               # Custom business logic
│   └── useGainsLogic    # Centralized state management for tax calculations
├── services/            # Data fetching logic
│   └── mockDataService  # Simulates API responses for holdings and prices
├── styles/              # Global styling tokens
│   └── index.css        # HSL color palette, typography, and utility classes
├── types/               # TypeScript interfaces and types
└── App.tsx              # Main application entry and layout composition
```

### State Management Logic
The application uses a custom hook `useGainsLogic` to handle complex calculations:
1.  **Selection State**: Manages which assets are "marked" for harvesting.
2.  **Derived Stats**:
    *   `Pre-Harvesting`: Sum of all realized gains in the portfolio.
    *   `After-Harvesting`: Recalculated gains taking into account selected losses to offset profits.
    *   `Savings`: `Pre_Realized - Post_Realized`.
3.  **Official Data Integration**: Uses the exact dataset provided for 25+ holdings and official capital gains targets ($70k+).
4.  **Functional View Toggles**: Implements a show-more/show-less pattern (initial 6 rows) for optimal desktop and mobile visibility.

---

## 📦 Getting Started

### Prerequisites
- **Node.js** v18.0.0 or later
- **npm** v9.0.0 or later

### Installation & Run

1.  **Clone the Repo**:
    ```bash
    git clone https://github.com/madhav1811/Tax-Loss-Harvesting-interface.git
    cd Tax-Loss-Harvesting-interface
    ```

2.  **Install Packages**:
    ```bash
    npm install
    ```

3.  **Launch Developer Server**:
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:5173`.

---

## ⚖️ Tax Disclosure & Disclaimer

*   **Regional Specifics**: This tool is tailored for simulation. Tax laws (like STCG/LTCG rates) vary significantly by jurisdiction (e.g., India vs USA).
*   **Asset Coverage**: Currently excludes derivatives (Future & Options) which are treated as business income in certain regions.
*   **Data Accuracy**: Market values are sourced from decentralized aggregators and might have slight variations from specific exchange order books.

---

## 📈 Future Roadmap
- [ ] Support for FIFO/LIFO/Weighted Average cost basis selection.
- [ ] Integration with real-time exchange APIs via OAuth.
- [ ] Exportable Tax Reports in PDF/CSV format.
- [ ] Dark Mode support extension.

---

**Built with Precision by [Your Name/Antigravity]**
*Part of the KoinX Technical Assessment.*
