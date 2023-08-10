docker build -t "rowanf/weball" .
docker tag web8 rowanf/weball
docker push rowanf/weball
docker run  --restart=unless-stopped --name weball  -p 12000:4200 rowanf/weball
