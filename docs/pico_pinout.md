# Raspberry Pi Pico Pinout Reference

This document provides a detailed mapping of the Raspberry Pi Pico pins as they appear in UniSim. Knowing which pin to use for Sensors, LEDs, or Motors is key to a successful project.

## 1. Pin Layout Overview
The Pico has 40 physical pins, but in software (MicroPython and JavaScript), we usually refer to them by their **GP (General Purpose)** numbers.

### Power & Ground
- **3V3 (Pin 36)**: Output power at 3.3 Volts. Use this to power sensors and LEDs.
- **GND (Pins 3, 8, 13, 18, 23, 28, 33, 38)**: Common Ground connections. You should connect the minus (`-`) side of your components here.
- **VSYS (Pin 39)**: Input voltage (used for battery power in real life).
- **VBUS (Pin 40)**: Power from the USB cable (5V).

## 2. Special Function Pins
Many pins can do more than just turn ON and OFF.

### ADC (Analog to Digital Converter)
Used for reading analog values from sensors like the **Potentiometer**.
- **GP26** (ADC0)
- **GP27** (ADC1)
- **GP28** (ADC2)

### PWM (Pulse Width Modulation)
Used for controlling the brightness of an LED, the speed of a motor, or the angle of a **Servo**.
- **Standard**: Virtually all GP pins on the Pico support PWM in UniSim.
- **Commonly used**: GP15 (Servo), GP2 (Buzzer).

### I2C (Inter-Integrated Circuit)
Used for complex components like the **LCD Screen**.
- **I2C0**: Often used on **GP4 (SDA)** and **GP5 (SCL)**.
- **I2C1**: Often used on **GP2 (SDA)** and **GP3 (SCL)**.

## 3. Pin Mapping Table

| GP Number | Function | UniSim Identification |
| :--- | :--- | :--- |
| **GP0 - GP22** | Digital I/O (Standard) | `GP0` ... `GP22` |
| **GP26 - GP28** | Analog Input (ADC) | `GP26` ... `GP28` |
| **GP4 & GP5** | I2C0 (Default Data/Clock) | `SDA0` / `SCL0` |
| **GP14 & GP15** | Typical Ultrasonic Pins | `Echo` / `Trig` |

## 4. Programming the Pins

### JavaScript (Pure JS API)
Always use the string name of the pin as labeled on the Pico.
```javascript
import { Pin } from 'unisim';
const myLed = new Pin('GP1'); // Uses GP1
```

### MicroPython (Firmware)
Use the raw integer number for the Pin constructor.
```python
from machine import Pin
my_led = Pin(1, Pin.OUT) # Uses GP1
```

---
*Next Step: Explore the [Component Library](./components.md)*
