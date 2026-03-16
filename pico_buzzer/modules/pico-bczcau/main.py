from machine import Pin
import time

# Pico GP0
buz = Pin("GP0", Pin.OUT)

print("=== Pico Buzzer Test Started (GP0) ===")
while True:
    buz.on()
    print("Buzzer ON")
    time.sleep(0.5)
    buz.off()
    print("Buzzer OFF")
    time.sleep(1.5)
