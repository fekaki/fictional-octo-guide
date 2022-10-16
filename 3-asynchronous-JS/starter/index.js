const fs = require("fs");
const superagent = require("superagent");

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Breed: ${data}`);

  // superagent  The Problem with Callbacks: Callback Hell
    // não está puxando o ${data} quando substitui o hound do superagent.
    // .get(`https://dog.ceo/api/breed/hound/images/random`)
    // .end((err, res) => {
    //   if (err) return console.log(err.message);
    //   console.log(res.body.message);

    //   fs.writeFile("dog-img.txt", res.body.message, err => {
    //     if (err) return console.log(err.message);
    //     console.log("Random dog image saved to file!");
    //   });
    // });

    superagent // From Callback Hell To Promises
    // não está puxando o ${data} quando substitui o hound do superagent.
    .get(`https://dog.ceo/api/breed/hound/images/random`)
    .then(res => {
      console.log(res.body.message);

      fs.writeFile("dog-img.txt", res.body.message, err => {
        if (err) return console.log(err.message);
        console.log("Random dog image saved to file!");
      });
    })
    .catch(err => {
      console.log(err.message);
    });
});
