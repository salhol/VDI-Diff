#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
;SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SendMode Event ; Use to show how mouse move. 
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
#SingleInstance, force ; When reloading script, forces refresh of running script

; Uncomment to display mouse position
;CoordMode, Mouse, Screen
;SetTimer, Check, 20
;return
;Check:
;MouseGetPos, xx, yy
;Tooltip %xx%`, %yy%
;return

^q::
; Start of loop
MouseMove, A_ScreenWidth/2, A_ScreenHeight/2
Sleep, 1000
; Start Autoscreenshot & Timer
SendInput, ^+z
SendInput, ^w
; Loop through click-and-drag 3 times
Loop, 3 {
    MouseClickDrag, Left, A_ScreenWidth/3, A_ScreenHeight/4, A_ScreenWidth-(A_ScreenWidth/4), A_ScreenHeight-(A_ScreenHeight/4), 15
    Sleep, 1000
}
; Open PrePost
MouseClick, Left, 75, A_ScreenHeight-25, 1
Sleep, 1000
; Loop through click-and-drag 3 times to move 3D model
Loop, 3 {
    Send, {ShiftDown}
    MouseClickDrag, Left, A_ScreenWidth/3, A_ScreenHeight/4, A_ScreenWidth-(A_ScreenWidth/4), A_ScreenHeight-(A_ScreenHeight/4), 15
    Send, {ShiftUp}
    Sleep, 1000
}
; Stop Autoscreenshot & Timer
SendInput, ^w
SendInput, ^+x

Return
Esc::ExitApp