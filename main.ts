input.onPinPressed(TouchPin.P0, function () {
    music.stopAllSounds()
})
input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("B A G A G F A C5 ", 999)
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1, 5000, 255, 255, 9520, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.setVolume(255)
})
