FROM nginx:latest

# Install Nginx with SSL module
RUN apt-get update \
    && apt-get install --no-install-recommends --no-install-suggests -y \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Copy and merge your SSL certificate files into the image
COPY ./cinex-certificate.crt /etc/ssl/cinex-certificate.crt
COPY ./private.key /etc/ssl/private.key

# Set permissions for the certificate files
RUN chmod 644 /etc/ssl/cinex-certificate.crt /etc/ssl/private.key

COPY ./default.conf /etc/nginx/conf.d/default.conf