# 7-Segment Display

A digital display that shows numbers (like an old digital alarm clock).

### How to Interact
- **Automatic**: Each segment (the little bars) is controlled by a pin on the Pico.
- **What happens?**: By turning on specific pins (GP0 to GP6), you can form different numbers like '1', '2', or '8'.

### What you see on Canvas
- **Glowing Segments**: Each bar will glow bright red (or your chosen color) when it is turned on.
- **Layout**: The segments are labeled 'a' through 'g' to match standard electronics guides.

### UniSim API Examples

#### JavaScript
```javascript
import { Pin } from 'unisim';
// Example: Turning on segment 'a' (top)
const segA = new Pin('GP0');
segA.write(1);
```

#### MicroPython
```python
from machine import Pin
# Each bar is a separate pin
segA = Pin(0, Pin.OUT)
segA.on()
```

---
*Back to [Components](../components.md)*
