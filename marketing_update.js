const fs = require('fs');

const filePath = 'src/pages/index.astro';
let content = fs.readFileSync(filePath, 'utf8');

// 1. ADD AUTHORITY TRUST BAR
// We'll insert this right below the generic stats in the Hero Section
const statsSectionRegex = /<p class="text-sm text-gray-500 dark:text-gray-400 mt-6">\s*或者 <a href="#projects"[^>]*>查看开源项目<\/a> →\s*<\/p>/;
const trustBarHTML = `        <p class="text-sm text-gray-500 dark:text-gray-400 mt-6">
          或者 <a href="#projects" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">查看开源项目</a> →
        </p>

        <!-- Authority Trust Bar -->
        <div class="mt-12 pt-8 border-t border-gray-200 dark:border-white/5 animate-fade-in-up" style="animation-delay: 0.2s">
          <p class="text-xs text-gray-500 dark:text-gray-400 mb-4 font-mono tracking-widest uppercase">前大厂研发 & 顶级科研机构背景</p>
          <div class="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div class="flex items-center gap-2">
              <span class="text-2xl">⚡</span>
              <span class="font-bold text-gray-900 dark:text-white tracking-wider">BAIDU</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-2xl">💻</span>
              <span class="font-bold text-gray-900 dark:text-white tracking-wider">LENOVO</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-2xl">🏛️</span>
              <span class="font-bold text-gray-900 dark:text-white tracking-wider">CASIA</span>
              <span class="text-xs text-gray-500 border border-gray-300 dark:border-white/20 rounded px-1 ml-1">中科院自动化所</span>
            </div>
          </div>
        </div>`;
content = content.replace(statsSectionRegex, trustBarHTML);

// 2. MODIFY HERO HEADLINE & SUBHEADLINE FOR RECRUITERS/PEERS
// The current subhead focuses purely on "teaching 1000 devs". We should balance it with technical depth.
const heroSubheadRegex = /🎯 帮助 1,000\+ 开发者掌握 Vibe Coding，提升 10x 编程效率<br\/>\s*<span class="text-base opacity-70 block mt-2">Empowering 1k\+ developers with Vibe Coding to boost productivity 10-fold\.<\/span>/;
const newHeroSubhead = `🎯 构建生产级 AI Agent 架构，探索大模型应用落地最佳实践<br/>
          <span class="text-base opacity-70 block mt-2">LLM Algorithm Engineer | Open-Source Contributor | AI Infrastructure</span>`;
content = content.replace(heroSubheadRegex, newHeroSubhead);

// 3. ADD SCARCITY/SOCIAL PROOF TO COOPERATION SECTION
// Find the 1:1 Consulting Card and add scarcity
const consultCardRegex = /<div class="text-4xl mb-6">🤝<\/div>\s*<h3 class="text-xl font-bold mb-2">1:1 咨询与顾问<\/h3>/;
const newConsultCard = `<div class="text-4xl mb-6">🤝</div>
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-bold">1:1 交流与技术顾问</h3>
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <div class="text-xs text-green-600 dark:text-green-400 font-medium bg-green-50 dark:bg-green-500/10 px-2 py-1 rounded inline-block mb-4 border border-green-200 dark:border-green-500/20">本月档期：仅剩 1 个名额</div>`;
content = content.replace(consultCardRegex, newConsultCard);

// Remove the old social proof stats box from the hero since we moved "authority" up. Let's keep the numbers but make them tighter.
const oldSocialProofRegex = /<div class="mt-12 pt-8 border-t border-gray-200 dark:border-white\/5">.*?<div class="mt-8">/s;
content = content.replace(oldSocialProofRegex, '<div class="mt-12">');


fs.writeFileSync(filePath, content);
console.log('Successfully updated index.astro for marketing CRO.');
