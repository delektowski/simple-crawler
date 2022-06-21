#!/bin/bash

owocki=$(cat <cypress/integration/plantTataBonifacego.spec.js | grep "\Plant\b" | cut -c 18-30)

for i in {1..2000}; do
  npx cypress run --spec cypress/integration/plantTataBonifacego.spec.js
  dtplant=$(date '+%d/%m/%Y %H:%M:%S')
  echo "Posadzono $owocki $i razy. Data: $dtplant"
  sleep 2850
  dtharvest=$(date '+%d/%m/%Y %H:%M:%S')
  npx cypress run --spec cypress/integration/harvestTatabonifacego.spec.js
  echo "Zebrano $owocki $i razy. Data: $dtharvest"
done
