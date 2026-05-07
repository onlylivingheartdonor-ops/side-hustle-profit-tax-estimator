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
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "2rem",
        background: "#f4f6fb",
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, sans-serif"
      }}
    >
      {/* TOOL */}
      <div
        style={{
          background: "#ffffff",
          padding: "1.5rem",
          borderRadius: "10px",
          marginBottom: "1.5rem"
        }}
      >
        <h1>Side Hustle Profit and Tax Estimator</h1>

        <p>
          Estimate your side hustle profit and taxes after expenses. Built for
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

        <div style={{ marginTop: "1.5rem" }}>
          <p><strong>Estimated Profit:</strong> ${profit.toFixed(2)}</p>
          <p><strong>Estimated Taxes:</strong> ${estimatedTax.toFixed(2)}</p>
          <p><strong>Estimated Take‑Home Pay:</strong> ${takeHome.toFixed(2)}</p>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div
        style={{
          background: "#ffffff",
          padding: "1.5rem",
          borderRadius: "10px",
          marginBottom: "1.5rem"
        }}
      >
        <h2>How This Works</h2>
        <p>
          This estimator subtracts expenses from income to calculate profit,
          then applies an estimated tax rate to show your potential tax burden.
          Actual taxes depend on filing status and deductions.
        </p>
      </div>

      {/* RELATED TOOLS */}
      <div
        style={{
          background: "#ffffff",
          padding: "1.5rem",
          borderRadius: "10px",
          marginBottom: "1.5rem"
        }}
      >
        <h2>Related Tools</h2>
        <ul>
          <li onClick={() => window.location.href = "https://creditcarddebtpayoffcalculator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
            Credit Card Debt Payoff Calculator
          </li>
          <li onClick={() => window.location.href = "https://debtreducingcalculator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
            Debt Payoff Calculator
          </li>
          <li onClick={() => window.location.href = "https://mysubscriptioncost.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
            Subscription Cost Calculator
          </li>
          <li onClick={() => window.location.href = "https://emailattachmentsize.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
            Email Attachment Size Checker
          </li>
        </ul>
      </div>

      {/* DISCLAIMER + FOOTER */}
      <div style={{ fontSize: "0.9rem", color: "#555", marginBottom: "1rem" }}>
        This tool provides estimates for informational purposes only.
      </div>

      <div style={{ fontSize: "0.9rem" }}>
        <span
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => window.location.href = "/privacy"}
        >
          Privacy Policy
        </span>
        {" | "}
        <span
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => window.location.href = "/terms"}
        >
          Terms of Service
        </span>
      </div>
    </main>
  )
}
