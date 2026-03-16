from machine import Pin, PWM
import time

# GP15
srv = PWM(Pin("GP15")) 
srv.freq(50)

print("=== Pico Servo Test Started (GP15) ===")
# 50Hz Standard Servo: 0 degrees = ~1638 (0.025 * 65535), 180 degrees = ~8192 (0.125 * 65535)
min_duty = 1638
max_duty = 8192
step = 500

while True:
    for duty in range(min_duty, max_duty, step):
        srv.duty_u16(duty)
        time.sleep(0.1)
    for duty in range(max_duty, min_duty, -step):
        srv.duty_u16(duty)
        time.sleep(0.1)
