# Push Button

A simple switch that you can press to send a signal to your code.

### How to Interact
- **On Screen**: Simply **Click** the button on the virtual canvas with your mouse to press it down.
- **Keyboard**: You can also press the **Spacebar** on your keyboard to trigger the primary button in your circuit.
- **What happens?**: When you press it, you will see the button physically "dip" on the screen, and your code will receive a signal (usually a `0` or `1`).

### What you see on Canvas
- When **Pressed**: The button changes color or shows a shadow to indicate it is down.
- When **Released**: It pops back up to its original state.

### Hardware (HIL)
If you have a real button connected, pressing the physical button on your desk will make the virtual button on your screen move too!

### UniSim API Examples

#### JavaScript
```javascript
import { Pin } from 'unisim';
const btn = new Pin('GP0');
const state = btn.read(); 
```

#### MicroPython
```python
from machine import Pin
# Typical button with Pull-Up resistor
btn = Pin(0, Pin.IN, Pin.PULL_UP)
val = btn.value()
```

---
*Back to [Components](../components.md)*
