#!/bin/bash

for i in {1..200}
do
   npx cypress run
   sleep 5
   echo "Welcome $i times"
done