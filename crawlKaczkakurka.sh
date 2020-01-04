#!/bin/bash

for j in {1..200}
do
   npx cypress run --spec cypress/integration/plantKaczkakurka.spec.js
   sleep 20600
   npx cypress run --spec cypress/integration/harvestKaczkakurka.spec.js
   echo "Zebrano owocki $j razy."
done
