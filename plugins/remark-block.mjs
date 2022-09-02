// https://github.com/remarkjs/remark-directive
// https://github.com/syntax-tree/mdast-util-directive#syntax-tree

import { visit } from "unist-util-visit";
// import {h} from 'hastscript'

export default function () {
    return function (tree) {
        visit(tree, (node) => {
            if (
                node.type === "textDirective" ||
                node.type === "leafDirective" ||
                node.type === "containerDirective"
            ) {
                console.log(node);
                
            }
            if (
                node.type === "containerDirective" && node.name === "main"
            ) {
                node.type = "html"
                node.value = "<span>fuck</span>"
            }
        });
    };
}
