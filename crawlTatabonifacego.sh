#!/bin/bash

for i in {1..200}
do
   npx cypress run --spec cypress/integration/plantTataBonifacego.spec.js
   dtplant=$(date '+%d/%m/%Y %H:%M:%S');
   echo "Posadzono owocki $i razy. Data: $dtplant"
   sleep 600
   dtharvest=$(date '+%d/%m/%Y %H:%M:%S');
   npx cypress run --spec cypress/integration/harvestTatabonifacego.spec.js
   echo "Zebrano owocki $i razy. Data: $dtharvest"
done
