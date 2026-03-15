from machine import Pin
import time

# Use PULL_UP for GND-wired buttons
btn = Pin(0, Pin.IN, Pin.PULL_UP) 
led = Pin(1, Pin.OUT)            

while True:
    if not btn.value(): # 0 = Pressed
        led.on()
    else:               # 1 = Released
        led.off()
    time.sleep(0.05)
