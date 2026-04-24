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

for i in range(ln):
    print(str(i + 1) + ":",'{car:"'+msnam[i]+'",img:"'+ms[i]+'",a:"../Cars/'+msnam[i]+'/index.html"},')
