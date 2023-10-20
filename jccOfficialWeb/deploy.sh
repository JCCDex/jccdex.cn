#!/bin/bash

cd `dirname $0`

npm run build

# 拷贝到服务器
rsync -avz -e 'ssh -p 6422' dist/ front@58.243.201.56:~/frontcode/jcc_officialWeb/dist

# 测试环境： https://whwww.jccdex.cn:8443
# 正式环境： https://jccdex.cn/