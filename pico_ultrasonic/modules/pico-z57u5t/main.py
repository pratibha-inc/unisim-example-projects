from machine import Pin, HCSR04
import time

# GP10 Echo, GP11 Trig
echo = Pin("GP10", Pin.IN)  
trig = Pin("GP11", Pin.OUT) 
sensor = HCSR04(trig, echo)

print("=== Pico Ultrasonic Test Started (GP10 Echo, GP11 Trig) ===")
while True:
    try:
        dist = sensor.distance_cm()
        print(f"Distance: {dist:.1f} cm")
    except Exception as e:
        print(f"Distance: Out of range ({e})")
        
    time.sleep(1)
