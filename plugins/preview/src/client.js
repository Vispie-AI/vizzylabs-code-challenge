exports.name = 'preview';
exports.inject = ['lanternWorkbench'];
exports.apply = function (ctx) {
  ctx.effect(function () { return ctx.lanternWorkbench.register('preview'); });
};
