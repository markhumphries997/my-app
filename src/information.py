import json
import sqlite3 
from os import path
import pandas as pd
from datetime import datetime

with open("information.json") as f:
    information = json.load(f)
df = pd.DataFrame(information)
print(df.head())

db=sqlite3.connect('data.db')
print('Connected to database')

db.execute('''CREATE TABLE INFORMATION
         (TYPE           TEXT    NOT NULL,
         TITLE         TEXT    NOT NULL,
         POSITION       INT NOT NULL);''')

for i in range(len(df.values)):
    moredata = df.values[i]


    db.execute("INSERT INTO 'INFORMATION' ('TYPE', 'TITLE', 'POSITION') VALUES ('"+moredata[0]+"','"+moredata[1]+"','"+str(moredata[2])+"')")
sql = "SELECT * FROM 'INFORMATION'"
db.execute(sql)
db.commit()

# Fetch all the records and use a for loop to print them one line at a time
result = db.execute(sql)
print('Appended information.json to data.db')