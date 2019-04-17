from file_titles import titles
import os
import re
import numpy as np
import pandas as pd
import hashlib


class LogParser:
    def __init__(self, file_name, file_format, file_text):
        self.file_name = file_name
        self.format = titles[file_format]['log_format']
        self.rex =  titles[file_format]['regex'][0]
        self.Read_file(file_text)


    def Read_file(self,file_name):
        try:
            f = self.file_text
            i = 1
            mainList = []
            d = dict()
            for line in f:
                l = re.findall(self.rex, line)
                size = len(self.format)
                l[size-1] = ' '.join(l[size-1:])
                del l[size:]
                template_id = hashlib.md5(l[size-1].encode('utf-8')).hexdigest()[0:8]
                if(template_id not in d):
                    d[template_id] = "E"+str(i)
                    i+=1

                l.append(d[template_id])
                
                mainList.append(l)

            self.format.append('Event')
            pd.set_option('display.max_columns', None)  
            df = pd.DataFrame(mainList, columns=self.format)
            df.to_csv(self.file_name+"_structured.csv", sep=',', encoding='utf-8', index=False)

        except Exception as e:
            print(e)


    def display(self):
        print("self.rex  : ", self.rex)
        print("self.format  : ", self.file_format)

