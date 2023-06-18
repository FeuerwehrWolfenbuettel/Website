# Website FF Wolfenbuettel

## Setting things up

## Vscode Settings

Put this inside the *.code-workspace

```json

"settings": {
    "python.linting.pylintEnabled": true,
    "python.linting.enabled": true,
    "editor.rulers": [
        80,
        120
    ],
    "flake8.args": [
        "--max-line-length=120"
    ]
}

```

### Python code base

#### Setup virtual environment

```sh
# In workspace
python3 -m venv .env

```

#### Activate Environment

```sh
source ./.env/bin/activate  # Linux/Unix
./.env/bin/Activate.ps1     # Windows
```

#### Install Packages

```sh
# In workspace
python3 load_project.py
```

### Start the Project

```sh
python3 ./src/python/server.py
```
