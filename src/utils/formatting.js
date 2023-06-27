export const formatProjectNumber = (num) => {
    switch (true) {
      case num < 10:
        return '00' + String(num);
      case 10 <= num && num < 100:
        return '0' + num
      default:
        return num
    }
  }