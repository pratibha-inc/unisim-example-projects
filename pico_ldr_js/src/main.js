import unisim, { ADC, Pin, sleep } from 'unisim';

const ldr = new ADC('GP27');

async function run() {
    console.log("JS LDR Logic Started");
    while (true) {
        const val = await ldr.read();
        console.log(`LDR Reading: ${val}`);
        await sleep(500);
    }
}

unisim.on('ready', run);
