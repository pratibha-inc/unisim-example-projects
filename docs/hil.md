# Hardware-in-the-Loop (HIL) 🌁

HIL is an advanced feature that allows UniSim to bridge the gap between virtual simulation and physical hardware.

### How it Works
When HIL is enabled, a physical microcontroller (connected via USB) acts as a proxy for a virtual component in your circuit.
- **Sensor Input**: A physical sensor on your desk can provide real-world data to your virtual Pico.
- **Actuator Output**: Your virtual simulation logic can move a real physical servo motor.

### Setup Process
1. **Connect Device**: Plug your supported microcontroller (e.g., Raspberry Pi Pico) into your computer.
2. **Flash HIL Firmware**: Use the CLI to flash the bridge firmware:
   ```bash
   unisim hil flash
   ```
3. **Configure Mapping**: Update your `unisim.config.json` to flag a component as HIL-bridged.
   ```json
   "hil": {
     "pico-virtual-id": "COM3"
   }
 }
   ```

### 🛰️ The HIL Dashboard Tab
When a HIL connection is active, a new **HIL Tab** appears in the UniSim UI.
- **Connectivity Status**: Real-time monitoring of the USB connection stability.
- **Pin Mirroring**: Toggle visual indicators showing when a physical pin state changes.
- **Override Mode**: Temporarily detach the bridge to manually manipulate virtual pins while the physical device is still connected.

### Expert Use Cases
- **Validation**: Test if your control algorithms handle real-world sensor noise before final deployment.
- **Interactive Displays**: Use virtual sliders in the browser to control a complex physical hardware setup.
- **Rapid Prototyping**: Combine 90% virtual components with one specialized physical sensor that is hard to simulate.
