@echo off
start cmd /K "call .venv/Scripts/activate.bat && cd ./backend && flask run && exit"