const MAX_MESSAGE_LENGTH = 5000;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_PROJECT_TYPE_LENGTH = 50;
const MAX_BUDGET_LENGTH = 50;
const MIN_MESSAGE_LENGTH = 20;

const ALLOWED_PROJECT_TYPES = new Set([
  'landing-page',
  'business-website',
  'web-app',
  'other',
]);

const ALLOWED_BUDGETS = new Set([
  '',
  'under-75k',
  '75k-150k',
  '150k-250k',
  '250k-plus',
  'not-sure',
]);

function getString(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }

  return req.socket?.remoteAddress || 'unknown';
}

function hasSuspiciousContent(values) {
  const combined = values.join(' ').toLowerCase();

  const urlCount = (combined.match(/https?:\/\//g) || []).length;
  const repeatedLinks = urlCount >= 3;
  const repeatedWords = /(.{1,30})\1{3,}/.test(combined);

  return repeatedLinks || repeatedWords;
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
  const honeypot = getString(body.website);

  // Hidden honeypot field: real visitors should never fill this.
  if (honeypot) {
    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully.',
    });
  }

  if (!name || !email || !projectType || !message) {
    return res.status(400).json({
      success: false,
      error: 'Name, email, project type, and message are required.',
    });
  }

  if (
    name.length > MAX_NAME_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    projectType.length > MAX_PROJECT_TYPE_LENGTH ||
    budget.length > MAX_BUDGET_LENGTH
  ) {
    return res.status(400).json({
      success: false,
      error: 'One or more fields are too long.',
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address.',
    });
  }

  if (!ALLOWED_PROJECT_TYPES.has(projectType)) {
    return res.status(400).json({
      success: false,
      error: 'Please select a valid project type.',
    });
  }

  if (!ALLOWED_BUDGETS.has(budget)) {
    return res.status(400).json({
      success: false,
      error: 'Please select a valid budget range.',
    });
  }

  if (message.length < MIN_MESSAGE_LENGTH) {
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

  if (hasSuspiciousContent([name, email, message])) {
    return res.status(400).json({
      success: false,
      error: 'Please remove repeated or suspicious content and try again.',
    });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!resendApiKey || !toEmail) {
    console.error('Contact email configuration is missing.');
    return res.status(500).json({
      success: false,
      error: 'Email service is not configured yet.',
    });
  }

  const emailHtml = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;max-width:640px;margin:auto">
      <h2 style="margin-bottom:24px">New NasirWorld project inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Project type:</strong> ${escapeHtml(projectType)}</p>
      <p><strong>Budget:</strong> ${escapeHtml(budget || 'Not specified')}</p>
      <hr style="border:0;border-top:1px solid #e5e7eb;margin:24px 0">
      <p><strong>Message</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New project inquiry from ${name}`,
        html: emailHtml,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error('Resend email failed:', resendData);
      return res.status(502).json({
        success: false,
        error: 'We could not send your message right now. Please try again.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully.',
    });
  } catch (error) {
    console.error('Contact email request failed:', error);
    return res.status(502).json({
      success: false,
      error: 'We could not send your message right now. Please try again.',
    });
  }
}
