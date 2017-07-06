#!/bin/sh

# while.sh

echo "我有一个数字，你要来猜一下吗？1~1000哦"

answer=666
bingo=0

while [ $bingo == 0 ]; do 
    read guess
    if [ $guess == $answer ]
        then
            echo "猜对啦"
            bingo=1
        else
            echo "猜错啦，再猜一次吧？"
    fi
done
