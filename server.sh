#!/bin/bash
echo 'www directory path :'
read path
cd $path

echo 'port :'
read port

python -m SimpleHTTPServer $port