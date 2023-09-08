@echo off
start cmd /K "cd ./frontend && yarn start && exit"
start cmd /K "call .venv/Scripts/activate.bat && cd ./backend && flask run && exit"