class InvalidChoiceException(Exception):
    def readChoice():
        while(True):
            try:
                choice = int(input("Enter Choice : "))
                if(choice<1 or choice>5):
                    raise InvalidChoiceException
                return choice
            except ValueError:
                print("Enter Number only......")
            except InvalidChoiceException:
                print("Enter Number between [1-4] only.....")
            except Exception as e:
                print("Error : ",e)
            