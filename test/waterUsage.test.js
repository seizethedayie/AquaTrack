
const test = require('node:test');
const assert = require('node:assert/strict');

const {
  getTotalUsage,
  getAverageUsage,
  addUsage
} = require('../src/waterUsage');

test('Menghitung total penggunaan air', () => {
  const data = [
    { id: 1, usage: 120 },
    { id: 2, usage: 100 },
    { id: 3, usage: 150 }
  ];

  assert.equal(getTotalUsage(data), 370);
});

test('Menghitung rata-rata penggunaan air', () => {
  const data = [
    { id: 1, usage: 120 },
    { id: 2, usage: 100 },
    { id: 3, usage: 150 }
  ];

  assert.equal(getAverageUsage(data), 370 / 3);
});

test('Rata-rata data kosong adalah nol', () => {
  assert.equal(getAverageUsage([]), 0);
});

test('Menambahkan catatan penggunaan air', () => {
  const data = [];

  const result = addUsage(data, {
    date: '2026-11-15',
    usage: 200
  });

  assert.equal(result.id, 1);
  assert.equal(result.usage, 200);
  assert.equal(data.length, 1);
});

test('Menolak penggunaan air negatif', () => {
  const data = [];

  assert.throws(() => {
    addUsage(data, {
      date: '2026-11-15',
      usage: -50
    });
  });
});

test('Menolak tanggal kosong', () => {
  assert.throws(() => {
    addUsage([], {
      date: '',
      usage: 100
    });
  });
});
