#!/bin/bash

for i in {1..200}
do
   npx cypress run --spec cypress/integration/plantBonifacy.spec.js
   sleep 575
   npx cypress run --spec cypress/integration/harvestBonifacy.spec.js
   echo "Zebrano owocki $i razy."
done
