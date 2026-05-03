function generateSerial() {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const serialLength = 20;
  let randomSerial = "";

  for (let i = 0; i < serialLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    randomSerial += chars[randomNumber];
  }

  return randomSerial;
}

// First Refresh
console.log(`${generateSerial()}`); // 9cBcrg3kcWF4GZSlWXAM

// Second Refresh
console.log(`${generateSerial()}`); // vPeu6HXBgiXXj6jpch4P

// Third Refresh
console.log(`${generateSerial()}`); // RQuHFBjCdnp0Ghhp0544