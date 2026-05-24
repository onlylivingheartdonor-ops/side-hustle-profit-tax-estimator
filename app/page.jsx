import SideHustleTaxCalculator from "./SideHustleTaxCalculator"
import { RELATED_LINKS as RELATED } from "./lib/links"

const staticCss = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #faf8f4; font-family: 'DM Mono', monospace; color: #1a1a1a; }
  .she-wrap { max-width: 780px; margin: 0 auto; padding: 2rem 1.5rem; }
  .she-header { border-bottom: 2px solid #1a1a1a; padding-bottom: 1.5rem; margin-bottom: 2rem; }
  .she-eyebrow { font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: #888; margin-bottom: .5rem; }
  .she-title { font-family: 'DM Serif Display', serif; font-size: clamp(2rem, 5vw, 3.2rem); line-height: 1.1; }
  .she-title em { font-style: italic; color: #c84b1f; }
  .she-card { background: #fff; border: 1px solid #e0dbd3; border-radius: 4px; padding: 1.5rem; margin-bottom: 1.5rem; }
  .she-nav { font-size: 12px; margin-bottom: 1.5rem; }
  .she-nav a { color: #c84b1f; text-decoration: none; }
  .she-nav a:hover { text-decoration: underline; }
  .she-field-label { font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: #888; display: block; margin-bottom: .4rem; }
  .she-field-hint { font-size: 12px; color: #888; margin-top: .3rem; }
  .she-input-wrap { position: relative; }
  .she-input-wrap::before { content: '$'; position: absolute; left: 0; top: .4rem; font-size: 1.1rem; color: #aaa; }
  .she-input { width: 100%; border: none; border-bottom: 1.5px solid #e0dbd3; background: transparent; font-family: 'DM Mono', monospace; font-size: 1.1rem; color: #1a1a1a; padding: .4rem 0 .4rem 1.1rem; outline: none; transition: border-color .2s; }
  .she-input:focus { border-color: #c84b1f; }
  .she-field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.25rem; }
  .she-field-block { margin-bottom: 1.25rem; }
  .she-btn { width: 100%; padding: 1rem; background: #1a1a1a; color: #fff; border: none; font-family: 'DM Mono', monospace; font-size: .9rem; letter-spacing: .06em; text-transform: uppercase; cursor: pointer; border-radius: 2px; transition: background .2s; }
  .she-btn:hover { background: #c84b1f; }
  .she-result-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: #e0dbd3; border: 1px solid #e0dbd3; border-radius: 2px; overflow: hidden; margin-bottom: 1.5rem; }
  .she-result-cell { background: #fff; padding: 1rem 1.25rem; }
  .she-result-label { font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: #888; margin-bottom: .3rem; }
  .she-result-val { font-family: 'DM Serif Display', serif; font-size: 1.6rem; color: #1a1a1a; }
  .she-result-val.accent { color: #c84b1f; }
  .she-setaside { background: #eaf5ee; border: 1px solid #b2d9be; border-radius: 4px; padding: 1.25rem; margin-bottom: 1rem; }
  .she-setaside-label { font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: #1a6b3a; margin-bottom: .4rem; }
  .she-setaside-val { font-family: 'DM Serif Display', serif; font-size: 2rem; color: #1a6b3a; }
  .she-setaside-sub { font-size: 12px; color: #3a7a52; margin-top: .3rem; }
  .she-quarterly { border: 1.5px dashed #e8c89a; border-radius: 4px; padding: 1.25rem; display: flex; justify-content: space-between; align-items: center; }
  .she-q-label { font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: #888; }
  .she-q-val { font-family: 'DM Serif Display', serif; font-size: 1.8rem; color: #c84b1f; }
  .she-q-dates { font-size: 11px; color: #888; margin-top: .25rem; }
  .she-section-title { font-family: 'DM Serif Display', serif; font-size: 1.2rem; margin-bottom: 1rem; color: #1a1a1a; }
  .she-bracket-table { width: 100%; border-collapse: collapse; font-size: 13px; }
  .she-bracket-table tr { border-bottom: 1px solid #e0dbd3; }
  .she-bracket-table td { padding: .65rem .5rem; color: #555; }
  .she-bracket-table td:first-child { color: #1a1a1a; }
  .she-bracket-table td:last-child { text-align: right; }
  .she-bracket-table td:nth-child(3) { text-align: right; color: #888; font-size: 12px; }
  .she-bracket-table tr.active td { color: #c84b1f; font-weight: 500; }
  .she-bracket-table tr.active td:first-child::before { content: 'your bracket'; font-size: 10px; display: block; }
  .she-active-amount { font-size: 12px; color: #c84b1f; margin-top: .5rem; min-height: 1.2em; }
  .she-prose p { font-size: 13px; color: #444; line-height: 1.7; margin-bottom: .75rem; }
  .she-prose p:last-child { margin-bottom: 0; }
  .she-prose ul { font-size: 13px; color: #444; line-height: 1.8; padding-left: 1.2rem; margin-bottom: .75rem; }
  .she-prose ul li { margin-bottom: .25rem; }
  .she-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
  .she-info-item { padding: .75rem; border-left: 2px solid #e8c89a; }
  .she-info-title { font-size: 12px; font-weight: 500; color: #1a1a1a; margin-bottom: .25rem; }
  .she-info-body { font-size: 12px; color: #888; line-height: 1.5; }
  .she-strategy-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .she-strategy-num { font-family: 'DM Serif Display', serif; font-size: 2rem; color: #e8c89a; line-height: 1; margin-bottom: .4rem; }
  .she-strategy-title { font-size: 12px; font-weight: 500; color: #1a1a1a; margin-bottom: .25rem; }
  .she-strategy-body { font-size: 12px; color: #888; line-height: 1.5; }
  .she-faq-item { border-bottom: 1px solid #e0dbd3; padding: 1rem 0; }
  .she-faq-item:last-child { border-bottom: none; padding-bottom: 0; }
  .she-faq-q { font-size: 13px; font-weight: 500; color: #1a1a1a; margin-bottom: .4rem; }
  .she-faq-a { font-size: 13px; color: #555; line-height: 1.7; }
  .she-related-links { display: flex; flex-wrap: wrap; gap: .5rem; }
  .she-related-label { font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: #888; margin-bottom: .75rem; }
  .she-related-link { font-size: 12px; padding: .35rem .75rem; border: 1px solid #e0dbd3; border-radius: 2px; color: #555; text-decoration: none; transition: all .15s; display: inline-block; }
  .she-related-link:hover { border-color: #1a1a1a; color: #1a1a1a; }
  .she-disclaimer { font-size: 11px; color: #888; line-height: 1.6; border-top: 1px solid #e0dbd3; padding-top: 1rem; margin-top: 1rem; }
  .she-footer-links { display: flex; gap: 1rem; font-size: 11px; margin-top: .75rem; }
  .she-footer-links a { color: #888; text-decoration: underline; }
  @media (max-width: 600px) {
    .she-field-row, .she-result-grid, .she-info-grid, .she-strategy-grid { grid-template-columns: 1fr; }
    .she-quarterly { flex-direction: column; gap: .75rem; align-items: flex-start; }
  }
`

const BRACKETS = [
  { min: 0,      max: 11000,    rate: 0.10, label: "Up to $11,000",      display: "~10%" },
  { min: 11000,  max: 44000,    rate: 0.12, label: "$11,001 - $44,000",  display: "~12%" },
  { min: 44000,  max: 95000,    rate: 0.22, label: "$44,001 - $95,000",  display: "~22%" },
  { min: 95000,  max: 182000,   rate: 0.24, label: "$95,001 - $182,000", display: "~24%" },
  { min: 182000, max: Infinity, rate: 0.32, label: "$182,001+",          display: "32%+"  },
]

const FAQ = [
  {
    q: "What is self-employment tax and why is it 15.3%?",
    a: "Self-employment tax covers Social Security (12.4%) and Medicare (2.9%), totaling 15.3%. When you work as an employee, your employer pays half of these taxes on your behalf. As a self-employed person, you pay both halves yourself. This is in addition to federal income tax, which is why the total tax burden for self-employed individuals is often higher than people expect."
  },
  {
    q: "Do I have to make quarterly tax payments?",
    a: "Generally yes, if you expect to owe at least $1,000 in federal taxes for the year. The IRS requires self-employed individuals to pay estimated taxes quarterly rather than waiting until April. The due dates are typically April 15, June 16, September 15, and January 15. Failing to pay quarterly can result in underpayment penalties, even if you pay everything owed by the April filing deadline."
  },
  {
    q: "What counts as a deductible business expense?",
    a: "Business expenses are costs that are ordinary and necessary for your work. Common examples include software subscriptions, equipment and tools, home office space (if used exclusively for work), internet and phone (the business-use portion), professional services, and work-related travel. Personal expenses are not deductible. Keeping detailed records and receipts is essential — the IRS requires documentation for all deductions claimed."
  },
  {
    q: "How is this estimate different from what I will actually owe?",
    a: "This tool uses simplified bracket tiers and assumes single-filer status. Your actual tax liability depends on your filing status, the standard deduction or itemized deductions, other credits and deductions, state income taxes, and whether you qualify for the 20% qualified business income (QBI) deduction. This estimate is a useful planning tool but should not replace advice from a tax professional for your actual return."
  },
  {
    q: "What is the recommended 25-30% set-aside rule?",
    a: "A common rule of thumb for self-employed individuals is to set aside 25-30% of every payment received into a dedicated account reserved for taxes. This covers both self-employment tax and federal income tax for most people in lower to middle income ranges. If your income is higher or you live in a state with income tax, 30-35% may be more appropriate. The key is to move the money immediately before it gets spent."
  },
  {
    q: "Can I deduct half of my self-employment tax?",
    a: "Yes. The IRS allows self-employed individuals to deduct half of their self-employment tax from their gross income when calculating their adjusted gross income (AGI). This deduction is taken on your federal tax return and reduces your taxable income, which in turn reduces your federal income tax. This tool uses simplified estimates and does not model this deduction — a tax professional or tax software will apply it automatically when you file."
  },
]

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: staticCss }} />
      <main className="she-wrap">

        <p className="she-nav"><a href="https://moneywisecalculator.com">&#8592; More free tools at MoneyWise Calculator</a></p>

        <div className="she-header">
          <p className="she-eyebrow">Freelance &amp; Self-Employment</p>
          <h1 className="she-title">Side Hustle<br /><em>Tax Estimator</em></h1>
        </div>

        <p style={{ fontSize: "13px", color: "#555", lineHeight: "1.7", marginBottom: "1.5rem" }}>
          Free tool to estimate your self-employment taxes, federal income tax, and quarterly payments from side hustle or freelance income. Enter your income and expenses to see exactly what to set aside so tax season never surprises you.
        </p>

        {/* INTERACTIVE TOOL — client component */}
        <SideHustleTaxCalculator />

        {/* BRACKET TABLE — static, server-rendered */}
        <div className="she-card">
          <p className="she-section-title">Estimated federal tax brackets</p>
          <table className="she-bracket-table">
            <tbody>
              {BRACKETS.map((b, i) => (
                <tr key={i}>
                  <td>{b.label}</td>
                  <td>{b.display}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: "11px", color: "#888", marginTop: ".5rem" }}>
            Simplified single-filer estimates. Actual rates depend on deductions, filing status, and other factors. Enter your income above to see your estimated bracket highlighted.
          </p>
        </div>

        {/* HOW IT WORKS */}
        <div className="she-card">
          <p className="she-section-title">How this works</p>
          <div className="she-prose">
            <p>This tool estimates how much you may owe in taxes based on your income and expenses from self-employment or side hustle activities. When you enter your total income and subtract your business-related expenses, the tool calculates your estimated net income. From there, it estimates:</p>
            <ul>
              <li>Self-employment tax (which covers Social Security and Medicare)</li>
              <li>Federal income tax (based on simplified bracket assumptions)</li>
              <li>A combined estimate of total taxes owed</li>
            </ul>
            <p>It also provides guidance on how much you may want to set aside and what your quarterly tax payments could look like — giving you a practical view of your real earnings after taxes, not just your gross income.</p>
          </div>
          <div className="she-info-grid">
            <div className="she-info-item">
              <p className="she-info-title">Net income</p>
              <p className="she-info-body">Gross income minus deductible business expenses — what you are actually taxed on.</p>
            </div>
            <div className="she-info-item">
              <p className="she-info-title">Self-employment tax</p>
              <p className="she-info-body">15.3% flat rate covering Social Security (12.4%) and Medicare (2.9%) — owed in addition to income tax.</p>
            </div>
            <div className="she-info-item">
              <p className="she-info-title">Federal income tax</p>
              <p className="she-info-body">Estimated using simplified bracket tiers based on your total combined income.</p>
            </div>
            <div className="she-info-item">
              <p className="she-info-title">Quarterly payments</p>
              <p className="she-info-body">Self-employed individuals typically pay taxes four times per year to avoid underpayment penalties.</p>
            </div>
          </div>
        </div>

        {/* WHY USEFUL */}
        <div className="she-card">
          <p className="she-section-title">Why this is useful</p>
          <div className="she-prose">
            <p>One of the biggest challenges with side income is that taxes are not automatically withheld. Many people underestimate how much they owe and end up with an unexpected tax bill at the end of the year. This tool helps you:</p>
            <ul>
              <li>Estimate your true take-home income</li>
              <li>Avoid underpaying taxes</li>
              <li>Plan ahead with savings targets</li>
              <li>Understand how expenses reduce taxable income</li>
            </ul>
            <p>Instead of guessing, you can make informed decisions about pricing, spending, and saving.</p>
          </div>
        </div>

        {/* IF TAXES HIGHER */}
        <div className="she-card">
          <p className="she-section-title">If your estimated taxes are higher than expected</p>
          <div className="she-prose">
            <p>This is very common. Self-employment income is taxed differently than regular employment income, and it often includes additional tax obligations. If your estimated taxes feel too high, consider:</p>
            <ul>
              <li>Reviewing and properly tracking all legitimate business expenses</li>
              <li>Increasing how much you set aside regularly</li>
              <li>Adjusting your pricing or income targets to account for taxes</li>
              <li>Breaking your tax amount into smaller monthly or quarterly savings goals</li>
            </ul>
            <p>The most important factor is preparation. Taxes are much easier to manage when you plan ahead instead of reacting later.</p>
          </div>
        </div>

        {/* REDUCE TAX BURDEN */}
        <div className="she-card">
          <p className="she-section-title">How to reduce and control your tax burden</p>
          <div className="she-prose">
            <p>While you cannot avoid taxes entirely, there are legitimate ways to reduce what you owe and manage it more effectively. The most important method is tracking and claiming business expenses — software, equipment, home office space, and work-related travel can often be deducted, lowering your taxable income.</p>
            <ul>
              <li>Keep detailed records of all work-related expenses</li>
              <li>Separate personal and business finances to simplify tracking</li>
              <li>Use retirement contributions (SEP IRA or Solo 401k) to reduce taxable income</li>
              <li>Time purchases strategically — for example, buying needed equipment before year-end</li>
              <li>Avoid missed deductions due to poor documentation</li>
            </ul>
            <p>Consistency matters. Small deductions add up over time, and regular recordkeeping prevents missed opportunities.</p>
          </div>
        </div>

        {/* STRATEGIES */}
        <div className="she-card">
          <p className="she-section-title">Proven approaches for managing tax obligations</p>
          <div className="she-strategy-grid">
            <div>
              <p className="she-strategy-num">01</p>
              <p className="she-strategy-title">Percentage-based set-aside</p>
              <p className="she-strategy-body">Consistently set aside 25-35% of all income into a dedicated account before spending any of it.</p>
            </div>
            <div>
              <p className="she-strategy-num">02</p>
              <p className="she-strategy-title">Quarterly planning</p>
              <p className="she-strategy-body">Estimate taxes throughout the year and make payments every three months instead of facing a lump sum later.</p>
            </div>
            <div>
              <p className="she-strategy-num">03</p>
              <p className="she-strategy-title">Separate tax account</p>
              <p className="she-strategy-body">Immediately move a portion of every payment into a different account so it is never accidentally spent.</p>
            </div>
            <div>
              <p className="she-strategy-num">04</p>
              <p className="she-strategy-title">Income smoothing</p>
              <p className="she-strategy-body">Use higher-earning periods to cover slower months and future tax obligations. Consistency over reaction.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="she-card">
          <p className="she-section-title">Frequently asked questions</p>
          {FAQ.map((item, i) => (
            <div className="she-faq-item" key={i}>
              <p className="she-faq-q">{item.q}</p>
              <p className="she-faq-a">{item.a}</p>
            </div>
          ))}
        </div>

        {/* RELATED */}
        <div className="she-card">
          <p className="she-section-title">Related tools</p>
          <p className="she-related-label">More free tools from the MoneyWise Calculator network</p>
          <div className="she-related-links">
            {RELATED.map((r, i) => (
              <a key={i} className="she-related-link" href={r.href}>{r.label}</a>
            ))}
          </div>
          <div className="she-disclaimer">
            This tool provides estimates for informational purposes only and does not constitute tax or financial advice. Results use simplified bracket assumptions for single filers and do not account for state taxes, deductions, or credits. Consult a tax professional for your actual return. This site uses cookies and analytics. By using this site, you agree to our{" "}
            <a href="/privacy" style={{ color: "#888" }}>Privacy Policy</a> and{" "}
            <a href="/terms" style={{ color: "#888" }}>Terms of Service</a>.
            <div className="she-footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="https://moneywisecalculator.com">MoneyWise Calculator</a>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
