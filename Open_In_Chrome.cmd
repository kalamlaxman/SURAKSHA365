@echo off
title Launch SURAKSHA 365 in Google Chrome
echo Launching SURAKSHA 365 Women's Safety App in Google Chrome...
if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
    start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" "%~dp0index.html"
) else if exist "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" (
    start "" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" "%~dp0index.html"
) else (
    start "" "%~dp0index.html"
)
exit
