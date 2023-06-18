"""Core Setup Script"""
import os
import subprocess

COMMAND_TO_RUN = ["pip", "install", "-e", "."]
ROOT = os.path.dirname(os.path.realpath(__file__))
REQ_PATH = f"{ROOT}/requirements.txt"
SRC_PATH = f"{ROOT}/src/python"
INSTALL_REQS = ["pip", "install", "-r", REQ_PATH]


def run_command_in_directory(directory):
    """Installs the packages"""
    setup_py_path = os.path.join(directory, 'setup.py')
    if os.path.isfile(setup_py_path):
        subprocess.run(COMMAND_TO_RUN,   # pylint: disable=subprocess-run-check
                       cwd=directory,
                       env={"REQ_PATH": REQ_PATH})


def install_packages():
    """Scans for packages to install"""
    subprocess.run(INSTALL_REQS)   # pylint: disable=subprocess-run-check
    for folder_name in os.listdir(SRC_PATH):
        folder_path = os.path.join(SRC_PATH, folder_name)
        if os.path.isdir(folder_path):
            run_command_in_directory(folder_path)


if __name__ == "__main__":
    install_packages()
