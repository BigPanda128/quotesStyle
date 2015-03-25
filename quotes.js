var text = "'A'm the cook,' he said, 'it's my job.'";
// Change this call.
print(text);
print(text.replace(/^'|'$|'|[^\D'\D]/g, '"'));
// // -> "I'm the cook," he said, "it's my job."
