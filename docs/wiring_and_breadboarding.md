# Wiring and Breadboarding Guide

Understanding how to connect components is the most important skill in UniSim. This guide explains how to use the Virtual Breadboard and create safe, functional circuits.

## 1. How the Breadboard Works
A breadboard is a tool for building temporary circuits without soldering. Inside the breadboard, there are metal strips that connect certain holes together.

### The Power Rails (Side Strips)
- **Top and Bottom Rows**: These are usually marked with `+` (Red) and `-` (Blue) lines.
- **Connection**: All holes in a single horizontal rail are connected together. Use these to distribute **Power (3.3V)** and **Ground (GND)** across your entire circuit.
- **Tip**: Always connect the Pico's 3.3V pin to a `+` rail and the GND pin to a `-` rail first.

### The Terminal Strips (Main Area)
- **Vertical Columns**: In the main area, holes are connected in vertical groups of 5 (labeled `a-e` and `f-j`).
- **The Center Gap**: The gap in the middle separates the two sides. This is perfect for placing "Dual In-line" components like the Raspberry Pi Pico or IC chips.

## 2. Wiring in UniSim
Connecting components on the canvas is easy and intuitive:

1. **Start a Wire**: Hover over any "Pin" (a small gold circle) on a component. Click it once.
2. **Pathing**: As you move your mouse, a temporary wire will follow.
3. **Finish a Wire**: Click on the target Pin or Breadboard hole to complete the connection.
4. **Deleting Wires**: Click on a wire to select it, then press the **Delete** or **Backspace** key on your keyboard.

## 3. Snapping & Locking
When you drag a component (like an LED or Resistor) over the breadboard:
- **Snapping**: The component will "jump" or snap to the nearest holes.
- **Locking**: Once dropped, the component is logically "plugged in" to those holes. Any wires you connect to those breadboard columns will now be connected to the component pins.

## 4. Best Practices for Clean Circuits
- **Color Coding**: Although UniSim generates colors for you, it is a good habit to use **Red** for 3.3V/Power and **Black** for GND.
- **Avoid "Rat's Nests"**: Try to route wires around components rather than straight over them so you can still click the components easily.
- **Use the Rails**: Don't crowd the Pico's GND pins. Connect one GND pin to the rail and then connect all other components to that same rail.

## 5. Safety Warnings
UniSim features a real-time safety validator.
- **Short Circuits**: If you connect Power (3.3V) directly to Ground (GND) without a component in between, the simulator will pulse red and show a **"Short Circuit"** warning.
- **High Current**: If you connect an LED without a **Resistor**, the logs will warn you about high current which would "burn out" a real LED.

---
*Back to [General Documentation](../index.md)*
