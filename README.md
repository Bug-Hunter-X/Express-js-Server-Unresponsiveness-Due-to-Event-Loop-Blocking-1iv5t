# Express.js Server Unresponsiveness

This repository demonstrates a common issue in Express.js applications: unresponsiveness due to blocking the event loop within request handlers.  A solution is also provided that illustrates how to avoid this issue by utilizing asynchronous operations.

## Problem

The `bug.js` file contains an Express.js server that simulates a long-running synchronous operation within a request handler.  Under significant load, this can lead to the server becoming unresponsive as the event loop is blocked. 

## Solution

The `bugSolution.js` file demonstrates how to address this by using asynchronous functions or promises, ensuring the event loop remains free to handle other requests even during long-running operations.