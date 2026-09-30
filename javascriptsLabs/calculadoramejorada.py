#calculadora mejorada
"""
(1)suma 
(2)resta
(3)multi
(4)divi
"""
def  calculadora (numero1 ,numero2,op):
   if op == 1:
    return numero1 + numero2
   elif op == 2:
    return numero1 - numero2
   elif op == 3:
    return numero1 * numero2
   elif op == 4:
    return numero1 / numero2

   else: 
          print  ('Te equivocaste de opcion')

print (calculadora(4343,126,2))     
