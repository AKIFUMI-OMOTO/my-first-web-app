// ここからコードを書いてください
export function setupConverter() {
  // DOM要素を取得
  const converterForm = document.querySelector(".converter-form");
  const converterInput = document.querySelector(".converter-input");
  const converterFrom = document.querySelector(".converter-from");
  const converterTo = document.querySelector(".converter-to");
  const converterResult = document.querySelector(".converter-result");

  // 単位データを定義
  const lengthUnit = [
    {
      name: "meter",
      base: 1,
    },
    {
      name: "kilometer",
      base: 1000,
    },
    {
      name: "centimeter",
      base: 0.01,
    },
    {
      name: "millimeter",
      base: 0.001,
    },
    {
      name: "inch",
      base: 0.0254,
    },
    {
      name: "foot",
      base: 0.3048,
    },
    {
      name: "yard",
      base: 0.9144,
    },
    {
      name: "mile",
      base: 1609.344,
    },
  ];

  // 単位選択欄を初期化
  const initializeOptions = () => {
    lengthUnit.forEach((unit) => {
      const optionFrom = document.createElement("option");
      optionFrom.value = unit.base;
      optionFrom.textContent = unit.name;
      converterFrom.appendChild(optionFrom);

      const optionTo = document.createElement("option");
      optionTo.value = unit.base;
      optionTo.textContent = unit.name;
      converterTo.appendChild(optionTo);
    });
  };

  // 変換処理を実装
  const convert = () => {
    const inputValue = parseFloat(converterInput.value);

    // 入力値が数値でない場合はエラーを表示
    if (isNaN(inputValue)) {
      converterResult.textContent = "Please enter a valid number";
      return;
    }

    // 変換元の単位（base）を取得
    const fromUnitBase = parseFloat(converterFrom.value);
    // 変換先の単位（base）を取得
    const toUnitBase = parseFloat(converterTo.value);

    // 変換後の値を計算
    const convertedValue = (inputValue * fromUnitBase) / toUnitBase;

    // 変換結果を表示
    const fromUnitName =
      converterFrom.options[converterFrom.selectedIndex].textContent;
    const toUnitName =
      converterTo.options[converterTo.selectedIndex].textContent;

    converterResult.textContent = `${inputValue} ${fromUnitName} = ${convertedValue.toFixed(
      3
    )} ${toUnitName}`;
  };

  // フォームの初期化
  const initializeForm = () => {
    // 単位選択肢を生成
    initializeOptions();

    // 初期値を設定
    converterInput.value = 1000;
    converterFrom.value = "1"; // meter
    converterTo.value = "1000"; // kilometer

    // 初期変換を実行
    convert();
  };

  // リアルタイムに変換が行われるようイベントリスナーを追加
  converterForm.addEventListener("input", convert);

  // コンバーターフォームを初期化
  initializeForm();
}
