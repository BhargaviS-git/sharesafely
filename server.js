const express = require('express');
const multer = require('multer');
const path = require('path');
const { BlobServiceClient } = require('@azure/storage-blob');
require('dotenv').config();

// Create an Express app
const app = express();
const port = 3000;

// Set up Multer for file upload (memory storage for simplicity)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Azure Blob Storage connection setup
const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
const containerName = process.env.CONTAINER_NAME;
const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
const containerClient = blobServiceClient.getContainerClient(containerName);

// Route to upload file
app.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const blobName = req.file.originalname;
  const stream = req.file.buffer;

  try {
    // Create a blob client and upload the file
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const uploadBlobResponse = await blockBlobClient.upload(stream, stream.length);

    res.status(200).send(`File uploaded successfully. Blob URL: ${blockBlobClient.url}`);
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('Error uploading file to Azure Blob Storage.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
