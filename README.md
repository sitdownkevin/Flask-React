# Flask+React
## Initialization

### Flask About

```shell
# ROOT_DIR

# Create Python environment
> python -m venv .venv

# Install packages
> python install -r requirement.txt
```

### React About

```shell
# ROOT_DIR

> cd frontend
> yarn install
```

## Run

- `run.bat`: run both frontend and backend
- `run_backend`: run backend only
- `run_frontend`: run frontend only

## Directory Structure

```
| backend
--| app.py
--| .flaskenv
| frontend
--| public
----| ...
--| src
----| ...
--| package.json
--| tsconfig.json
--| yarn.lock
| .gitignore
| README.md
| requirement.txt
| run.bat
| run_backend.bat
| run_frontend.bat
```

## Demo
![Flask-React-Demo](https://cdn.jsdelivr.net/gh/sitdownkevin/ImageHosting//flask-react-demo.gif)