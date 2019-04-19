import re
import os
import numpy as np
import pandas as pd
import hashlib
from datetime import datetime
from file_titles import titles

class LogParser:
    def __init__(self, log_format, log_name):
        self.fileText = None
        self.log_format = log_format
        self.log_name = log_name

    def parse(self, fileText):
        self.fileText = fileText
        return self.load_data()

    def load_data(self):
        headers, regex = self.generate_logformat_regex(self.log_format)
        self.df_log = self.log_to_dataframe(self.fileText, regex, headers, self.log_format)
        return self.df_log

        
    def generate_logformat_regex(self, logformat):
        headers = []
        splitters = re.split(r'(<[^<>]+>)', logformat)
        # print(splitters)
        regex = ''
        for k in range(len(splitters)):
            # print("k = ",k)
            if k % 2 == 0:
                splitter = re.sub(' +', '\\\s+', splitters[k])
                # print(splitter)
                regex += splitter
                # print("Regex = ",regex)
            else:
                header = splitters[k].strip('<').strip('>')
                # print("Header = ",header)
                regex += '(?P<%s>.*?)' % header
                # print("Regex = ",regex)
                headers.append(header)
        regex = re.compile('^' + regex + '$')
        print("Headers : ",headers)
        print("Regex : ",regex)
        return headers, regex

    
    def log_to_dataframe(self, log_file, regex, headers, logformat):
        log_messages = []
        linecount = 0
        try:
            for line in log_file:
                    # print("Regex : ",regex)
                    # print("Line = ",line)
                    match = regex.search(line)
                    # print("Match = ",match)
                    message = [match.group(header) for header in headers]
                    # print("Message = ",message)
                    log_messages.append(message)
                    linecount += 1
                    # print("-=--------------------------")
        except:
            pass
        logdf = pd.DataFrame(log_messages, columns=headers)
        logdf.insert(0, 'LineId', None)
        logdf['LineId'] = [i + 1 for i in range(linecount)]
        logdf.to_csv(self.log_name+"_structured.csv", sep=',', encoding='utf-8', index=False)
        return logdf



