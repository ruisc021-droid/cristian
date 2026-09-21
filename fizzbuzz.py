#fizzbuzz
for numero in range (1, 1001):
    if numero %3 == 0 and numero %5 == 0:
        print(numero , "FizzBuzz")
    elif numero %3 == 0:
        print (numero , "Fizz")  
    elif numero %5 == 0:
        print  (numero , "Buzz") 
    else:
        print(numero) 