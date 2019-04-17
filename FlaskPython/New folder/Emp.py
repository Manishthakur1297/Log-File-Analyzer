from InvalidAgeException import *;
from numpy import *;
import numpy as np;

class Emp:
    count = 0
    
    def __init__(self, salary, designation):
        self.id = int(input("Enter Employee Id : "))
        self.name = input("Enter Name : ")
        try:
            self.age = int(input("Enter Age : "))
            if(self.age<21 or self.age>60):
                raise InvalidAgeException
        except (InvalidAgeException, ValueError):
            print("Enter number only between [21-60].....")
            self.age = InvalidAgeException.readAge()
        self.salary = salary
        self.designation = designation
        # f = open("employee.txt", "a")
        # f.write(self.name+"|"+str(self.age)+"|"+str(self.salary)+"|"+self.designation+"\n")
        # f.close()
        Emp.count+=1


    @staticmethod
    def display():
        f = open("employee.txt", "r")
        for line in f:
            arr = line.split("|")
            print("-"*30)
            print("Name : "+arr[0]+"\nAge : "+arr[1] + "\nSalary : "+arr[2] + "\nDesignation : "+arr[3])
            print("-"*30)
        f.close()


class Clerk(Emp):
    def __init__(self):
        super().__init__(8000,"Clerk")

    def raiseSalary(self):
        self.salary = self.salary+2000


class Programmer(Emp):
    def __init__(self):
        super().__init__(25000,"Programmer")
        
    def raiseSalary(self):
        self.salary = self.salary+5000

class Manager(Emp):
    def __init__(self):
        super().__init__(80000,"Manager")

    def raiseSalary(self):
        self.salary = self.salary+10000


class DuckType:
    def raiseAllSalary(obj):
        obj.raiseSalary()