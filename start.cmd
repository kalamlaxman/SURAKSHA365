@echo off
title SURAKSHA 365 - Women's Safety Application
echo Starting SURAKSHA 365 Application Server...
if exist "C:\Users\KALAM KANAKAYYA\AppData\Roaming\Antigravity\bin\agy-node.cmd" (
    "C:\Users\KALAM KANAKAYYA\AppData\Roaming\Antigravity\bin\agy-node.cmd" server.js
) else (
    node server.js
)
pause
