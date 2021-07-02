def adjust(num: number):
    global brightness, up
    if up == True:
        brightness = brightness + num
        led.set_brightness(brightness)
        if brightness > 255:
            up = False
    else:
        brightness = brightness - num
        led.set_brightness(brightness)
        if brightness < 5:
            up = True
up = False
brightness = 0
brightness = 0
up = True
basic.show_icon(IconNames.HEART)

def on_forever():
    adjust(50)
basic.forever(on_forever)
