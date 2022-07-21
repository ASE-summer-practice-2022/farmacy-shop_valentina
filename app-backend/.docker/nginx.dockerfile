FROM nginx

WORKDIR /var/www/app-back
ADD conf/vhost.conf /etc/nginx/conf.d/default.conf