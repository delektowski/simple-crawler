#!/bin/bash

owocki=$(cat <cypress/integration/plantGuzinka.spec.js | grep "\Plant\b" | cut -c 18-30)

for j in {1..2000}; do
  npx cypress run --spec cypress/integration/plantGuzinka2.spec.js
  dtplant=$(date '+%d/%m/%Y %H:%M:%S')
  echo "Posadzono $owocki $j razy. Data: $dtplant"
   sleep 3132
  npx cypress run --spec cypress/integration/harvestGuzinka2.spec.js
  dtharvest=$(date '+%d/%m/%Y %H:%M:%S')
  echo "Zebrano $owocki $j razy. Data: $dtharvest"
done
