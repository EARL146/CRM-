const STORAGE_KEY = 'northstar-crm-v1';

const iconPaths = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  spark: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z"/>',
  chart: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-5 5"/>',
  report: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h8M8 9h2"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.6 9a2.5 2.5 0 1 1 4.5 1.5c-1 1.2-2.1 1.4-2.1 3M12 17h.01"/>',
  search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  usersSmall: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  cash: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h.01M17 15h.01"/>',
  arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L9 17l-4 1 1-4Z"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v5M14 11v5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 21v-4h6v4M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01"/>',
};

const icon = (name, extra = '') => `<svg ${extra} viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.grid}</svg>`;
const isoDate = (offset = 0) => {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return date.toISOString().slice(0, 10);
};

const initialData = () => ({
  customers: [
    { id: 'c1', name: 'Olivia Rhye', company: 'Layers', email: 'olivia@layers.co', phone: '+1 (555) 000-1201', segment: 'Enterprise', status: 'Active', createdAt: isoDate(-75) },
    { id: 'c2', name: 'Phoenix Baker', company: 'Catalog', email: 'phoenix@catalog.com', phone: '+1 (555) 000-1202', segment: 'Mid-market', status: 'Active', createdAt: isoDate(-62) },
    { id: 'c3', name: 'Lana Steiner', company: 'Circooles', email: 'lana@circooles.com', phone: '+1 (555) 000-1203', segment: 'Enterprise', status: 'Active', createdAt: isoDate(-49) },
    { id: 'c4', name: 'Demi Wilkinson', company: 'Hourglass', email: 'demi@hourglass.io', phone: '+1 (555) 000-1204', segment: 'SMB', status: 'Active', createdAt: isoDate(-38) },
    { id: 'c5', name: 'Candice Wu', company: 'Quotient', email: 'candice@quotient.co', phone: '+1 (555) 000-1205', segment: 'Mid-market', status: 'Active', createdAt: isoDate(-26) },
    { id: 'c6', name: 'Natali Craig', company: 'Sisyphus', email: 'natali@sisyphus.com', phone: '+1 (555) 000-1206', segment: 'Enterprise', status: 'Inactive', createdAt: isoDate(-18) },
    { id: 'c7', name: 'Drew Cano', company: 'Tribe', email: 'drew@tribe.so', phone: '+1 (555) 000-1207', segment: 'SMB', status: 'Active', createdAt: isoDate(-11) },
  ],
  leads: [
    { id: 'l1', name: 'Riley Cooper', company: 'Acme Corp', email: 'riley@acme.com', source: 'Website', stage: 'Qualified', value: 24000, owner: 'Jordan Davis', createdAt: isoDate(-3) },
    { id: 'l2', name: 'Avery Chen', company: 'Brightside', email: 'avery@brightside.io', source: 'Referral', stage: 'Contacted', value: 18500, owner: 'Jordan Davis', createdAt: isoDate(-2) },
    { id: 'l3', name: 'Morgan Patel', company: 'Goodwell', email: 'morgan@goodwell.co', source: 'LinkedIn', stage: 'New', value: 32000, owner: 'Sam Rivera', createdAt: isoDate(-1) },
    { id: 'l4', name: 'Taylor Kim', company: 'Northstar Co', email: 'taylor@northstar.co', source: 'Website', stage: 'Nurturing', value: 12500, owner: 'Sam Rivera', createdAt: isoDate(-4) },
    { id: 'l5', name: 'Jamie Park', company: 'Studio Alto', email: 'jamie@studioalto.com', source: 'Event', stage: 'Qualified', value: 28000, owner: 'Jordan Davis', createdAt: isoDate(-5) },
    { id: 'l6', name: 'Alex Morgan', company: 'Forma Labs', email: 'alex@formalabs.com', source: 'Referral', stage: 'Contacted', value: 19500, owner: 'Sam Rivera', createdAt: isoDate(-6) },
  ],
  deals: [
    { id: 'd1', name: 'Enterprise annual plan', company: 'Layers', value: 48000, stage: 'Won', closeDate: isoDate(-1), owner: 'Jordan Davis' },
    { id: 'd2', name: 'Platform expansion', company: 'Acme Corp', value: 32000, stage: 'Negotiation', closeDate: isoDate(4), owner: 'Jordan Davis' },
    { id: 'd3', name: 'Team workspace', company: 'Brightside', value: 18500, stage: 'Proposal', closeDate: isoDate(8), owner: 'Sam Rivera' },
    { id: 'd4', name: 'Analytics suite', company: 'Goodwell', value: 27000, stage: 'Qualified', closeDate: isoDate(13), owner: 'Sam Rivera' },
    { id: 'd5', name: 'Growth subscription', company: 'Catalog', value: 36000, stage: 'Won', closeDate: isoDate(-35), owner: 'Jordan Davis' },
    { id: 'd6', name: 'Starter package', company: 'Hourglass', value: 9800, stage: 'Prospecting', closeDate: isoDate(19), owner: 'Sam Rivera' },
    { id: 'd7', name: 'Product rollout', company: 'Circooles', value: 22000, stage: 'Lost', closeDate: isoDate(-11), owner: 'Jordan Davis' },
    { id: 'd8', name: 'Customer success plan', company: 'Sisyphus', value: 27000, stage: 'Won', closeDate: isoDate(-152), owner: 'Jordan Davis' },
    { id: 'd9', name: 'Team license', company: 'Tribe', value: 34000, stage: 'Won', closeDate: isoDate(-122), owner: 'Sam Rivera' },
    { id: 'd10', name: 'Workflow upgrade', company: 'Quotient', value: 31000, stage: 'Won', closeDate: isoDate(-92), owner: 'Sam Rivera' },
    { id: 'd11', name: 'Annual workspace', company: 'Hourglass', value: 42000, stage: 'Won', closeDate: isoDate(-62), owner: 'Jordan Davis' },
  ],
  tasks: [
    { id: 't1', text: 'Send proposal to Brightside', detail: 'Avery Chen · Today', done: false },
    { id: 't2', text: 'Follow up with Goodwell', detail: 'Morgan Patel · Today', done: false },
    { id: 't3', text: 'Renewal check-in with Layers', detail: 'Olivia Rhye · Tomorrow', done: false },
    { id: 't4', text: 'Prepare quarterly review', detail: 'Internal · Fri, Nov 8', done: true },
  ],
});

function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return initialData();
    const data = JSON.parse(saved);
    return { ...initialData(), ...data };
  } catch { return initialData(); }
}

let data = loadData();
let currentView = 'dashboard';
let activeSearch = '';

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  updateNavCounts();
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map((part) => part[0] || '').join('').toUpperCase();
}

function money(value = 0, compact = false) {
  if (compact && Math.abs(value) >= 1000) return `$${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}k`;
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value || 0);
}

function niceDate(value) {
  if (!value) return '—';
  const date = new Date(`${value}T12:00:00`);
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
}

function searchable(item) { return Object.values(item).join(' ').toLowerCase().includes(activeSearch.toLowerCase()); }
function total(items, key) { return items.reduce((sum, item) => sum + Number(item[key] || 0), 0); }
function statusClass(status) { return `status-${String(status).toLowerCase().replace(/[^a-z]+/g, '-')}`; }
function revenueByMonth() {
  const months = Array.from({ length: 6 }, (_, index) => {
    const date = new Date();
    date.setDate(1);
    date.setMonth(date.getMonth() - 5 + index);
    return { date, label: new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date), value: 0 };
  });
  data.deals.filter((deal) => deal.stage === 'Won' && deal.closeDate).forEach((deal) => {
    const closeDate = new Date(`${deal.closeDate}T12:00:00`);
    const month = months.find(({ date }) => date.getMonth() === closeDate.getMonth() && date.getFullYear() === closeDate.getFullYear());
    if (month) month.value += Number(deal.value || 0);
  });
  return months;
}

function updateNavCounts() {
  document.getElementById('customer-nav-count').textContent = data.customers.length;
  document.getElementById('lead-nav-count').textContent = data.leads.filter((lead) => !['Converted', 'Disqualified'].includes(lead.stage)).length;
}

function setupIcons() {
  document.querySelectorAll('[data-icon]').forEach((element) => {
    element.innerHTML = icon(element.dataset.icon);
  });
}

function metricCard(label, value, foot, iconName, color = '') {
  return `<article class="metric-card"><div class="metric-top"><span>${label}</span><span class="metric-icon ${color}">${icon(iconName)}</span></div><div class="metric-value">${value}</div><div class="metric-foot">${foot}</div></article>`;
}

function heading(eyebrow, title, subtitle, action = '') {
  return `<div class="page-heading"><div><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="page-subtitle">${subtitle}</p></div>${action}</div>`;
}

function dashboardMarkup() {
  const today = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric' }).format(new Date()).toUpperCase();
  const activeLeads = data.leads.filter((lead) => !['Converted', 'Disqualified'].includes(lead.stage));
  const openDeals = data.deals.filter((deal) => !['Won', 'Lost'].includes(deal.stage));
  const wonDeals = data.deals.filter((deal) => deal.stage === 'Won');
  const activeCustomers = data.customers.filter((customer) => customer.status === 'Active');
  const openValue = total(openDeals, 'value');
  const revenue = total(wonDeals, 'value');
  const recentCustomers = activeCustomers.filter((customer) => (Date.now() - new Date(`${customer.createdAt}T12:00:00`).getTime()) / 86400000 <= 30).length;
  const recentLeads = activeLeads.filter((lead) => (Date.now() - new Date(`${lead.createdAt}T12:00:00`).getTime()) / 86400000 <= 30).length;
  const stageOrder = ['Prospecting', 'Qualified', 'Proposal', 'Negotiation', 'Won'];
  const stageCounts = stageOrder.map((stage) => ({ stage, count: data.deals.filter((deal) => deal.stage === stage).length, value: total(data.deals.filter((deal) => deal.stage === stage), 'value') }));
  const maxStage = Math.max(1, ...stageCounts.map((item) => item.count));
  const months = revenueByMonth();
  const chartMax = Math.max(1, ...months.map((month) => month.value)) * 1.12;
  const chartAxis = [chartMax, chartMax * 2 / 3, chartMax / 3, 0];
  const recent = [
    ...wonDeals.slice(0, 2).map((deal) => ({ iconName: 'check', text: `<strong>${escapeHtml(deal.company)}</strong> deal was marked won`, time: 'Recently' })),
    ...data.leads.slice(0, 2).map((lead) => ({ iconName: 'spark', text: `<strong>${escapeHtml(lead.name)}</strong> was added as a new lead`, time: 'This week' })),
    ...data.customers.slice(0, 2).map((customer) => ({ iconName: 'usersSmall', text: `<strong>${escapeHtml(customer.company)}</strong> is now in your customer list`, time: 'This month' })),
  ].slice(0, 5);
  return `${heading(today, 'Good morning, Jordan 👋', 'Here’s what’s happening with your customer relationships today.', `<button class="primary-button" data-action="add" data-kind="lead"><span class="button-icon">+</span> Add a lead</button>`)}
    <section class="metric-grid">
      ${metricCard('Active customers', activeCustomers.length, `<span>${recentCustomers} added in the last 30 days</span>`, 'usersSmall', 'blue')}
      ${metricCard('Open leads', activeLeads.length, `<span>${recentLeads} added in the last 30 days</span>`, 'spark', 'amber')}
      ${metricCard('Open pipeline', money(openValue, true), `<span>${openDeals.length} active deals</span>`, 'target')}
      ${metricCard('Closed revenue', money(revenue, true), `<span>${wonDeals.length} deals won</span>`, 'cash', 'green')}
    </section>
    <section class="dashboard-grid">
      <article class="panel"><div class="panel-heading"><div><h2>Revenue overview</h2><p>Closed deal revenue over the last six months</p></div><div class="legend"><span class="legend-dot"></span>Revenue</div></div>
        <div class="chart-wrap"><div class="chart-axis-labels">${chartAxis.map((value) => `<span>${money(value, true)}</span>`).join('')}</div><div class="chart-gridlines"><span></span><span></span><span></span><span></span></div><div class="chart-columns">${months.map((month, index) => `<div class="chart-column ${index === 5 ? 'current' : ''}"><div class="chart-bar" style="height:${Math.max(2, month.value / chartMax * 100)}%" title="Revenue ${money(month.value)}"></div><span class="chart-month">${month.label}</span></div>`).join('')}</div></div>
      </article>
      <article class="panel"><div class="panel-heading"><div><h2>Sales pipeline</h2><p>Deals by stage</p></div><button class="secondary-button" data-view="sales">View deals <span>↗</span></button></div>
        <div class="pipeline-list">${stageCounts.map(({ stage, count }) => `<div class="pipeline-item"><span class="pipeline-stage">${stage}</span><div class="pipeline-bar-track"><div class="pipeline-bar" style="width:${Math.max(5, count / maxStage * 100)}%"></div></div><span class="pipeline-count">${count}</span></div>`).join('')}</div>
        <div class="pipeline-total"><span>Total open value</span><strong>${money(openValue)}</strong></div>
      </article>
    </section>
    <section class="bottom-grid">
      <article class="panel"><div class="panel-heading"><div><h2>Recent activity</h2><p>The latest updates across your workspace</p></div><button class="secondary-button" data-view="reports">See reports</button></div>
        <div class="activity-list">${recent.map((item) => `<div class="activity-item"><span class="activity-icon">${icon(item.iconName)}</span><div class="activity-text">${item.text}</div><span class="activity-time">${item.time}</span></div>`).join('')}</div>
      </article>
      <article class="panel"><div class="panel-heading"><div><h2>Upcoming tasks</h2><p>A little follow-through goes a long way</p></div><span class="legend">${data.tasks.filter((task) => !task.done).length} remaining</span></div>
        <div class="task-list">${data.tasks.map((task) => `<label class="task-row"><input type="checkbox" class="task-check" data-task="${task.id}" ${task.done ? 'checked' : ''}><span class="task-copy" style="${task.done ? 'text-decoration:line-through;color:#a5a9b5' : ''}">${escapeHtml(task.text)}<small>${escapeHtml(task.detail)}</small></span></label>`).join('')}</div>
      </article>
    </section>`;
}

function personCell(item, index, secondary) {
  return `<div class="person-cell"><span class="person-avatar color-${index % 5}">${escapeHtml(initials(item.name))}</span><span><span class="person-name">${escapeHtml(item.name)}</span><span class="person-email">${escapeHtml(secondary)}</span></span></div>`;
}

function rowActions(kind, item) {
  return `<div class="action-cell"><button class="row-action" aria-label="Edit ${escapeHtml(item.name || item.company)}" title="Edit" data-action="edit" data-kind="${kind}" data-id="${item.id}">${icon('edit')}</button><button class="row-action delete" aria-label="Delete ${escapeHtml(item.name || item.company)}" title="Delete" data-action="delete" data-kind="${kind}" data-id="${item.id}">${icon('trash')}</button></div>`;
}

function tableSearch() {
  return `<label class="table-search"><span data-icon="search">${icon('search')}</span><input class="view-search" type="search" placeholder="Search records..." value="${escapeHtml(activeSearch)}"></label>`;
}

function customersMarkup() {
  const customers = data.customers.filter(searchable);
  const active = data.customers.filter((customer) => customer.status === 'Active').length;
  const enterprise = data.customers.filter((customer) => customer.segment === 'Enterprise').length;
  const activeRate = data.customers.length ? Math.round(active / data.customers.length * 100) : 0;
  return `${heading('RELATIONSHIPS', 'Customers', 'A clear view of the people and companies you work with.', `<button class="primary-button" data-action="add" data-kind="customer"><span class="button-icon">+</span> Add customer</button>`)}
    <section class="metric-grid view-metrics">${metricCard('Total customers', data.customers.length, '<span>Across all segments</span>', 'usersSmall', 'blue')}${metricCard('Active accounts', active, '<span>Currently working with you</span>', 'check', 'green')}${metricCard('Enterprise', enterprise, '<span>High-value relationships</span>', 'building')}${metricCard('Active rate', `${activeRate}%`, '<span>Of saved accounts</span>', 'target', 'amber')}</section>
    <section class="panel table-panel"><div class="panel-heading"><div><h2>Customer records</h2><p>Keep your account details up to date</p></div><div class="toolbar-right">${tableSearch()}<button class="secondary-button" data-action="export" data-kind="customers">${icon('download')} Export</button></div></div>
      <div class="table-wrap"><table><thead><tr><th>Customer</th><th>Company</th><th>Segment</th><th>Status</th><th>Added</th><th><span class="sr-only">Actions</span></th></tr></thead><tbody>${customers.length ? customers.map((customer, index) => `<tr><td>${personCell(customer, index, customer.email)}</td><td><span class="company-mark">${escapeHtml(customer.company)}</span></td><td>${escapeHtml(customer.segment)}</td><td><span class="status-pill ${customer.status === 'Active' ? 'status-active' : 'status-inactive'}">${escapeHtml(customer.status)}</span></td><td>${niceDate(customer.createdAt)}</td><td>${rowActions('customer', customer)}</td></tr>`).join('') : emptyRow('No customer records found.', 'Try another search or add a customer.')}</tbody></table></div><div class="table-footer"><span>Showing ${customers.length} of ${data.customers.length} customers</span><span>Records save automatically</span></div>
    </section>`;
}

function leadsMarkup() {
  const leads = data.leads.filter(searchable);
  const open = data.leads.filter((lead) => !['Converted', 'Disqualified'].includes(lead.stage));
  const qualified = data.leads.filter((lead) => lead.stage === 'Qualified');
  const converted = data.leads.filter((lead) => lead.stage === 'Converted');
  const stages = ['New', 'Contacted', 'Qualified', 'Nurturing', 'Converted', 'Disqualified'];
  return `${heading('OPPORTUNITY MANAGEMENT', 'Leads', 'Build momentum from first touch to a lasting customer.', `<button class="primary-button" data-action="add" data-kind="lead"><span class="button-icon">+</span> Add lead</button>`)}
    <section class="metric-grid view-metrics">${metricCard('Open leads', open.length, '<span>In active follow-up</span>', 'spark', 'amber')}${metricCard('Qualified', qualified.length, '<span>Ready for a conversation</span>', 'target')}${metricCard('Lead value', money(total(open, 'value'), true), '<span>Potential open opportunity</span>', 'cash', 'green')}${metricCard('Converted', converted.length, '<span>Now in your customer list</span>', 'check', 'blue')}</section>
    <section class="panel table-panel"><div class="panel-heading"><div><h2>Lead pipeline</h2><p>Prioritize the next best conversation</p></div><div class="toolbar-right">${tableSearch()}<button class="secondary-button" data-action="export" data-kind="leads">${icon('download')} Export</button></div></div>
      <div class="table-wrap"><table><thead><tr><th>Lead</th><th>Company</th><th>Source</th><th>Stage</th><th>Est. value</th><th>Owner</th><th><span class="sr-only">Actions</span></th></tr></thead><tbody>${leads.length ? leads.map((lead, index) => `<tr><td>${personCell(lead, index, lead.email)}</td><td><span class="company-mark">${escapeHtml(lead.company)}</span></td><td>${escapeHtml(lead.source)}</td><td><span class="status-pill ${statusClass(lead.stage)}">${escapeHtml(lead.stage)}</span></td><td>${money(lead.value)}</td><td>${escapeHtml(lead.owner)}</td><td>${rowActions('lead', lead)}</td></tr>`).join('') : emptyRow('No leads found.', 'Add a lead to start tracking new opportunities.')}</tbody></table></div><div class="table-footer"><span>Showing ${leads.length} of ${data.leads.length} leads</span><span>${stages.length} pipeline stages</span></div>
    </section>`;
}

function salesMarkup() {
  const deals = data.deals.filter(searchable);
  const open = data.deals.filter((deal) => !['Won', 'Lost'].includes(deal.stage));
  const won = data.deals.filter((deal) => deal.stage === 'Won');
  const lost = data.deals.filter((deal) => deal.stage === 'Lost');
  return `${heading('REVENUE OPERATIONS', 'Sales', 'Track every deal and keep your revenue forecast moving.', `<button class="primary-button" data-action="add" data-kind="deal"><span class="button-icon">+</span> Create deal</button>`)}
    <section class="metric-grid view-metrics">${metricCard('Open deals', open.length, '<span>Across your pipeline</span>', 'chart', 'blue')}${metricCard('Pipeline value', money(total(open, 'value'), true), '<span>Combined value of active deals</span>', 'target')}${metricCard('Won this cycle', money(total(won, 'value'), true), `<span>${won.length} deals closed</span>`, 'check', 'green')}${metricCard('Win rate', `${won.length + lost.length ? Math.round(won.length / (won.length + lost.length) * 100) : 0}%`, '<span>Closed deals won</span>', 'cash', 'amber')}</section>
    <section class="panel table-panel"><div class="panel-heading"><div><h2>Deal tracker</h2><p>Stay close to every opportunity</p></div><div class="toolbar-right">${tableSearch()}<button class="secondary-button" data-action="export" data-kind="deals">${icon('download')} Export</button></div></div>
      <div class="table-wrap"><table><thead><tr><th>Deal</th><th>Company</th><th>Amount</th><th>Stage</th><th>Close date</th><th>Owner</th><th><span class="sr-only">Actions</span></th></tr></thead><tbody>${deals.length ? deals.map((deal, index) => `<tr><td>${personCell({ name: deal.name }, index, deal.owner)}</td><td><span class="company-mark">${escapeHtml(deal.company)}</span></td><td>${money(deal.value)}</td><td><span class="status-pill ${statusClass(deal.stage)}">${escapeHtml(deal.stage)}</span></td><td>${niceDate(deal.closeDate)}</td><td>${escapeHtml(deal.owner)}</td><td>${rowActions('deal', deal)}</td></tr>`).join('') : emptyRow('No deals found.', 'Create a deal to start building your sales forecast.')}</tbody></table></div><div class="table-footer"><span>Showing ${deals.length} of ${data.deals.length} deals</span><span>Forecast updates as deals change</span></div>
    </section>`;
}

function reportsMarkup() {
  const wonDeals = data.deals.filter((deal) => deal.stage === 'Won');
  const openDeals = data.deals.filter((deal) => !['Won', 'Lost'].includes(deal.stage));
  const totalRevenue = total(wonDeals, 'value');
  const convertedLeads = data.leads.filter((lead) => lead.stage === 'Converted').length;
  const months = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
  const monthData = revenueByMonth();
  const max = Math.max(1, ...monthData.map((month) => month.value));
  const sources = ['Website', 'Referral', 'LinkedIn', 'Event', 'Other'].map((source) => ({ source, count: data.leads.filter((lead) => lead.source === source).length }));
  const maxSource = Math.max(1, ...sources.map((item) => item.count));
  const top = [...data.customers].sort((a, b) => total(data.deals.filter((deal) => deal.company === b.company && deal.stage === 'Won'), 'value') - total(data.deals.filter((deal) => deal.company === a.company && deal.stage === 'Won'), 'value')).slice(0, 5);
  return `${heading('INSIGHTS & PERFORMANCE', 'Reports', 'Understand what’s working and where to focus next.', `<button class="secondary-button" data-action="export" data-kind="report">${icon('download')} Export report</button>`)}
    <section class="metric-grid view-metrics">${metricCard('Total revenue', money(totalRevenue, true), '<span>From won deals</span>', 'cash', 'green')}${metricCard('Open pipeline', money(total(openDeals, 'value'), true), `<span>${openDeals.length} active deals</span>`, 'target')}${metricCard('Active customers', data.customers.filter((customer) => customer.status === 'Active').length, '<span>Current accounts</span>', 'usersSmall', 'blue')}${metricCard('Lead conversion', `${data.leads.length ? Math.round(convertedLeads / data.leads.length * 100) : 0}%`, '<span>Leads marked converted</span>', 'arrow', 'amber')}</section>
    <section class="report-layout"><article class="panel"><div class="panel-heading"><div><h2>Revenue trend</h2><p>Closed deal revenue over the last six months</p></div><span class="legend"><span class="legend-dot"></span>Revenue</span></div><div class="report-bars">${monthData.map((month, index) => `<div class="report-bar-group"><div class="report-bar ${index === 5 ? 'current' : ''}" style="height:${Math.max(2, month.value / max * 100)}%" title="${money(month.value)}"></div><span class="report-bar-label">${month.label}</span></div>`).join('')}</div></article>
      <article class="panel"><div class="panel-heading"><div><h2>Lead sources</h2><p>Where opportunities find you</p></div></div><div class="report-source-list">${sources.map(({ source, count }) => `<div class="source-row"><span>${source}</span><div class="source-track"><span style="width:${count / maxSource * 100}%"></span></div><strong>${count}</strong></div>`).join('')}</div></article>
      <article class="panel report-full"><div class="panel-heading"><div><h2>Top customers</h2><p>Ranked by closed revenue</p></div><button class="secondary-button" data-view="customers">View customers <span>↗</span></button></div><div class="top-customer-list">${top.map((customer, index) => `<div class="top-customer-row"><span class="person-avatar color-${index % 5}">${escapeHtml(initials(customer.name))}</span><span>${escapeHtml(customer.company)} <span style="color:#9da2b1">· ${escapeHtml(customer.name)}</span></span><strong>${money(total(data.deals.filter((deal) => deal.company === customer.company && deal.stage === 'Won'), 'value'))}</strong></div>`).join('')}</div></article>
    </section>`;
}

function emptyRow(title, detail) { return `<tr><td colspan="7"><div class="empty-state"><strong>${title}</strong>${detail}</div></td></tr>`; }

const views = { dashboard: dashboardMarkup, customers: customersMarkup, leads: leadsMarkup, sales: salesMarkup, reports: reportsMarkup };
const viewNames = { dashboard: 'Overview', customers: 'Customers', leads: 'Leads', sales: 'Sales', reports: 'Reports' };

function render() {
  const page = document.getElementById('page-content');
  page.innerHTML = (views[currentView] || dashboardMarkup)();
  document.getElementById('breadcrumb-current').textContent = viewNames[currentView] || 'Overview';
  document.querySelectorAll('.nav-link[data-view]').forEach((button) => button.classList.toggle('active', button.dataset.view === currentView));
  const localSearch = page.querySelector('.view-search');
  if (localSearch) localSearch.addEventListener('input', (event) => {
    const cursor = event.target.selectionStart;
    activeSearch = event.target.value;
    document.getElementById('global-search').value = activeSearch;
    const scrollY = window.scrollY;
    render();
    const replacement = page.querySelector('.view-search');
    replacement?.focus();
    replacement?.setSelectionRange(cursor, cursor);
    window.scrollTo(0, scrollY);
  });
  page.querySelectorAll('[data-view]').forEach((button) => button.addEventListener('click', () => navigate(button.dataset.view)));
  page.querySelectorAll('[data-action]').forEach((button) => button.addEventListener('click', handleAction));
  page.querySelectorAll('[data-task]').forEach((checkbox) => checkbox.addEventListener('change', () => {
    const task = data.tasks.find((item) => item.id === checkbox.dataset.task);
    if (task) { task.done = checkbox.checked; saveData(); render(); }
  }));
  updateNavCounts();
}

function navigate(view) {
  if (!views[view]) return;
  currentView = view;
  activeSearch = '';
  document.getElementById('global-search').value = '';
  render();
  document.getElementById('page-content').focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const formSpecs = {
  customer: {
    title: 'Add customer', singular: 'customer',
    fields: [
      ['name', 'Full name', 'text', 'e.g. Olivia Rhye', true], ['company', 'Company', 'text', 'e.g. Layers', true],
      ['email', 'Email address', 'email', 'name@company.com', true], ['phone', 'Phone number', 'tel', '+1 (555) 000-0000', false],
      ['segment', 'Customer segment', 'select', ['Enterprise', 'Mid-market', 'SMB'], true], ['status', 'Account status', 'select', ['Active', 'Inactive'], true],
    ],
  },
  lead: {
    title: 'Add lead', singular: 'lead',
    fields: [
      ['name', 'Contact name', 'text', 'e.g. Riley Cooper', true], ['company', 'Company', 'text', 'e.g. Acme Corp', true],
      ['email', 'Email address', 'email', 'name@company.com', true], ['source', 'Lead source', 'select', ['Website', 'Referral', 'LinkedIn', 'Event', 'Other'], true],
      ['stage', 'Pipeline stage', 'select', ['New', 'Contacted', 'Qualified', 'Nurturing', 'Converted', 'Disqualified'], true], ['value', 'Estimated value (USD)', 'number', '25000', true],
      ['owner', 'Lead owner', 'select', ['Jordan Davis', 'Sam Rivera'], true],
    ],
  },
  deal: {
    title: 'Create deal', singular: 'deal',
    fields: [
      ['name', 'Deal name', 'text', 'e.g. Annual subscription', true], ['company', 'Company', 'text', 'e.g. Layers', true],
      ['value', 'Deal amount (USD)', 'number', '25000', true], ['stage', 'Deal stage', 'select', ['Prospecting', 'Qualified', 'Proposal', 'Negotiation', 'Won', 'Lost'], true],
      ['closeDate', 'Expected close date', 'date', '', true], ['owner', 'Deal owner', 'select', ['Jordan Davis', 'Sam Rivera'], true],
    ],
  },
};

function fieldMarkup([name, label, type, placeholder, required], record = {}) {
  const value = record[name] ?? (name === 'closeDate' ? isoDate(14) : '');
  const control = type === 'select'
    ? `<select name="${name}" ${required ? 'required' : ''}>${placeholder.map((option) => `<option value="${escapeHtml(option)}" ${String(value) === option ? 'selected' : ''}>${escapeHtml(option)}</option>`).join('')}</select>`
    : `<input name="${name}" type="${type}" placeholder="${escapeHtml(placeholder)}" value="${escapeHtml(value)}" ${required ? 'required' : ''} ${type === 'number' ? 'min="0" step="100"' : ''}>`;
  return `<div class="form-field"><label for="field-${name}">${label}${required ? ' <span style="color:#d95f69">*</span>' : ''}</label>${control.replace(`name="${name}"`, `name="${name}" id="field-${name}"`)}</div>`;
}

function openForm(kind, id) {
  const spec = formSpecs[kind];
  const collection = kind === 'customer' ? 'customers' : kind === 'lead' ? 'leads' : 'deals';
  const record = id ? data[collection].find((item) => item.id === id) : null;
  const modalRoot = document.getElementById('modal-root');
  modalRoot.innerHTML = `<div class="modal-backdrop" data-close-modal><section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal-header"><div><h2 id="modal-title">${record ? `Edit ${spec.singular}` : spec.title}</h2><p>${record ? 'Update the details below.' : 'Add the details to keep your workspace up to date.'}</p></div><button class="modal-close" type="button" aria-label="Close dialog" data-close-modal>×</button></div><form id="record-form"><div class="form-grid">${spec.fields.map((field) => fieldMarkup(field, record || {})).join('')}</div><div class="modal-footer"><button class="secondary-button" type="button" data-close-modal>Cancel</button><button class="primary-button" type="submit">${record ? 'Save changes' : `Save ${spec.singular}`}</button></div></form></section></div>`;
  modalRoot.querySelectorAll('[data-close-modal]').forEach((element) => element.addEventListener('click', (event) => { if (event.target === element || element.tagName === 'BUTTON') closeModal(); }));
  modalRoot.querySelector('#record-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = Object.fromEntries(formData.entries());
    if (kind === 'lead' || kind === 'deal') result.value = Number(result.value || 0);
    if (record) Object.assign(record, result);
    else {
      result.id = `${kind[0]}${Date.now().toString(36)}`;
      if (kind === 'customer') result.createdAt = isoDate();
      if (kind === 'lead') result.createdAt = isoDate();
      data[collection].unshift(result);
    }
    saveData();
    closeModal();
    render();
    toast(`${spec.singular[0].toUpperCase()}${spec.singular.slice(1)} ${record ? 'updated' : 'added'} successfully`);
  });
  modalRoot.querySelector('input, select')?.focus();
}

function closeModal() { document.getElementById('modal-root').innerHTML = ''; }

function confirmDelete(kind, id) {
  const collection = kind === 'customer' ? 'customers' : kind === 'lead' ? 'leads' : 'deals';
  const record = data[collection].find((item) => item.id === id);
  if (!record) return;
  const label = record.name || record.company;
  const root = document.getElementById('modal-root');
  root.innerHTML = `<div class="modal-backdrop" data-close-modal><section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal-header"><div><h2 id="modal-title">Delete this record?</h2><p>This will remove it from your workspace.</p></div><button class="modal-close" aria-label="Close dialog" data-close-modal>×</button></div><p class="confirm-copy"><strong>${escapeHtml(label)}</strong> will be permanently removed from this browser’s CRM records.</p><div class="modal-footer"><button class="secondary-button" data-close-modal>Cancel</button><button class="danger-button" id="confirm-delete">Delete record</button></div></section></div>`;
  root.querySelectorAll('[data-close-modal]').forEach((element) => element.addEventListener('click', (event) => { if (event.target === element || element.tagName === 'BUTTON') closeModal(); }));
  root.querySelector('#confirm-delete').addEventListener('click', () => {
    data[collection] = data[collection].filter((item) => item.id !== id);
    saveData(); closeModal(); render(); toast('Record deleted');
  });
}

function handleAction(event) {
  const { action, kind, id } = event.currentTarget.dataset;
  if (action === 'add') openForm(kind);
  if (action === 'edit') openForm(kind, id);
  if (action === 'delete') confirmDelete(kind, id);
  if (action === 'export') exportData(kind);
}

function toast(message) {
  const region = document.getElementById('toast-region');
  const element = document.createElement('div');
  element.className = 'toast';
  element.innerHTML = `<span class="toast-check">✓</span>${escapeHtml(message)}`;
  region.append(element);
  window.setTimeout(() => element.remove(), 3000);
}

function exportData(kind) {
  let rows;
  if (kind === 'report') {
    rows = [['Metric', 'Value'], ['Total revenue', total(data.deals.filter((deal) => deal.stage === 'Won'), 'value')], ['Open pipeline', total(data.deals.filter((deal) => !['Won', 'Lost'].includes(deal.stage)), 'value')], ['Active customers', data.customers.filter((customer) => customer.status === 'Active').length], ['Total leads', data.leads.length]];
  } else {
    const collection = kind === 'customers' ? data.customers : kind === 'leads' ? data.leads : data.deals;
    if (!collection.length) { toast('No records to export'); return; }
    const headers = [...new Set(collection.flatMap((item) => Object.keys(item)))];
    rows = [headers, ...collection.map((item) => headers.map((header) => item[header] ?? ''))];
  }
  const csv = rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\r\n');
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  const anchor = document.createElement('a');
  anchor.href = url; anchor.download = `northstar-${kind}-${isoDate()}.csv`; anchor.click();
  URL.revokeObjectURL(url);
  toast('CSV export downloaded');
}

document.querySelectorAll('.sidebar [data-view]').forEach((button) => button.addEventListener('click', () => navigate(button.dataset.view)));
document.getElementById('global-search').addEventListener('input', (event) => {
  activeSearch = event.target.value.trim();
  if (activeSearch) {
    const destinations = [
      ['customers', data.customers],
      ['leads', data.leads],
      ['sales', data.deals],
    ];
    const matchingViews = destinations.filter(([, collection]) => collection.some(searchable));
    const currentCollection = destinations.find(([view]) => view === currentView)?.[1];
    if (currentView === 'dashboard') currentView = matchingViews[0]?.[0] || 'customers';
    else if (currentCollection && !currentCollection.some(searchable) && matchingViews.length) currentView = matchingViews[0][0];
  }
  render();
  document.getElementById('global-search').value = activeSearch;
});
document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); document.getElementById('global-search').focus(); }
  if (event.key === 'Escape') closeModal();
});
document.getElementById('help-button').addEventListener('click', () => toast('Help center coming soon'));
document.getElementById('today-label').textContent = new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'short', day: 'numeric' }).format(new Date());
setupIcons();
render();
