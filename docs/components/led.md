# LED (Light Emitting Diode)

A small light that turns on and off based on your code.

### How to Interact
- **Automatic**: The LED is an "output" device, meaning you don't click it to make it work. Instead, your code tells it when to glow.
- **What happens?**: When your code sends a 'High' signal, the LED lights up.

### What you see on Canvas
- **Visual Glow**: You will see a vibrant glow effect around the LED when it's on.
- **Color**: The LED will be the color you chose in the settings (Red, Green, Blue, etc.).

### Hardware (HIL)
If you have a physical LED connected to your Pico, it will blink in perfect sync with the one on your computer screen.

### UniSim API Examples

#### JavaScript
```javascript
import { Pin } from 'unisim';
const led = new Pin('GP1');
led.write(1); // Turn ON
```

#### MicroPython
```python
from machine import Pin
led = Pin(1, Pin.OUT)
led.on() # Turn ON
```

---
*Back to [Components](../components.md)*
