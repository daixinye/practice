#!/bin/bash
echo 'www directory path :'
read path
cd $path

python -m SimpleHTTPServer $port