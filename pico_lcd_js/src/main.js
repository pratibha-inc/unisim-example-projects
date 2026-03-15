import unisim, { sleep } from 'unisim';

/**
 * Helper class to interact with the I2C LCD
 */
class Lcd {
    constructor(sda = 'GP4', scl = 'GP5', address = 0x27) {
        this.sda = sda;
        this.scl = scl;
        this.address = address;
    }

    print(text) {
        // Broadcast LCD_WRITE event to the simulation core
        unisim.native.emit('LCD_WRITE', {
            text: text,
            sdaPin: this.sda,
            sclPin: this.scl,
            address: this.address
        });
    }

    clear() {
        // Broadcast LCD_CLEAR event
        unisim.native.emit('LCD_CLEAR', {
            sdaPin: this.sda,
            sclPin: this.scl,
            address: this.address
        });
    }
}

async function run() {
    console.log("=== Pico JS LCD Demo Starting ===");
    const lcd = new Lcd();

    while (true) {
        lcd.clear();
        lcd.print("UniSim JS Brain\n");
        lcd.print("System: Online");
        console.log("LCD Updated: Online");
        await sleep(3000);

        lcd.clear();
        lcd.print("I2C Bus Scan...\n");
        lcd.print("LCD Found: 0x27");
        console.log("LCD Updated: Bus Scan");
        await sleep(3000);
        
        lcd.clear();
        lcd.print("Real-time Sync\n");
        lcd.print("Low Latency IO");
        console.log("LCD Updated: Sync Test");
        await sleep(3000);
    }
}

// Start user logic when hardware is initialized
unisim.on('ready', run);
