# Project Folder Structure

When you create or open a UniSim project, you will notice several specific folders and files. This document explains what each part does and where you should place your code.

## 1. Top-Level Overview
A standard UniSim project looks like this:

```text
my-unisim-project/
├── .unisim/                 # UniSim Internal Data
│   └── circuit.json         # The 3D Circuit Layout and Wiring
├── modules/                 # MicroPython Firmware Modules
│   └── pico-unique-id/      # Specific Microcontroller Folder
│       └── main.py          # Your MicroPython Code
├── src/                     # Pure JavaScript Source
│   └── main.js              # Your JavaScript Logic
├── unisim.config.json       # Main Project Settings/Mappings
├── package.json             # NPM dependencies (for JS logic)
└── tsconfig.json            # TypeScript configuration (optional)
```

## 2. Key Directories & Files

### 📁 `.unisim/`
This folder is managed by the UniSim CLI and desktop app.
- **`circuit.json`**: This is a "source of truth" for your hardware. It contains the coordinates of every component and the start/end points of every wire. **Do not edit this manually** unless you are an expert; use the UniSim Canvas to make changes.

### 📁 `modules/`
Used exclusively for **MicroPython Firmware**.
- When you add a board to your canvas, UniSim creates a folder here named after that board's unique ID.
- **`main.py`**: This is the entry point for your MicroPython code. It runs directly on the virtual microcontroller.

### 📁 `src/`
Used for **Pure JavaScript API** projects.
- **`main.js`**: If you prefer writing logic in JavaScript, this is where you build your application. It has access to the `unisim` global object to interact with pins and components.

### 📄 `unisim.config.json`
The brain of your project configuration.
- It tells UniSim which code folder belongs to which board on the canvas.
- Example mapping:
  ```json
  "mappings": {
    "pico-r123": "modules/pico-r123"
  }
  ```

### 📄 `package.json`
Standard Node.js package file.
- Contains the scripts to run your project (e.g., `npm run dev`).
- Lists the `unisim` library as a dependency, allowing you to get Auto-Complete (IntelliSense) in VS Code.

## 3. Which Folder Should I Use?
- **For MicroPython**: Focus on `modules/<id>/main.py`.
- **For JavaScript**: Focus on `src/main.js`.
- **For Layout**: Drag and drop in the dashboard; it will update `.unisim/circuit.json` automatically.

---
*Next Step: Learn about [Wiring & Breadboarding](./wiring_and_breadboarding.md)*
