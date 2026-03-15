# Buzzer

A component that makes sound or "beeps" when your code tells it to.

### How to Interact
- **Automatic**: Like an LED, the buzzer responds to your code. 
- **What happens?**: Your code sends a signal, and the buzzer starts "making noise" in the simulation.

### What you see on Canvas
- **Sound Waves**: You will see small, animated "vibration lines" or sound-wave icons appear next to the buzzer when it is active.
- **State Label**: The dashboard might show an "ON" or "OFF" badge next to it.

### Hardware (HIL)
- **Virtual HIL (Speakers)**: Even without real hardware, the virtual buzzer is linked to your **System Speakers**. You will hear a simulated beep or tone from your computer whenever the buzzer is active on the canvas.
- **Real Hardware**: If you have a physical buzzer connected to your Pico, you will hear the actual physical beeps in sync with the virtual animations on your screen.

### UniSim API Examples

#### JavaScript
```javascript
import { PWM } from 'unisim';
const buzzer = new PWM('GP2');
buzzer.freq(2000); // 2kHz tone
buzzer.duty(512);  // Start buzzing
```

#### MicroPython
```python
from machine import Pin, PWM
buzzer = PWM(Pin(2))
buzzer.freq(2000)
buzzer.duty_u16(32768) # Start buzzing
```

---
*Back to [Components](../components.md)*
