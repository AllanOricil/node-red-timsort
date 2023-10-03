module.exports = function (RED) {
  const timsort = require("timsort");

  function Timsort(config) {
    RED.nodes.createNode(this, config);

    const node = this;

    node.on("input", function (msg) {
      timsort.sort(msg.payload, (a, b) => a - b);
      node.send(msg);
    });
  }

  RED.nodes.registerType("timsort", Timsort);
};
