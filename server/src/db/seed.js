const db = require('./db.js');
const { Product } = require('./models');

async function seed() {
  await db.sync({ force: true });
  console.log('DB Connected');

  const mockProducts = await Promise.all([
    ,
    Product.create({
      code: 12345,
      name: 'Amoxol',
      drug: 'amoxicilina',
      type: 'Cápsulas',
      stock: true
    }),
    Product.create({
      code: 54321,
      name: 'Notos',
      drug: 'notoxina',
      type: 'Jarabe',
      stock: true
    }),
    Product.create({
      code: 45678,
      name: 'Dermafix',
      drug: 'acenocumarol',
      type: 'Colirio',
      stock: true
    }),
    Product.create({
      code: 98765,
      name: 'Carvedilol',
      drug: 'carvediloloide',
      type: 'Polvo en suspensión',
      stock: true
    }),
    Product.create({
      code: 54632,
      name: 'Clindamicina',
      drug: 'clinda amixilina',
      type: 'Cápsulas',
      stock: false
    }),
    Product.create({
      code: 85236,
      name: 'Furos',
      drug: 'furosemida',
      type: 'Cápsulas',
      stock: true
    }),
    Product.create({
      code: 14785,
      name: 'Liotironina',
      drug: 'liotironina',
      type: 'Aerosol',
      stock: true
    }),
    Product.create({
      code: 63254,
      name: 'Micolis',
      drug: 'minociclina',
      type: 'Crema',
      stock: true
    }),
    Product.create({
      code: 52698,
      name: 'Propa',
      drug: 'propafenona',
      type: 'Colirio',
      stock: false
    }),
    Product.create({
      code: 74158,
      name: 'Tramadolina',
      drug: 'tramadol',
      type: 'Cápsulas',
      stock: true
    })
  ]);

  console.log('Products seeded');
}

async function runSeed() {
  console.log('Seeding...');
  try {
    await seed();
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  } finally {
    console.log('Closing DB connection');
    await db.close();
    console.log('DB connection is closed');
  }
}

if (module === require.main) {
  runSeed();
}