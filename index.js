function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  return line.length == 0 ? "There is nobody waiting to be served!" : `Currently serving ${line.shift()}.`;
}

function currentLine(line) {
  const output = line.reduce( ( a, ))
}