function cal_iva_total(subtotal) {
  const iva = 0.19;
  const iva_sub = subtotal * iva;
  const total = subtotal + iva_sub;
  return total;
}
function cal_produ() {
  const cant_produ = +(prompt("Ingrese la cantidad de productos:"));
  let subtotal = 0;
  for (let i = 1; i <= cant_produ; i++) {
    const val_produ = +(prompt(`Ingrese el valor del producto:`));
    subtotal += val_produ;
  }
  const totalConIVA = cal_iva_total(subtotal);
  alert(`SUBTOTAL:$${subtotal}\nIVA:$${(subtotal * 0.19)}\nTOTAL:$${totalConIVA}`);
}
cal_produ();