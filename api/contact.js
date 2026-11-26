const MAX_MESSAGE_LENGTH = 5000;

function getString(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const body = req.body ?? {};
  const name = getString(body.name);
  const email = getString(body.email);
  const projectType = getString(body.projectType);
  const budget = getString(body.budget);
  const message = getString(body.message);

  if (!name || !email || !projectType || !message) {
    return res.status(400).json({
      success: false,
      error: 'Name, email, project type, and message are required.',
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address.',
    });
  }

  if (message.length < 20) {
    return res.status(400).json({
      success: false,
      error: 'Message must be at least 20 characters long.',
    });
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({
      success: false,
      error: 'Message is too long.',
    });
  }

  return res.status(200).json({
    success: true,
    message: 'Contact request received.',
    data: {
      name,
      email,
      projectType,
      budget,
      message,
    },
  });
}
