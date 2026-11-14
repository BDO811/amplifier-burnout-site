# Security Policy

This repository (`amplifier-burnout-site`) is the marketing and account site for
Amplifier for Zoom: Burnout Measurement, live at https://burnout.amplifierhealth.com.
It is operated as a single continuously-deployed static site rather than a set of
versioned releases. Security fixes are applied directly to `main` and deploy
automatically.

## Reporting a Vulnerability

If you believe you have found a security vulnerability in this application, please
report it privately by emailing amit@amplifierhealth.com. Please do not open a
public GitHub issue for security reports. When reporting, please include a
description of the vulnerability and its potential impact, steps to reproduce the
issue, and any relevant logs, screenshots, or proof-of-concept code.

We aim to acknowledge reports within 2 business days and to provide a remediation
timeline once the issue is confirmed.

## Our Security Practices

**Static analysis.** Every push and pull request to `main`, and a weekly schedule,
runs an automated Semgrep SAST scan (OWASP Top 10, secrets, and default rule sets)
via GitHub Actions, with results retained as a scanner-generated SARIF artifact.

**Dependency monitoring.** GitHub Dependabot is configured to monitor and alert on
known vulnerabilities in GitHub Actions dependencies, with Dependabot security
alerts enabled on this repository.

**Transport security.** The production endpoint is served over HTTPS only.

**Account data.** User accounts are managed through Firebase Authentication;
account data is stored in Firebase, access-controlled through Firebase security
rules rather than through this static site's code.

**Organizational security.** Amplifier Health, Inc. maintains a company-wide
Information Security Policy covering access control, change management, vendor
review, and incident response, and undergoes an annual SOC 2 Type II audit.
