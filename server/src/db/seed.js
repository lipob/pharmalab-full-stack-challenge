const db = require('./db.js');
const { Product, ProductType } = require('./models');

async function seed() {
  await db.sync({ force: true });
  console.log('DB Connected');

  // adding product types
  const mockProductTypes = await Promise.all([
    ,
    ProductType.create({
      name: 'Aerosol'
    }),
    ProductType.create({
      name: 'Crema'
    }),
    ProductType.create({
      name: 'Colirio'
    }),
    ProductType.create({
      name: 'Cápsulas'
    }),
    ProductType.create({
      name: 'Jarabe'
    }),
    ProductType.create({
      name: 'Polvo en suspensión'
    }),
  ])

  console.log('Product types seeded');

  // adding products
  const mockProducts = await Promise.all([
    ,
    Product.create({
      code: 12345,
      name: 'Amoxol',
      drug: 'amoxicilina',
      productTypeId: 1
    }),
    Product.create({
      code: 54321,
      name: 'Notos',
      drug: 'notoxina',
      productTypeId: 1
    }),
    Product.create({
      code: 45678,
      name: 'Dermafix',
      drug: 'acenocumarol',
      productTypeId: 2
    }),
    Product.create({
      code: 98765,
      name: 'Carvedilol',
      drug: 'carvediloloide',
      productTypeId: 3
    }),
    Product.create({
      code: 54632,
      name: 'Clindamicina',
      drug: 'clinda amixilina',
      productTypeId: 1
    }),
    Product.create({
      code: 85236,
      name: 'Furos',
      drug: 'furosemida',
      productTypeId: 4
    }),
    Product.create({
      code: 14785,
      name: 'Liotironina',
      drug: 'liotironina',
      productTypeId: 4
    }),
    Product.create({
      code: 63254,
      name: 'Micolis',
      drug: 'minociclina',
      productTypeId: 6
    }),
    Product.create({
      code: 52698,
      name: 'Propa',
      drug: 'propafenona',
      productTypeId: 1
    }),
    Product.create({
      code: 74158,
      name: 'Tramadolina',
      drug: 'tramadol',
      productTypeId: 2
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
    console.log('DB Populated. Closing DB connection');
    await db.close();
    console.log('DB connection is closed');
  }
}

if (module === require.main) {
  runSeed();
}