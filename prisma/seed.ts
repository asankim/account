import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const acc1 = await prisma.account.upsert({
    where: { accountName: 'Account1' },
    update: {},
    create: {
      accountName: 'Account1',
      isActive: true,
    },
  });
  const acc2 = await prisma.account.upsert({
    where: { accountName: 'Account2' },
    update: {},
    create: {
      accountName: 'Account2',
      isActive: true,
    },
  });
  console.log({ acc1, acc2 });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
