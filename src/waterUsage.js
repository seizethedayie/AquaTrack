
function getTotalUsage(data) {
  return data.reduce((total, item) => total + item.usage, 0);
}

function getAverageUsage(data) {
  if (data.length === 0) {
    return 0;
  }

  return getTotalUsage(data) / data.length;
}

function addUsage(data, newUsage) {
  if (!newUsage.date || !newUsage.date.trim()) {
    throw new Error('Tanggal penggunaan wajib diisi.');
  }

  if (
    typeof newUsage.usage !== 'number' ||
    !Number.isFinite(newUsage.usage) ||
    newUsage.usage <= 0
  ) {
    throw new Error('Penggunaan air harus berupa angka positif.');
  }

  const newId = data.length > 0
    ? Math.max(...data.map(item => item.id)) + 1
    : 1;

  const record = {
    id: newId,
    date: newUsage.date,
    usage: newUsage.usage
  };

  data.push(record);

  return record;
}

module.exports = {
  getTotalUsage,
  getAverageUsage,
  addUsage
};
