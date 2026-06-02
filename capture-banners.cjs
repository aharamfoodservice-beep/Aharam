const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const banners = [
  'reels-01-midnight-emerald',
  'reels-02-rose-gold',
  'reels-03-electric-cyan',
  'reels-04-warm-coral',
  'reels-05-deep-sapphire',
  'reels-06-magenta-burst',
  'reels-07-teal-amber',
  'reels-08-crimson-gold',
  'reels-09-aurora-green',
  'reels-10-indigo-neon'
];

const outputDir = path.join(__dirname, 'promo-videos', 'exports');

async function captureBanners() {
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const banner of banners) {
    const htmlPath = path.join(__dirname, 'promo-videos', `${banner}.html`);
    const pngPath = path.join(outputDir, `${banner}.png`);

    if (!fs.existsSync(htmlPath)) {
      console.log(`SKIP: ${banner}.html not found`);
      continue;
    }

    console.log(`Capturing: ${banner}...`);

    const page = await browser.newPage();

    // Set viewport to exact 1080x1920 (9:16 reels size)
    await page.setViewport({
      width: 1080,
      height: 1920,
      deviceScaleFactor: 1
    });

    // Load the HTML file
    const fileUrl = `file:///${htmlPath.replace(/\\/g, '/')}`;
    await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });

    // Wait for animations to complete (6 seconds)
    await new Promise(resolve => setTimeout(resolve, 6000));

    // Take full-page screenshot as PNG
    await page.screenshot({
      path: pngPath,
      type: 'png',
      clip: {
        x: 0,
        y: 0,
        width: 1080,
        height: 1920
      }
    });

    console.log(`  ✅ Saved: ${pngPath}`);
    await page.close();
  }

  await browser.close();
  console.log(`\nDone! All banners saved to: ${outputDir}`);
}

captureBanners().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
