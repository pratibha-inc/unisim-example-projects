import unisim, { PWM, Pin, sleep } from 'unisim';

const srv = new PWM('GP15');
srv.freq(50);

async function run() {
    console.log("JS Servo Logic Started");
    const min_duty = 1638;
    const max_duty = 8192;
    const step = 500;

    while (true) {
        for (let duty = min_duty; duty < max_duty; duty += step) {
            srv.duty_u16(duty);
            await sleep(100);
        }
        for (let duty = max_duty; duty > min_duty; duty -= step) {
            srv.duty_u16(duty);
            await sleep(100);
        }
    }
}

unisim.on('ready', run);
