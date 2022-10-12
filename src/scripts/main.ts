import View from "viewerjs";
import FlowChart from "flowchart.js";
import ClipboardJS from "clipboard";
// http://flowchart.js.org/ 流程图
// https://github.com/bramp/js-sequence-diagrams/blob/master/README.md 时序图
// https://github.com/mathjax/MathJax#readme 公式

// a标签新页面打开
const links = document.links;
for (let i = 0, linksLength = links.length; i < linksLength; i++) {
    const link = links[i];
    if (link.hostname != window.location.hostname) {
        link.target = "_blank";
    }
}

// 文章详情页
const allTitleSelector =
    ".post-article>h1[id],h2[id],h3[id],h4[id],h5[id],h6[id]";
const allHeadSelector = "a.head";
function initColor() {
    const headElement = document.querySelectorAll(allHeadSelector);
    [...document.querySelectorAll(allTitleSelector)].forEach((el, i) => {
        if (headElement[i]) {
            const top = el.getBoundingClientRect().top;
            if (top < 58) {
                // @ts-ignore
                headElement[i].style.color = "#000";
            } else {
                // @ts-ignore
                headElement[i].style.color = "";
            }
        }
    });
}
initColor();
window.addEventListener("scroll", function () {
    initColor();
});

// 复制按钮
var clipboard = new ClipboardJS(".post-article .code-figure .copy-btn", {
    text: function (trigger) {
        return trigger.nextElementSibling.textContent;
    },
});
clipboard.on("success", function (e) {
    const el = e.trigger as HTMLDivElement;
    e.clearSelection();
    el.style.color = "green";
    el.innerHTML = "复制成功";
    setTimeout(() => {
        el.style.color = "";
        el.innerHTML = "复制";
    }, 2500);
});

clipboard.on("error", function (e) {
    const el = e.trigger as HTMLDivElement;
    el.style.color = "red";
    el.innerHTML = "复制失败";
    setTimeout(() => {
        el.style.color = "";
        el.innerHTML = "复制";
    }, 2500);
});

// 图片查看器
const gallery = new View(document.querySelector(".post-article"));
// 流程图解析
const flows = document.querySelectorAll(".post-article .flow");
flows.forEach((v: HTMLElement) => {
    const text = v.innerText.replace(/_::_/g, "\n");
    var diagram = FlowChart.parse(text);
    v.innerHTML = "";
    diagram.drawSVG(v);
});

// 公式解析
window.MathJax = {
    tex: {
        inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"],
        ],
    },
    svg: {
        displayAlign: "center",
        fontCache: "global",
    },
    options: {
        processHtmlClass: "tex2jax_process",
        ignoreHtmlClass: ".*",
    },
};

(function () {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
    script.async = true;
    document.head.appendChild(script);
})();
