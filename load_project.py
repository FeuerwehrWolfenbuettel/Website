"""Core Setup Script"""
import os
import subprocess

COMMAND_TO_RUN = ["pip", "install", "-e", "."]
ROOT = os.path.dirname(os.path.realpath(__file__))
REQ_PATH = f"{ROOT}/requirements.txt"
SRC_PATH = f"{ROOT}/src/python"
INSTALL_REQS = ["pip", "install", "-r", "requirements.txt"]


def install_packages():
    """Scans for packages to install"""
    subprocess.run(INSTALL_REQS, cwd=ROOT)   # pylint: disable=subprocess-run-check
    subprocess.run(COMMAND_TO_RUN, cwd=SRC_PATH)


if __name__ == "__main__":
    install_packages()
