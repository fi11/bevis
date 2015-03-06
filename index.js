var VIEW_SEPARATOR = '_';
var ELEM_SEPARATOR = '__';
var STATE_PREFIX = '_';

function collectState(a, b, c, d, e, f, g, h, i, j, err) {
    if (err) {
        throw new Error("Too many arguments");
    }

    var args = [a || "", b || "", c || "", d || "", e || "", f || "", g || "", h || "", i || "", j || ""];
    var result = "";
    
    for (var i = 0; i < 10; i++) {
        var state = args[i];

        if (state === "") {
            continue;
        }

        result += " " + STATE_PREFIX + state;
    }

    return result;
}

function BevisBlock(blockName, viewName) {
    this._name = blockName + (viewName ? VIEW_SEPARATOR + viewName : "");
}

BevisBlock.prototype.name = function(a, b, c, d, e, f, g, h, i, j) {
    return this._name +
        collectState(
            a || null,
            b || null,
            c || null,
            d || null,
            e || null,
            f || null,
            g || null,
            h || null,
            i || null,
            j || null);

};

BevisBlock.prototype.elem = function(elemName, a, b, c, d, e, f, g, h, i, j) {
    return this._name +
        ELEM_SEPARATOR +
        elemName +
        collectState(
            a || null,
            b || null,
            c || null,
            d || null,
            e || null,
            f || null,
            g || null,
            h || null,
            i || null,
            j || null);
};

module.exports = BevisBlock;
