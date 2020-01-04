#!/bin/bash
x=1;
while [ $x -le 4 ] ; do
echo "plenting kokos and waiting 5 sec" && sleep 4 && echo "harvesting kokos" $x
x=$[x + 1]
done &

y=1;
while [ $y -le 4 ] ; do
echo "plenting huhu and waiting 3 sec" && sleep 2 && echo "harvesting huhu" $y
y=$[y + 1]
done &

