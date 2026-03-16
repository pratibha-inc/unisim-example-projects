from machine import Pin, I2C, I2cLcd
import time

# Use logical pin names for UniSim compatibility
# GP4 maps to Pin 6, GP5 maps to Pin 7
i2c = I2C(0, sda=Pin("GP4"), scl=Pin("GP5"))
lcd = I2cLcd(i2c, 0x27, 2, 16)

print("=== Pico LCD Test Started (GP4 SDA, GP5 SCL) ===")
while True:
    lcd.clear()
    lcd.putstr("Hello UniSim!\n")
    lcd.putstr("Device Online")
    time.sleep(2)
    
    lcd.clear()
    lcd.putstr("Status: Clean\n")
    lcd.putstr("Simulator OK")
    time.sleep(2)
