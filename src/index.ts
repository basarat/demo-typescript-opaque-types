export type AccountNumber = number & { _: 'AccountNumber' };
export type AccountBalance = number & { _: 'AccountBalance' };

const makeAccountNumber =
  (accountNumber: number): AccountNumber => accountNumber as AccountNumber;
const makeAccountBalance =
  (accountBalance: number): AccountBalance => accountBalance as AccountBalance;

function setupAccount(accountNumber: AccountNumber, accountBalance: AccountBalance) {
  // ... setup the account
}

let accountNumber: AccountNumber = makeAccountNumber(1337);
let accountBalance: AccountBalance = makeAccountBalance(100);

setupAccount(accountNumber, accountBalance);

// accountNumber = accountBalance;
// accountBalance = accountNumber;
