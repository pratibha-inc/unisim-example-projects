# Ultrasonic Sensor

A sensor that measures how far away an object is by using "sound pings."

### How to Interact
- **Target Drag**: On the virtual canvas, you will see a blue **"Target"** dot with dotted lines connected to the sensor. You can **Click and Drag** this dot directly to move the "object" and change the distance in real-time.
- **Sensors Tab**: Look for the **"Sensors"** tab at the bottom of your dashboard and drag the **"Distance"** slider.
- **Mouse Click**: You can also **Click** directly on the sensor component on the canvas to cycle through common distances.
- **What happens?**: Your code will calculate the distance in centimeters based on where the target is or where you set the slider.

### What you see on Canvas
- **Detection Cone**: You will see a visual "cone" or beam coming out of the sensor. If you "place" an object in that beam using the slider, it will show the distance clearly.

### Hardware (HIL)
Wave your hand in front of a real sensor, and the distance values on your screen will update instantly!

### UniSim API Examples

#### JavaScript
```javascript
import { Pin, HCSR04 } from 'unisim';
const echo = new Pin('GP14');
const trig = new Pin('GP15');
const sensor = new HCSR04(trig, echo);
const dist = await sensor.distance_cm();
```

#### MicroPython
```python
from machine import Pin, HCSR04
echo = Pin(14, Pin.IN)  
trig = Pin(15, Pin.OUT) 
sensor = HCSR04(trig, echo)
dist = sensor.distance_cm()
```

---
*Back to [Components](../components.md)*
