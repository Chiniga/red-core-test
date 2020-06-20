# Red Core Blog API Test

This is a Blog API designed to provide the necessary data to the frontend

# Features!

  - Fetch all Blog posts
  - Fetch Blog post by ID
  - Fetch Filtered Blog posts
  - Add Blog post
  - Update Blog post by ID
  - Delete Blog post by ID

You can also:
  - Upload multiple images to one Blog post

### Tech

This API uses a number of open source projects to work properly:

* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Multer] - middleware for handling file uploads
* [Mongoose] - easy access to mongodb

### Docker
The Test API is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd redcoretest
docker build -t <username>/node-web-app .
```
This will create the Blog API image and pull in the necessary dependencies.

Once done, run the Docker compose:

```sh
docker-compose up
```

Verify the deployment via Postman.

## Sources
Project code for tutorial on integrating MongoDB into Node.js application using Mongoose: https://www.digitalocean.com/community/tutorials/how-to-integrate-mongodb-with-your-node-application
