#!/bin/bash

for j in {1..200}; do
  npx cypress run --spec cypress/integration/plantBonifacy.spec.js
  dtplant=$(date '+%d/%m/%Y %H:%M:%S')
  echo "Posadzono owocki $j razy. Data: $dtplant"
  sleep 575
  npx cypress run --spec cypress/integration/harvestBonifacy.spec.js
  dtharvest=$(date '+%d/%m/%Y %H:%M:%S')
  echo "Zebrano owocki $j razy. Data: $dtharvest"
done
