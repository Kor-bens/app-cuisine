-- DropIndex
DROP INDEX `Ingredient_recetteId_fkey` ON `ingredient`;

-- DropIndex
DROP INDEX `Instruction_recetteId_fkey` ON `instruction`;

-- AddForeignKey
ALTER TABLE `Ingredient` ADD CONSTRAINT `Ingredient_recetteId_fkey` FOREIGN KEY (`recetteId`) REFERENCES `Recette`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Instruction` ADD CONSTRAINT `Instruction_recetteId_fkey` FOREIGN KEY (`recetteId`) REFERENCES `Recette`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
