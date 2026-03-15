from machine import Pin, HCSR04
import time

# GP14 is index 14, GP15 is index 15
echo = Pin(10, Pin.IN)  
trig = Pin(11, Pin.OUT) 
sensor = HCSR04(trig, echo)

print("=== Pico Ultrasonic Test Started (GP10 Echo, GP11 Trig) ===")
while True:
    try:
        dist = sensor.distance_cm()
        print(f"Distance: {dist:.1f} cm")
    except Exception as e:
        print(f"Distance: Out of range ({e})")
        
    time.sleep(1)
