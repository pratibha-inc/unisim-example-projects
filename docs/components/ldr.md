# LDR (Light Sensor)

A sensor that detects how much light is in the "virtual room."

### How to Interact
- **Sensors Tab**: Go to the bottom panel of the dashboard and click the **"Sensors"** tab. Drag the **"Light Level"** slider to simulate different environments.
- **Mouse Click**: You can also **Click** directly on the LDR component on the virtual canvas to cycle through preset light levels (0%, 25%, 50%, 75%, 100%).
- **What happens?**: As you move the slider or click the sensor, your code reads different brightness values.

### What you see on Canvas
- **Value Graph**: You can see a small chart showing how the light level has changed over time.

### Hardware (HIL)
- **Virtual HIL (Camera)**: You can link the virtual LDR to your computer's **Webcam**. Within the Sensors Tab, toggle the mode to **"REAL"**. The LDR will then calculate its brightness value based on the light levels detected by your camera!
- **Real Hardware**: If you have a physical LDR connected to your Pico, you can shine a real flashlight on it, and the slider on your screen will move automatically.

### UniSim API Examples

#### JavaScript
```javascript
import { Pin } from 'unisim';
// LDR is an analog sensor
const ldr = new Pin('GP26'); 
const light = ldr.readAnalog(); 
```

#### MicroPython
```python
from machine import ADC, Pin
ldr = ADC(Pin(26))
light = ldr.read_u16() # Range 0-65535
```

---
*Back to [Components](../components.md)*
