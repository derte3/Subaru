from pathlib import Path
import ast
ms = 0
msnam = 0


ms0 = Path('ms.txt').read_text(encoding='utf-16')
ms = ast.literal_eval(ms0)
print(ms)
msnam0 = Path('msnam.txt').read_text(encoding='utf-16')
msnam = ast.literal_eval(msnam0)
print(msnam)

ln = len(ms)
print(ln)

print("const carlist = [")
for i in range(ln):
    if i + 1== ln:
        print('{car:"'+msnam[i]+'",img:"../Subaru/js/randimg/'+ms[i]+'",a:"../Subaru/Cars/'+msnam[i]+'/index.html"}')
    else:
        print('{car:"'+msnam[i]+'",img:"../Subaru/js/randimg/'+ms[i]+'",a:"../Subaru/Cars/'+msnam[i]+'/index.html"},')
print("];")
exitprmt = input("input to continue")
