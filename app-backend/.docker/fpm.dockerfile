FROM php:8.1-fpm

WORKDIR /var/www/app-back
RUN docker-php-ext-install pdo pdo_mysql \
    && chown -R www-data:www-data /var/www \
    && chmod 755 /var/www
