import os
from pathlib import Path

ms = []
msnam = []

def listfiles(folder_path):
    print(f"{'Filename':<30} {'Size (bytes)':<15} {'Modified':<20}")
    print("-" * 65)
    
    for file_path in Path(folder_path).iterdir():
        if file_path.is_file():
            stats = file_path.stat()
            print(f"{file_path.name:<30} {stats.st_size:<15} {stats.st_mtime:<20.0f}")
            ms.append(file_path.name)
            msnam.append(file_path.name[:-4])


listfiles("randimg")
print("filename table")
print(ms)
print("carname table")
print(msnam)

with open("ms.txt","w",encoding="utf-16") as ms1:
    ms1.write(str(ms))
with open("msnam.txt","w",encoding="utf-16") as msnam1:
    msnam1.write(str(msnam))
