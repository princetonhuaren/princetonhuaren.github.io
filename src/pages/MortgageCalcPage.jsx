import React, { useState, useMemo } from "react";

const TERMS = [
  { label: "10 年", months: 120 },
  { label: "15 年", months: 180 },
  { label: "30 年", months: 360 },
];

function fmt(n) {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function calcSchedule(principal, annualRatePct, months) {
  const r = annualRatePct / 100 / 12;
  const monthly =
    r === 0
      ? principal / months
      : (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);

  const schedule = [];
  let balance = principal;
  for (let i = 1; i <= months; i++) {
    const interest = balance * r;
    const principalPmt = monthly - interest;
    balance = Math.max(0, balance - principalPmt);
    schedule.push({ period: i, interest, principal: principalPmt, balance });
  }
  return { monthly, schedule };
}

export default function MortgageCalcPage() {
  const [amount, setAmount] = useState("600000");
  const [rate, setRate] = useState("6.5");
  const [termIdx, setTermIdx] = useState(2); // 30yr default
  const [showAll, setShowAll] = useState(false);

  const principal = parseFloat(amount.replace(/,/g, "")) || 0;
  const annualRate = parseFloat(rate) || 0;
  const months = TERMS[termIdx].months;

  const result = useMemo(() => {
    if (principal <= 0 || annualRate <= 0) return null;
    return calcSchedule(principal, annualRate, months);
  }, [principal, annualRate, months]);

  const totalInterest = result ? result.monthly * months - principal : 0;
  const totalPayment = result ? result.monthly * months : 0;

  const displayRows = result
    ? showAll
      ? result.schedule
      : result.schedule.slice(0, 24)
    : [];

  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "24px 16px" }}>
      <div style={{ marginBottom: 6, fontSize: "0.85rem", color: "#999" }}>工具</div>
      <h1 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 8, color: "#1a1a1a" }}>
        房贷月供计算器
      </h1>
      <p style={{ color: "#666", fontSize: "0.95rem", borderLeft: "3px solid #2980b9", paddingLeft: 12, margin: "0 0 28px", lineHeight: 1.6 }}>
        输入贷款金额和利率，查看每月月供及本息明细。
      </p>

      {/* Inputs */}
      <div style={{ background: "#f8f9fa", border: "1px solid #eee", borderRadius: 12, padding: "20px 20px 16px", marginBottom: 24 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 16 }}>
          <label style={{ flex: "1 1 180px" }}>
            <div style={{ fontSize: "0.82rem", color: "#666", marginBottom: 6 }}>贷款金额（美元）</div>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="600000"
              style={{
                width: "100%", padding: "9px 12px", borderRadius: 8,
                border: "1px solid #ddd", fontSize: "1rem", boxSizing: "border-box",
              }}
            />
          </label>
          <label style={{ flex: "1 1 140px" }}>
            <div style={{ fontSize: "0.82rem", color: "#666", marginBottom: 6 }}>年利率（%）</div>
            <input
              type="number"
              step="0.01"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="6.5"
              style={{
                width: "100%", padding: "9px 12px", borderRadius: 8,
                border: "1px solid #ddd", fontSize: "1rem", boxSizing: "border-box",
              }}
            />
          </label>
        </div>
        <div>
          <div style={{ fontSize: "0.82rem", color: "#666", marginBottom: 8 }}>贷款期限</div>
          <div style={{ display: "flex", gap: 8 }}>
            {TERMS.map((t, i) => (
              <button
                key={t.label}
                onClick={() => { setTermIdx(i); setShowAll(false); }}
                style={{
                  padding: "7px 20px", borderRadius: 20, border: "1px solid",
                  borderColor: termIdx === i ? "#2980b9" : "#ddd",
                  background: termIdx === i ? "#2980b9" : "#fff",
                  color: termIdx === i ? "#fff" : "#555",
                  fontWeight: termIdx === i ? 700 : 400,
                  fontSize: "0.9rem", cursor: "pointer",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Summary */}
      {result && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
          <div style={{ flex: "1 1 160px", background: "#2980b9", borderRadius: 12, padding: "16px 20px", color: "#fff" }}>
            <div style={{ fontSize: "0.8rem", opacity: 0.85, marginBottom: 4 }}>每月月供</div>
            <div style={{ fontSize: "1.6rem", fontWeight: 800 }}>${fmt(result.monthly)}</div>
          </div>
          <div style={{ flex: "1 1 160px", background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: "16px 20px" }}>
            <div style={{ fontSize: "0.8rem", color: "#999", marginBottom: 4 }}>总利息</div>
            <div style={{ fontSize: "1.3rem", fontWeight: 700, color: "#c0392b" }}>${fmt(totalInterest)}</div>
          </div>
          <div style={{ flex: "1 1 160px", background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: "16px 20px" }}>
            <div style={{ fontSize: "0.8rem", color: "#999", marginBottom: 4 }}>还款总额</div>
            <div style={{ fontSize: "1.3rem", fontWeight: 700, color: "#1a1a1a" }}>${fmt(totalPayment)}</div>
          </div>
        </div>
      )}

      {/* Table */}
      {result && (
        <div>
          <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#1a1a1a", marginBottom: 12 }}>
            分期还款明细
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead>
                <tr style={{ background: "#f4f6f8" }}>
                  {["期数", "月供", "利息", "本金", "剩余余额"].map((h) => (
                    <th key={h} style={{ padding: "9px 12px", textAlign: "right", fontWeight: 600, color: "#555", borderBottom: "2px solid #eee", whiteSpace: "nowrap" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {displayRows.map((row, i) => (
                  <tr key={row.period} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 12px", textAlign: "right", color: "#888" }}>{row.period}</td>
                    <td style={{ padding: "7px 12px", textAlign: "right" }}>${fmt(result.monthly)}</td>
                    <td style={{ padding: "7px 12px", textAlign: "right", color: "#c0392b" }}>${fmt(row.interest)}</td>
                    <td style={{ padding: "7px 12px", textAlign: "right", color: "#27ae60" }}>${fmt(row.principal)}</td>
                    <td style={{ padding: "7px 12px", textAlign: "right" }}>${fmt(row.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {!showAll && result.schedule.length > 24 && (
            <div style={{ textAlign: "center", marginTop: 16 }}>
              <button
                onClick={() => setShowAll(true)}
                style={{
                  padding: "8px 24px", borderRadius: 20, border: "1px solid #2980b9",
                  background: "#fff", color: "#2980b9", fontWeight: 600,
                  fontSize: "0.9rem", cursor: "pointer",
                }}
              >
                展开全部 {result.schedule.length} 期
              </button>
            </div>
          )}
        </div>
      )}

      {!result && (
        <div style={{ textAlign: "center", padding: "40px 0", color: "#bbb", fontSize: "0.95rem" }}>
          输入贷款金额和利率后显示结果
        </div>
      )}

      <p style={{ marginTop: 32, color: "#aaa", fontSize: "0.82rem", textAlign: "center" }}>
        仅供参考，实际月供以银行合同为准
      </p>
    </div>
  );
}
