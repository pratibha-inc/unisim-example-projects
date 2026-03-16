# Installation & Pre-requisites

Before you start simulating, ensure your development environment is set up correctly.

### 1. Essential Software
To work with UniSim, you only need:

- **Visual Studio Code (VS Code)**: The primary editor. UniSim integrates deeply with VS Code for a seamless "code-to-circuit" experience.
  - [Download VS Code](https://code.visualstudio.com/)
- **UniSim Installer**: Download the latest `.exe` from the official portal. This includes:
  - **UniSim Desktop**: The 3D/2D simulation environment.
  - **UniSim CLI**: Command-line tools for advanced users.
  - **UniSim Core**: The high-performance simulation engine.

### 2. VS Code Extension
The UniSim Extension provides hardware-aware features inside VS Code.
- **Easy Install**: Open UniSim Desktop and click the **"Install VS Code Extension"** button in the sidebar or bottom panel. (Recommended)
- **Manual Install**: You can also find the `.vsix` in your installation directory.

### 3. Verification
Once installed, open your terminal (PowerShell) and type:
```bash
unisim --version
```
No separate Node.js or Python installation is required for the core experience.

### 4. Hardware Requirements
UniSim uses GPU acceleration. A modern integrated or dedicated GPU is recommended.

### 5. First Time Setup
1. Open **UniSim Desktop**.
2. Click **"New Project"**.
3. A PowerShell window will automatically open, pre-configured with the UniSim CLI.
