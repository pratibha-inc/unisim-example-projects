# Programming in UniSim

UniSim supports two ways to control your hardware: **Pure JavaScript** and **MicroPython**.

## 1. Pure JavaScript API
Recommended for orchestration and high-level logic.

### Basics
```javascript
import unisim, { Pin, sleep } from 'unisim';

const led = new Pin('GP1');

async function main() {
  while (true) {
    led.write(1);
    await sleep(500);
    led.write(0);
    await sleep(500);
  }
}

unisim.on('ready', main);
```

### PWM (Pulse Width Modulation)
Use PWM for brightness control, motor speeds, or servo positioning.
```javascript
import { PWM } from 'unisim';
const myPWM = new PWM('GP15');
myPWM.freq(50);
myPWM.duty_u16(32768); // 50% duty cycle
```

---

## 2. MicroPython Firmware
Simulate "real" microcontroller firmware. This requires mapping a component ID to a Python module in `unisim.config.json`.

### mappings in unisim.config.json
```json
"mappings": {
  "pico-123": "modules/pico-firmware"
}
```

### MicroPython Code (`<project-root>/modules/main.py`)
```python
from machine import Pin, PWM
import time

led = Pin(1, Pin.OUT)
while True:
    led.toggle()
    time.sleep(1)
```

### Key Differences
- **JavaScript**: Shared execution context with the UI, highly responsive, easy async logic.
- **MicroPython**: Realistic timing model, isolated per-controller environment, uses standard MicroPython library syntax.
