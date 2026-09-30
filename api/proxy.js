export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  try {
    const response = await fetch('https://my.sepay.vn/userapi/transactions/list?limit=20', {
      headers: { 'Authorization': 'Bearer 0OA3FKDFL27IG1PRWCYNLJU64FWOJN7UKXJIRLYZT4GXH3NVDG5M0PXVTVSTVJKQ' }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi kết nối' });
  }
}
