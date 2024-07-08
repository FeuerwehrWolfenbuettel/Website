"""Setup Script for this module"""
from setuptools import setup, find_packages

with open('requirements.txt', encoding="utf-8") as requirements_file:
    requirements = requirements_file.read().splitlines()

setup(
    name='FF Wolfenbuettel',
    version='0.1.0',
    description='Feuerwehr Wolfenbuettel Website Backend',
    author='Felix Schmidt',
    author_email='Felix-Schmidt2@outlook.de',
    install_requires=requirements,
    packages=find_packages()
)
