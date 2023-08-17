"""Setup Script for this module"""

import os
from setuptools import setup, find_packages


def requirements() -> list[str]:
    """
    Loads requirements out of the requirements.txt

    Returns:
        List[str]: packages to install
    """
    with open(os.getenv("REQ_PATH"), "r", encoding="UTF-8") as f:
        return [x.strip("\n") for x in f.readlines()]


setup(
    name='FF Wolfenbuettel',
    version='0.1.0',
    description='',
    author='Felix Schmidt',
    author_email='Felix-Schmidt2@outlook.de',
    # install_requires=requirements(),
    py_modules=find_packages()
)
