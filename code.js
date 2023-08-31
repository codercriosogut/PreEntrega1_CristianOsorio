function calcularIvaTotal(subtotal) {
  const iva = 0.19;
  const iva_sub = subtotal * iva;
  const total = subtotal + iva_sub;
  return total;
}
function cal_produ() {
  const cantProdu = +(prompt("Ingrese la cantidad de productos:"));
  let subtotal = 0;
  for (let i = 1; i <= cantProdu; i++) {
    const val_produ = +(prompt("Ingrese el valor del producto:  "+i));
    subtotal += val_produ;
  }
  const totalConIVA = calcularIvaTotal(subtotal);
  alert('\nFactura' + '\nSUBTOTAL: $' + subtotal + '\nIVA 19%: $' + (subtotal * 0.19) + '\nTOTAL: $' + totalConIVA);
}
cal_produ();