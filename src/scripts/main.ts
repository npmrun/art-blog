import View from "viewerjs";
import FlowChart from "flowchart.js"
// http://flowchart.js.org/ 流程图
// https://github.com/bramp/js-sequence-diagrams/blob/master/README.md 时序图
// https://github.com/mathjax/MathJax#readme 公式

const gallery = new View(document.querySelector(".typography"));  

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
    }
};

(function () {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
    script.async = true;
    document.head.appendChild(script);
})();
