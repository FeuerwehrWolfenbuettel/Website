import os
import subprocess

COMMAND_TO_RUN = ["pip", "install", "-e", "."]
ROOT = os.path.dirname(os.path.realpath(__file__))
REQ_PATH = f"{ROOT}/requirements.txt"
SRC_PATH = f"{ROOT}/src/python"


def run_command_in_directory(directory):
    setup_py_path = os.path.join(directory, 'setup.py')
    if os.path.isfile(setup_py_path):
        print(f"Running command in {directory}")
        subprocess.run(COMMAND_TO_RUN, cwd=directory,
                       env={"REQ_PATH": REQ_PATH})


def install_packages():
    for folder_name in os.listdir(SRC_PATH):
        folder_path = os.path.join(SRC_PATH, folder_name)
        if os.path.isdir(folder_path):
            run_command_in_directory(folder_path)


if __name__ == "__main__":
    install_packages()
