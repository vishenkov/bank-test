import { Storage } from './helpers';

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

const transactionsStorage = new Storage('transactions', defaultTransactions);

let operationId = 3;

const bankService = {
  async getBanks() {
    return defaultBanks;
  },

  async getTransactions() {
    return transactionsStorage.get();
  },

  async addTransaction(details) {
    transactionsStorage.add({
      id: operationId++,
        ...details,
    });
  },

  async deleteTransaction(id) {
    transactionsStorage.delete(id);
    return transactionsStorage.get();
  },
};

export default bankService;