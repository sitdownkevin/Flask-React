@echo off
start cmd /K "cd ./frontend && yarn start && exit"
start cmd /K "cd ./backend && flask run && exit"