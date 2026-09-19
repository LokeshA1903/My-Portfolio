<div align="center">

# 🛡️ Lokesh A — Network Engineer Portfolio

[![Network Engineer](https://img.shields.io/badge/Role-Network%20Engineer-00f2fe?style=for-the-badge&logo=shikimori&logoColor=white)](https://github.com/LokeshA1903)
[![Fortinet FCA](https://img.shields.io/badge/Fortinet-FCA%20Certified-10b981?style=for-the-badge&logo=fortinet&logoColor=white)](https://github.com/LokeshA1903)
[![CCNA](https://img.shields.io/badge/CCNA-200--301%20Verified-6366f1?style=for-the-badge&logo=cisco&logoColor=white)](https://github.com/LokeshA1903)
[![React](https://img.shields.io/badge/React-18.3-cyan?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

A modern, high-performance, interactive portfolio web application built for **Lokesh A** (Network Engineer with 2+ years of enterprise infrastructure experience). Features an interactive CLI terminal console, searchable technical skills matrix, architectural project modals, and a direct Gmail inbox contact relay.

[**Explore Live Demo**](#-local-installation--setup) • [**View Resume**](public/Lokesh_CV.pdf) • [**Contact Me**](#-contact--connect)

</div>

---

## 🌟 Key Features

* 📟 **Interactive CLI Terminal**: Integrated bash-like terminal where visitors can run commands (`help`, `whoami`, `skills`, `certifications`, `projects`, `ping`, `contact`, `clear`).
* 📜 **Industry Certifications**: Highlighted credentials for **Fortinet Certified Associate (FCA)**, **Fortinet Certified Fundamentals (FCF)**, and **CCNA 200-301**.
* ⚡ **Searchable Technical Matrix**: Filterable skills across **FortiGate Firewalls**, **SD-WAN & VPN Tunnels**, **Active Directory & GPO**, and **Ubuntu Linux**.
* 🚀 **Project Architecture Modals**: Detailed technical deep-dives for:
  * **FTP Firmware Distribution Server** (~200 edge devices, vsftpd, SSL/TLS OpenSSL).
  * **On-Premises Private Local LLM** (Ollama + Open WebUI stack on Ubuntu GPU server).
  * **Windows Server & High Availability Cluster** (300+ AD user accounts & failover clustering).
* 📊 **Operational Stats**: Highlighted metrics (99%+ Uptime, ~200 Edge Devices, 300+ AD Accounts, 95%+ SLA Resolution).
* 📬 **Direct Gmail Relay**: Integrated contact form sending messages directly to `lokesha5004@gmail.com` with automatic `mailto` fallback.

---

## 🛠️ Tech Stack & Libraries

* **Frontend Framework**: [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Glassmorphism CSS Tokens
* **Iconography**: [Lucide React](https://lucide.dev/)
* **Animations**: Canvas Confetti + Custom CSS Animations
* **Deployment & Mail Relay**: FormSubmit / SSL Encrypted Relay to Gmail

---

## 📁 Project Directory Structure

```
My-Portfolio/
├── public/
│   ├── Lokesh_CV.pdf       # Official downloadable resume
│   └── shield.svg          # Favicon badge
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation header & brand logo
│   │   ├── TerminalHero.jsx        # Hero section with interactive bash terminal
│   │   ├── Certifications.jsx      # Fortinet FCA/FCF & CCNA credentials
│   │   ├── SkillsMatrix.jsx        # Searchable technical skills grid
│   │   ├── ProjectsSection.jsx     # Project cards showcase
│   │   ├── ProjectModal.jsx        # Deep-dive architecture modal
│   │   ├── ExperienceTimeline.jsx  # Work history & achievements
│   │   ├── StatsBar.jsx            # Key metrics bar
│   │   ├── ContactSection.jsx      # Contact form & Gmail relay
│   │   └── Footer.jsx              # Footer navigation
│   ├── data/
│   │   └── portfolioData.js        # Single source of truth for resume details
│   ├── App.jsx                     # Main application layout assembler
│   ├── index.css                   # Tailwind CSS directives & cyber styles
│   └── main.jsx                    # React DOM entry point
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 💻 Local Installation & Setup

To run this portfolio locally on your computer:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/LokeshA1903/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000/`.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📬 Contact & Connect

* **Email**: [lokesha5004@gmail.com](mailto:lokesha5004@gmail.com)
* **LinkedIn**: [linkedin.com/in/lokesh-a-598819339](https://linkedin.com/in/lokesh-a-598819339)
* **GitHub**: [github.com/LokeshA1903](https://github.com/LokeshA1903)
* **Location**: Thoothukudi, Tamil Nadu, India

---

<div align="center">
  <sub>Built with ❤️ by <b>Lokesh A</b> • Network Engineer</sub>
</div>
