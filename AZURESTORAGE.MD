steps
storage setup
web application Deployment
File upload Logic
unique Link Generation
Secure cedentials 
monitoring and cleanup

Storage setup
1.create a resource group - sharefileRG
2.Create a Storage Account - sharefilestorage123
3.Create a Blob Storage Container - sharefilecontainer
   retrive the connection string to create Container
4.Upload Files to the Blob Container
5.verify the setup
6.Upload Files to the Blob Container
7.Clean Up Resources

web application Deployment
1. Prerequisites
2. Set Up Your Node.js Backend
3. Backend Development (Express Server)
4. Frontend Development (HTML Form)
5. Serve Static Files (Frontend)
6. Run Your Application
7. Final Project Structure

File upload Logic
1. Install the Azure Blob Storage SDK
2. Update HTML Form for File Upload
3. Steps to Configure Your Blob Storage:
    Azure Blob Storage Configuration:
    Container Configuration:
4. Explanation of the Code
   HTML Form:
   JavaScript:
5. Security Considerations
6. Optional: Enhance Security with SAS Tokens
7. Run the Application

unique Link Generation
1. Update Backend (Node.js) to Generate SAS Token
   Step 1: Install Azure Storage SDK (for Node.js)
   Step 2: Backend Logic for SAS Token Generation
2. Frontend Modifications to Handle SAS URL
3. Run the Application
   Start the Backend Server:
   Open the Web Application 
   Upload a file
4. Security Consideration

Secure cedentials
1. Create an Azure Key Vault and Store Credentials
   Step 1: Create an Azure Key Vault
   Step 2: Add Secrets to Azure Key Vault
2. Setup Azure SDK in Your Node.js Application
   Step 1: Install Required Azure SDK Packages
   Step 2: Set up Key Vault Authentication
3. Update Backend Logic to Retrieve Credentials from Azure Key Vault
4. Update .env File to Store Key Vault URL
5. Explanation of Changes:
6. Run the Application
