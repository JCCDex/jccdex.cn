#!/bin/bash

cd `dirname $0`

npm run build

# 拷贝到服务器
rsync -avz -e 'ssh -p 6422' dist/ front@58.243.201.56:~/frontcode/jcc_officialWeb/dist

# 测试环境： https://whwww.jccdex.cn:8443
# 正式环境： https://jccdex.cn/

# 更新正式环境 会将jcc_documents正式环境一起同步，请确定jcc_documents项目已经上传了最新代码并测试没问题
# 查看更新记录： https://jccdex.cn/health.json
# 更新命令： param='web=www-jccdex-cn';job="front-code-sync" ;token="115574c30a3084ab6aac18e1b005842a68";curl -X POST "https://whjenkins.jccdex.cn:8443/job/${job}/buildWithParameters?${param}" --user "afd:${token}"