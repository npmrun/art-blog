import View from "viewerjs";
import FlowChart from "flowchart.js";
// http://flowchart.js.org/ 流程图
// https://github.com/bramp/js-sequence-diagrams/blob/master/README.md 时序图
// https://github.com/mathjax/MathJax#readme 公式

// 图片查看器
const gallery = new View(document.querySelector(".typography"));
// 流程图解析
const flows = document.querySelectorAll(".typography .flow");
flows.forEach((v: HTMLElement) => {
    const text = v.innerText.replace(/_::_/g, "\n");
    console.log(text);

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
