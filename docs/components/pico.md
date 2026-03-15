# Raspberry Pi Pico

The Raspberry Pi Pico is the primary microcontroller supported in UniSim. It features the RP2040 chip with a large number of GPIO pins and built-in ADC/PWM capabilities.

### Pinout Summary
- **GPIO 0-28**: Digital input/output pins.
- **ADC 0-3**: Analog inputs (GP26, GP27, GP28).
- **I2C**: Supported on various pin pairs (e.g., GP4/GP5).
- **3V3/VSYS**: Power supply pins for external components.
- **GND**: Common ground reference.

### Project Configuration

To use the Pico in your project, you must define its mapping in `unisim.config.json`:

```json
{
  "mappings": {
    "pico-unique-id": "path/to/your/code/folder"
  }
}
```

---
*Back to [Components](../components.md)*
