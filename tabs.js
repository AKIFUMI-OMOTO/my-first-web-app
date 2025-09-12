// ここからコードを書いてください
export function setupTabs() {
  // DOM要素を取得
  const homeLink = document.querySelector('[data-tab="home"]');
  const converterTab = document.querySelector('[data-tab="converter"]');
  const homeSection = document.getElementById("home");
  const converterSection = document.getElementById("converter");

  // アクティブなタブとセクションを初期化
  const allTabs = [homeLink, converterTab];
  const allSections = [homeSection, converterSection];

  // タブのクリックイベント処理を共通化
  allTabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();

      // すべてのタブから 'active' クラスを削除
      allTabs.forEach((t) => t.classList.remove("active"));
      // クリックされたタブに 'active' クラスを追加
      tab.classList.add("active");

      // すべてのセクションに 'hidden' クラスを追加
      allSections.forEach((s) => s.classList.add("hidden"));

      // クリックされたタブに対応するセクションから 'hidden' クラスを削除
      const targetSectionId = tab.getAttribute("data-tab");
      const targetSection = document.getElementById(targetSectionId);
      targetSection.classList.remove("hidden");
    });
  });

  // 初期表示を設定（Homeをアクティブにする）
  homeLink.classList.add("active");
  homeSection.classList.remove("hidden");
  converterSection.classList.add("hidden");
}
