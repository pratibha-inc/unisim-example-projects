# I2C LCD (16x2)

A screen that displays text messages from your code.

### How to Interact
- **Viewing**: You just need to look at the screen! Your code sends sentences or numbers to it.
- **Backlight**: You might see the screen "light up" (usually blue or green) when it is powered on.

### What you see on Canvas
- **Live Text**: Words like "Hello World" or "System Booting" will appear pixel-by-pixel, just like a real LCD.
- **Clearance**: You will see the text vanish and refresh whenever your code calls the `clear()` command.

### UniSim API Examples

#### JavaScript
```javascript
// Note: I2C LCD usually requires a library
import { I2C } from 'unisim';
const i2c = new I2C('GP4', 'GP5');
// Use a library to send LCD commands via I2C
```

#### MicroPython
```python
from machine import Pin, I2C, I2cLcd
i2c = I2C(0, sda=Pin(4), scl=Pin(5))
lcd = I2cLcd(i2c, 0x27, 2, 16)
lcd.putstr("Hello UniSim")
```

---
*Back to [Components](../components.md)*
