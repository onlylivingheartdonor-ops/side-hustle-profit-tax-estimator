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
      fontFamily:"system-ui"
    }}>

      {/* TOOL */}
      <div style={{ background:"#fff", padding:"1.5rem", borderRadius:"10px", marginBottom:"1.5rem" }}>
        <h1>Side Hustle Tax Estimator</h1>

        <label>Total Side Hustle Income</label>
        <input value={income} onChange={(e)=>setIncome(e.target.value)} />

        <br /><br />

        <label>Business Expenses</label>
        <input value={expenses} onChange={(e)=>setExpenses(e.target.value)} />

        <br /><br />

        <label>Other Income (optional)</label>
        <input value={otherIncome} onChange={(e)=>setOtherIncome(e.target.value)} />

        <p style={{ fontSize:"0.9rem" }}>
          Include job or other income to better estimate your tax bracket.
        </p>

        <button onClick={calculate}>Estimate Taxes</button>

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

            {/* SIMPLE VISUAL */}
            <div style={{ marginTop:"1rem" }}>
              <div>Taxes</div>
              <div style={{ background:"#d9534f", height:"10px", width:"200px" }} />
              <div style={{ marginTop:"10px" }}>Take-Home</div>
              <div style={{ background:"#5cb85c", height:"10px", width:"300px" }} />
            </div>
          </div>
        )}
      </div>

      {/* TABLE */}
      <div style={{ background:"#fff", padding:"1.5rem", borderRadius:"10px", marginBottom:"1.5rem" }}>
        <h2>Estimated Federal Tax Brackets</h2>

        <table style={{ width:"100%", borderCollapse:"collapse" }}>
          <tbody>
            <tr><td>Up to $11,000</td><td>~10%</td></tr>
            <tr><td>$11,000 – $44,000</td><td>~12%</td></tr>
            <tr><td>$44,000 – $95,000</td><td>~22%</td></tr>
            <tr><td>$95,000+</td><td>~24%+</td></tr>
          </tbody>
        </table>

        <p style={{ marginTop:"1rem" }}>
          These are simplified estimates. Actual taxes vary based on deductions and filing status.
        </p>
      </div>

      {/* HOW IT WORKS */}
      <div style={{ background:"#fff", padding:"1.5rem", borderRadius:"10px", marginBottom:"1.5rem" }}>
        <h2>How This Works</h2>
        <p>This tool estimates taxes based on income, expenses, and approximate tax rates.</p>
      </div>

      {/* WHY */}
      <div style={{ background:"#fff", padding:"1.5rem", borderRadius:"10px", marginBottom:"1.5rem" }}>
        <h2>Why This Is Useful</h2>
        <p>Taxes are not withheld from side income. This tool helps prevent surprise tax bills.</p>
      </div>

      {/* IF HIGH */}
      <div style={{ background:"#fff", padding:"1.5rem", borderRadius:"10px", marginBottom:"1.5rem" }}>
        <h2>If Your Taxes Are Higher Than Expected</h2>
        <ul>
          <li>Track expenses carefully</li>
          <li>Increase set-aside percentage</li>
          <li>Adjust pricing or income goals</li>
        </ul>
      </div>

      {/* OTHER */}
      <div style={{ background:"#fff", padding:"1.5rem", borderRadius:"10px", marginBottom:"1.5rem" }}>
        <h2>Other Successful Approaches</h2>
        <ul>
          <li>Set aside 25–30% of income</li>
          <li>Use a separate tax account</li>
          <li>Make quarterly payments</li>
        </ul>
      </div>

      {/* REDUCE TAX */}
      <div style={{ background:"#fff", padding:"1.5rem", borderRadius:"10px", marginBottom:"1.5rem" }}>
        <h2>How to Reduce and Control Your Tax Burden</h2>
        <ul>
          <li>Track all business expenses</li>
          <li>Separate personal and business finances</li>
          <li>Use retirement contributions</li>
          <li>Keep detailed records</li>
        </ul>
      </div>

      {/* PLAN */}
      <div style={{ background:"#fff", padding:"1.5rem", borderRadius:"10px", marginBottom:"1.5rem" }}>
        <h2>How to Plan Ahead</h2>
        <ul>
          <li>Set aside taxes regularly</li>
          <li>Review monthly</li>
          <li>Make quarterly payments</li>
        </ul>
      </div>

      {/* RELATED */}
      <div style={{ background:"#fff", padding:"1.5rem", borderRadius:"10px", marginBottom:"1.5rem" }}>
        <h2>Related Tools</h2>
        <ul>
          <li onClick={()=>window.location.href="https://creditcarddebtpayoffcalculator.com"} style={{cursor:"pointer",textDecoration:"underline"}}>Credit Card Debt Payoff Calculator</li>
          <li onClick={()=>window.location.href="https://debtreducingcalculator.com"} style={{cursor:"pointer",textDecoration:"underline"}}>Debt Reducing Calculator</li>
          <li onClick={()=>window.location.href="https://sidehustletaxestimator.com"} style={{cursor:"pointer",textDecoration:"underline"}}>Side Hustle Tax Estimator</li>
          <li onClick={()=>window.location.href="https://highyieldsavingscalculator.com"} style={{cursor:"pointer",textDecoration:"underline"}}>High Yield Savings Calculator</li>
          <li onClick={()=>window.location.href="https://retirementsavingsgap.com"} style={{cursor:"pointer",textDecoration:"underline"}}>Retirement Savings Gap</li>
          <li onClick={()=>window.location.href="https://lifeinsurancecoveragecalculator.com"} style={{cursor:"pointer",textDecoration:"underline"}}>Life Insurance Coverage Calculator</li>
          <li onClick={()=>window.location.href="https://onlinecourseroi.com"} style={{cursor:"pointer",textDecoration:"underline"}}>Online Course ROI Calculator</li>
          <li onClick={()=>window.location.href="https://mysubscriptioncost.com"} style={{cursor:"pointer",textDecoration:"underline"}}>Subscription Cost Calculator</li>
          <li onClick={()=>window.location.href="https://emailattachmentsize.com"} style={{cursor:"pointer",textDecoration:"underline"}}>Email Attachment Size Checker</li>
          <li onClick={()=>window.location.href="https://gpacalculator.site"} style={{cursor:"pointer",textDecoration:"underline"}}>GPA Calculator</li>
          <li onClick={()=>window.location.href="https://youtubetitlechecker.com"} style={{cursor:"pointer",textDecoration:"underline"}}>YouTube Title Checker</li>
          <li onClick={()=>window.location.href="https://strongpasswordbuilder.com"} style={{cursor:"pointer",textDecoration:"underline"}}>Strong Password Builder</li>
          <li onClick={()=>window.location.href="https://coolusernamegenerator.com"} style={{cursor:"pointer",textDecoration:"underline"}}>Cool Username Generator</li>
        </ul>
      </div>

      {/* FOOTER */}
      <div style={{ fontSize:"0.9rem" }}>
        <span onClick={()=>window.location.href="/privacy"} style={{cursor:"pointer",textDecoration:"underline"}}>
          Privacy Policy
        </span>{" "}
        |{" "}
        <span onClick={()=>window.location.href="/terms"} style={{cursor:"pointer",textDecoration:"underline"}}>
          Terms of Service
        </span>
      </div>

    </main>
  )
}

