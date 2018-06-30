const defaultBanks = {
  1: 'SBER',
  2: 'ALPHA',
  3: 'TINK',
  4: 'RIAF',
  5: 'POCHT',
};

const defaultTransactions = [
  {id: 1, amount: 100, bankId: 1},
  {id: 2, amount: 200, bankId: 2},
];

let operationId = 3;

const bankService = {
  async getBanks() {
    return defaultBanks;
  },

  async getTransactions() {
    const transactions = JSON.parse(localStorage.getItem('transactions') || defaultTransactions);
    return transactions;
  },

  async addTransaction(details) {
    const transactions = JSON.parse(localStorage.getItem('transactions') || defaultTransactions);
    localStorage.setItem('transactions', JSON.stringify([
      ...transactions,
      {
        id: operationId++,
        ...details,
      }
    ]));
  },

  async deleteTransaction(id) {
    const transactions = JSON.parse(localStorage.getItem('transactions') || defaultTransactions);
    localStorage.setItem('transactions', JSON.stringify(
      transactions.filter(operation => operation.id !== id)
    ));
  },
};

export default bankService;