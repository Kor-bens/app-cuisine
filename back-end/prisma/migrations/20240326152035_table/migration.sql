-- DropIndex
DROP INDEX `Ingredient_recetteId_fkey` ON `ingredient`;

-- DropIndex
DROP INDEX `Instruction_recetteId_fkey` ON `instruction`;

-- DropIndex
DROP INDEX `Recette_categorieId_fkey` ON `recette`;

-- DropIndex
DROP INDEX `Recette_userId_fkey` ON `recette`;

-- AddForeignKey
ALTER TABLE `Recette` ADD CONSTRAINT `Recette_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recette` ADD CONSTRAINT `Recette_categorieId_fkey` FOREIGN KEY (`categorieId`) REFERENCES `Categorie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ingredient` ADD CONSTRAINT `Ingredient_recetteId_fkey` FOREIGN KEY (`recetteId`) REFERENCES `Recette`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Instruction` ADD CONSTRAINT `Instruction_recetteId_fkey` FOREIGN KEY (`recetteId`) REFERENCES `Recette`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
