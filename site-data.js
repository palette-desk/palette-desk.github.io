(function () {
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type") || "";

  const layoutNames = {
    gaming: "ゲーミングルーム",
    study: "書斎",
    workspace: "ワークスペース",
    creator: "クリエイター",
    cyberpunk: "サイバーパンク",
    botanical: "ボタニカル",
    industrial: "インダストリアル",
    white: "ホワイト調",
    black: "ブラック調",
    wamodern: "和モダン",
    wall: "壁付けレイアウト",
    lshape: "L字型レイアウト",
    island: "アイランド型レイアウト"
  };

  const itemNames = {
    desk: "デスク",
    chair: "チェア",
    storage: "棚・収納",
    lighting: "照明",
    pc: "PC本体",
    monitor: "モニター",
    keyboard: "キーボード・マウス",
    headphone: "ヘッドホン・イヤホン",
    mic: "マイク",
    speaker: "スピーカー",
    device: "周辺機器",
    accessory: "小物"
  };

  const layoutTone = {
    gaming: ["theme-gaming", "賃貸でもOK！傷つけないゲーミングルーム", "6畳でも置きやすい黒基調デスク環境", "RGBライトで作る集中しやすいゲーム部屋"],
    study: ["theme-study", "本棚とデスクを整える静かな書斎", "省スペースで作る読書兼PCデスク", "落ち着いた木目のワーク書斎"],
    workspace: ["theme-workspace", "在宅ワーク向けの明るいデスク環境", "生活感を抑えるワークスペース", "モニター2枚でも圧迫感を出さない配置"],
    creator: ["theme-creator", "撮影と編集を両立するクリエイター部屋", "配信機材をまとめるデスク周り", "作品づくりに集中できる収納レイアウト"],
    cyberpunk: ["theme-cyberpunk", "ネオンで作るサイバーパンクなPCルーム", "黒壁風でも重く見せないライト配置", "小物で作る近未来ゲーミング環境"],
    botanical: ["theme-botanical", "観葉植物を合わせるボタニカルデスク", "木目とグリーンで整えるPCルーム", "自然光を活かしたナチュラルワーク環境"],
    industrial: ["theme-industrial", "アイアン素材でまとめる無骨なデスク", "ブラック棚を使ったインダストリアル部屋", "配線まで見せる大人のPCルーム"],
    white: ["theme-white", "白家具でまとめる明るいデスク環境", "ホワイト調のすっきりゲーミングルーム", "淡色ガジェットで作るやさしいPC部屋"],
    black: ["theme-black", "ブラック調で統一する没入型デスク", "暗めの部屋でも見やすいライト設計", "黒い家具で作る引き締まったPCルーム"],
    wamodern: ["theme-wamodern", "和モダンに合わせる低めのPCデスク", "畳部屋でも使いやすいチェアマット配置", "障子と間接照明で整えるデスク空間"],
    wall: ["theme-wall", "壁付けデスクで広く見せる6畳レイアウト", "配線を壁側にまとめるPC環境", "棚とデスクを一直線に置く省スペース配置"],
    lshape: ["theme-lshape", "L字型デスクで作る作業効率重視の部屋", "ゲームと仕事を分けるL字レイアウト", "角を活かすデュアルモニター環境"],
    island: ["theme-island", "アイランド型デスクで作る見せる作業部屋", "背面収納まで整える中央配置", "撮影にも使いやすい回遊型PCルーム"]
  };

  const itemTone = {
    desk: ["item-desk", "LED付きゲーミングデスク", "奥行きと配線まわりを確認しやすい、PCルーム向けデスク。", "¥9,980 〜"],
    chair: ["item-chair", "長時間向けワークチェア", "座面の高さと肘置き調整を見て選びたいチェア。", "¥12,800 〜"],
    storage: ["item-storage", "壁を傷つけにくい収納ラック", "突っ張り式やオープン棚で周辺機器をまとめやすい収納。", "¥7,980 〜"],
    lighting: ["item-lighting", "デスク用間接照明", "画面の映り込みを抑えながら雰囲気を作れるライト。", "¥1,980 〜"],
    pc: ["item-pc", "省スペースPC本体", "デスク下や棚に置きやすいサイズ感のPC本体候補。", "¥79,800 〜"],
    monitor: ["item-monitor", "作業向けモニター", "ゲーム、作業、配信で使いやすいサイズを選びやすいモニター。", "¥14,800 〜"],
    keyboard: ["item-keyboard", "省スペースキーボード・マウス", "デスクを広く使いやすい入力デバイスの組み合わせ。", "¥3,980 〜"],
    headphone: ["item-headphone", "デスク映えするヘッドホン", "音質と置き場所を両立しやすいヘッドホン・イヤホン。", "¥2,980 〜"],
    mic: ["item-mic", "配信用USBマイク", "通話や配信で使いやすく、アーム設置にも向くマイク。", "¥4,980 〜"],
    speaker: ["item-speaker", "コンパクトスピーカー", "モニター横に置きやすい小型スピーカー。", "¥2,980 〜"],
    device: ["item-device", "ケーブルトレー・モニターアーム", "配線整理や画面位置調整に使いやすい周辺機器。", "¥1,680 〜"],
    accessory: ["item-accessory", "デスク小物・トレー", "リモコン、ケーブル、ガジェットを整える小物類。", "¥980 〜"]
  };

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function renderLayoutList() {
    const key = layoutNames[type] ? type : "gaming";
    const name = layoutNames[key];
    const tone = layoutTone[key];
    setText("listing-title", `${name}一覧`);
    setText("breadcrumb-current", `${name}一覧`);
    setText("listing-description", `${name}をテーマにしたPCルーム・デスク環境の記事を一覧で紹介します。`);

    const target = document.getElementById("layout-list");
    if (!target) return;
    target.innerHTML = tone.slice(1).map((title, index) => `
      <a class="layout-list-card" href="#">
        <span class="layout-card-visual ${tone[0]}"></span>
        <span class="layout-card-index">
          <small>layout idea</small>
          <b>${String(index + 1).padStart(2, "0")}</b>
        </span>
        <strong>${title}</strong>
      </a>
    `).join("");
  }

  function renderItemList() {
    const key = itemNames[type] ? type : "desk";
    const name = itemNames[key];
    const tone = itemTone[key];
    setText("listing-title", `オススメの${name}`);
    setText("breadcrumb-current", `オススメの${name}`);
    setText("listing-description", `${name}を選ぶときに見たいサイズ感、設置しやすさ、雰囲気を一覧で比較します。`);

    const target = document.getElementById("item-list");
    if (!target) return;
    const products = [
      tone,
      [tone[0], `${name} スタンダードモデル`, "まず比較候補に入れやすい、価格と使いやすさのバランス型。", tone[3]],
      [tone[0], `${name} 省スペースモデル`, "6畳やワンルームでも置きやすいサイズを意識した候補。", tone[3]],
      [tone[0], `${name} デザイン重視モデル`, "部屋の雰囲気を崩しにくい見た目重視の候補。", tone[3]]
    ];
    target.innerHTML = products.map((product) => `
      <article class="recommend-card">
        <span class="recommend-image ${product[0]}"></span>
        <div>
          <h2>${product[1]}</h2>
          <p>${product[2]}</p>
          <strong>${product[3]}</strong>
          <a href="#">詳しく見る</a>
        </div>
      </article>
    `).join("");
  }

  if (document.body.dataset.page === "layout-list") renderLayoutList();
  if (document.body.dataset.page === "item-category") renderItemList();
})();
