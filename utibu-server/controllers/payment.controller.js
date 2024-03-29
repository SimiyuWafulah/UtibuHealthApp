import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config()

export const initiateMpesaPayment = async (req, res) => {
  try {
    const accessToken = 'YOUR_ACCESS_TOKEN'; // Retrieve access token from your authentication mechanism
    const apiUrl = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest'; // M-Pesa API endpoint URL

    const requestBody = {
      BusinessShortCode: 'BUSINESS_SHORTCODE',
      Password: 'BASE64_ENCODED_PASSWORD',
      Timestamp: 'TIMESTAMP',
      TransactionType: 'CustomerPayBillOnline',
      Amount: req.body.amount,
      PartyA: req.body.phoneNumber,
      PartyB: 'BUSINESS_SHORTCODE',
      PhoneNumber: req.body.phoneNumber,
      CallBackURL: getCallbackUrl(),
      AccountReference: 'Test',
      TransactionDesc: 'Test'
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    const responseData = await response.json();
    res.json(responseData);
  } catch (error) {
    console.error('Error initiating M-Pesa payment:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


const getCallbackUrl = () => {
    const callbackUrl = process.env.CALLBACK_URL;
    if (!callbackUrl) {
      throw new Error('Callback URL not configured');
    }
    return callbackUrl;
  };