export function ageCalculator(ano, mes, dia) {
  const hoy = new Date();
  const anoActual = hoy.getFullYear();
  const mesActual = hoy.getMonth() + 1; 
  const diaActual = hoy.getDate();     

  let edad = anoActual - ano;

  if (mesActual < mes || (mesActual === mes && diaActual < dia)) {
    edad--;
  }

  return edad;
}
