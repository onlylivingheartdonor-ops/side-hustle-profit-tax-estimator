"use client"

import { useState, useEffect } from "react"

const BRACKETS = [
  { min: 0,      max: 11000,    rate: 0.10, label: "Up to $11,000",      display: "~10%" },
  { min: 11000,  max: 44000,    rate: 0.12, label: "$11,001 - $44,000",  display: "~12%" },
  { min: 44000,  max: 95000,    rate: 0.22, label: "$44,001 - $95,000",  display: "~22%" },
  { min: 95000,  max: 182000,   rate: 0.24, label: "$95,001 - $182,000", display: "~24%" },
  { min: 182000, max: Infinity, rate: 0.32, label: "$182,001+",          display: "32%+"  },
]

function fmt(n) {
  return "$" + Math.round(n).toLocaleString("en-US")
}

function calcTax(income, expenses, other) {
  const net   = Math.max((income || 0) - (expenses || 0), 0)
  const total = net + (other || 0)
  const se    = net * 0.153
  const bracket = BRACKETS.find(b => total >= b.min && total < b.max) || BRACKETS[BRACKETS.length - 1]
  const fed   = net * bracket.rate
  const tax   = se + fed
  return { net, total, se, fed, tax, bracket, lo: net * 0.25, hi: net * 0.30, quarterly: tax / 4 }
}

export default function SideHustleTaxCalculator() {
  const [income,   setIncome]   = useState("")
  const [expenses, setExpenses] = useState("")
  const [other,    setOther]    = useState("")
  const [results,  setResults]  = useState(null)
  const [live,     setLive]     = useState(null)

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
      <button className="she-btn" onClick={handleCalculate}>Calculate my tax estimate</button>

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
            <p className="she-setaside-val">{fmt(results.lo)} - {fmt(results.hi)}</p>
            <p className="she-setaside-sub">Based on 25-30% of net income</p>
          </div>
          <div className="she-quarterly">
            <div>
              <p className="she-q-label">Quarterly estimated payment</p>
              <p className="she-q-dates">Due: Apr 15 &middot; Jun 16 &middot; Sep 15 &middot; Jan 15</p>
            </div>
            <p className="she-q-val">{fmt(results.quarterly)}</p>
          </div>
        </div>
      )}

      {live && activeBracket && (
        <p className="she-active-amount" style={{ marginTop: "1rem" }}>
          Your estimated bracket: {activeBracket.label} at {activeBracket.display} &mdash; estimated federal income tax: {fmt(live.fed)}
        </p>
      )}
    </div>
  )
}
