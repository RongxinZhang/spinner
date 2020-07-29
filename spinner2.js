process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner = function() {
  const TIMER_START = 100;
  const TIMER_ADDITION = 200;

  const spinnerParts = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ',
    '\r/   ','\r-   ','\r\\   ','\r|   '];
  
  spinnerParts.forEach((el, i)=>{
    setTimeout(() => {
      process.stdout.write(el);
    },
    TIMER_START + (TIMER_ADDITION * i));
  });
};

spinner();