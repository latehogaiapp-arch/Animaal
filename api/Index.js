// api/index.js

export default function handler(req, res) {
  // Enable CORS (Cross-Origin Resource Sharing) so your frontend can communicate with it
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // GET Request: To check if the API is running successfully
  if (req.method === 'GET') {
    res.status(200).json({
      status: 'success',
      app_name: 'Premium VIP App',
      message: 'API is running smoothly!',
      timestamp: new Date().toISOString()
    });
  } 
  // POST Request: To receive Payment Gateway Webhooks in the future
  else if (req.method === 'POST') {
    const webhookData = req.body;
    console.log("Payment Webhook Data Received:", webhookData);
    
    // Later, you can add Firebase Admin SDK logic here to securely update the user's balance upon successful payment
    
    res.status(200).json({ 
      status: 'success', 
      message: 'Webhook received successfully' 
    });
  } 
  // Block any other invalid request methods
  else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
