from flask import Flask, jsonify, request;
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
import pickle;
import os
import re
import numpy as np
import pandas as pd
import hashlib
from collections import OrderedDict
import itertools as it
from file_titles import titles
import json
from LogParser import *

app = Flask(__name__)
api=Api(app)
CORS(app)

@app.route("/", methods=['GET'])

def first():
    return jsonify({"Welcome": "Here"})

@app.route("/readFile/", methods = ['POST'])
def ReadFile():
    global resList
    text = request.data

    ff = text.decode('utf-8').split(",")
    file_name = ''.join(ff[0][4:]).replace("\"",'').strip()
    file_format = ff[1].replace("\\n",'').replace("\"",'').strip()


    file_text = ''.join(ff[2:]).replace("\\r","")
    #print("File_text ---- :",file_text)
    file_text = str(file_text.replace("\\\\n","/n").replace("\\n","\n").replace("\"",'').strip())
    file_text1 = file_text.strip().split("\n")
    del file_text1[len(file_text1)-1]

    #print("File_text11 ---- :",file_text1)

    log_format = titles[file_format]['log_format']
    print(log_format)
    if(file_format=='Others'):
        rex =  titles[file_format]['regex'][0]
        mainList = []
        for line in file_text1:
            l = re.findall(rex, line)
            size = len(log_format)
            size1 = len(l)
            if(size1<size):
                pass
            else:
                l[size-1] = ' '.join(l[size-1:])
                del l[size:]
            
            d = OrderedDict()
            for k ,v in it.zip_longest(log_format,l):
                d[k] = v
            mainList.append(d)
            resList = mainList

            df = pd.DataFrame(mainList, columns=log_format)
            df.to_csv(file_name+"_structured.csv", sep=',', encoding='utf-8', index=False)

        return jsonify(mainList,log_format,file_name)
    else:
        print("----")
        parser = LogParser(log_format, file_format)
        resList = parser.parse(file_text1)
        #rex =  titles[file_format]['regex'][0]
        col = list(resList.columns.values)
        return jsonify(resList.to_dict('records'),col, file_name)


@app.route("/search", methods = ['GET'])
def SearchFile():
    text = request.args
    print (text) # For debugging    
    key = text['key1']
    col = text['key2']

    print()
    df  = pd.DataFrame(resList)
    #print(df.head(5))
    data = df.loc[df[col] == key]
    #print(dict(data))
    return jsonify(data.to_dict('records'))


@app.route("/sort", methods = ['GET'])
def SortFile():
    text = request.args
    print (text) # For debugging    
    col = text['key1']

    df  = pd.DataFrame(resList)
    data = df.sort_values(by=[col])
    #print(dict(data))
    return jsonify(data.to_dict('records'))


@app.route("/visualize", methods = ['GET'])
def VisualizeFile():

    df  = pd.DataFrame(resList)
    #print(df.apply(pd.value_counts))
    #print (df.groupby['category'].size()
    
    df = df.to_dict()
    res = []
    res.append(list(df))
    res.append(df)
    return jsonify(res)#df.to_dict('index'))


@app.route("/pieChart", methods = ['GET'])
def PieChart():
    text = request.args
    print (text) # For debugging    
    col = text['key1']
    
    df  = pd.DataFrame(resList)
    data = dict(pd.DataFrame.from_dict(df[col].value_counts())[col])
    d = dict()
    print(data.items())
    for key, val in data.items():
        d[key] = int(val)
    print(d)
    l1 = []
    l1.append(list(d.keys()))
    l1.append(list(d.values()))
    #pd.Series(d).to_json(orient='values')
    return jsonify(l1)
    #return json.dumps(d), 200, 'application/json'


if __name__=='__main__':
    app.run(debug=True)
