const sentence = "hello there from lighthouse labs";
let time = 50;

for(let i = 0; i < sentence.length; i++) {
  if(i < sentence.length - 1){
    time += 50;
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, time);
  } else {
    setTimeout(() => {
      process.stdout.write(sentence[i] + '\n');
    }, time);
  }
}
