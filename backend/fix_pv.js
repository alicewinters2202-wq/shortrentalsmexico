const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'availability.json');
let av = {};
try { av = JSON.parse(fs.readFileSync(filePath, 'utf-8')); } catch {}

const pvIds = Array.from({length: 22}, (_, i) => i + 87);

pvIds.forEach((id, i) => {
  const occupied = i < 18;
  if (occupied) {
    const daysOut = 15 + Math.floor(Math.random() * 195);
    const daysIn  = 15 + Math.floor(Math.random() * 240);
    const avFrom = new Date(); avFrom.setDate(avFrom.getDate() + daysOut);
    const since  = new Date(); since.setDate(since.getDate() - daysIn);
    av[String(id)] = {
      available: false,
      availableFrom: avFrom.toISOString().split('T')[0],
      occupiedSince: since.toISOString().split('T')[0],
      minStay: 10
    };
  } else {
    av[String(id)] = { available: true, availableFrom: null, minStay: 10 };
  }
});

fs.writeFileSync(filePath, JSON.stringify(av, null, 2));
console.log('Listo! Fechas variadas aplicadas a Puerto Vallarta.');
