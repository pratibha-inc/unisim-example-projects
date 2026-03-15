import unisim from 'unisim';

console.log("JS Brain: Booting pico_seven_segment...");

unisim.on('ready', () => {
    console.log("System Ready. Monitoring hardware events...");
});
