#!/bin/bash

owocki=$(cat <cypress/integration/plantPlantacjat.spec.js | grep "\Plant\b" | cut -c 18-30)

for i in {1..2000}; do
  npx cypress run --spec cypress/integration/plantPlantacjat.spec.js
  dtplant=$(date '+%d/%m/%Y %H:%M:%S')
  echo "Posadzono $owocki $i razy. Data: $dtplant"
  sleep 2100
  dtharvest=$(date '+%d/%m/%Y %H:%M:%S')
  npx cypress run --spec cypress/integration/harvestPlantacjat.spec.js
  echo "Zebrano $owocki $i razy. Data: $dtharvest"
done
