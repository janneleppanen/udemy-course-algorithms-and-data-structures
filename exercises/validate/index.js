// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null, valid = true) {
  if (!node) return valid;
  if (!valid) return valid;

  if (min && node.data < min) {
    valid = false;
  }

  if (max && node.data > max) {
    valid = false;
  }

  valid = validate(node.left, min, node.data, valid);
  valid = validate(node.right, node.data, max, valid);

  return valid;
}

function validate2(node, min = null, max = null, valid = true) {
  if (min && node.data < min) {
    return false;
  }

  if (max && node.data > max) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}

module.exports = validate;
