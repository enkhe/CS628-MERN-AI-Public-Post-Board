# filepath: /workspaces/CS628-MERN-AI-Public-Post-Board/presentation/create_diagrams_mermaid.py
# Description: This script generates PNG diagrams from Mermaid code using the Mermaid CLI.
# Usage: Place *.mmd files (with mermaid instructions) in the "diagram_instructions" directory,
#        then run this script using Python to generate all PNG diagrams.
# Note: You need to have the Mermaid CLI installed to use this script.
#       You can install it using npm: 
# npm install -g @mermaid-js/mermaid-cli
#       The images will be stored in the "exports" directory with date/time stamps in their filenames.
#      The script will also print the filenames of the generated images.
#      If you want to generate diagrams from a single .mmd file, you can modify the script accordingly.
#      For more information on Mermaid, visit: https://mermaid-js.github.io/mermaid/
#      For more information on the Mermaid CLI, visit:
#
# python create_diagrams_mermaid.py 

import os
import subprocess
import tempfile
from datetime import datetime

def generate_mermaid_png(mermaid_code: str, output_filename: str) -> None:
    """
    Generates a PNG file from Mermaid code using the Mermaid CLI.
    Saves the file in the 'exports' directory with a date/time stamp appended to the filename.
    :param mermaid_code: A string containing valid Mermaid diagram code.
    :param output_filename: Base name for the output PNG file (e.g., 'my_diagram.png').
    """
    # Create the exports directory if it doesn't exist
    exports_dir = "diagram_exports"
    os.makedirs(exports_dir, exist_ok=True)

    # Create a timestamp
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")

    # Append the timestamp to the output filename
    basename, ext = os.path.splitext(output_filename)
    final_filename = f"{timestamp}_{basename}{ext}"
    final_path = os.path.join(exports_dir, final_filename)

    # Create a temporary .mmd file
    with tempfile.NamedTemporaryFile(delete=False, suffix=".mmd") as tmp_file:
        tmp_file_path = tmp_file.name
        tmp_file.write(mermaid_code.encode("utf-8"))
        tmp_file.flush()

    # Run Mermaid CLI to convert the .mmd file to a .png
    print(f"Generating diagram for: {output_filename}")
    try:
        subprocess.run(
            [
                "mmdc",
                "-i", tmp_file_path,
                "-o", final_path
            ],
            check=True
        )
        print(f"Successfully generated: {final_path}")
    except subprocess.CalledProcessError as e:
        print(f"Error while generating diagram: {e}")
    finally:
        # Remove the temporary .mmd file
        if os.path.exists(tmp_file_path):
            os.remove(tmp_file_path)


if __name__ == "__main__":
    """
    This script looks for all .mmd files in the 'diagram_instructions' directory.
    Each file is read, and a PNG is generated in the 'exports' directory.
    The output filename is the same as the .mmd file name (except for the extension),
    with a date/time stamp appended.
    """

    # Directory containing .mmd files
    instructions_dir = "diagram_instructions"
    os.makedirs(instructions_dir, exist_ok=True)

    # Find all .mmd files in the instructions directory
    mmd_files = [
        f for f in os.listdir(instructions_dir)
        if os.path.isfile(os.path.join(instructions_dir, f)) and f.endswith(".mmd")
    ]

    if not mmd_files:
        print(f"No .mmd files found in {instructions_dir}. Please add Mermaid diagram files there.")
        exit(0)

    # Generate PNG diagrams for each .mmd file
    for mmd_file in mmd_files:
        mmd_path = os.path.join(instructions_dir, mmd_file)

        # The output filename will match the .mmd file, but with .png extension
        output_filename = os.path.splitext(mmd_file)[0] + ".png"

        with open(mmd_path, "r", encoding="utf-8") as f:
            mermaid_code = f.read()

        # Generate the PNG diagram
        generate_mermaid_png(mermaid_code, output_filename)