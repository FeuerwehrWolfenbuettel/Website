import os
from setuptools import setup

def requirements():
    with open(os.getenv("REQ_PATH"), "r") as f:
        return [x.strip("\n") for x in f.readlines()]

setup(
    name='FF Wolfenbuettel Database manager',
    version='0.1.0',
    description='',
    author='Felix Schmidt',
    author_email='Felix-Schmidt2@outlook.de',
    install_requires=requirements()
)
