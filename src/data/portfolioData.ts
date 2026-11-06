export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: 'Web3 & Blockchain' | 'Cybersecurity' | 'Web Development';
  challenge: string;
  solution: string;
  impactMetric: string;
  tags: string[];
  demoUrl: string;
  docUrl: string;
  architectureDetails: string[];
  deliverableArtifacts: string[];
}

export interface ServicePillar {
  id: string;
  title: string;
  iconName: 'Cpu' | 'Network' | 'ShieldCheck' | 'Layers';
  summary: string;
  deliverables: string[];
  tooling: string[];
  highlightMetric: string;
  codeSnippet: string;
  codeLang: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface TechStackCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    focus: string;
  }[];
}

export const portfolioData = {
  meta: {
    studioName: 'whybh labs',
    engineerTitle: 'Principal Systems, Web3 & Security Engineer',
    tagline: 'Engineering Resilient Web3 Protocols, Secure Systems, and Scalable Web Architectures.',
    systemStatus: 'System Operational',
    statusDetail: 'Mainnet Node Synced • Subgraphs Nominal',
    availability: 'Available for select Q4/Q1 Engineering & Audit contracts',
    email: 'contact@whybh.dev',
    github: 'https://github.com/scarzze3-bit',
    twitter: 'https://x.com/whybh_labs',
    linkedin: 'https://linkedin.com/company/',
    pgpFingerprint: '4A89 2B91 FE40 9811 C002 88AA 71FD EE12 990B 314A',
    foundedYear: 2024,
    location: 'Global Remote / UTC-8 to UTC+3',
  },

  hero: {
    badge: '[ SOFTWARE ENGINEERING & SECURITY STUDIO ]',
    headline: 'Engineering Resilient Web3 Protocols, Secure Systems, and Scalable Web Architectures.',
    subheadline:
      'whybh labs is a technical engineering studio led by a Principal Full-Stack & Blockchain Engineer. We architect hardened smart contract protocols, zero-trust cloud backends, and fault-tolerant decentralized applications for teams who cannot afford downtime or exploit vulnerabilities.',
    ctas: {
      primary: {
        text: 'Explore Case Studies',
        href: '#work',
      },
      secondary: {
        text: 'Request Security Audit / Build',
        href: '#contact',
      },
    },
    systemCapabilities: [
      {
        id: 'contracts',
        label: 'Smart Contracts',
        status: 'Formally Verified',
        metric: '0 Critical Exploits',
        detail: 'Foundry • Slither • Echidna Fuzzing',
        badge: 'Hardened',
      },
      {
        id: 'architecture',
        label: 'Web Architecture',
        status: 'High-Availability',
        metric: '99.99% Uptime',
        detail: 'P99 < 35ms • Zero-Downtime CI/CD',
        badge: 'Fault-Tolerant',
      },
      {
        id: 'security',
        label: 'API Security',
        status: 'Zero-Trust Enforced',
        metric: 'mTLS + RBAC',
        detail: 'OWASP ASVS • Encrypted Keyring',
        badge: 'Defensive',
      },
      {
        id: 'consensus',
        label: 'Consensus & Indexing',
        status: 'Sub-Second Sync',
        metric: '12ms Event Delivery',
        detail: 'Reth/Erigon IPC • Custom Subgraphs',
        badge: 'Real-Time',
      },
    ],
  },

  pillars: [
    {
      id: 'blockchain-infrastructure',
      title: 'Blockchain Infrastructure',
      iconName: 'Cpu',
      summary:
        'Custom smart contract architecture, tokenomics implementation, Layer-1/Layer-2 integrations, and automated on-chain indexing.',
      deliverables: [
        'Production-grade ERC-20, ERC-721, ERC-1155 and custom state-machine smart contracts',
        'Layer-2 rollup bridging (Arbitrum, Optimism, Base, Polygon) and relayer infra',
        'Gas-optimized Yul/assembly execution routines saving up to 40% on recurring transactions',
        'Custom Subgraph deployments on The Graph and real-time Kafka event streams',
      ],
      tooling: ['Solidity', 'Rust', 'EVM', 'Hardhat', 'Foundry', 'Yul'],
      highlightMetric: '100k+ Transactions Processed',
      codeLang: 'solidity',
      codeSnippet: `// Invariant reentrancy guard & gas-optimized state updates
function executeSettlement(bytes32 batchId, uint256 amount) external nonReentrant {
    require(!processedBatches[batchId], 'ALREADY_SETTLED');
    processedBatches[batchId] = true;
    
    // Gas-efficient safe transfer
    (bool success, ) = treasury.call{value: amount}('');
    require(success, 'TRANSFER_FAILED');
    
    emit SettlementFinalized(batchId, amount, block.timestamp);
}`,
    },
    {
      id: 'web3-engineering',
      title: 'Web3 & dApp Engineering',
      iconName: 'Network',
      summary:
        'End-to-end decentralized applications, wallet authentication flows, DeFi interfaces, and seamless Web2-to-Web3 payment bridges.',
      deliverables: [
        'Type-safe Web3 wallet connectors (Wagmi, Viem, Web3Modal, RainbowKit)',
        'Non-custodial DeFi liquidity pool & staking dashboards with real-time slippage calculations',
        'Hybrid fiat-crypto checkout pipelines with automated webhook reconciliation',
        'Optimistic UI state machines ensuring responsive decentralized UX under variable network latency',
      ],
      tooling: ['Wagmi', 'Viem', 'Ethers.js', 'Next.js', 'The Graph', 'SIWE'],
      highlightMetric: '<1.2s Wallet Session Handshake',
      codeLang: 'typescript',
      codeSnippet: `// Type-safe on-chain execution with Viem & Wagmi
const hash = await walletClient.writeContract({
  address: PROTOCOL_VAULT_ADDRESS,
  abi: VaultABI,
  functionName: 'depositCollateral',
  args: [parseUnits(amount, 18), minSharesOut],
  account: userAddress,
});
await publicClient.waitForTransactionReceipt({ hash, confirmations: 2 });`,
    },
    {
      id: 'cybersecurity-auditing',
      title: 'Cybersecurity & Auditing',
      iconName: 'ShieldCheck',
      summary:
        'Smart contract vulnerability assessments, penetration testing, API hardening, automated threat detection, and DevSecOps pipeline integration.',
      deliverables: [
        'Formal EVM bytecode verification, reentrancy audits, flash-loan attack simulation, and logic bug detection',
        'Automated fuzzing and property-based testing pipelines using Foundry & Echidna (100k+ runs)',
        'Zero-Trust API architecture, OAuth2/OIDC, mTLS, and encrypted secrets lifecycle',
        'Comprehensive engineering audit reports with mathematical proof of fixes and remediation checklists',
      ],
      tooling: ['Slither', 'OWASP', 'Zero-Trust', 'PenTesting', 'Auth0/JWT', 'Foundry Fuzz'],
      highlightMetric: '0 Critical Post-Deploy Exploits',
      codeLang: 'solidity',
      codeSnippet: `// Invariant fuzz test ensuring vault balance never falls below total shares
function invariant_SolvencyAlwaysSatisfied() public view {
    uint256 totalAssets = vault.totalAssets();
    uint256 totalShares = vault.totalSupply();
    assertGe(totalAssets, totalShares, 'CRITICAL: VAULT_INSOLVENT');
}`,
    },
    {
      id: 'fullstack-development',
      title: 'Full-Stack Web Development',
      iconName: 'Layers',
      summary:
        'High-throughput backend APIs, automated workflow engines, payment gateway webhooks, and performant modern web applications.',
      deliverables: [
        'Distributed microservices engineered with Node.js/TypeScript and Python (FastAPI/Django)',
        'Relational data modeling, ACID transactions, and Redis distributed caching layers',
        'Asynchronous event queues, background workers, and idempotent webhook handlers',
        'Next.js App Router frontends with sub-second Core Web Vitals, SSR efficiency, and strict type safety',
      ],
      tooling: ['TypeScript', 'Python', 'Node.js', 'PostgreSQL', 'Docker', 'Redis'],
      highlightMetric: '<35ms P99 API Response Latency',
      codeLang: 'typescript',
      codeSnippet: `// Idempotent webhook settlement handler with ACID guarantees
export async function processPaymentWebhook(payload: WebhookPayload) {
  return await db.transaction(async (tx) => {
    const existing = await tx.ledger.findUnique({ where: { idempotencyKey: payload.id } });
    if (existing) return existing;
    return await tx.ledger.create({ data: { ...payload, settledAt: new Date() } });
  });
}`,
    },
  ] as ServicePillar[],

  projects: [
    {
      id: 'aegis-protocol',
      title: 'Aegis Protocol: Non-Custodial Liquidity Vaults',
      category: 'Web3 & Blockchain',
      challenge:
        'DeFi yield aggregators suffered from excessive gas consumption during multi-hop rebalancing and critical exposure to sandwich attacks in low-liquidity automated pools.',
      solution:
        'Architected custom ERC-4626 compliant vaults with single-transaction multicall batching, TWAP oracle guards, and custom Yul-optimized assembly math.',
      impactMetric: '$18.4M TVL Secured • 38% Gas Reduction',
      tags: ['Solidity', 'Foundry', 'ERC-4626', 'Viem', 'The Graph', 'Yul'],
      demoUrl: 'https://github.com/whybh-labs/aegis-protocol',
      docUrl: 'https://docs.whybh.dev/cases/aegis-protocol',
      architectureDetails: [
        'ERC-4626 standard implementation with flashloan-resistant share valuation mechanics',
        'Chainlink & Uniswap v3 TWAP dual-oracle fallback system preventing price-feed exploitation',
        'Automated keeper rebalancer powered by Gelato Network and custom subgraph triggers',
      ],
      deliverableArtifacts: [
        'Audited Solidity Smart Contracts (100% branch test coverage)',
        'Next.js App Router Interface with Viem/Wagmi integration',
        'Foundry Invariant Fuzzing Suite (100,000 iterations executed)',
      ],
    },
    {
      id: 'sentrix-guard',
      title: 'Sentrix Guard: Smart Contract Fuzzing & Static Auditor',
      category: 'Cybersecurity',
      challenge:
        'Traditional manual audits delayed protocol release cycles by 8+ weeks without systematically catching dynamic state manipulations during extreme market turbulence.',
      solution:
        'Engineered an automated CI/CD security pipeline running continuous symbolic execution, Slither AST analysis, and 100,000-run Foundry invariant fuzz suites.',
      impactMetric: '42 Zero-Day Logic Flaws Detected • 0 Post-Deploy Exploits',
      tags: ['Slither', 'Python', 'Echidna', 'Docker', 'GitHub Actions', 'Solidity'],
      demoUrl: 'https://github.com/whybh-labs/sentrix-guard',
      docUrl: 'https://docs.whybh.dev/cases/sentrix-guard',
      architectureDetails: [
        'Headless containerized runner executing AST pattern matchers and control-flow graphs',
        'Automated differential fuzzing between standard and optimized contract variants',
        'Interactive vulnerability report generator with step-by-step exploit remediation code',
      ],
      deliverableArtifacts: [
        'Dockerized CLI & GitHub Action integration package',
        'Python core AST static analysis engine with 15 custom detection heuristics',
        'Automated Markdown & PDF audit report compiler',
      ],
    },
    {
      id: 'nexus-settlement',
      title: 'Nexus Ledger: Multi-Chain Real-Time Settlement Engine',
      category: 'Web Development',
      challenge:
        'A cross-border fintech platform required instant synchronization between fiat banking APIs (SWIFT/SEPA) and USDC settlements on EVM rollups without double-spending risks.',
      solution:
        'Built a fault-tolerant event-driven reconciliation engine utilizing PostgreSQL two-phase commits, Redis distributed locks, and idempotent webhook dispatchers.',
      impactMetric: '99.995% Uptime • <45ms Webhook Ingestion',
      tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'FastAPI'],
      demoUrl: 'https://github.com/whybh-labs/nexus-settlement',
      docUrl: 'https://docs.whybh.dev/cases/nexus-settlement',
      architectureDetails: [
        'Distributed lock orchestration ensuring strictly once-and-only-once payment execution',
        'EVM transaction gas escalation worker automatically handling mempool congestion spikes',
        'Real-time WebSocket telemetry dashboard for operations and treasury personnel',
      ],
      deliverableArtifacts: [
        'High-throughput TypeScript API service with OpenAPI 3.1 documentation',
        'PostgreSQL schema with audited financial transaction triggers',
        'Automated end-to-end chaos testing suite simulating bank API outages',
      ],
    },
    {
      id: 'strata-indexer',
      title: 'Strata Indexer: Real-Time EVM Mempool & State Observer',
      category: 'Web3 & Blockchain',
      challenge:
        'Enterprise algorithmic trading desks experienced 400ms lag when indexing custom smart contract event logs via standard public JSON-RPC nodes.',
      solution:
        'Constructed a low-latency Rust & WebSocket indexing layer connected directly to local Reth/Erigon IPC sockets, publishing normalized state diffs to frontend streaming charts.',
      impactMetric: '12ms Event Delivery • 10M+ Logs Indexed/Day',
      tags: ['Rust', 'Solidity', 'WebSockets', 'Next.js', 'ClickHouse', 'PostgreSQL'],
      demoUrl: 'https://github.com/whybh-labs/strata-indexer',
      docUrl: 'https://docs.whybh.dev/cases/strata-indexer',
      architectureDetails: [
        'Rust IPC subscriber consuming raw block transactions with zero-copy deserialization',
        'ClickHouse columnar database for instantaneous analytical queries across billions of rows',
        'Ultra-lightweight SSE and WebSocket broadcasting service for institutional subscribers',
      ],
      deliverableArtifacts: [
        'Rust high-throughput daemon binary with comprehensive Prometheus metrics',
        'Next.js live mempool visualizer and transaction replay inspector',
        'Terraform configs for zero-downtime multi-region cluster deployment',
      ],
    },
  ] as ProjectCaseStudy[],

  methodology: [
    {
      step: '01',
      title: 'Threat Modeling & Architecture',
      subtitle: 'Deterministic Systems Blueprinting',
      description:
        'Every protocol and backend begins with comprehensive state-machine modeling, data boundary definitions, and formal threat attack vectors before a single line of production code is written.',
      deliverables: [
        'System Architecture RFC & State Flow Diagrams',
        'Threat Model Matrix & Attack Surface Assessment',
        'Storage layout & Gas optimization plan',
      ],
    },
    {
      step: '02',
      title: 'Agile Full-Stack & On-Chain Execution',
      subtitle: 'Modular & Documented Implementation',
      description:
        'We build clean, test-driven codebases adhering to strict type safety, modular micro-packages, and battle-tested industry standards (ERC specs, 12-factor cloud apps).',
      deliverables: [
        'Strict TypeScript & Foundry codebases',
        'Isolated unit & integration suites (>95% coverage)',
        'Inline documentation & automated architecture docs',
      ],
    },
    {
      step: '03',
      title: 'Rigorous Auditing & Stress Testing',
      subtitle: 'Adversarial Verification & Invariants',
      description:
        'We treat every deployment as potentially hostile. Automated invariant fuzzing (100k+ runs), symbolic execution with Slither, and mock network reentrancy simulations ensure bulletproof integrity.',
      deliverables: [
        'Invariant fuzzing reports & remediation proofs',
        'Penetration testing & OWASP compliance check',
        'Multi-validator testnet staging verification',
      ],
    },
    {
      step: '04',
      title: 'Deployment & Continuous Telemetry',
      subtitle: 'Hardened CI/CD & Production Alerting',
      description:
        'Deterministic zero-downtime releases via automated CI/CD pipelines, containerized infrastructure, multi-signature contract deployment scripts, and real-time on-chain alerting.',
      deliverables: [
        'Reproducible deterministic build artifacts',
        'Gnosis Safe multi-sig execution scripts',
        '24/7 Real-time anomaly & balance alerting',
      ],
    },
  ] as ProcessStep[],

  techMatrix: [
    {
      category: 'Languages',
      description: 'Foundational syntaxes engineered for memory safety, concurrency, and high throughput.',
      skills: [
        { name: 'TypeScript', level: 'Expert', focus: 'Strict typing, AST tooling, full-stack monorepos' },
        { name: 'Solidity', level: 'Expert', focus: 'Gas optimization, Yul assembly, custom ERC standards' },
        { name: 'Rust', level: 'Advanced', focus: 'EVM indexers, memory safety, high-throughput microservices' },
        { name: 'Python', level: 'Advanced', focus: 'FastAPI, static analysis, automation & data engines' },
        { name: 'SQL', level: 'Expert', focus: 'Complex relational queries, indexing, 2PC transactions' },
        { name: 'JavaScript', level: 'Expert', focus: 'V8 internals, Node.js event loop, browser APIs' },
      ],
    },
    {
      category: 'Web & Backend',
      description: 'Performant full-stack frameworks, caching layers, and distributed architectures.',
      skills: [
        { name: 'Next.js', level: 'Expert', focus: 'App Router, Server Actions, SSR/SSG, Turbopack' },
        { name: 'React', level: 'Expert', focus: 'Concurrent Mode, custom hooks, micro-interactions' },
        { name: 'Node.js', level: 'Expert', focus: 'High-concurrency event loops, streams, worker threads' },
        { name: 'PostgreSQL', level: 'Expert', focus: 'ACID guarantees, partitioned tables, pgvector' },
        { name: 'Redis', level: 'Advanced', focus: 'Distributed locks (Redlock), pub/sub, cache clusters' },
        { name: 'FastAPI / Django', level: 'Advanced', focus: 'Asynchronous REST APIs, OpenAPI, ORM tuning' },
      ],
    },
    {
      category: 'Blockchain & Web3',
      description: 'Protocols, toolchains, and libraries powering decentralized infrastructure.',
      skills: [
        { name: 'Foundry', level: 'Expert', focus: 'Forge testing, invariant fuzzing, Cast scripts, Anvil' },
        { name: 'Ethereum / EVM', level: 'Expert', focus: 'State trie, opcode gas costs, L2 rollups' },
        { name: 'Viem / Wagmi', level: 'Expert', focus: 'Type-safe RPC bindings, wallet state management' },
        { name: 'The Graph', level: 'Advanced', focus: 'Custom Subgraph schema, mapping handlers, indexing' },
        { name: 'Hardhat', level: 'Advanced', focus: 'Historical codebase migrations, multi-chain deploy' },
        { name: 'IPFS / Arweave', level: 'Proficient', focus: 'Decentralized storage, immutable metadata pinning' },
      ],
    },
    {
      category: 'Security & DevOps',
      description: 'Defensive auditing tools, containerization, and automated verification pipelines.',
      skills: [
        { name: 'Slither', level: 'Advanced', focus: 'Static AST analysis, custom detection detectors' },
        { name: 'Docker', level: 'Expert', focus: 'Multi-stage builds, minimal attack surfaces, compose' },
        { name: 'GitHub Actions', level: 'Expert', focus: 'Hermetic CI/CD, secret scanning, automated audit runs' },
        { name: 'Linux / POSIX', level: 'Expert', focus: 'Kernel tuning, process supervision, hardened bash' },
        { name: 'Cloudflare', level: 'Advanced', focus: 'DDoS mitigation, WAF rules, edge workers, DNSSEC' },
        { name: 'Burp Suite / OWASP', level: 'Advanced', focus: 'Penetration testing, API fuzzing, JWT attack audits' },
      ],
    },
  ] as TechStackCategory[],

  contact: {
    serviceOptions: [
      'Web3 / Blockchain',
      'Cybersecurity Audit',
      'Full-Stack Web Dev',
      'Technical Advisory',
    ],
    timelineOptions: ['Immediate (< 2 weeks)', '1 - 2 Months', 'Quarterly Roadmap'],
    slaGuarantee: 'Initial technical feasibility & threat scoping response guaranteed within 24 hours.',
  },

  telemetryFeed: [
    { timestamp: '17:34:02', event: 'Node Synced', target: 'Mainnet Block #21049318', status: 'OK' },
    { timestamp: '17:31:45', event: 'Invariant Check', target: 'Aegis_Vault_v2.sol (100k fuzz runs)', status: 'PASSED' },
    { timestamp: '17:28:10', event: 'API Ping', target: 'Latency: 28ms • Tokyo/US-East/Frankfurt', status: 'NOMINAL' },
    { timestamp: '17:24:04', event: 'Security Scan', target: 'Dependencies 0 Critical, 0 High', status: 'VERIFIED' },
  ],
};