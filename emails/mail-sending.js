const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

// ── Gmail SMTP transporter ──────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// ── Helpers ─────────────────────────────────────────────────────────
function parseCSV(filePath) {
  const raw = fs.readFileSync(filePath, "utf-8").trim();
  const lines = raw.split("\n").map((l) => l.trim()).filter(Boolean);
  if (lines.length < 2) return []; // header only or empty

  const headers = lines[0].split(",").map((h) => h.trim());
  return lines.slice(1).map((line) => {
    const values = line.split(",").map((v) => v.trim());
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = values[i] || "";
    });
    return obj;
  });
}

function loadTemplate(fileName) {
  return fs.readFileSync(path.join(__dirname, fileName), "utf-8");
}

function fillTemplate(template, replacements) {
  let result = template;
  for (const [key, value] of Object.entries(replacements)) {
    result = result.replaceAll(`{{${key}}}`, value);
  }
  return result;
}

async function sendEmail(to, subject, html) {
  const info = await transporter.sendMail({
    from: `"NexJam 2026" <${process.env.GMAIL_USER}>`,
    to,
    subject,
    html,
  });
  console.log(`  ✓ Sent to ${to}  (messageId: ${info.messageId})`);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ── Main ────────────────────────────────────────────────────────────
async function main() {
  // Verify SMTP connection
  try {
    await transporter.verify();
    console.log("✓ Gmail SMTP connection verified\n");
  } catch (err) {
    console.error("✗ SMTP connection failed. Check GMAIL_USER & GMAIL_PASS in .env");
    console.error(err.message);
    process.exit(1);
  }

  const acceptedTemplate = loadTemplate("accepted.html");
  const rejectedTemplate = loadTemplate("rejected.html");

  // ── Send accepted emails ──────────────────────────────────────────
  const acceptedCSV = path.join(__dirname, "data", "accepted.csv");
  if (fs.existsSync(acceptedCSV)) {
    const accepted = parseCSV(acceptedCSV);
    if (accepted.length) {
      console.log(`Sending ACCEPTED emails to ${accepted.length} team(s)...`);
      for (let i = 0; i < accepted.length; i++) {
        const row = accepted[i];
        const teamNo = i + 1;
        const html = fillTemplate(acceptedTemplate, {
          team_name: row.team_name,
          team_no: String(teamNo),
        });
        await sendEmail(
          row.email,
          "🎉 You're In! — NexJam 2026 Shortlist Confirmation",
          html
        );
        await sleep(1000); // 1s delay between emails to avoid rate limits
      }
    console.log("");
    } else {
      console.log("No rows in accepted.csv, skipping.\n");
    }
  }

  // ── Send rejected emails ──────────────────────────────────────────
  const rejectedCSV = path.join(__dirname, "data", "rejected.csv");
  if (fs.existsSync(rejectedCSV)) {
    const rejected = parseCSV(rejectedCSV);
    if (rejected.length) {
      console.log(`Sending REJECTED emails to ${rejected.length} team(s)...`);
      for (const row of rejected) {
        const html = fillTemplate(rejectedTemplate, {
          team_name: row.team_name,
        });
        await sendEmail(
          row.email,
          "NexJam 2026 — Application Update",
          html
        );
        await sleep(1000);
      }
    } else {
      console.log("No rows in rejected.csv, skipping.\n");
    }
  }

  console.log("Done! All emails dispatched.");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
