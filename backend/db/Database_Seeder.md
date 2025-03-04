# Database Seeder

This directory contains the `seed.js` script used to seed the MongoDB database with initial data.

## Prerequisites

- Node.js installed
- MongoDB connection details in the `.env` file located in the `backend` directory

## Usage

1. Ensure you have the necessary dependencies installed. If not, run:

   ```sh
   npm install
   ```

2. Make sure your MongoDB server is running and the connection details are correctly specified in the `.env` file:

   ```
   MONGO_URI=mongodb://your_mongo_uri_here
   ```

3. Run the `seed.js` script to seed the database:

   ```sh
   node seed.js
   ```

   This script will:
   - Connect to the MongoDB database using the connection details from the `.env` file.
   - Check for existing posts with the same title and skip them if they already exist.
   - Insert new posts from the `postsData.js` file.

4. After running the script, you should see logs indicating the status of each post insertion.

## Notes

- The script ensures that no duplicate titles are inserted into the database.
- If an error occurs during the seeding process, the script will log the error and exit.

## Example

```sh
$ node seed.js
MongoDB connected
Post with title "Sell Car" inserted.
Post with title "Buy House" inserted.
Post with title "Rent Apartment" inserted.
...
MongoDB disconnected
```

