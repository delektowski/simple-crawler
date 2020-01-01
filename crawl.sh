#!/bin/bash

for i in {1..200}
do
   npx cypress run --spec cypress/integration/plant.spec.js
   sleep 3000
   npx cypress run --spec cypress/integration/harvest.spec.js
   echo "Zebrane owocki $i raz. Bonifacy..."
done