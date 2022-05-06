import { PrismaClient } from "@prisma/client";

// Salva todas as requisições feitas no banco de dados dentro do log
export const prisma = new PrismaClient({
  log: ["query"],
});
