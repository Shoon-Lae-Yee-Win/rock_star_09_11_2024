const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    try {
        await prisma.post.deleteMany({
            where: {userId: 1},
        });

        const user = await prisma.user.delete({
            where: {id: 1},
        });
    
        console.log(user);
    } catch(e) {
        console.log(e);
    }
}

main();