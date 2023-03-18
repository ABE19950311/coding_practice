class Obj:
    def __init__(self,value1,value2):  ##__init__がコンストラクタ
            self.key = value1
            self.str = value2

    def getKey(self):
            return self.key

    def getStr(self):
            return self.str

obj = Obj(101,"This is hell.")
print(obj.getKey())
print(obj.getStr())