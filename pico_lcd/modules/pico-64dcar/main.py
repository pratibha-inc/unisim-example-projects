from machine import Pin, I2C, I2cLcd
import time

# GP4 is GPIO 4, GP5 is GPIO 5
i2c = I2C(0, sda=Pin(4), scl=Pin(5))
lcd = I2cLcd(i2c, 0x27, 2, 16)

print("=== Pico LCD Test Started (GP4 SDA, GP5 SCL) ===")
while True:
    lcd.clear()
    lcd.putstr("Hello Someone\n")
    lcd.putstr("Device Polished")
    time.sleep(2)
    
    lcd.clear()
    lcd.putstr("Status: Online\n")
    lcd.putstr("History Cleared")
    time.sleep(2)
