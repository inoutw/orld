/^1[3|4|5|7|8|9]\d{9}$/.test("13245645646"); // true

// Format money
const formatMoney = (money) => {
  return money.replace(
    new RegExp(`(?!^)(?=(\\d{3})+${money.includes(".") ? "\\." : "$"})`, "g"),
    ","
  );
};

formatMoney("123456789"); // '123,456,789'
formatMoney("123456789.123"); // '123,456,789.123'
formatMoney("123"); // '123'

const formatMoney1 = (money) => {
  return money.toLocaleString();
};

formatMoney1(123456789); // '123,456,789'
formatMoney1(123456789.123); // '123,456,789.123'
formatMoney1(123); // '123'
