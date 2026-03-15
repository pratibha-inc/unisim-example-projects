# Servo Motor

A motor that can turn its arm to a specific angle (like a steering wheel).

### How to Interact
- **Automatic**: Your code controls the angle (usually between 0 and 180 degrees).
- **What happens?**: When you change the "duty cycle" in your code, the motor arm moves to that exact position.

### What you see on Canvas
- **Rotation**: You will see the white "horn" or "arm" of the motor physically spin to cross the angle you set.
- **Smooth Animation**: The movement is animated so you can see it sweep from left to right.

### Hardware (HIL)
If a real servo is connected, it will physically rotate on your desk at the same time the virtual one spins on your screen.

### UniSim API Examples

#### JavaScript
```javascript
import { PWM } from 'unisim';
const servo = new PWM('GP15');
servo.freq(50); // Servo frequency is usually 50Hz
servo.duty(77); // Approx 90 degrees
```

#### MicroPython
```python
from machine import Pin, PWM
servo = PWM(Pin(15))
servo.freq(50)
servo.duty_u16(4915) # Approx 90 degrees
```

---
*Back to [Components](../components.md)*
