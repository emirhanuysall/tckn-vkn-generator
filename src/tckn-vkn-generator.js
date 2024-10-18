// TCKN üretme fonksiyonu
export function generateTCKN() {
  let tckn = '';
  for (let i = 0; i < 9; i++) {
      tckn += Math.floor(Math.random() * 10);
  }
  tckn += calculateChecksum(tckn);
  return tckn;
}

// VKN üretme fonksiyonu
export function generateVKN() {
  let vkn = '';
  for (let i = 0; i < 9; i++) {
      vkn += Math.floor(Math.random() * 10);
  }
  return vkn;
}

// TCKN için kontrol toplamı hesaplayan fonksiyon
function calculateChecksum(tckn) {
  let sumOdd = 0, sumEven = 0, total = 0;

  for (let i = 0; i < 9; i++) {
      const num = parseInt(tckn[i]);
      if (i % 2 === 0) sumOdd += num;
      else sumEven += num;
  }

  const tenthDigit = ((sumOdd * 7) - sumEven) % 10;
  total = sumOdd + sumEven + tenthDigit;

  const eleventhDigit = total % 10;
  return `${tenthDigit}${eleventhDigit}`;
}
