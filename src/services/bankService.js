import { Storage, delay } from './helpers';

const defaultBanks = {
  1: 'SBER',
  2: 'ALPHA',
  3: 'TINK',
  4: 'RAIF',
  5: 'POCHT',
};

const defaultTransactions = [
  {id: 1, amount: 100, bankId: 1},
  {id: 2, amount: 200, bankId: 2},
];

const transactionsStorage = new Storage('transactions', defaultTransactions);

let operationId = Math.max(...transactionsStorage.get().map(({ id }) => id)) + 1;

const bankService = {
  async getBanks() {
    await delay();
    return defaultBanks;
  },

  async getTransactions() {
    await delay();
    return transactionsStorage.get();
  },

  async addTransaction(details) {
    transactionsStorage.add({
      id: operationId++,
        ...details,
    });
    await delay();

    return transactionsStorage.get();
  },

  async deleteTransaction(id) {
    transactionsStorage.delete(id);
    await delay();
    return transactionsStorage.get();
  },
};

export default bankService;