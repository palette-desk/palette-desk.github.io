(function () {
  const features = [
    {
      slug: "rental-wall-safe-pc-room",
      title: "賃貸でも作れる、壁を傷つけないPCルーム特集",
      href: "features/rental-wall-safe-pc-room.html",
      summary: "突っ張り収納、置くだけライト、床保護マットを中心に、原状回復しやすいPCルームを作る特集です。",
      tag: "賃貸OK"
    },
    {
      slug: "six-tatami-gaming-desk",
      title: "6畳ワンルーム向けゲーミングデスク配置",
      href: "features/six-tatami-gaming-desk.html",
      summary: "ベッドや収納と干渉しにくいデスク配置、チェアの引きしろ、配線の逃がし方をまとめます。",
      tag: "6畳"
    },
    {
      slug: "clean-cable-desk",
      title: "配線を隠してすっきり見せるデスク周り",
      href: "features/clean-cable-desk.html",
      summary: "ケーブルトレー、モニターアーム、電源タップ収納で生活感を抑えるデスク周り特集です。",
      tag: "配線整理"
    },
    {
      slug: "black-cyberpunk-pc-room",
      title: "黒基調でまとめるサイバーパンクPC環境",
      href: "features/black-cyberpunk-pc-room.html",
      summary: "黒家具、間接照明、ネオンカラーの小物で近未来感を出すPCルームの作り方を紹介します。",
      tag: "サイバーパンク"
    },
    {
      slug: "work-and-game-layout",
      title: "在宅ワークとゲームを両立する兼用レイアウト",
      href: "features/work-and-game-layout.html",
      summary: "仕事用とゲーム用を切り替えやすいデスク配置、照明、周辺機器の選び方をまとめます。",
      tag: "兼用"
    },
    {
      slug: "dual-monitor-room",
      title: "モニター2枚でも圧迫感を出さない部屋づくり",
      href: "features/dual-monitor-room.html",
      summary: "デュアルモニターでも部屋を狭く見せにくい奥行き、アーム、棚の使い方を紹介します。",
      tag: "モニター"
    },
    {
      slug: "rgb-indirect-lighting",
      title: "夜に映える間接照明とRGBライトの選び方",
      href: "features/rgb-indirect-lighting.html",
      summary: "デスク裏、棚、壁際のライト配置で、まぶしすぎず雰囲気を作る照明特集です。",
      tag: "照明"
    },
    {
      slug: "floor-protection-chair-mat",
      title: "床を傷つけにくいチェアマットと家具選び",
      href: "features/floor-protection-chair-mat.html",
      summary: "キャスター傷、デスク脚の跡、ラグとの相性を見ながら床保護アイテムを選ぶ特集です。",
      tag: "床保護"
    }
  ];

  function pathForCurrentPage(href) {
    const inFeatureDir = window.location.pathname.includes("/features/");
    return inFeatureDir ? `../${href}` : href;
  }

  function shuffled(items) {
    return items
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);
  }

  document.querySelectorAll("[data-feature-list]").forEach((target) => {
    const limit = Number(target.dataset.featureLimit) || 3;
    target.innerHTML = shuffled(features).slice(0, limit).map((feature) => `
      <a class="feature-title" href="${pathForCurrentPage(feature.href)}">${feature.title}</a>
    `).join("");
  });

  const featureArchive = document.querySelector("[data-feature-archive]");
  if (featureArchive) {
    featureArchive.innerHTML = features.map((feature, index) => `
      <a class="feature-list-card" href="${feature.href}">
        <span class="feature-list-index">${String(index + 1).padStart(2, "0")}</span>
        <span class="feature-list-body">
          <small>${feature.tag}</small>
          <strong>${feature.title}</strong>
          <p>${feature.summary}</p>
        </span>
      </a>
    `).join("");
  }
})();