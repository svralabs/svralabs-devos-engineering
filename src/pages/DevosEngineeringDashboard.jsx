import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DevosEngineeringDashboard() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<aside className="fixed left-0 top-0 hidden md:flex flex-col h-screen w-64 border-r border-outline-variant/20 bg-surface z-50 py-stack-md">
<div className="px-6 mb-10">
<h1 className="font-h1 text-h1 text-on-surface tracking-tighter">DevOS v2.4</h1>
<p className="font-caption text-caption text-tertiary uppercase mt-1">Terminal Access</p>
</div>
<nav className="flex-1 px-4 space-y-2">

<a className="flex items-center gap-4 px-4 py-3 text-ember font-bold border-r-2 border-ember transition-all duration-300 ease-in-out font-nav-link text-nav-link bg-surface-container-high/40" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "FILL 1"}}>dashboard</span>
        Overview
      </a>
<a className="flex items-center gap-4 px-4 py-3 text-tertiary hover:bg-surface-container-high hover:text-on-surface transition-all duration-300 ease-in-out font-nav-link text-nav-link" href="#">
<span className="material-symbols-outlined">code</span>
        Repository
      </a>
<a className="flex items-center gap-4 px-4 py-3 text-tertiary hover:bg-surface-container-high hover:text-on-surface transition-all duration-300 ease-in-out font-nav-link text-nav-link" href="#">
<span className="material-symbols-outlined">insights</span>
        Analytics
      </a>
<a className="flex items-center gap-4 px-4 py-3 text-tertiary hover:bg-surface-container-high hover:text-on-surface transition-all duration-300 ease-in-out font-nav-link text-nav-link" href="#">
<span className="material-symbols-outlined">layers</span>
        Infrastructure
      </a>
<a className="flex items-center gap-4 px-4 py-3 text-tertiary hover:bg-surface-container-high hover:text-on-surface transition-all duration-300 ease-in-out font-nav-link text-nav-link" href="#">
<span className="material-symbols-outlined">security</span>
        Security
      </a>
<a className="flex items-center gap-4 px-4 py-3 text-tertiary hover:bg-surface-container-high hover:text-on-surface transition-all duration-300 ease-in-out font-nav-link text-nav-link" href="#">
<span className="material-symbols-outlined">settings</span>
        Settings
      </a>
</nav>
<div className="px-6 mt-auto">
<button className="w-full py-4 px-6 rounded-full ember-gradient-bg text-on-primary-container font-label-sm text-label-sm uppercase tracking-widest ember-glow transition-transform active:scale-95">
        New Deploy
      </button>
<div className="mt-8 pt-8 border-t border-outline-variant/10 space-y-4">
<a className="flex items-center gap-4 text-tertiary opacity-60 hover:opacity-100 transition-all font-caption text-caption uppercase" href="#">
<span className="material-symbols-outlined text-[18px]">description</span>
          Documentation
        </a>
<a className="flex items-center gap-4 text-tertiary opacity-60 hover:opacity-100 transition-all font-caption text-caption uppercase" href="#">
<span className="material-symbols-outlined text-[18px]">contact_support</span>
          Support
        </a>
</div>
</div>
</aside>
<main className="md:ml-64 min-h-screen flex flex-col">

<header className="flex justify-between items-center w-full px-6 md:px-margin-desktop h-16 sticky top-0 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10">
<div className="flex items-center gap-8 flex-1">
<span className="font-h1 text-h1-mobile md:text-h1 text-on-surface whitespace-nowrap">System Health</span>
<div className="hidden lg:flex items-center bg-ink-soft rounded-full px-4 py-2 w-96 border border-outline-variant/20 focus-within:border-ember transition-colors">
<span className="material-symbols-outlined text-tertiary text-[20px]">search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-md w-full placeholder:text-tertiary/40" placeholder="Search systems..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-6 mr-6">
<a className="text-ember border-b-2 border-ember pb-1 font-nav-link text-nav-link" href="#">Cloud Status</a>
<a className="text-tertiary hover:text-ember transition-colors font-nav-link text-nav-link" href="#">Incidents</a>
</div>
<div className="flex items-center gap-4">
<button className="relative text-tertiary hover:text-ember transition-colors active:scale-90">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-ember rounded-full"></span>
</button>
<button className="text-tertiary hover:text-ember transition-colors active:scale-90">
<span className="material-symbols-outlined">terminal</span>
</button>
<div className="w-10 h-10 rounded-full border border-outline-variant/30 overflow-hidden cursor-pointer hover:border-ember transition-colors">
<img className="w-full h-full object-cover" data-alt="A professional engineering leader portrait, low-key lighting with subtle warm amber rim light, sharp focus on a person wearing technical gear in a futuristic server room environment, high-end commercial photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCclfEpe9NtdHADfLOppWqgvQ9APUVwgIOrN8ccCE2IS-VbTijut93014aoXYK4F34PszGTlJHO2zvkWJsGMWjyapkoQ_v_svcywa8jkX43AzQTEoYnMonKv5Sm2kJB9LbHLqiV0_CY650OZmBzQhkw6Ny5RvH1W_LdcgOdmp6i3iVWS6Hu9oMzdFh-PfKTMMpAJRR2fuJ4S7P1pF1tLpm4OXxpd4plaqTnnGELfPJpdlvBlp7cm2q6"/>
</div>
</div>
</div>
</header>

<div className="flex-1 p-6 md:p-margin-desktop max-w-container-max mx-auto w-full">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter mb-section-gap-sm">

<div className="bg-surface-container-low p-stack-md rounded-lg border border-outline-variant/5 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4">
<span className="material-symbols-outlined text-success opacity-50 group-hover:opacity-100 transition-opacity">monitor_heart</span>
</div>
<p className="font-overline text-overline text-tertiary uppercase mb-2">System Health</p>
<div className="flex items-end gap-3">
<h2 className="text-[2.5rem] font-black text-on-surface tracking-tight">99.9%</h2>
<div className="mb-2 w-16 h-6">
<svg className="w-full h-full stroke-success fill-none stroke-2" viewbox="0 0 100 40">
<path d="M0,35 Q10,35 20,20 T40,25 T60,10 T80,15 T100,5" strokeLinecap="round"></path>
</svg>
</div>
</div>
<p className="font-caption text-caption text-success mt-2">UPTIME STABLE</p>
</div>

<div className="bg-surface-container-low p-stack-md rounded-lg border border-outline-variant/5 group">
<p className="font-overline text-overline text-tertiary uppercase mb-2">Active Deployments</p>
<div className="flex items-end gap-3">
<h2 className="text-[2.5rem] font-black text-on-surface tracking-tight">14</h2>
<div className="mb-3 flex items-center text-success gap-1">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span className="font-label-sm text-label-sm">+2</span>
</div>
</div>
<p className="font-caption text-caption text-tertiary/60 mt-2">GLOBAL CLUSTERS</p>
</div>

<div className="bg-surface-container-low p-stack-md rounded-lg border border-outline-variant/5 group">
<p className="font-overline text-overline text-tertiary uppercase mb-2">Build Success Rate</p>
<div className="flex items-end gap-3">
<h2 className="text-[2.5rem] font-black text-on-surface tracking-tight">98.2%</h2>
</div>
<div className="w-full h-1 bg-ink-soft rounded-full mt-4 overflow-hidden">
<div className="h-full bg-ember w-[98.2%]"></div>
</div>
<p className="font-caption text-caption text-tertiary/60 mt-2">PAST 24 HOURS</p>
</div>

<div className="bg-surface-container-low p-stack-md rounded-lg border border-outline-variant/5 group">
<p className="font-overline text-overline text-tertiary uppercase mb-2">Security Score</p>
<div className="flex items-center gap-3">
<h2 className="text-[2.5rem] font-black text-ember tracking-tight">A+</h2>
<span className="material-symbols-outlined text-ember text-[32px]">verified_user</span>
</div>
<p className="font-caption text-caption text-ember/60 mt-2">ENCRYPTION ACTIVE</p>
</div>
</div>

<section className="mb-section-gap-sm">
<div className="flex justify-between items-end mb-6">
<div>
<h3 className="font-h1 text-h1 text-on-surface">Network Traffic</h3>
<p className="font-body-md text-body-md text-tertiary opacity-60">Global egress and ingress data throughput</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-1.5 rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-tertiary hover:border-ember hover:text-on-surface transition-all">1H</button>
<button className="px-4 py-1.5 rounded-full bg-ember text-on-primary-fixed-variant font-label-sm text-label-sm transition-all ember-glow">24H</button>
<button className="px-4 py-1.5 rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-tertiary hover:border-ember hover:text-on-surface transition-all">7D</button>
</div>
</div>
<div className="h-[400px] w-full bg-surface-container rounded-lg border border-outline-variant/10 relative overflow-hidden chart-mesh">

<svg className="absolute bottom-0 left-0 w-full h-[80%] preserve-3d" preserveaspectratio="none" viewbox="0 0 1000 100">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#ff5a1f" stop-opacity="0.4"></stop>
<stop offset="100%" stop-color="#ff5a1f" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M0,80 L100,75 L200,85 L300,50 L400,60 L500,30 L600,45 L700,20 L800,35 L900,10 L1000,15 V100 H0 Z" fill="url(#chartGradient)"></path>

<path d="M0,80 L100,75 L200,85 L300,50 L400,60 L500,30 L600,45 L700,20 L800,35 L900,10 L1000,15" fill="none" stroke="#ff5a1f" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
<div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none">
<div className="w-full flex justify-between text-tertiary/30 font-caption text-[10px] border-b border-outline-variant/5 pb-2">
<span>5.2 TB/s</span>
<span>LIVE CLOUD STREAM</span>
</div>
<div className="w-full h-[1px] bg-outline-variant/5"></div>
<div className="w-full h-[1px] bg-outline-variant/5"></div>
<div className="w-full h-[1px] bg-outline-variant/5"></div>
<div className="w-full flex justify-between text-tertiary/30 font-caption text-[10px] pt-2">
<span>08:00</span>
<span>12:00</span>
<span>16:00</span>
<span>20:00</span>
<span>00:00</span>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

<section className="lg:col-span-8">
<div className="flex items-center justify-between mb-6">
<h4 className="font-h1 text-h1 text-on-surface">Recent Deployments</h4>
<button className="text-ember font-label-sm text-label-sm uppercase tracking-wider hover:underline transition-all">View History</button>
</div>
<div className="w-full overflow-hidden">
<table className="w-full border-collapse">
<thead>
<tr className="text-left border-b border-outline-variant/20">
<th className="py-4 font-overline text-overline text-tertiary uppercase">Status</th>
<th className="py-4 font-overline text-overline text-tertiary uppercase">Service Name</th>
<th className="py-4 font-overline text-overline text-tertiary uppercase">Version</th>
<th className="py-4 font-overline text-overline text-tertiary uppercase">Timestamp</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">
<tr className="group hover:bg-surface-container-low transition-colors">
<td className="py-5">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
<span className="font-caption text-caption text-success uppercase">Success</span>
</div>
</td>
<td className="py-5 font-medium text-on-surface">core-api-gateway</td>
<td className="py-5"><code className="bg-ink-soft px-2 py-1 rounded text-ember text-xs">v2.4.12</code></td>
<td className="py-5 text-tertiary text-sm">2 mins ago</td>
</tr>
<tr className="group hover:bg-surface-container-low transition-colors">
<td className="py-5">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-success"></span>
<span className="font-caption text-caption text-success uppercase">Success</span>
</div>
</td>
<td className="py-5 font-medium text-on-surface">auth-microservice</td>
<td className="py-5"><code className="bg-ink-soft px-2 py-1 rounded text-ember text-xs">v1.9.0</code></td>
<td className="py-5 text-tertiary text-sm">14 mins ago</td>
</tr>
<tr className="group hover:bg-surface-container-low transition-colors">
<td className="py-5">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-ember animate-pulse"></span>
<span className="font-caption text-caption text-ember uppercase">Building</span>
</div>
</td>
<td className="py-5 font-medium text-on-surface">worker-node-delta</td>
<td className="py-5"><code className="bg-ink-soft px-2 py-1 rounded text-ember text-xs">v3.0.1-rc</code></td>
<td className="py-5 text-tertiary text-sm">Just now</td>
</tr>
<tr className="group hover:bg-surface-container-low transition-colors">
<td className="py-5">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-success"></span>
<span className="font-caption text-caption text-success uppercase">Success</span>
</div>
</td>
<td className="py-5 font-medium text-on-surface">storage-manager</td>
<td className="py-5"><code className="bg-ink-soft px-2 py-1 rounded text-ember text-xs">v4.2.0</code></td>
<td className="py-5 text-tertiary text-sm">1 hour ago</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="lg:col-span-4">
<div className="flex items-center justify-between mb-6">
<h4 className="font-h1 text-h1 text-on-surface">Infrastructure</h4>
<span className="material-symbols-outlined text-tertiary">more_horiz</span>
</div>
<div className="space-y-4">

<div className="flex items-center justify-between p-4 bg-surface-container rounded-lg border border-outline-variant/10 group hover:border-ember/30 transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-ink-soft flex items-center justify-center text-ember">
<span className="material-symbols-outlined">key</span>
</div>
<div>
<p className="font-bold text-on-surface text-sm">Auth Service</p>
<p className="text-xs text-tertiary opacity-60">us-east-1</p>
</div>
</div>
<div className="text-right">
<span className="px-3 py-1 rounded-full bg-success/10 text-success font-caption text-caption uppercase border border-success/20">Operational</span>
<p className="text-[10px] text-tertiary mt-1">12ms latency</p>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-surface-container rounded-lg border border-outline-variant/10 group hover:border-ember/30 transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-ink-soft flex items-center justify-center text-ember">
<span className="material-symbols-outlined">database</span>
</div>
<div>
<p className="font-bold text-on-surface text-sm">Database Cluster</p>
<p className="text-xs text-tertiary opacity-60">eu-central-1</p>
</div>
</div>
<div className="text-right">
<span className="px-3 py-1 rounded-full bg-success/10 text-success font-caption text-caption uppercase border border-success/20">Operational</span>
<p className="text-[10px] text-tertiary mt-1">45ms latency</p>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-surface-container rounded-lg border border-outline-variant/10 group hover:border-ember/30 transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-ink-soft flex items-center justify-center text-ember">
<span className="material-symbols-outlined">cloud_circle</span>
</div>
<div>
<p className="font-bold text-on-surface text-sm">S3 Storage</p>
<p className="text-xs text-tertiary opacity-60">Global Edge</p>
</div>
</div>
<div className="text-right">
<span className="px-3 py-1 rounded-full bg-success/10 text-success font-caption text-caption uppercase border border-success/20">Operational</span>
<p className="text-[10px] text-tertiary mt-1">8ms latency</p>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-surface-container rounded-lg border border-outline-variant/10 group hover:border-ember/30 transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-ink-soft flex items-center justify-center text-ember">
<span className="material-symbols-outlined">wifi_tethering</span>
</div>
<div>
<p className="font-bold text-on-surface text-sm">Edge CDN</p>
<p className="text-xs text-tertiary opacity-60">24 Nodes</p>
</div>
</div>
<div className="text-right">
<span className="px-3 py-1 rounded-full bg-success/10 text-success font-caption text-caption uppercase border border-success/20">Operational</span>
<p className="text-[10px] text-tertiary mt-1">102ms latency</p>
</div>
</div>
</div>
</section>
</div>
</div>

<footer className="mt-auto bg-ink flex flex-row justify-between items-center px-6 md:px-margin-desktop py-stack-md w-full border-t border-outline-variant/5">
<div>
<p className="font-caption text-caption text-tertiary opacity-60">© 2024 DevOS Engineering. All systems operational.</p>
<div className="mt-1 flex gap-4">
<span className="font-overline text-overline text-tertiary/40">KERNEL: 5.15.0-x86_64</span>
<span className="font-overline text-overline text-tertiary/40">NODE: DEV-OS-ALPHA-01</span>
</div>
</div>
<div className="flex gap-6">
<a className="font-caption text-caption text-tertiary opacity-60 hover:text-ember transition-opacity uppercase" href="#">Privacy Policy</a>
<a className="font-caption text-caption text-tertiary opacity-60 hover:text-ember transition-opacity uppercase" href="#">Security Audit</a>
<a className="font-caption text-caption text-tertiary opacity-60 hover:text-ember transition-opacity uppercase" href="#">API Docs</a>
</div>
</footer>
</main>




    </div>
  );
}
