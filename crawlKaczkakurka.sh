#!/bin/bash

for j in {1..200}; do
  npx cypress run --spec cypress/integration/plantKaczkakurka.spec.js
  dtplant=$(date '+%d/%m/%Y %H:%M:%S')
  echo "Posadzono owocki $j razy. Data: $dtplant"
  sleep 20600
  npx cypress run --spec cypress/integration/harvestKaczkakurka.spec.js
  dtharvest=$(date '+%d/%m/%Y %H:%M:%S')
  echo "Zebrano owocki $j razy. Data: $dtharvest"
done
