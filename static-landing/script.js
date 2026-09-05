(function () {
  "use strict";

  /* ---- mobile nav toggle ---- */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- ticker: duplicate content once for seamless -50% loop ---- */
  var track = document.getElementById("tickerTrack");
  if (track) {
    track.innerHTML += track.innerHTML;
  }

  /* ---- finder: simple rule-based package recommendation ---- */
  var finderForm = document.getElementById("finderForm");
  var finderResult = document.getElementById("finderResult");
  var resultTier = document.getElementById("resultTier");
  var resultDesc = document.getElementById("resultDesc");

  var TIERS = {
    standard: {
      name: "STANDARD · 100P · 89,000원",
      desc: "짧은 준비 기간, 한 영역 집중에 맞는 구성입니다. 모의고사 3회가 포함됩니다.",
    },
    complete: {
      name: "COMPLETE · 200P · 149,000원",
      desc: "4–8주 완성 구성입니다. 모의고사 10회가 포함되며, 100P 두 권보다 29,000원 저렴합니다.",
    },
    premium: {
      name: "PREMIUM · 300P · 199,000원",
      desc: "고득점 목표나 재응시 준비에 맞는 구성입니다. 모의고사 15회 이상이 포함됩니다.",
    },
  };

  function recommend(goal, weeks) {
    if (goal === "high" || weeks === "long") return TIERS.premium;
    if (weeks === "short" && goal === "basic") return TIERS.standard;
    return TIERS.complete;
  }

  if (finderForm && finderResult) {
    finderForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var goal = finderForm.elements.goal.value;
      var weeks = finderForm.elements.weeks.value;
      var tier = recommend(goal, weeks);

      resultTier.textContent = tier.name;
      resultDesc.textContent = tier.desc;
      finderResult.classList.add("show");
      finderResult.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }
})();
