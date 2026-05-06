export default async function handler(req, res) {
  // فقط درخواست‌های GET رو قبول کن
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  // یه پیام ساده برگردون
  res.status(200).json({ 
    status: 'ok',
    message: 'XHTTP Relay is running',
    relay_path: process.env.RELAY_PATH || '/api',
    target_domain: process.env.TARGET_DOMAIN || 'not set'
  });
}
