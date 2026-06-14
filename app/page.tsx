'use client';

import { useState } from 'react';

type PricingMode = 'onetime' | 'monthly';

export default function PricingPage() {
  const [mode, setMode] = useState<PricingMode>('onetime');
  const isMonthly = mode === 'monthly';

  const ctaLabels: Record<string, Record<PricingMode, string>> = {
    t1: { onetime: 'Claim your spot →', monthly: 'Enroll in Launchpad →' },
    t2: { onetime: 'Claim your spot →', monthly: 'Enroll in Growth Engine →' },
    t3: { onetime: 'Claim your spot →', monthly: 'Enroll in Unfair Advantage →' },
  };

  const subLabels: Record<string, Record<PricingMode, string>> = {
    t1: { onetime: '50% off · limited to 15 spots/month', monthly: 'Ad spend billed separately' },
    t2: { onetime: '50% off · limited to 15 spots/month', monthly: 'Ad spend billed separately' },
    t3: { onetime: '50% off · limited to 15 spots/month', monthly: 'Ad spend billed separately' },
  };

  return (
    <div className="wrap">
      {/* Header */}
      <div className="header">
        <p className="eyebrow">Done-For-You Systems</p>
        <h1 className="headline">
          We build it.
          <br />
          <em>You collect the revenue.</em>
        </h1>
        <p className="subhead">
          Pick your tier. Pay how you want — one-time or ongoing monthly management.
          Same team, same quality, your call.
        </p>

        <div className="toggle-outer">
          <div className="toggle-wrap">
            <button
              className={`tog ${!isMonthly ? 'active' : ''}`}
              onClick={() => setMode('onetime')}
            >
              One-time
            </button>
            <button
              className={`tog ${isMonthly ? 'active' : ''}`}
              onClick={() => setMode('monthly')}
            >
              Monthly
            </button>
          </div>
          <span className={`save-tag ${isMonthly ? 'show' : ''}`}>
            Save vs. agency rates · 3-mo min
          </span>
        </div>
      </div>

      {/* Spots bar */}
      <div className="spots">
        <span className="dot"></span>
        Only 15 client spots available per month — we cap intake to protect quality
      </div>

      {/* Pricing Grid */}
      <div className="grid">
        {/* TIER 1 */}
        <div className="card">
          <div className="card-badge badge-gray">Tier 1 · Launchpad</div>
          <div className="card-body">
            <p className="tier-label">Full ads system</p>
            <h2 className="tier-title">Meta ads built &amp; launched for you</h2>

            {!isMonthly && (
              <div className="pricing-section">
                <p className="pricing-mode-label">One-time · Done for you</p>
                <p className="price-old">Was $7,000</p>
                <div className="price-row">
                  <span className="price-num">$3,500</span>
                </div>
                <p className="price-note">or 2 × $1,850 · Klarna available · 50% off</p>
              </div>
            )}

            {isMonthly && (
              <div className="pricing-section">
                <p className="pricing-mode-label">Monthly · Ongoing management</p>
                <p className="price-old">&nbsp;</p>
                <div className="price-row">
                  <span className="price-num">$2,995</span>
                  <span className="price-per">/mo</span>
                </div>
                <p className="price-note">3-month minimum · 30-day cancel notice</p>
              </div>
            )}

            <hr className="price-divider" />
            <p className="fit-line">
              You have an offer. We build the full ad system and hand it to you running.
            </p>

            <p className="section-label">What we build</p>
            <ul className="feats">
              <li><span className="ck ck-std">✓</span>Cold + warm + retargeting campaigns</li>
              <li><span className="ck ck-std">✓</span>Facebook &amp; Instagram ads (10+ creatives)</li>
              <li><span className="ck ck-std">✓</span>Pixel, CAPI &amp; conversion tracking</li>
              <li><span className="ck ck-std">✓</span>Audience research &amp; targeting strategy</li>
              <li><span className="ck ck-std">✓</span>Email + SMS follow-up automation</li>
              <li><span className="ck ck-std">✓</span>CRM &amp; lead pipeline setup</li>
              <li><span className="ck ck-std">✓</span>Personal walkthrough + launch support</li>
              {isMonthly && (
                <>
                  <li><span className="ck ck-blue">✓</span>Weekly performance reports</li>
                  <li><span className="ck ck-blue">✓</span>Monthly strategy call</li>
                  <li><span className="ck ck-blue">✓</span>Ongoing A/B testing &amp; optimization</li>
                </>
              )}
            </ul>

            <button className="cta cta-std">{ctaLabels.t1[mode]}</button>
            <p className="cta-note">{subLabels.t1[mode]}</p>
          </div>
        </div>

        {/* TIER 2 */}
        <div className="card pop">
          <div className="card-badge badge-blue">Most Popular · Tier 2 · Growth Engine</div>
          <div className="card-body">
            <p className="tier-label">Ads + full funnel</p>
            <h2 className="tier-title">Complete revenue system, built &amp; owned by you</h2>

            {!isMonthly && (
              <div className="pricing-section">
                <p className="pricing-mode-label">One-time · Done for you</p>
                <p className="price-old">Was $12,000</p>
                <div className="price-row">
                  <span className="price-num">$6,000</span>
                </div>
                <p className="price-note">or 2 × $3,150 · Klarna available · 50% off</p>
              </div>
            )}

            {isMonthly && (
              <div className="pricing-section">
                <p className="pricing-mode-label">Monthly · Ongoing management</p>
                <p className="price-old">&nbsp;</p>
                <div className="price-row">
                  <span className="price-num">$4,995</span>
                  <span className="price-per">/mo</span>
                </div>
                <p className="price-note">3-month minimum · 30-day cancel notice</p>
              </div>
            )}

            <hr className="price-divider" />
            <p className="fit-line">
              No funnel? No problem. We build everything from scratch and hand it back live.
            </p>

            <p className="section-label">Everything in Tier 1, plus</p>
            <ul className="feats">
              <li><span className="ck ck-std">✓</span>Custom high-converting sales funnel</li>
              <li><span className="ck ck-std">✓</span>All landing, sales &amp; thank-you pages</li>
              <li><span className="ck ck-std">✓</span>Checkout flow &amp; mobile optimization</li>
              <li><span className="ck ck-std">✓</span>Full CRM + pipeline + lead scoring</li>
              <li><span className="ck ck-std">✓</span>Warm audience activation from day one</li>
              <li><span className="ck ck-std">✓</span>Priority access to our team</li>
              {isMonthly && (
                <>
                  <li><span className="ck ck-blue">✓</span>Monthly funnel conversion review</li>
                  <li><span className="ck ck-blue">✓</span>Ongoing funnel &amp; automation updates</li>
                </>
              )}
            </ul>

            <button className="cta cta-blue">{ctaLabels.t2[mode]}</button>
            <p className="cta-note">{subLabels.t2[mode]}</p>
          </div>
        </div>

        {/* TIER 3 */}
        <div className="card vip">
          <div className="card-badge badge-purple">Tier 3 · Unfair Advantage</div>
          <div className="card-body">
            <p className="tier-label">Full system + AI + strategy</p>
            <h2 className="tier-title">Everything + AI, ManyChat &amp; 1-on-1 consulting</h2>

            {!isMonthly && (
              <div className="pricing-section">
                <p className="pricing-mode-label">One-time · Done for you</p>
                <p className="price-old">Was $20,000</p>
                <div className="price-row">
                  <span className="price-num">$10,000</span>
                </div>
                <p className="price-note">or 2 × $5,250 · Klarna available · 50% off</p>
              </div>
            )}

            {isMonthly && (
              <div className="pricing-section">
                <p className="pricing-mode-label">Monthly · Ongoing management</p>
                <p className="price-old">&nbsp;</p>
                <div className="price-row">
                  <span className="price-num">$8,995</span>
                  <span className="price-per">/mo</span>
                </div>
                <p className="price-note">3-month minimum · 30-day cancel notice</p>
              </div>
            )}

            <hr className="price-divider" />
            <p className="fit-line">
              For operators at $20K+/mo ready to scale with a full system and private strategist.
            </p>

            <p className="section-label">Everything in Tier 2, plus</p>
            <ul className="feats">
              <li><span className="ck ck-purple">✓</span>Custom AI agent for your sales process</li>
              <li><span className="ck ck-purple">✓</span>ManyChat DM → lead → booked call</li>
              <li><span className="ck ck-purple">✓</span>Private 1-on-1 strategy sessions</li>
              <li><span className="ck ck-purple">✓</span>Offer &amp; messaging deep-dive</li>
              <li><span className="ck ck-purple">✓</span>Advanced scaling playbook</li>
              <li><span className="ck ck-purple">✓</span>First access to new tools &amp; features</li>
              {isMonthly && (
                <>
                  <li><span className="ck ck-purple">✓</span>Priority Slack access to our team</li>
                  <li><span className="ck ck-purple">✓</span>Quarterly offer &amp; positioning review</li>
                </>
              )}
            </ul>

            <button className="cta cta-purple">{ctaLabels.t3[mode]}</button>
            <p className="cta-note">{subLabels.t3[mode]}</p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="legend">
        <div className="legend-item">
          <span className="legend-dot ld-std"></span>Included in both plans
        </div>
        <div className="legend-item">
          <span className="legend-dot ld-blue"></span>Monthly plan add-ons
        </div>
        <div className="legend-item">
          <span className="legend-dot ld-purple"></span>Tier 3 exclusives
        </div>
      </div>

      {/* Guarantee */}
      <div className="guarantee">
        <span className="guar-icon">🛡</span>
        <p className="guar-text">
          <strong>Done-right guarantee —</strong> if we don&apos;t deliver every asset,
          campaign, and automation in your package, we keep building until it&apos;s
          right. No excuses, no extra charges. Ad spend is billed separately to
          your account.
        </p>
      </div>

      {/* Footer */}
      <footer>
        Results not typical. Your outcome depends on your offer, effort, and market.
      </footer>
    </div>
  );
}
