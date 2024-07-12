input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 100))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, 0, 100))
})
loops.everyInterval(100, function () {
    led.plot(Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 5), Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, 0, 5))
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
loops.everyInterval(100, function () {
    if (pins.analogReadPin(AnalogPin.P2) > 0) {
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
    }
})
