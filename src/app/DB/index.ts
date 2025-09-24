import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const seedsuperAdmin = async () => {
  // check superAdmin exist
  const issuperAdminExits = await prisma.user.findFirst({
    where: {
      OR: [{ role: "superAdmin" }, { email: "abusayemerfandesigner@gmail.com" }],
    },
  });

  if (!issuperAdminExits) {
    const hashedPassword = await bcrypt.hash("admin", 10); // ✅ hash password

    await prisma.user.create({
      data: {
        email: "abusayemerfandesigner@gmail.com",
        name: "Abu Sayem Erfan",
        password: hashedPassword, // ✅ save hashed password
        role: "superAdmin",
        studentId: "666-56-16",
        bloodGroup: "O_POS",
      },
    });
  }
};

export default seedsuperAdmin;
