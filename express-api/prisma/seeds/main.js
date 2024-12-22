const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

async function main() {
    console.log("user seeding started...");
    for(let i=0; i<5; i++) {
        const hash = await bcrypt.hash("password", 10);
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        await prisma.user.create({
            data: {
                name: `${firstName} ${lastName}`,
                username: `${firstName}${lastName[0]}`.toLowerCase(),
                password: hash,
                bio: faker.person.bio(),
            }
        });
    }

    console.log("user seeding done");

    console.log("post seeding started...");

    for(let i=0; i<20; i++) {
        await prisma.post.create({
            data: {
                content: faker.lorem.paragraph(),
                userId: faker.number.int({
                    min: 0,
                    max: 5
                })
            }
        });
    }

    console.log("post seeding done.");
}

main();