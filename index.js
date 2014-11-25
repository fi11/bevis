module.exports = function(options) {
    options = options || {};

    var viewSeparator = options.viewSeparator || '_';
    var elemSeparator = options.viewSeparator || '__';
    var statePrefix = options.viewSeparator || '_';

    function getView(view) {
        return view ? viewSeparator + view : '';
    }

    function getState(name) {
        return name ? ' ' + statePrefix + name : '';
    }

    function collectStateSuffix(args, fromSecond) {
        return Array.prototype.slice.call(args, +fromSecond).reduce(function(prev, next) {
            return prev + getState(next);
        }, '');
    }

    return {
        block: function(blockName, viewName) {
            blockName = blockName + getView(viewName);

            return {
                name: function() {
                    return blockName + collectStateSuffix(arguments);
                },
                elem: function(elemName) {
                    return blockName + elemSeparator + elemName + collectStateSuffix(arguments, true);
                }
            };
        }
    };
};
