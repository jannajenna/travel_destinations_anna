# Use a basic nginx image to serve the frontend files
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Remove the default nginx content
RUN rm -rf ./*

# Copy all frontend files into the nginx directory
COPY . .

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]