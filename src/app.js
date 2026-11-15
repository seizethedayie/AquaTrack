
const fs = require('fs');
const path = require('path');

const {
  getTotalUsage,
  getAverageUsage,
  addUsage
} = require('./waterUsage');

const dataPath = path.join(__dirname, '../data/waterUsage.json');

function readData() {
  const file = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(file);
}

function saveData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

function showDashboard() {
  const data = readData();

  console.log('\n===== AQUATRACK =====');
  console.log('Water Usage Monitoring System');
  console.log('======================');

  console.log('Total Penggunaan:', getTotalUsage(data), 'Liter');
  console.log('Rata-rata Penggunaan:', getAverageUsage(data), 'Liter');

  console.log('\nRiwayat Penggunaan Air:');

  data.forEach(item => {
    console.log(
      `${item.id}. ${item.date} - ${item.usage} Liter`
    );
  });

  console.log('======================\n');
}

function addNewUsage(date, usage) {
  const data = readData();

  const newRecord = addUsage(data, {
    date,
    usage: Number(usage)
  });

  saveData(data);

  console.log('Data penggunaan berhasil ditambahkan!');
  console.log(newRecord);
}

if (require.main === module) {
  const command = process.argv[2];

  if (command === 'add') {
    const date = process.argv[3];
    const usage = Number(process.argv[4]);

    try {
      addNewUsage(date, usage);
    } catch (error) {
      console.error('Error:', error.message);
      process.exitCode = 1;
    }
  } else {
    showDashboard();
  }
}

module.exports = {
  readData,
  saveData,
  showDashboard,
  addNewUsage
};
