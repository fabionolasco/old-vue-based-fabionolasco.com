cd / && mkdir installs && cd /installs
yum update -y
yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_6.x | bash -
yum install -y nodejs
yum install -y nginx
firewall-cmd --permanent --zone=public --add-service=http
firewall-cmd --permanent --zone=public --add-service=https
firewall-cmd --zone=public --add-port=80/tcp
firewall-cmd --zone=public --add-port=443/tcp
ln -s /usr/share/nginx/html /www
systemctl enable nginx
systemctl start nginx

# $ sudo vi /etc/nginx/conf.d/gzip.conf
# Files contents:
##
# `gzip` compresstion enableing Settings
#
#
# gzip on;
# gzip_disable "msie6";
# gzip_vary on;
# gzip_proxied any;
# gzip_comp_level 6;
# gzip_http_version 1.1;
# gzip_min_length 256;
# gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript application/vnd.ms-fontobject application/x-font-ttf font/opentype image/svg+xml image/x-icon;

# systemctl restart nginx

# ----------------------------------

# vi /etc/nginx/nginx.conf

# # Expire rules for static content

# # cache.appcache, your document html and data
# location ~* \.(?:manifest|appcache|html?|xml|json)$ {
#   expires -1;
#   # access_log logs/static.log; # I don't usually include a static log
# }

# # Feed
# location ~* \.(?:rss|atom)$ {
#   expires 1h;
#   add_header Cache-Control "public";
# }

# # Media: images, icons, video, audio, HTC
# location ~* \.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc)$ {
#   expires 1M;
#   access_log off;
#   add_header Cache-Control "public";
# }

# # CSS and Javascript
# location ~* \.(?:css|js)$ {
#   expires 1y;
#   access_log off;
#   add_header Cache-Control "public";
# }

# systemctl restart nginx

# HTTPS
# Follow instructions from here:
# https://certbot.eff.org/#centosrhel7-nginx
# this only works if domain is set (not just ip)


# 0 0 */3 * * /crons/renewcert.sh

##!/bin/sh
#certbot renew

# firewall-cmd --zone=public --add-port=3000/tcp
