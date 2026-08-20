import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DevosTableComponentsReference() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-desktop py-stack-xs bg-ink/80 backdrop-blur-md border-b border-mist/10">
<div className="flex items-center gap-4">
<span className="font-h1 text-h1 font-black text-ember tracking-tighter">DevOS</span>
<span className="font-caption text-caption text-mist/40 uppercase tracking-widest hidden md:inline">Technical Showcase</span>
</div>
<div className="flex items-center gap-stack-md">
<div className="relative hidden md:block"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-mist/40 text-sm">search</span><input className="bg-ink-soft border-none focus:ring-1 focus:ring-ember rounded-md text-sm pl-10 pr-4 py-1.5 w-64 text-mist placeholder:text-mist/20" placeholder="Global Search..." type="text" /></div>
<div className="flex items-center gap-3">
<button className="text-mist/60 hover:text-ember transition-colors duration-300">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-mist/60 hover:text-ember transition-colors duration-300">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-mist/10">
<img className="w-full h-full object-cover" data-alt="A sharp, minimalist profile portrait of a high-end software developer in a dark room illuminated by a soft orange glow. The aesthetic is clean, technical, and professional, using a deep ink background with subtle mist-colored highlights on the subject's face. The mood is focused and authoritative." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLZ8Lve6d0fkHJF4fgJojBzoT-nowagJTi_moE2iE84TUgOkVU9ubbEPbn6YZS6t-ZaQTgiC730raHjiCDdMpl1DRy8IpqVSM_QW_uMMryhrjDYVx3dc5gAj9SK70_PQFfQyJu1HuFKMnxwjVeKprkvKQGu5z6q3DFIDAOULM2aZ0caBHwgTswLI-oZ3LzDyLSerJ98kM4Qm8auLxNO7YSDcgsB1z2MNTbdc4zMHsZNYQ0AjHAKMjX" />
</div>
</div>
</div>
</header>

<aside className="fixed left-0 top-0 h-screen flex flex-col pt-24 pb-8 px-4 border-r border-mist/10 bg-ink w-64 hidden md:flex">
<div className="px-4 mb-8">
<h2 className="text-ember font-h1 text-h1 uppercase tracking-tighter">System Console</h2>
<p className="font-caption text-caption text-mist/40">v4.2.0-stable</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-mist/40 hover:bg-mist/10 hover:text-mist transition-all group" href="#">
<span className="material-symbols-outlined group-active:translate-x-1 duration-200">dashboard</span>
<span className="font-nav-link text-nav-link">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-ember border-r-2 border-ember bg-mist/5 transition-all group" href="#">
<span className="material-symbols-outlined group-active:translate-x-1 duration-200" style={{"fontVariationSettings": "FILL 1"}}>table_chart</span>
<span className="font-nav-link text-nav-link">Table Components</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-mist/40 hover:bg-mist/10 hover:text-mist transition-all group" href="#">
<span className="material-symbols-outlined group-active:translate-x-1 duration-200">rocket_launch</span>
<span className="font-nav-link text-nav-link">Deployments</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-mist/40 hover:bg-mist/10 hover:text-mist transition-all group" href="#">
<span className="material-symbols-outlined group-active:translate-x-1 duration-200">equalizer</span>
<span className="font-nav-link text-nav-link">Metrics</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-mist/40 hover:bg-mist/10 hover:text-mist transition-all group" href="#">
<span className="material-symbols-outlined group-active:translate-x-1 duration-200">settings</span>
<span className="font-nav-link text-nav-link">Settings</span>
</a>
</nav>
<div className="mt-auto px-4">
<button className="w-full py-3 bg-primary-container text-on-primary-container font-label-sm uppercase tracking-widest ember-glow hover:scale-[0.98] transition-all flex items-center justify-center gap-2 rounded-md">
<span className="material-symbols-outlined text-sm">add</span>
                New Project
            </button>
</div>
</aside>

<main className="md:ml-64 pt-32 px-margin-mobile md:px-margin-desktop pb-section-gap-lg">

<header className="mb-section-gap-sm max-w-4xl">
<h1 className="font-display-hero text-display-hero uppercase leading-none text-mist mb-stack-md">Table Components</h1>
<p className="font-body-lg text-body-lg text-mist/60 border-l-2 border-ember pl-6 max-w-2xl">
                A technical reference for high-density data visualization. DevOS tables prioritize data density, accessibility, and interactive states while maintaining an organic, minimalist aesthetic.
            </p>
</header>

<section className="mb-section-gap-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-stack-md mb-stack-md">
<div>
<h3 className="font-h1 text-h1 text-ember uppercase tracking-tight">System Metrics</h3>
<p className="font-caption text-caption text-mist/40">Real-time node performance monitoring</p>
</div>
<div className="flex gap-2">
<div className="relative"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-mist/40 text-sm">search</span><input className="bg-ink-soft border border-mist/10 focus:border-ember focus:ring-0 rounded-md text-xs pl-9 pr-4 py-2 w-48 text-mist" placeholder="Filter nodes..." type="text" /></div>
<button className="px-4 py-2 bg-ink-soft border border-mist/10 text-mist/60 hover:text-ember transition-colors flex items-center gap-2 rounded-md">
<span className="material-symbols-outlined text-sm">filter_list</span>
<span className="font-label-sm">Filters</span>
</button>
</div>
</div>
<div className="overflow-x-auto glass-panel rounded-md">
<table className="w-full text-left border-collapse zebra-stripe">
<thead className="bg-ink-soft border-b border-mist/10">
<tr>
<th className="px-4 py-3 font-label-sm text-mist/40 uppercase">Node ID</th>
<th className="px-4 py-3 font-label-sm text-mist/40 uppercase">Status</th>
<th className="px-4 py-3 font-label-sm text-mist/40 uppercase text-center">CPU</th>
<th className="px-4 py-3 font-label-sm text-mist/40 uppercase text-center">Memory</th>
<th className="px-4 py-3 font-label-sm text-mist/40 uppercase text-center">Disk</th>
<th className="px-4 py-3 font-label-sm text-mist/40 uppercase text-right">Network</th>
</tr>
</thead>
<tbody className="text-xs font-light divide-y divide-mist/5">
<tr className="hover:bg-mist/5 transition-colors group">
<td className="px-4 py-2 font-medium text-mist">NODE-882-Alpha</td>
<td className="px-4 py-2">
<span className="flex items-center gap-1.5 text-success">
<span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></span>
                                    Healthy
                                </span>
</td>
<td className="px-4 py-2 text-center">
<div className="w-16 h-1 bg-mist/10 rounded-full mx-auto overflow-hidden">
<div className="h-full bg-ember" style={{"width": "42%"}}></div>
</div>
<span className="text-[10px] text-mist/40">42%</span>
</td>
<td className="px-4 py-2 text-center text-mist/80">1.2GB / 4GB</td>
<td className="px-4 py-2 text-center text-mist/80">14%</td>
<td className="px-4 py-2 text-right text-mist/80">2.4 MB/s</td>
</tr>
<tr className="hover:bg-mist/5 transition-colors group">
<td className="px-4 py-2 font-medium text-mist">NODE-914-Gamma</td>
<td className="px-4 py-2">
<span className="flex items-center gap-1.5 text-success">
<span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></span>
                                    Healthy
                                </span>
</td>
<td className="px-4 py-2 text-center">
<div className="w-16 h-1 bg-mist/10 rounded-full mx-auto overflow-hidden">
<div className="h-full bg-ember" style={{"width": "88%"}}></div>
</div>
<span className="text-[10px] text-mist/40">88%</span>
</td>
<td className="px-4 py-2 text-center text-mist/80">3.8GB / 4GB</td>
<td className="px-4 py-2 text-center text-mist/80">62%</td>
<td className="px-4 py-2 text-right text-mist/80">14.1 MB/s</td>
</tr>
<tr className="hover:bg-mist/5 transition-colors group">
<td className="px-4 py-2 font-medium text-mist">NODE-004-Beta</td>
<td className="px-4 py-2">
<span className="flex items-center gap-1.5 text-ember">
<span className="w-1.5 h-1.5 bg-ember rounded-full"></span>
                                    Warning
                                </span>
</td>
<td className="px-4 py-2 text-center">
<div className="w-16 h-1 bg-mist/10 rounded-full mx-auto overflow-hidden">
<div className="h-full bg-ember" style={{"width": "95%"}}></div>
</div>
<span className="text-[10px] text-mist/40">95%</span>
</td>
<td className="px-4 py-2 text-center text-mist/80">3.9GB / 4GB</td>
<td className="px-4 py-2 text-center text-mist/80">91%</td>
<td className="px-4 py-2 text-right text-mist/80">0.2 MB/s</td>
</tr>
<tr className="hover:bg-mist/5 transition-colors group">
<td className="px-4 py-2 font-medium text-mist">NODE-112-Delta</td>
<td className="px-4 py-2">
<span className="flex items-center gap-1.5 text-mist/20">
<span className="w-1.5 h-1.5 bg-mist/20 rounded-full"></span>
                                    Offline
                                </span>
</td>
<td className="px-4 py-2 text-center">
<div className="w-16 h-1 bg-mist/10 rounded-full mx-auto overflow-hidden">
<div className="h-full bg-mist/20" style={{"width": "0%"}}></div>
</div>
<span className="text-[10px] text-mist/40">0%</span>
</td>
<td className="px-4 py-2 text-center text-mist/80">--</td>
<td className="px-4 py-2 text-center text-mist/80">--</td>
<td className="px-4 py-2 text-right text-mist/80">0.0 MB/s</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="mb-section-gap-lg">
<div className="mb-stack-md">
<h3 className="font-h1 text-h1 text-ember uppercase tracking-tight">Deployment History</h3>
<p className="font-caption text-caption text-mist/40">Timeline of CI/CD executions across clusters</p>
</div>
<div className="overflow-x-auto glass-panel rounded-md">
<table className="w-full text-left border-collapse">
<thead className="border-b border-mist/10">
<tr>
<th className="px-6 py-4 font-label-sm text-mist/60 uppercase">Service</th>
<th className="px-6 py-4 font-label-sm text-mist/60 uppercase">Version</th>
<th className="px-6 py-4 font-label-sm text-mist/60 uppercase">Commit</th>
<th className="px-6 py-4 font-label-sm text-mist/60 uppercase">Status</th>
<th className="px-6 py-4 font-label-sm text-mist/60 uppercase text-right">Timestamp</th>
</tr>
</thead>
<tbody className="divide-y divide-mist/5 font-light">
<tr className="hover:bg-mist/5 transition-colors group">
<td className="px-6 py-5 font-medium text-mist">Auth-Gateway-API</td>
<td className="px-6 py-5 text-mist/80">v2.4.1</td>
<td className="px-6 py-5 font-mono text-[10px] text-mist/40">8f2a01e</td>
<td className="px-6 py-5">
<span className="px-3 py-1 bg-success/10 text-success text-[10px] font-bold uppercase tracking-wider border border-success/20 rounded-sm">Success</span>
</td>
<td className="px-6 py-5 text-right text-mist/40 text-xs">2 mins ago</td>
</tr>
<tr className="hover:bg-mist/5 transition-colors group">
<td className="px-6 py-5 font-medium text-mist">Core-Database-Mesh</td>
<td className="px-6 py-5 text-mist/80">v1.0.8-rc2</td>
<td className="px-6 py-5 font-mono text-[10px] text-mist/40">bc771dd</td>
<td className="px-6 py-5">
<span className="px-3 py-1 bg-ember/10 text-ember text-[10px] font-bold uppercase tracking-wider border border-ember/20 inline-flex items-center gap-2 rounded-sm">
<span className="w-1 h-1 bg-ember animate-ping"></span>
                                    Building
                                </span>
</td>
<td className="px-6 py-5 text-right text-mist/40 text-xs">14 mins ago</td>
</tr>
<tr className="hover:bg-mist/5 transition-colors group">
<td className="px-6 py-5 font-medium text-mist">Image-Processing-Node</td>
<td className="px-6 py-5 text-mist/80">v5.0.0</td>
<td className="px-6 py-5 font-mono text-[10px] text-mist/40">da2399a</td>
<td className="px-6 py-5">
<span className="px-3 py-1 bg-error/10 text-error text-[10px] font-bold uppercase tracking-wider border border-error/20 rounded-sm">Failed</span>
</td>
<td className="px-6 py-5 text-right text-mist/40 text-xs">1 hour ago</td>
</tr>
</tbody>
</table>
</div>
</section>

<section>
<div className="flex items-end justify-between mb-stack-md">
<div>
<h3 className="font-h1 text-h1 text-ember uppercase tracking-tight">Access Management</h3>
<p className="font-caption text-caption text-mist/40">User roles and active sessions</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 bg-ink-soft text-mist/40 hover:text-mist border border-mist/10 text-xs uppercase tracking-widest transition-all rounded-md">Bulk Export</button>
<button className="px-4 py-2 bg-ink-soft text-error hover:bg-error/10 border border-error/10 text-xs uppercase tracking-widest transition-all rounded-md">Deactivate</button>
</div>
</div>
<div className="overflow-x-auto glass-panel rounded-md">
<table className="w-full text-left border-collapse">
<thead className="border-b border-mist/10">
<tr>
<th className="px-6 py-4 w-10">
<input className="w-4 h-4 bg-ink border-mist/20 rounded focus:ring-ember text-ember" type="checkbox" />
</th>
<th className="px-6 py-4 font-label-sm text-mist/60 uppercase">User</th>
<th className="px-6 py-4 font-label-sm text-mist/60 uppercase">Role</th>
<th className="px-6 py-4 font-label-sm text-mist/60 uppercase">Last Active</th>
<th className="px-6 py-4 font-label-sm text-mist/60 uppercase text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-mist/5">
<tr className="hover:bg-mist/5 transition-colors group">
<td className="px-6 py-4">
<input className="w-4 h-4 bg-ink border-mist/20 rounded focus:ring-ember text-ember" type="checkbox" />
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden border border-mist/10 bg-ink-soft">
<img className="w-full h-full object-cover" data-alt="A detailed digital avatar representation for a professional system architect. The image style is minimalist, using a dark-mode palette of charcoal blacks and deep greys, with subtle ember glow accents. The figure is shown from the shoulders up in a clean, modern vector illustration style that fits into a high-end tech UI dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmT4tiP08qPSAu0egY0RvnxlkWJ8SoVBNjL8Qq_kQ8uS-MiWmX33Y3_hwFgQPxXulGuP5ytOps9KsRVCU5XXKOLO5FT-niPD_QPmvk9u1NmhNsbXqFmtfI_v_8VRRWdduNExnuBBOgHJDe19Hn0PeWK5H2gjIAJ0z9u4855CUoX22DrUodTOVR8eWbUc_RPByLVi3rbYDkYAkE4DqDQ_OYnBJEgS4-gvvYfPz4o9O66K-Ah5owCa5w" />
</div>
<div>
<p className="font-nav-link text-nav-link text-mist">Erik S. Vance</p>
<p className="text-[10px] text-mist/40">e.vance@devos.systems</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="text-xs font-light text-mist/80 bg-mist/5 border border-mist/10 px-2 py-0.5 rounded">Super Admin</span>
</td>
<td className="px-6 py-4 text-xs text-mist/40">Now</td>
<td className="px-6 py-4 text-right">
<button className="p-2 hover:bg-mist/10 rounded-full text-mist/40 transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-mist/5 transition-colors group">
<td className="px-6 py-4">
<input className="w-4 h-4 bg-ink border-mist/20 rounded focus:ring-ember text-ember" type="checkbox" />
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden border border-mist/10 bg-ink-soft">
<img className="w-full h-full object-cover" data-alt="A professional user profile avatar for a senior engineer. The image is rendered in a high-contrast dark theme with professional lighting. The color palette features ink blacks and mist whites, with a signature ember orange highlight reflecting technical skill and authority. Clean, minimalist, and modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT3H1qz-bkLRQ4ipVybt2YW0-mNl4gC0sYBEAcx96uiJWpeTIHUDLRZxW2ElPFHkCqOSfVy9NfvoQyBnuJPaEaZFQOUcZsBq9GLOP7iTrrXheAHb10xG5B_V1QMh8gElO6VCOjdn_YQsGY5SV-nhZ8ALuF8sBkNdkL57x_AJjbzpkfpGSlL7g_YkNHCOTadoPiIMZcRrTzBc2vT9YXYhms_skCMbjc3xEYZVYbHMblTe-zkyeqiveE" />
</div>
<div>
<p className="font-nav-link text-nav-link text-mist">Sarah Connor</p>
<p className="text-[10px] text-mist/40">s.connor@sky.net</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="text-xs font-light text-mist/80 bg-mist/5 border border-mist/10 px-2 py-0.5 rounded">Security Architect</span>
</td>
<td className="px-6 py-4 text-xs text-mist/40">12h ago</td>
<td className="px-6 py-4 text-right">
<button className="p-2 hover:bg-mist/10 rounded-full text-mist/40 transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-mist/5 transition-colors group">
<td className="px-6 py-4">
<input className="w-4 h-4 bg-ink border-mist/20 rounded focus:ring-ember text-ember" type="checkbox" />
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden border border-mist/10 bg-ink-soft">
<img className="w-full h-full object-cover" data-alt="A clean, minimalist vector avatar for a software developer. High contrast dark mode theme. The character is silhouetted against a soft ember glow background with subtle technical grid patterns. Professional, sophisticated, and modern feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBj1RBXQWIBKgT0SHENfDF_5eZI5IlUso14YKxhBSMl80LIFSbRPf1182iTKc_qCQqho3Mn3D5bShjJIlrTpDpwkW2f7TCjOkimQuIVa34zztWWKIItVoOo4ZJXd4F0pE1Tyg7fflrM3_sng_0R5wTn8A_YgpPDWC4l_oKEZtmAmmgPNcWtzhJ0J0KZbH-P5PwvBGZzu3-ZVYqMjDkrLyKWzgIJjNdYKq1yNRXrGrPhWf4st0JZfCG" />
</div>
<div>
<p className="font-nav-link text-nav-link text-mist">Julian Thorne</p>
<p className="text-[10px] text-mist/40">j.thorne@devos.systems</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="text-xs font-light text-mist/80 bg-mist/5 border border-mist/10 px-2 py-0.5 rounded">Maintainer</span>
</td>
<td className="px-6 py-4 text-xs text-mist/40">3 days ago</td>
<td className="px-6 py-4 text-right">
<button className="p-2 hover:bg-mist/10 rounded-full text-mist/40 transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</main>

<footer className="md:ml-64 w-full py-8 px-margin-desktop flex flex-col md:flex-row justify-between items-center mt-section-gap-lg border-t border-mist/10 bg-ink">
<div className="mb-4 md:mb-0">
<p className="font-caption text-caption text-mist/40 uppercase tracking-widest">© 2024 DevOS Systems. Technical yet Organic.</p>
</div>
<div className="flex gap-8">
<a className="font-caption text-caption text-mist/40 hover:text-ember transition-colors" href="#">Documentation</a>
<a className="font-caption text-caption text-mist/40 hover:text-ember transition-colors" href="#">API Status</a>
<a className="font-caption text-caption text-mist/40 hover:text-ember transition-colors" href="#">Support</a>
</div>
</footer>




    </div>
  );
}
