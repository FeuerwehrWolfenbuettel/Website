import os
import subprocess

def run_command_in_directory(directory, command):
    setup_py_path = os.path.join(directory, 'setup.py')
    if os.path.isfile(setup_py_path):
        print(f"Running command in {directory}")
        subprocess.run(command, cwd=directory, shell=True, env={"REQ_PATH":requirements_path})

def iterate_folders(root_directory, command):
    for folder_name in os.listdir(root_directory):
        folder_path = os.path.join(root_directory, folder_name)
        if os.path.isdir(folder_path):
            run_command_in_directory(folder_path, command)

# Set the root directory and command to run
requirements_path = f"{os.path.dirname(os.path.realpath(__file__))}/requirements.txt"

root_directory = f"{os.path.dirname(os.path.realpath(__file__))}/src/python"
command_to_run = 'pip install -e .'

# Call the function to iterate over folders and run the command
iterate_folders(root_directory, command_to_run)

# print(root_directory)
