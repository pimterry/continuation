var BlockStatement = module.exports = function(body) {
  this.type = 'BlockStatement';
  this.body = body;
};

BlockStatement.prototype.normalize = function () {
  var body = [];
  for (var i = 0; i < this.body.length; i++) {
    var statement = this.body[i];
    if (statement.type === 'IfStatement') {
      statement.normalize(body);
    } else if (statement.type === 'ForStatement') {
      statement.normalize(body);
      statement = statement.transformedStatement;
    } else if (statement.type === 'WhileStatement') {
      statement.normalize(body);
    } else if (statement.type === 'SwitchStatement') {
      statement.normalize(body);
    } else if (statement.type === 'ExpressionStatement') {
      statement.normalize(body);
    } else {
      body.push(statement);
    }
  }
  this.body = body;
};