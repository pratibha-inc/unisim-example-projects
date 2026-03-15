import unisim, { Pin, sleep } from 'unisim';

const segments = [
    new Pin('GP0'), new Pin('GP1'), new Pin('GP2'),
    new Pin('GP3'), new Pin('GP4'), new Pin('GP5'),
    new Pin('GP6'), new Pin('GP7') // DP
];

const digits = {
    0: [1, 1, 1, 1, 1, 1, 0, 1],
    1: [0, 1, 1, 0, 0, 0, 0, 1],
    2: [1, 1, 0, 1, 1, 0, 1, 1],
    3: [1, 1, 1, 1, 0, 0, 1, 1],
    4: [0, 1, 1, 0, 0, 1, 1, 1],
    5: [1, 0, 1, 1, 0, 1, 1, 1],
    6: [1, 0, 1, 1, 1, 1, 1, 1],
    7: [1, 1, 1, 0, 0, 0, 0, 1],
    8: [1, 1, 1, 1, 1, 1, 1, 1],
    9: [1, 1, 1, 1, 0, 1, 1, 1]
};

function displayDigit(n) {
    const pattern = digits[n] || [0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 8; i++) {
        segments[i].write(pattern[i]);
    }
}

async function run() {
    console.log("JS 7-Segment Counter Started");
    while (true) {
        for (let i = 0; i <= 9; i++) {
            displayDigit(i);
            await sleep(1000);
        }
    }
}

unisim.on('ready', run);
