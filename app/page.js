"use client"

import { useState } from "react"

export default function Page() {
  const [income, setIncome] = useState("")
  const [expenses, setExpenses] = useState("")
  const [otherIncome, setOtherIncome] = useState("")
  const [results, setResults] = useState(null)

  const calculate = () => {
    const inc = Number(income)
    const exp = Number(expenses)
    const other = Number(otherIncome)

    if (!inc) return

    const net = Math.max(inc - exp, 0)
    const totalIncome = net + (other || 0)

    const selfEmploymentTax = net * 0.153

    let federalRate = 0.1
    if (totalIncome > 11000) federalRate = 0.12
    if (totalIncome > 44000) federalRate = 0.22
    if (totalIncome > 95000) federalRate = 0.24

    const federalTax = net * federalRate
    const totalTax = selfEmploymentTax + federalTax

    const recommendLow = net * 0.25
    const recommendHigh = net * 0.30

    const quarterly = totalTax / 4

    setResults({
      net,
      selfEmploymentTax,
      federalTax,
      totalTax,
      recommendLow,
      recommendHigh,
      quarterly,
      federalRate
    })
  }

  return (
    <main style={{
      maxWidth:"900px",
      margin:"0 auto",
      padding:"2rem",
      background:"#f4f6fb",
      minHeight:"100vh",
      fontFamily:"system-ui, -apple-system, sans-serif"
    }}>

      {/* TOOL */}
      <div style={{ background:"#fff", padding:"1.5rem", borderRadius:"10px", marginBottom:"1.5rem" }}>
        <h1>Side Hustle Tax Estimator</h1>

        <label>Total Side Hustle Income</label>
        <input value={income} onChange={(e)=>setIncome(e.target.value)} style={{ width:"100%", padding:"8px", marginBottom:"1rem" }} />

        <label>Business Expenses</label>
        <input value={expenses} onChange={(e)=>setExpenses(e.target.value)} style={{ width:"100%", padding:"8px", marginBottom:"1rem" }} />

        <label>Other Income (optional)</label>
        <input value={otherIncome} onChange={(e)=>setOtherIncome(e.target.value)} style={{ width:"100%", padding:"8px", marginBottom:"0.5rem" }} />

        <p style={{ fontSize:"0.9rem", marginBottom:"1rem" }}>
          If you have income from a job or other sources, you can include it here. This helps estimate your overall tax bracket more accurately. Your side income may be taxed at a higher rate depending on your total income.
        </p>

        <button onClick={calculate} style={{ padding:"10px 15px", background:"#0070f3", color:"#fff", border:"none", borderRadius:"5px" }}>
          Estimate Taxes
        </button>

        {results && (
          <div style={{ marginTop:"1.5rem" }}>
            <p><strong>Net Income:</strong> ${results.net.toFixed(2)}</p>
            <p><strong>Self-Employment Tax:</strong> ${results.selfEmploymentTax.toFixed(2)}</p>
            <p><strong>Estimated Federal Tax:</strong> ${results.federalTax.toFixed(2)}</p>
            <p><strong>Total Estimated Tax:</strong> ${results.totalTax.toFixed(2)}</p>
            <p><strong>Estimated Tax Bracket:</strong> {(results.federalRate * 100).toFixed(0)}%</p>

            <p style={{ marginTop:"1rem" }}>
              <strong>Recommended Set-Aside:</strong> ${results.recommendLow.toFixed(0)} – ${results.recommendHigh.toFixed(0)}
            </p>

            <p><strong>Quarterly Payment:</strong> ${results.quarterly.toFixed(2)}</p>
          </div>
        )}
      </div>

      {/* TABLE */}
      <div style={{ background:"#fff", padding:"1.5rem", borderRadius:"10px", marginBottom:"1.5rem" }}>
        <h2>Estimated Federal Tax Brackets (Simplified)</h2>

        <table style={{ width:"100%", borderCollapse:"collapse" }}>
          <thead>
            <tr>
              <th style={{ border:"1px solid #ccc", padding:"8px" }}>Income Range</th>
              <th style={{ border:"1px solid #ccc", padding:"8px" }}>Estimated Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ border:"1px solid #ccc", padding:"8px" }}>Up to $11,000</td><td style={{ border:"1px solid #ccc", padding:"8px" }}>~10%</td></tr>
            <tr><td style={{ border:"1px solid #ccc", padding:"8px" }}>$11,000 – $44,000</td><td style={{ border:"1px solid #ccc", padding:"8px" }}>~12%</td></tr>
            <tr><td style={{ border:"1px solid #ccc", padding:"8px" }}>$44,000 – $95,000</td><td style={{ border:"1px solid #ccc", padding:"8px" }}>~22%</td></tr>
            <tr><td style={{ border:"1px solid #ccc", padding:"8px" }}>$95,000 – $182,000</td><td style={{ border:"1px solid #ccc", padding:"8px" }}>~24%</td></tr>
            <tr><td style={{ border:"1px solid #ccc", padding:"8px" }}>$182,000+</td><td style={{ border:"1px solid #ccc", padding:"8px" }}>32%+</td></tr>
          </tbody>
        </table>

        <p style={{ marginTop:"1rem" }}>
          These are simplified estimates. Actual tax rates depend on deductions, filing status, and other factors.
        </p>
      </div>

      {/* HOW IT WORKS */}
      <div style={{ background:"#fff", padding:"1.5rem", borderRadius:"10px", marginBottom:"1.5rem" }}>
        <h2>How This Works</h2>
        <p>This tool estimates how much you may owe in taxes based on your income and expenses from self-employment or side hustle activities.</p>
        <p>When you enter your total income and subtract your business-related expenses, the tool calculates your estimated net income. From there, it estimates:</p>
        <ul>
          <li>Self-employment tax (which covers Social Security and Medicare)</li>
          <li>Federal income tax (based on simplified bracket assumptions)</li>
          <li>A combined estimate of total taxes owed</li>
        </ul>
        <p>It also provides guidance on how much you may want to set aside and what your quarterly tax payments could look like.</p>
        <p>This gives you a practical view of your real earnings after taxes — not just your gross income.</p>
      </div>

      {/* WHY */}
      <div style={{ background:"#fff", padding:"1.5rem", borderRadius:"10px", marginBottom:"1.5rem" }}>
        <h2>Why This Is Useful</h2>
        <p>One of the biggest challenges with side income is that taxes are not automatically withheld.</p>
        <p>Many people underestimate how much they owe and end up with an unexpected tax bill at the end of the year.</p>
        <p>This tool helps you:</p>
        <ul>
          <li>Estimate your true take-home income</li>
          <li>Avoid underpaying taxes</li>
          <li>Plan ahead with savings targets</li>
          <li>Understand how expenses reduce taxable income</li>
        </ul>
        <p>Instead of guessing, you can make informed decisions about pricing, spending, and saving.</p>
      </div>

      {/* OTHER APPROACHES */}
      <div style={{ background:"#fff", padding:"1.5rem", borderRadius:"10px", marginBottom:"1.5rem" }}>
        <h2>Other Successful Approaches</h2>
        <p>There are several practical strategies that experienced freelancers and self-employed individuals use to stay on top of taxes:</p>
        <ul>
          <li>A percentage-based approach involves consistently setting aside a fixed percentage (often 25–35%) of all income to cover taxes.</li>
          <li>A quarterly planning approach involves estimating taxes throughout the year and making payments every three months instead of facing a lump sum later.</li>
          <li>A separate tax account strategy helps prevent accidentally spending tax funds.</li>
          <li>Income smoothing helps manage fluctuations across high and low earning periods.</li>
        </ul>
      </div>

      {/* REDUCE TAX */}
      <div style={{ background:"#fff", padding:"1.5rem", borderRadius:"10px", marginBottom:"1.5rem" }}>
        <h2>How to Reduce and Control Your Tax Burden</h2>
        <ul>
          <li>Track all business expenses</li>
          <li>Separate personal and business finances</li>
          <li>Use retirement contributions</li>
          <li>Keep detailed documentation</li>
          <li>Time purchases strategically</li>
        </ul>
        <p>Small deductions add up over time, and consistent recordkeeping prevents missed opportunities.</p>
      </div>

      {/* PLAN */}
      <div style={{ background:"#fff", padding:"1.5rem", borderRadius:"10px", marginBottom:"1.5rem" }}>
        <h2>How to Plan Ahead</h2>
        <ul>
          <li>Set aside 25–30% of income</li>
          <li>Make quarterly payments</li>
          <li>Track income and expenses regularly</li>
          <li>Use separate accounts</li>
          <li>Review monthly</li>
        </ul>
        <p>By treating tax planning as part of your normal routine, you avoid surprises and stay in control of your finances.</p>
      </div>

      {/* RELATED */}
      <div style={{ background:"#fff", padding:"1.5rem", borderRadius:"10px", marginBottom:"1.5rem" }}>
        <h2>Related Tools</h2>
        <ul>
          <li onClick={()=>window.location.href="https://creditcarddebtpayoffcalculator.com"} style={{cursor:"pointer",textDecoration:"underline"}}>Credit Card Debt Payoff Calculator</li>
          <li onClick={()=>window.location.href="https://debtreducingcalculator.com"} style={{cursor:"pointer",textDecoration:"underline"}}>Debt Reducing Calculator</li>
          <li onClick={()=>window.location.href="https://mysubscriptioncost.com"} style={{cursor:"pointer",textDecoration:"underline"}}>Subscription Cost Calculator</li>
          <li onClick={()=>window.location.href="https://emailattachmentsize.com"} style={{cursor:"pointer",textDecoration:"underline"}}>Email Attachment Size Checker</li>
          <li onClick={()=>window.location.href="https://gpacalculator.site"} style={{cursor:"pointer",textDecoration:"underline"}}>GPA Calculator</li>
          <li onClick={()=>window.location.href="https://youtubetitlechecker.com"} style={{cursor:"pointer",textDecoration:"underline"}}>YouTube Title Checker</li>
        </ul>
      </div>

      {/* FOOTER */}
      <div style={{ fontSize:"0.9rem" }}>
        <span onClick={()=>window.location.href="/privacy"} style={{cursor:"pointer",textDecoration:"underline"}}>Privacy Policy</span> |{" "}
        <span onClick={()=>window.location.href="/terms"} style={{cursor:"pointer",textDecoration:"underline"}}>Terms of Service</span>
      </div>

    </main>
  )
}
