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

  /* ---- exam search/filter ---- */
  var examFilter = document.getElementById("examFilter");
  var catGrid = document.getElementById("catGrid");
  var filterEmpty = document.getElementById("filterEmpty");

  if (examFilter && catGrid) {
    var cells = Array.prototype.slice.call(catGrid.querySelectorAll(".cat-cell"));

    examFilter.addEventListener("input", function () {
      var q = examFilter.value.trim().toLowerCase();
      var visibleCount = 0;

      cells.forEach(function (cell) {
        var haystack = (
          cell.dataset.tests +
          " " +
          cell.querySelector("h3").textContent
        ).toLowerCase();
        var match = q === "" || haystack.indexOf(q) !== -1;
        cell.classList.toggle("is-hidden", !match);
        if (match) visibleCount++;
      });

      filterEmpty.classList.toggle("show", visibleCount === 0);
    });
  }

  /* ---- look inside: reveal answer ---- */
  var revealBtn = document.getElementById("revealBtn");
  var previewAnswer = document.getElementById("previewAnswer");

  if (revealBtn && previewAnswer) {
    revealBtn.addEventListener("click", function () {
      var isShown = previewAnswer.classList.toggle("show");
      revealBtn.textContent = isShown ? "해설 숨기기" : "해설 보기";
      revealBtn.setAttribute("aria-expanded", String(isShown));
    });
  }

  /* ---- custom builder: page allocation calculator ---- */
  var SPEAKING_TESTS = ["OPIc", "SJPT", "TSC"];
  var PKG_PRICE = { 100: "89,000원", 200: "149,000원", 300: "199,000원" };
  var PKG_TIER_LABEL = { 100: "STANDARD · 100P", 200: "COMPLETE · 200P", 300: "PREMIUM · 300P" };
  var AREA_LABEL = { R: "Reading", L: "Listening", S: "Speaking", W: "Writing" };

  var builderForm = document.getElementById("builderForm");
  var allocRows = document.getElementById("allocRows");
  var brTierLabel = document.getElementById("brTierLabel");
  var brPrice = document.getElementById("brPrice");
  var brNote = document.getElementById("brNote");
  var brConsultBtn = document.getElementById("brConsultBtn");

  function computeAllocation(test, weakArea, totalPages) {
    var isSpeakingTest = SPEAKING_TESTS.indexOf(test) !== -1;
    var shares;

    if (isSpeakingTest) {
      shares = { R: 0.1, L: 0.1, S: 0.7, W: 0.1 };
    } else {
      var others = ["R", "L", "S", "W"].filter(function (a) {
        return a !== weakArea;
      });
      shares = {};
      shares[weakArea] = 0.4;
      others.forEach(function (a) {
        shares[a] = 0.6 / 3;
      });
    }

    var areas = ["R", "L", "S", "W"];
    var pages = {};
    var running = 0;

    areas.forEach(function (a, i) {
      if (i === areas.length - 1) {
        pages[a] = totalPages - running;
      } else {
        pages[a] = Math.round(totalPages * shares[a]);
        running += pages[a];
      }
    });

    return { pages: pages, isSpeakingTest: isSpeakingTest };
  }

  function renderBuilder() {
    var test = document.getElementById("bTest").value;
    var weak = document.getElementById("bWeak").value;
    var pkg = parseInt(document.getElementById("bPkg").value, 10);

    var result = computeAllocation(test, weak, pkg);

    brTierLabel.textContent = PKG_TIER_LABEL[pkg];
    brPrice.textContent = PKG_PRICE[pkg];

    allocRows.innerHTML = "";
    ["R", "L", "S", "W"].forEach(function (area) {
      var p = result.pages[area];
      var pct = Math.round((p / pkg) * 100);
      var row = document.createElement("div");
      row.className = "alloc-row";
      row.innerHTML =
        '<span>' + AREA_LABEL[area] + '</span>' +
        '<span class="bar-track"><span class="bar-fill" style="width:' + pct + '%"></span></span>' +
        '<span class="pages">' + p + 'P</span>';
      allocRows.appendChild(row);
    });

    brNote.textContent = result.isSpeakingTest
      ? test + "은(는) 말하기 중심 시험이라 Speaking에 70%를 배분했습니다."
      : AREA_LABEL[weak] + "을(를) 약점 영역으로 40% 배분하고, 나머지 영역에 균등 배분했습니다.";

    return { test: test, weak: weak, pkg: pkg, result: result };
  }

  var lastBuild = null;

  if (builderForm) {
    lastBuild = renderBuilder();
    builderForm.addEventListener("submit", function (e) {
      e.preventDefault();
      lastBuild = renderBuilder();
    });
  }

  if (brConsultBtn) {
    brConsultBtn.addEventListener("click", function () {
      if (!lastBuild) lastBuild = renderBuilder();
      var cExam = document.getElementById("cExam");
      var cMemo = document.getElementById("cMemo");
      if (cExam) cExam.value = lastBuild.test;
      if (cMemo) {
        var p = lastBuild.result.pages;
        cMemo.value =
          PKG_TIER_LABEL[lastBuild.pkg] +
          " 구성 문의 — R " + p.R + "P / L " + p.L + "P / S " + p.S + "P / W " + p.W + "P";
      }
      document.getElementById("consult").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ---- daily study load calculator ---- */
  var cPages = document.getElementById("cPages");
  var cWeeks = document.getElementById("cWeeks");
  var calcPerDay = document.getElementById("calcPerDay");

  function updateCalc() {
    var pages = Math.max(1, parseInt(cPages.value, 10) || 0);
    var weeks = Math.max(1, parseInt(cWeeks.value, 10) || 0);
    var perDay = Math.ceil(pages / (weeks * 5));
    calcPerDay.textContent = perDay;
  }

  if (cPages && cWeeks && calcPerDay) {
    cPages.addEventListener("input", updateCalc);
    cWeeks.addEventListener("input", updateCalc);
    updateCalc();
  }

  /* ---- finder: rule-based package recommendation ---- */
  var finderForm = document.getElementById("finderForm");
  var finderResult = document.getElementById("finderResult");
  var resultTier = document.getElementById("resultTier");
  var resultDesc = document.getElementById("resultDesc");

  var TIERS = {
    standard: {
      name: "STANDARD · 100P · 89,000원",
      desc: "짧은 준비 기간이거나 첫 응시에 맞는 구성입니다. 모의고사 3회가 포함됩니다.",
    },
    complete: {
      name: "COMPLETE · 200P · 149,000원",
      desc: "4–8주 완성 구성입니다. 모의고사 10회가 포함되며, 100P 두 권보다 29,000원 저렴합니다.",
    },
    premium: {
      name: "PREMIUM · 300P · 199,000원",
      desc: "고득점 목표나 2–3개월 준비에 맞는 구성입니다. 모의고사 15회 이상이 포함됩니다.",
    },
  };

  function recommend(goal, weeks) {
    if (weeks === "short" || goal === "basic") return TIERS.standard;
    if (goal === "high" || weeks === "long") return TIERS.premium;
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

  /* ---- consultation form: client-only confirmation, no fake network call ---- */
  var consultForm = document.getElementById("consultForm");
  var consultConfirm = document.getElementById("consultConfirm");
  var mailtoLink = document.getElementById("mailtoLink");

  if (consultForm && consultConfirm) {
    consultForm.addEventListener("submit", function (e) {
      e.preventDefault();
      consultForm.style.display = "none";
      consultConfirm.classList.add("show");
      consultConfirm.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  if (mailtoLink && consultForm) {
    mailtoLink.addEventListener("click", function (e) {
      var name = document.getElementById("cName").value;
      var exam = document.getElementById("cExam").value;
      var goal = document.getElementById("cGoal2").value;
      var memo = document.getElementById("cMemo").value;
      var subject = "C-BRIDGE 상담 신청 — " + (exam || "");
      var body =
        "이름: " + name + "\n시험: " + exam + "\n목표: " + goal + "\n메모: " + memo;
      mailtoLink.href =
        "mailto:hello@c-bridge.uk?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
    });
  }
})();
