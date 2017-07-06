#!/bin/sh

# if 的使用

echo "你的年龄？"
read age

# 注意 等号左右两边 不能有空格
myAge=22

# 注意 方括号内部前后 需要有空格
if [ $age == $myAge ]
    then 
        echo "我们岁数一样哦"
    else 
        echo "我们岁数不一样哦" 
fi