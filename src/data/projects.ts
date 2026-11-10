export interface Project {
  name: string
  tag: string
  description: string
  url: string
}

const GH = 'https://github.com/HelenArams/'

export const PROJECTS: Project[] = [
  {
    name: 'card-auth-simulator',
    tag: 'Java · Spring Boot',
    description: 'A small issuer-side authorization engine: rule pipeline, ISO 8583 response codes, balance holds, velocity limits and idempotent replays.',
    url: GH + 'card-auth-simulator',
  },
  {
    name: 'iso8583-go',
    tag: 'Go',
    description: 'Dependency-free ISO 8583 packer and unpacker with primary and secondary bitmaps, LLVAR/LLLVAR fields and a demo authorization switch.',
    url: GH + 'iso8583-go',
  },
  {
    name: 'settlement-recon-cli',
    tag: 'Go · CLI',
    description: 'Reconciles authorizations against scheme clearing records: tiered matching, FX tolerances, late presentments, duplicates and net settlement per currency.',
    url: GH + 'settlement-recon-cli',
  },
  {
    name: 'payment-webhooks',
    tag: 'Java · Spring Boot',
    description: 'HMAC-signed payment webhooks with at-least-once delivery, exponential backoff, dead-letter queue and replay.',
    url: GH + 'payment-webhooks',
  },
  {
    name: 'idempotency-spring-starter',
    tag: 'Java · Library',
    description: 'Spring Boot starter that adds @Idempotent to REST endpoints so client retries never double-charge. In-memory and Redis stores.',
    url: GH + 'idempotency-spring-starter',
  },
  {
    name: 'fraud-triage-agent',
    tag: 'AI · LangGraph · Bedrock',
    description: 'Triage agent for suspicious card transactions: rule-based risk scoring, Claude investigation with tools via Anthropic API or AWS Bedrock, guardrails, and human-in-the-loop review.',
    url: GH + 'fraud-triage-agent',
  },
  {
    name: 'decline-code-assistant',
    tag: 'AI · LangGraph · MCP',
    description: 'Agent on Claude that explains why card transactions declined, grounded in a curated knowledge base with citations. Also runs as an MCP server.',
    url: GH + 'decline-code-assistant',
  },
  {
    name: 'luhn-bin-kit',
    tag: 'Go',
    description: 'Luhn validation, BIN and scheme detection, PAN masking and test-card generation as a Go library and CLI.',
    url: GH + 'luhn-bin-kit',
  },
  {
    name: 'pytest-influxdb plugin',
    tag: 'Python · PyPI',
    description: 'Open-source pytest plugin that streams live test results to InfluxDB for dashboards and reporting tools.',
    url: 'https://pypi.org/project/pytest-influxdb/',
  },
]
