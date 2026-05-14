"use client"

import { useState, useEffect } from "react"

const styles = {
  dmFont: `@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&display=swap');`,
}

const css = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #faf8f4; font-family: 'DM Mono', monospace; color: #1a1a1a; }
  .she-wrap { max-width: 780px; margin: 0 auto; padding: 2rem 1.5rem; }
  .she-header { border-bottom: 2px solid #1a1a1a; padding-bottom: 1.5rem; margin-bottom: 2rem; }
  .she-eyebrow { font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: #888; margin-bottom: .5rem; }
  .she-title { font-family: 'DM Serif Display', serif; font-size: clamp(2rem, 5vw, 3.2rem); line-height: 1.1; }
  .she-title em { font-style: italic; color: #c84b1f; }
  .she-card { background: #fff; border: 1px solid #e0dbd3; border-radius: 4px; padding: 1.5rem; margin-bottom: 1.5rem; }
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
  .she-bracket-table tr.active td:first-child::before { content: '→ '; }
  .she-active-amount { font-size: 12px; color: #c84b1f; margin-top: .5rem; min-height: 1.2em; }
  .she-prose p { font-size: 13px; color: #444; line-height: 1.7; margin-bottom: .75rem; }
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
  .she-related-links { display: flex; flex-wrap: wrap; gap: .5rem; }
  .she-related-link { font-size: 12px; padding: .35rem .75rem; border: 1px solid #e0dbd3; border-radius: 2px; color: #555; cursor: pointer; text-decoration: none; transition: all .15s; display: inline-block; }
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
  { min: 0,      max: 11000,          rate: 0.10, label: "Up to $11,000",      display: "~10%" },
  { min: 11000,  max: 44000,          rate: 0.12, label: "$11,001 – $44,000",  display: "~12%" },
  { min: 44000,  max: 95000,          rate: 0.22, label: "$44,001 – $95,000",  display: "~22%" },
  { min: 95000,  max: 182000,         rate: 0.24, label: "$95,001 – $182,000", display: "~24%" },
  { min: 182000, max: Infinity,       rate: 0.32, label: "$182,001+",          display: "32%+" },
]

const RELATED = [
  { label: "Credit Card Debt Payoff Calculator",  href: "https://creditcarddebtpayoffcalculator.com" },
  { label: "Debt Reducing Calculator",            href: "https://debtreducingcalculator.com" },
  { label: "Side Hustle Tax Estimator",           href: "https://sidehustletaxestimator.com" },
  { label: "High Yield Savings Calculator",       href: "https://highyieldsavingscalculator.com" },
  { label: "Retirement Savings Gap",              href: "https://retirementsavingsgap.com" },
  { label: "Life Insurance Coverage Calculator",  href: "https://lifeinsurancecoveragecalculator.com" },
  { label: "Online Course ROI Calculator",        href: "https://onlinecourseroi.com" },
  { label: "Subscription Cost Calculator",        href: "https://mysubscriptioncost.com" },
  { label: "Email Attachment Size Checker",       href: "https://emailattachmentsize.com" },
  { label: "GPA Calculator",                      href: "https://gpacalculator.site" },
  { label: "YouTube Title Checker",               href: "https://youtubetitlechecker.com" },
  { label: "Strong Password Builder",             href: "https://strongpasswordbuilder.com" },
  { label: "Cool Username Generator",             href: "https://coolusernamegenerator.com" },
]

function fmt(n) {
  return "$" + Math.round(n).toLocaleString("en-US")
}

function calcTax(income, expenses, other) {
  const net = Math.max((income || 0) - (expenses || 0), 0)
  const total = net + (other || 0)
  const se = net * 0.153
  const bracket = BRACKETS.find(b => total >= b.min && total < b.max) || BRACKETS[BRACKETS.length - 1]
  const fed = net * bracket.rate
  const tax = se + fed
  return { net, total, se, fed, tax, bracket, lo: net * 0.25, hi: net * 0.30, quarterly: tax / 4 }
}

export default function Page() {
  const [income, setIncome]     = useState("")
  const [expenses, setExpenses] = useState("")
  const [other, setOther]       = useState("")
  const [results, setResults]   = useState(null)
  const [live, setLive]         = useState(null)

  useEffect(() => {
    const inc = parseFloat(income)
    const exp = parseFloat(expenses)
    const oth = parseFloat(other)
    if (inc > 0) {
      setLive(calcTax(inc, exp, oth))
    } else {
      setLive(null)
    }
  }, [income, expenses, other])

  const handleCalculate = () => {
    const inc = parseFloat(income)
    const exp = parseFloat(expenses)
    const oth = parseFloat(other)
    if (!inc) return
    setResults(calcTax(inc, exp, oth))
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleCalculate()
  }

  const activeBracket = live ? live.bracket : null

  return (
    <>
      <style>{styles.dmFont}</style>
      <style>{css}</style>
      <main className="she-wrap">

        <div className="she-header">
          <p className="she-eyebrow">Freelance &amp; Self-Employment</p>
          <h1 className="she-title">Side Hustle<br /><em>Tax Estimator</em></h1>
        </div>

        {/* CALCULATOR */}
        <div className="she-card">
          <div className="she-field-row">
            <div className="she-field-block">
              <label className="she-field-label" htmlFor="income">Total side hustle income</label>
              <div className="she-input-wrap">
                <input id="income" className="she-input" type="number" min="0" placeholder="0"
                  value={income} onChange={e => setIncome(e.target.value)} onKeyDown={handleKeyDown} />
              </div>
            </div>
            <div className="she-field-block">
              <label className="she-field-label" htmlFor="expenses">Business expenses</label>
              <div className="she-input-wrap">
                <input id="expenses" className="she-input" type="number" min="0" placeholder="0"
                  value={expenses} onChange={e => setExpenses(e.target.value)} onKeyDown={handleKeyDown} />
              </div>
            </div>
          </div>
          <div className="she-field-block">
            <label className="she-field-label" htmlFor="other">
              Other income <span style={{ opacity: 0.6, fontSize: "10px" }}>(optional)</span>
            </label>
            <div className="she-input-wrap">
              <input id="other" className="she-input" type="number" min="0" placeholder="0"
                value={other} onChange={e => setOther(e.target.value)} onKeyDown={handleKeyDown} />
            </div>
            <p className="she-field-hint">Salary, investment income, or other taxable earnings</p>
          </div>
          <button className="she-btn" onClick={handleCalculate}>Calculate my tax estimate →</button>

          {results && (
            <div style={{ marginTop: "1.5rem", borderTop: "1px solid #e0dbd3", paddingTop: "1.5rem" }}>
              <div className="she-result-grid">
                <div className="she-result-cell">
                  <p className="she-result-label">Net income</p>
                  <p className="she-result-val">{fmt(results.net)}</p>
                </div>
                <div className="she-result-cell">
                  <p className="she-result-label">SE tax (15.3%)</p>
                  <p className="she-result-val accent">{fmt(results.se)}</p>
                </div>
                <div className="she-result-cell">
                  <p className="she-result-label">Federal income tax</p>
                  <p className="she-result-val accent">{fmt(results.fed)}</p>
                </div>
                <div className="she-result-cell">
                  <p className="she-result-label">Total estimated tax</p>
                  <p className="she-result-val accent">{fmt(results.tax)}</p>
                </div>
              </div>
              <div className="she-setaside">
                <p className="she-setaside-label">Recommended set-aside</p>
                <p className="she-setaside-val">{fmt(results.lo)} – {fmt(results.hi)}</p>
                <p className="she-setaside-sub">Based on 25–30% of net income</p>
              </div>
              <div className="she-quarterly">
                <div>
                  <p className="she-q-label">Quarterly estimated payment</p>
                  <p className="she-q-dates">Due: Apr 15 · Jun 16 · Sep 15 · Jan 15</p>
                </div>
                <p className="she-q-val">{fmt(results.quarterly)}</p>
              </div>
            </div>
          )}
        </div>

        {/* BRACKET TABLE */}
        <div className="she-card">
          <p className="she-section-title">Estimated federal tax brackets</p>
          <table className="she-bracket-table">
            <tbody>
              {BRACKETS.map((b, i) => (
                <tr key={i} className={activeBracket === b ? "active" : ""}>
                  <td>{b.label}</td>
                  <td>{b.display}</td>
                  <td>{activeBracket === b ? "← your bracket" : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="she-active-amount">
            {live && activeBracket
              ? `Estimated federal income tax at ${Math.round(activeBracket.rate * 100)}%: ${fmt(live.fed)}`
              : ""}
          </p>
          <p style={{ fontSize: "11px", color: "#888", marginTop: ".5rem" }}>
            Simplified single-filer estimates. Actual rates depend on deductions, filing status, and other factors.
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
              <p className="she-info-body">Gross income minus deductible business expenses — what you&apos;re actually taxed on.</p>
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
            <p>Consistency matters. Small deductions add up over time, and regular recordkeeping prevents missed opportunities. Stay within legal guidelines and avoid aggressive or questionable deductions.</p>
          </div>
        </div>

        {/* STRATEGIES */}
        <div className="she-card">
          <p className="she-section-title">Other successful approaches</p>
          <div className="she-strategy-grid">
            <div>
              <p className="she-strategy-num">01</p>
              <p className="she-strategy-title">Percentage-based set-aside</p>
              <p className="she-strategy-body">Consistently set aside 25–35% of all income into a dedicated account before spending any of it.</p>
            </div>
            <div>
              <p className="she-strategy-num">02</p>
              <p className="she-strategy-title">Quarterly planning</p>
              <p className="she-strategy-body">Estimate taxes throughout the year and make payments every three months instead of facing a lump sum later.</p>
            </div>
            <div>
              <p className="she-strategy-num">03</p>
              <p className="she-strategy-title">Separate tax account</p>
              <p className="she-strategy-body">Immediately move a portion of every payment into a different account so it&apos;s never accidentally spent.</p>
            </div>
            <div>
              <p className="she-strategy-num">04</p>
              <p className="she-strategy-title">Income smoothing</p>
              <p className="she-strategy-body">Use higher-earning periods to cover slower months and future tax obligations. Consistency over reaction.</p>
            </div>
          </div>
        </div>

        {/* PLAN AHEAD */}
        <div className="she-card">
          <p className="she-section-title">How to plan ahead</p>
          <div className="she-prose">
            <p>Planning ahead is the most effective way to reduce stress and avoid unexpected tax bills. To stay in control:</p>
            <ul>
              <li>Set aside a percentage of every payment you receive (commonly 25–30%)</li>
              <li>Make estimated quarterly payments if required</li>
              <li>Track income and expenses regularly instead of waiting until tax season</li>
              <li>Use separate accounts to manage tax funds</li>
              <li>Review your numbers monthly to adjust as needed</li>
            </ul>
            <p>Think of taxes as a regular business expense rather than a yearly event. By treating tax planning as part of your normal routine, you avoid surprises and stay in control of your finances.</p>
          </div>
        </div>

        {/* RELATED TOOLS */}
        <div className="she-card">
          <p className="she-section-title">Related tools</p>
          <div className="she-related-links">
            {RELATED.map((r, i) => (
              <a key={i} className="she-related-link" href={r.href}>{r.label}</a>
            ))}
          </div>
          <div className="she-disclaimer">
            This tool provides estimates for informational purposes only and does not constitute tax advice. Consult a qualified tax professional for your situation. This site may use cookies and analytics. By using this site, you agree to our Privacy Policy and Terms of Service.
            <div className="she-footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
