# Interface Overview & Dashboard

UniSim provides a dynamic, interactive dashboard that visualizes your circuit and its state in real-time.

### 1. The Circuit Canvas (Drag & Drop)
The heart of UniSim is the interactive canvas.
- **Adding Components**: Use the component tray to drag and drop components like LEDs, Resistors, and Sensors onto the board.
- **Wiring**: Click a pin on one component and drag to a pin on another to create a connection.
- **Snapping**: Components automatically snap to the grid for clean layouts.
- **Selection**: Click a component to see its specific properties in the **Inspector Panel**.

### 2. Tab Navigation
The panel at the bottom provides several specialized modules:

#### 📊 Sensors Tab
The Sensors tab is crucial for testing your code's response to environmental changes.
- **Manual Overrides**: Slide controls to simulate light levels (for LDRs), temperatures, or distances (for Ultrasonic sensors).
- **Graphing**: View a real-time plot of sensor values being read by your microcontroller.

#### 🛠️ Debug Tab
Monitor the internal state of your system.
- **Variable Watch**: See the values of global variables in your MicroPython script or JS main logic.
- **Breakpoints**: If enabled, the simulator will pause execution at specific lines for code inspection.
- **Performance**: Track frames per second (FPS) and memory usage of the simulation.

#### 🪵 Logs Tab
Contains all output from your code (e.g., `print()` in Python or `console.log()` in JS) and system alerts from the simulator (like safety warnings).

### 3. Navigation Controls
- **Zoom**: Use your mouse wheel to zoom in on complex circuits.
- **Pan**: Click and drag on an empty area of the canvas to move around.
- **Reset**: A dedicated button to clear the simulation state and restart the code from the beginning.
