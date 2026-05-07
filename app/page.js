"use client"

import { useState } from "react"

export default function Page() {
  const [income, setIncome] = useState(0)
  const [expenses, setExpenses] = useState(0)
  const [taxRate, setTaxRate] = useState(25)

  const profit = income - expenses
  const estimatedTax = profit > 0 ? profit * (taxRate / 100) : 0
  const takeHome = profit - estimatedTax

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>Side Hustle Profit and Tax Estimator</h1>

      <p>
        Estimate your side hustle profit and taxes after expenses. Useful for
        freelancers, gig workers, and independent contractors.
      </p>

      <div style={{ marginTop: "1.5rem" }}>
        <label>Monthly Income</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
          style={{ width: "100%", padding: "8px", marginBottom: "1rem" }}
        />

        <label>Monthly Expenses</label>
        <input
          type="number"
          value={expenses}
          onChange={(e) => setExpenses(Number(e.target.value))}
          style={{ width: "100%", padding: "8px", marginBottom: "1rem" }}
        />

        <label>Estimated Tax Rate (percent)</label>
        <input
          type="number"
          value={taxRate}
          onChange={(e) => setTaxRate(Number(e.target.value))}
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <div style={{ marginTop: "2rem" }}>
        <p>Estimated Profit: ${profit.toFixed(2)}</p>
        <p>Estimated Taxes: ${estimatedTax.toFixed(2)}</p>
        <p>Estimated Take Home Pay: ${takeHome.toFixed(2)}</p>
      </div>

      <section style={{ marginTop: "2rem" }}>
        <h2>How This Works</h2>
        <p>
          This estimator subtracts expenses from income to calculate profit,
          then applies an estimated tax rate to show your potential tax burden.
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Related Tools</h2>
        <ul>
          <li onClick={() => window.location.href = "https://creditcarddebtpayoffcalculator.com"}>Credit Card Debt Payoff Calculator</li>
          <li onClick={() => window.location.href = "https://debtreducingcalculator.com"}>Debt Payoff Calculator</li>
          <li onClick={() => window.location.href = "https://mysubscriptioncost.com"}>Subscription Cost Calculator</li>
          <li onClick={() => window.location.href = "https://emailattachmentsize.com"}>Email Attachment Size Checker</li>
        </ul>
      </section>

      <p style={{ marginTop: "2rem", fontSize: "0.9rem" }}>
        This tool provides estimates for informational purposes only.
      </p>

      <p style={{ fontSize: "0.9rem" }}>
        <span onClick={() => window.location.href = "/privacy"}>Privacy Policy</span>{" "}
        |{" "}
        <span onClick={() => window.location.href = "/terms"}>Terms of Service</span>
      </p>
    </main>
  )
}
