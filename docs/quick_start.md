# Quick Start Guide ⏱️

Follow this 5-minute guide to go from zero to your first interactive hardware simulation.

---

### Step 1: Install Pre-requisites
Ensure you have the following installed on your machine:
1. **Visual Studio Code**: [Download Here](https://code.visualstudio.com/)
2. **Node.js (LTS)**: [Download Here](https://nodejs.org/)

### Step 2: Install UniSim CLI
Open your terminal (PowerShell or Command Prompt) and run:
```bash
npm install -g unisim
```

### Step 3: Create Your First Project
Navigate to your preferred workspace folder and initialize a new project:
```bash
unisim init button-blink
cd button-blink
```

### Step 4: The Hardware Setup (Circuit)
Open the project in VS Code. UniSim automatically creates a default circuit for you in `.unisim/circuit.json`. 
For this example, we will assume a **Button** is connected to **GP0** and an **LED** is connected to **GP1**.

### Step 5: The Software Logic
Open `src/main.js` and paste the following code to handle the button interaction:

```javascript
import unisim, { Pin, sleep } from 'unisim';

// Initialize components by their Pico Pin IDs
const button = new Pin('GP0');
const led = new Pin('GP1');

async function main() {
    console.log("System Online: Press the virtual button to toggle the LED!");

    while (true) {
        // Read button state (0 = Pressed if wired to GND)
        if (button.read() === 0) {
            led.write(1); // Turn LED ON
        } else {
            led.write(0); // Turn LED OFF
        }
        await sleep(50); // Small delay for responsiveness
    }
}

unisim.on('ready', main);
```

### Step 6: Launch & Run
In your terminal, run the development server:
```bash
npm run dev
```
Wait for your browser to open automatically. You will see the **UniSim Dashboard**.

### Step 7: Interact & Debug
1. **Interact**: In the 3D circuit view, click on the **Button** component. You will see the **LED** light up instantly.
2. **Check Logs**: Go to the **Logs Tab** at the bottom to see your `console.log` messages.
3. **Debug State**: Open the **Debug Tab**. Look for the `GP1` pin state; it will toggle between `0` and `1` in real-time as you press the button.
4. **Inspect Sensors**: If you added an Ultrasonic sensor, use the **Sensors Tab** to drag sliders and simulate environment changes without touching your circuit.

---

**Next Steps**: Check out the [Component Reference](./components.md) to add more complex parts like LCDs or Servo Motors!
