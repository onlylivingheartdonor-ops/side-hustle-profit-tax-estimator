export const metadata = {
  title: "Terms of Service | Side Hustle Tax Estimator",
  description: "Terms of service for Side Hustle Tax Estimator. Please read these terms before using the tool.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main style={{ maxWidth: "780px", margin: "0 auto", padding: "2rem 1.5rem", fontFamily: "'DM Mono', monospace", color: "#1a1a1a", background: "#faf8f4", minHeight: "100vh" }}>
      <p style={{ fontSize: "12px", marginBottom: "1.5rem" }}>
        <a href="/" style={{ color: "#c84b1f", textDecoration: "none" }}>&#8592; Back to Side Hustle Tax Estimator</a>
      </p>

      <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2rem", marginBottom: ".5rem" }}>Terms of Service</h1>
      <p style={{ fontSize: "12px", color: "#888", marginBottom: "2rem" }}>Last updated: May 19, 2026</p>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Acceptance of terms</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          By accessing or using Side Hustle Tax Estimator at sidehustletaxestimator.com, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the site.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Description of service</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          Side Hustle Tax Estimator is a free online tool that provides simplified estimates of self-employment tax, federal income tax, and quarterly payment obligations based on income and expense figures entered by the user. All calculations are performed within the user's browser.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>No tax advice</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          Nothing on this site constitutes tax, financial, legal, or professional advice. Results are estimates only, based on simplified assumptions for single filers using approximate bracket tiers. This tool does not account for the standard deduction, itemized deductions, tax credits, state and local taxes, the qualified business income (QBI) deduction, or other factors that affect your actual tax liability.
        </p>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444", marginTop: ".75rem" }}>
          You should not rely solely on this tool to determine your actual tax obligations. Always consult a qualified tax professional or use IRS-approved tax software when preparing your tax return or making estimated tax payments.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Accuracy of results</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          We make reasonable efforts to keep the tax rates and bracket information in this tool current, but tax law changes frequently and we cannot guarantee that all figures are up to date at the time you use the tool. Estimates are for planning and informational purposes only.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Acceptable use</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          You may use this tool for personal, educational, or planning purposes. You agree not to use this site in any way that violates applicable laws, disrupts the site's infrastructure, or misrepresents the tool's purpose.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Disclaimer of warranties</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          This site and its tool are provided "as is" without warranties of any kind. We do not warrant the accuracy, completeness, or timeliness of any information or calculations provided.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Limitation of liability</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          To the fullest extent permitted by law, MoneyWise Calculators and its operators shall not be liable for any taxes, penalties, interest, or other financial consequences arising from use of or reliance on this tool.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Third-party services and advertising</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          This site displays advertisements through Google AdSense and uses Google Analytics for traffic measurement. Your interaction with these services is governed by Google's own terms and privacy policies.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Changes to these terms</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          We reserve the right to modify these terms at any time. Updated terms will be posted on this page with a revised date. Continued use of the site constitutes acceptance of the updated terms.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: ".75rem" }}>Contact</h2>
        <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#444" }}>
          For questions about these terms, contact us through{" "}
          <a href="https://moneywisecalculator.com" style={{ color: "#c84b1f" }}>MoneyWise Calculator</a>.
        </p>
      </section>

      <p style={{ fontSize: "12px", color: "#aaa", borderTop: "1px solid #e0dbd3", paddingTop: "1.5rem" }}>
        &copy; 2026 MoneyWise Calculators &middot; <a href="/privacy" style={{ color: "#aaa" }}>Privacy Policy</a>
      </p>
    </main>
  );
}
