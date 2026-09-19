export const personalInfo = {
  name: "Lokesh A",
  title: "Network Engineer",
  tagline: "Enterprise Network Infrastructure • FortiGate Firewall • Systems Admin • Local AI",
  location: "Thoothukudi, Tamil Nadu, India",
  email: "lokesha5004@gmail.com",
  linkedin: "https://linkedin.com/in/lokesh-a-598819339",
  github: "https://github.com/LokeshA1903",
  resumePath: "/Lokesh_CV.pdf",
  status: "ACTIVE_MONITORING // AVAILABLE FOR OPPORTUNITIES",
  uptime: "99.9%",
  summary: `Network Engineer with 2+ years of hands-on experience in enterprise network infrastructure, network routing & switching, and systems administration. Skilled in FortiGate firewall administration, firewall policy management, NAT, SSL-VPN, IPsec VPN, SD-WAN, SD-WAN rules, VLANs, D-Link switching, LAN/WAN troubleshooting, and Windows/Linux administration. Experienced in network monitoring, incident troubleshooting, SLA-based technical support, and managing Active Directory environments.`
};

export const stats = [
  { label: "Infrastructure Uptime", value: "99%+", icon: "ShieldCheck", detail: "Multi-site enterprise routers & firewalls" },
  { label: "Edge Devices Managed", value: "~200", icon: "Server", detail: "Automated firmware deployment via SSL/TLS FTP" },
  { label: "Active Directory Accounts", value: "300+", icon: "Users", detail: "User provisioning, GPOs & domain standards" },
  { label: "SLA Ticket Resolution Rate", value: "95%+", icon: "CheckCircle2", detail: "Consistently met L1 & L2 enterprise SLA targets" },
];

export const certifications = [
  {
    title: "Fortinet Certified Associate (FCA)",
    issuer: "Fortinet",
    validationId: "3684511744LA",
    validity: "Oct 30, 2024 – Oct 30, 2026",
    badgeColor: "from-cyan-500 to-blue-600",
    status: "ACTIVE",
    skillsCovered: ["FortiGate Administration", "Firewall Policy Management", "NAT & VPN Setup", "Network Infrastructure"]
  },
  {
    title: "Fortinet Certified Fundamentals (FCF)",
    issuer: "Fortinet",
    validationId: "8542176905LA",
    validity: "Dec 5, 2024 – Dec 5, 2026",
    badgeColor: "from-emerald-500 to-teal-600",
    status: "ACTIVE",
    skillsCovered: ["Network Operations", "Security Fundamentals", "Fortinet Fabric Overview"]
  },
  {
    title: "Free CCNA 200-301 (Network Chuck)",
    issuer: "Coursera",
    validationId: "u7399670",
    validity: "Lifetime / Verified",
    badgeColor: "from-indigo-500 to-purple-600",
    status: "COMPLETED",
    skillsCovered: ["IP Routing & Switching", "VLANs & Trunking", "Subnetting", "TCP/IP & OSI Model"]
  }
];

export const skillCategories = [
  {
    id: "firewall",
    name: "Network & Firewall Infrastructure",
    icon: "ShieldAlert",
    skills: [
      { name: "FortiGate Firewall Admin", level: 95 },
      { name: "Firewall Policy & Security Rules", level: 92 },
      { name: "SSL-VPN & IPsec VPN Tunnels", level: 90 },
      { name: "SD-WAN & Traffic Steering", level: 88 },
      { name: "NAT & Port Forwarding", level: 94 },
      { name: "Log Analysis & Traffic Monitoring", level: 90 }
    ]
  },
  {
    id: "sysadmin",
    name: "Systems Administration",
    icon: "Server",
    skills: [
      { name: "Windows Server 2019/2022", level: 88 },
      { name: "Active Directory (AD)", level: 92 },
      { name: "Group Policy Objects (GPO)", level: 90 },
      { name: "DNS & DHCP Services", level: 94 },
      { name: "Ubuntu Linux Administration", level: 86 },
      { name: "Windows Failover Clustering", level: 82 }
    ]
  },
  {
    id: "networking",
    name: "Networking & Infrastructure",
    icon: "Network",
    skills: [
      { name: "LAN / WAN Architecture", level: 92 },
      { name: "D-Link Switches & VLAN Trunking", level: 90 },
      { name: "Subnetting & IP Addressing", level: 95 },
      { name: "Network Troubleshooting & SLA Support", level: 94 },
      { name: "AWS Cloud Networking (Learning)", level: 70 }
    ]
  }
];

export const projects = [
  {
    id: "ftp-firmware",
    title: "FTP Server Deployment for Edge Device Firmware Management",
    category: "Infrastructure & Networking",
    platform: "Ubuntu Linux / vsftpd / OpenSSL",
    tagline: "Automated & encrypted firmware distribution across ~200 edge devices",
    summary: "Deployed and configured a secure FTP server using vsftpd on Ubuntu to centralize firmware updates for edge devices across enterprise networks.",
    details: [
      "Deployed and configured a secure FTP server using vsftpd on Ubuntu Linux to centralize firmware distribution for ~200 edge devices across multi-site office networks.",
      "Implemented SSL/TLS encryption using custom OpenSSL certificates, ensuring secure, authenticated firmware payload transfers.",
      "Streamlined the firmware upgrade workflow for edge hardware, replacing manual flash updates and significantly minimizing update-related network downtime."
    ],
    tech: ["Ubuntu Linux", "vsftpd", "OpenSSL", "SSL/TLS", "FTP", "Edge Networks"],
    highlights: ["200+ Devices Updated", "Zero Unencrypted Transfers", "Reduced Maintenance Downtime"],
    icon: "HardDrive"
  },
  {
    id: "local-llm",
    title: "On-Premises Private Local LLM Deployment",
    category: "AI Infrastructure & Local Systems",
    platform: "Ollama / Open WebUI / Ubuntu GPU Server",
    tagline: "API-independent, self-hosted AI interface protecting internal data privacy",
    summary: "Configured and deployed an offline, self-hosted AI LLM solution using Ollama and Open WebUI to provide internal team members with secure AI capabilities.",
    details: [
      "Deployed an offline AI solution using Ollama engine and Open WebUI interface, giving enterprise users a ChatGPT-like private workflow with zero external API calls.",
      "Optimized system parameters and hardware utilization to support up to 10 concurrent users, diagnosing and tuning GPU memory limits.",
      "Eliminated dependency on external AI cloud APIs, guaranteeing 100% data privacy and enterprise compliance for confidential documents."
    ],
    tech: ["Ollama", "Open WebUI", "Ubuntu Linux", "GPU Optimization", "Local AI", "Private Networking"],
    highlights: ["100% Private & Offline", "Supports 10 Concurrent Users", "Zero API Subscription Costs"],
    icon: "Cpu"
  },
  {
    id: "win-cluster",
    title: "Windows Server & High Availability Cluster",
    category: "Systems & Active Directory",
    platform: "Windows Server / Active Directory / GPO",
    tagline: "Multi-user AD infrastructure managing 300+ accounts with failover clustering",
    summary: "Architected a multi-user Active Directory domain environment and configured Windows Failover Clustering for high availability across mission-critical enterprise workloads.",
    details: [
      "Configured a multi-user Active Directory domain environment managing 300+ employee accounts, organizational units, and Group Policy Objects (GPO) to enforce security standards.",
      "Implemented Windows Failover Clustering for high availability and fault tolerance across critical server workloads.",
      "Diagnosed and resolved cluster service heartbeat failures and node communication issues to ensure uninterrupted business continuity."
    ],
    tech: ["Windows Server", "Active Directory", "Group Policy (GPO)", "Failover Clustering", "DNS/DHCP"],
    highlights: ["300+ Active Users", "High Availability Failover", "Strict GPO Compliance"],
    icon: "Server"
  }
];

export const experience = [
  {
    role: "Network Engineer",
    company: "Sardonyx Technologies",
    period: "Sep 2024 – Present",
    location: "India",
    bullets: [
      "Managed and monitored enterprise network infrastructure (routers, switches, firewalls) across multiple sites, maintaining 99%+ uptime.",
      "Administered and optimized FortiGate firewalls, including firewall policies, security rules, ACLs, NAT, and traffic-control configurations to enhance network performance.",
      "Configured and managed FortiGate SSL-VPN and IPsec VPN tunnels for secure remote access and site-to-site connectivity.",
      "Deployed and maintained FortiGate SD-WAN, including WAN member configuration, performance-based path selection, and traffic-steering rules.",
      "Performed firewall policy reviews, NAT/port-forwarding configuration, and log/traffic analysis to troubleshoot and resolve network incidents.",
      "Administered D-Link switches including VLAN configuration, trunking, and subnetting for optimal traffic segmentation.",
      "Managed Active Directory user/group provisioning, GPO enforcement, and DNS/DHCP server administration.",
      "Resolved L1 and L2 network & system tickets, consistently meeting SLA targets with a 95%+ resolution rate."
    ]
  }
];

export const education = {
  degree: "B.A. in Defence and Strategic Studies",
  institution: "Voorhees College, Vellore, Tamil Nadu",
  graduationYear: "Graduated 2022"
};

export const keyAchievements = [
  "Proactively identified and resolved recurring FortiGate firewall policy misconfigurations, reducing overall network downtime.",
  "Led VLAN restructuring across office networks, significantly enhancing traffic segmentation and network stability.",
  "Maintained a 95%+ SLA ticket resolution rate in a high-volume enterprise IT infrastructure.",
  "Deployed automated FTP infrastructure that replaced manual firmware updates for ~200 edge devices."
];
