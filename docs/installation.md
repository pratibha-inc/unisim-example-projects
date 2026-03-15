# Installation & Pre-requisites

Before you start simulating, ensure your development environment is set up correctly.

### 1. Essential Software
To work with UniSim, you need the following tools installed on your system:

- **Visual Studio Code (VS Code)**: The primary editor. UniSim integrates deeply with VS Code for a seamless "code-to-circuit" experience.
  - [Download VS Code](https://code.visualstudio.com/)
- **Node.js (LTS)**: Required for the UniSim CLI and the JavaScript API.
  - [Download Node.js](https://nodejs.org/)
- **Python 3.x**: Required if you plan to write MicroPython firmware for your microcontrollers.
  - [Download Python](https://www.python.org/)

### 2. VS Code Extension
For the best experience, install the **UniSim Extension** from the VS Code Marketplace. This provides:
- Syntax highlighting for `.circuit.json` files.
- Integrated simulator dashboard.
- Real-time linting of your hardware connections.

### 3. Installing UniSim CLI
Open your terminal (PowerShell, Command Prompt, or Terminal) and run:

```bash
npm install -g unisim
```

Verify the installation:
```bash
unisim --version
```

### 4. Hardware Requirements
While UniSim is lightweight, a machine with a dedicated GPU or modern integrated graphics is recommended for the smoothest experience when using the 3D-heavy UI.

### 5. First Time Setup
Once installed, initialize your first project in a new directory:

```bash
unisim init my-first-project
cd my-first-project
npm run dev
```
