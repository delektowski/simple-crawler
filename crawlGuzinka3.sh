#!/bin/bash

owocki=$(cat <cypress/integration/plantGuzinka3.spec.js | grep "\Plant\b" | cut -c 18-30)

for j in {1..2000}; do
  npx cypress run --spec cypress/integration/plantGuzinka3.spec.js
  dtplant=$(date '+%d/%m/%Y %H:%M:%S')
  echo "Posadzono $owocki $j razy. Data: $dtplant"
   sleep 21924
  npx cypress run --spec cypress/integration/harvestGuzinka3.spec.js
  dtharvest=$(date '+%d/%m/%Y %H:%M:%S')
  echo "Zebrano $owocki $j razy. Data: $dtharvest"
done
