@echo off
call cordova clean
call cordova build android
if not errorlevel 1 (
	call explorer "platforms\android\app\build\outputs\apk\debug"
)