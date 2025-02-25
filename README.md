# ai-smart-manufacturing-ui

An AI-powered Smart Manufacturing UI that provides real-time factory monitoring, predictive maintenance, process optimization, and AI-driven quality control using Angular, StencilJS, WebAssembly, and IoT-based analytics.

## 🚀 Features
- **AI-powered Smart Manufacturing UI** using **Angular & StencilJS**.
- **Real-time factory monitoring & AI-driven predictive maintenance** powered by **WebAssembly AI processing**.
- **Optimizes production efficiency, quality control, and energy usage**.

## 📂 Project Structure
```
ai-smart-manufacturing-ui/
│── stencil-manufacturing-ui/  # Stencil-powered Smart Manufacturing UI components
│   ├── src/components/manufacturing-dashboard/  # AI-powered factory monitoring UI
│   ├── stencil.config.ts  # Stencil configuration
│── angular-manufacturing-dashboard/  # Angular host for AI-powered Manufacturing UI
│   ├── src/app/  # Angular app with Manufacturing UI interactions
│   ├── package.json  # Angular dependencies
│── wasm-manufacturing-analysis/  # WebAssembly AI-powered smart manufacturing analytics (Rust-based)
│   ├── src/main.rs  # AI-driven production efficiency model
│   ├── Cargo.toml  # Rust package file
│── README.md
```

## 🛠 Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/tktarun03/ai-smart-manufacturing-ui.git
   cd ai-smart-manufacturing-ui
   ```

2. Install dependencies and build Stencil Manufacturing UI:
   ```bash
   cd stencil-manufacturing-ui
   npm install
   npm run build
   ```

3. Link Stencil components to Angular:
   ```bash
   cd ../angular-manufacturing-dashboard
   npm install
   npm start
   ```

4. Compile the WebAssembly AI Manufacturing Analysis module:
   ```bash
   cd ../wasm-manufacturing-analysis
   cargo build --target wasm32-unknown-unknown --release
   ```

5. Open **http://localhost:4200** to experience AI-powered Smart Manufacturing UI.

## 👨‍💻 About the Author

🚀 Created by [Arunkumar Thamilarasu](https://github.com/tktarun03) | UI Technical Architect | AI & Smart Manufacturing UI Expert

## ⭐ Contribute & Support
- Fork & Star this repository! ⭐
- Submit Issues and PRs to improve AI-powered Smart Manufacturing UI.

---
🎯 **Follow me on GitHub**: [@tktarun03](https://github.com/tktarun03)
