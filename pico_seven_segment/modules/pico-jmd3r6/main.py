from machine import Pin
import time

# GP0-GP6: Segments A-G, GP7: Decimal Point (DP)
segments = [Pin(i, Pin.OUT) for i in range(8)]

# Bit patterns: [A, B, C, D, E, F, G, DP]
# Setting the 8th bit to 1 turns ON the decimal point
digits = {
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
}

def display_digit(n):
    pattern = digits.get(n, [0]*8)
    for i in range(8):
        segments[i].value(pattern[i])

print("=== Pico 7-Segment Counter with DP Started ===")
while True:
    for i in range(10):
        display_digit(i)
        time.sleep(1)
