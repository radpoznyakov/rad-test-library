import React from 'react';

var TestComponent = function (_a) {
    var theme = _a.theme;
    return (React.createElement("div", null,
        React.createElement("h3", { className: "heading" },
            "I'm the test component $",
            theme)));
};

var TestBtn = function (_a) {
    var size = _a.size;
    return (React.createElement("div", null,
        React.createElement("button", null,
            "Hello $",
            size)));
};

export { TestBtn, TestComponent };
//# sourceMappingURL=index.esm.js.map
