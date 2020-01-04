#!/bin/bash

x=1;
while [ $x -le 200 ] ; do
npx cypress run --spec cypress/integration/plantBonifacy.spec.js && sleep 600 && npx cypress run --spec cypress/integration/harvestBonifacy.spec.js && echo "Zebrane owocki Bonifacy $x razy."
x=$[x + 1]
done &

y=1;
while [ $y -le 200 ] ; do
npx cypress run --spec cypress/integration/plantKaczkakurka.spec.js && sleep 2400 && npx cypress run --spec cypress/integration/harvestKaczkakurka.spec.js && echo "Zebrane owocki Kaczkakurka $y razy."
y=$[y + 1]
done &