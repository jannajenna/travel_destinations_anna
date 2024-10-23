# Use a basic nginx image to serve the frontend files
FROM nginx:alpine

# Copy static files into the Nginx folder
COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY images/ /usr/share/nginx/html/images/
COPY javascripts/ /usr/share/nginx/html/javascripts/

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]