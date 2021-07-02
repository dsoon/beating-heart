function adjust (num: number) {
    if (up == true) {
        brightness = brightness + num
        led.setBrightness(brightness)
        if (brightness > 255) {
            up = false
        }
    } else {
        brightness = brightness - num
        led.setBrightness(brightness)
        if (brightness < 5) {
            up = true
        }
    }
}
let up = false
let brightness = 0
brightness = 0
up = true
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    adjust(50)
})
