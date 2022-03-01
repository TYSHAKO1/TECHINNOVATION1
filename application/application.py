import os, csv
import pandas as pd

def calculateGPA():
    gradescale_dir = os.getcwd() + '/application_resources/gradescale.csv'
    #TODO: GET CSV FROM USER INPUT
    gradescale = [list(row) for row in pd.read_csv(gradescale_dir).values]
    grades = [list(row) for row in pd.read_csv(grades_dir).values]

    for i in range(len(gradescale)):
        for j in range(len(gradescale[i])):
            if i == 0 or j == 0:
                pass
            else:
                gradescale[i][j] = float(gradescale[i][j])
    for i in range(len(grades)):
        for j in range(len(grades[i])):
            if j == 1:
                grades[i][j] = float(grades[i][j])
            else:
                pass
    wgp =  0
    uwgp = 0
    credits = 0
    for grade in grades:
        lg = grade[0]
        c = grade[1]
        isWeighted = grade[2]
        credits += c
        if isWeighted:
            wgp += ((gradescale[2][gradescale[0].index(lg)])*c)
            uwgp += ((gradescale[1][gradescale[0].index(lg)])*c)
            continue
        wgp += ((gradescale[1][gradescale[0].index(lg)])*c)
        uwgp += ((gradescale[1][gradescale[0].index(lg)])*c)




    uwgpa = round((uwgp/credits),3)
    wgpa = round((wgp/credits),3)
