import numpy as np;
import pandas as pd;
from collections import Counter

l = [1,1,1,1,1,2,2,2,2,3,3,3,4,4,4,5,2,1,2,3,1]
df = pd.DataFrame(l)
print(df.apply(pd.value_counts))
