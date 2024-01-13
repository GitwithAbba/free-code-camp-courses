function recurse(x) {
   if (x > 0) {
       console.log(x);
       recurse(x - 1);
    };
};

recurse(10);