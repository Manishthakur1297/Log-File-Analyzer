class InvalidAgeException(Exception):
    def readAge():
        while(True):
            try:
                age = int(input("Enter Age : "))
                if(age<21 or age>60):
                    raise InvalidAgeException
                return age
            except ValueError:
                print("Enter Number only......")
            except InvalidAgeException:
                print("Enter Number between [21-60] only.....")
            except Exception as e:
                print("Error : ",e)
            