function validParenthesis(s) {
    let stack = [];

    for (let char of s) {
        if (char === "{" || char === "[" || char === "(") {
            stack.push(char);
        } else {
            if (stack.length === 0) return false; // Check before accessing stack

            const topEle = stack.pop(); // Pop directly

            if (
                (topEle === "{" && char !== "}") ||
                (topEle === "[" && char !== "]") ||
                (topEle === "(" && char !== ")")
            ) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log("valid parenthesis", validParenthesis("[]"));
