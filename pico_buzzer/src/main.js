import unisim from 'unisim';

console.log("JS Brain: Booting pico_buzzer...");

unisim.on('ready', () => {
    console.log("System Ready. Monitoring hardware events...");
});
