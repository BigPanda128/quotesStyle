//change this string
var text = "'I'm the cook,' he said, 'it's my job.'";

//veiw the text before i change it
print(text);

//replacement method with RegExp
print(text.replace(/(^|\W)'|'(\W|$)/g, '($1,$2)'));
// // -> "I'm the cook," he said, "it's my job."
