function openingCeremony() {
  setTimeout(() => {
    console.log("Let the games begin");
    let score = {
      red: 0,
      blue: 0,
      green: 0,
      yellow: 0,
    };
    race100M(score);
  }, 1000);
  console.log("open");
}

function race100M(score) {
  console.log("race");
  setTimeout(() => {
    const time = {
      red: Math.floor(Math.random() * 5) + 10,
      yellow: Math.floor(Math.random() * 5) + 10,
      blue: Math.floor(Math.random() * 5) + 10,
      green: Math.floor(Math.random() * 5) + 10,
    };
    const sortColors = Object.keys(time).sort((a, b) => time[a] - time[b]);
    const fColor = sortColors[0];
    const sColor = sortColors[1];
    score[fColor] += 50;
    score[sColor] += 25;
    console.log(`Race100M: ${fColor} came first, ${sColor} came second`);
    console.log("updated Score : ", score);
    console.log("TIme taken : ", time);
    longJump(score);
  }, 3000);
}

function longJump(score) {
  setTimeout(() => {
    const colors = ["red", "yellow", "blue", "green"];
    const selCol = colors[Math.floor(Math.random() * 4)];
    score[selCol] += 150;

    console.log(`LongJump : ${selCol} won the Long Jump`);
    console.log("Updated Score : ", score);

    highJump(score);
  }, 2000);
}

function highJump(score) {
  setTimeout(() => {
    const userCol = prompt("What color secured the highest jump?");
    if (userCol && score[userCol]) {
      score[userCol] += 100;
      console.log(
        `${userCol} secured the highest jump. Adding 100 to ${userCol}`
      );
      console.log("Updated Score : ", score);
    } else {
      console.log("Event was cancelled");
    }
    awardCeremony(score);
  }, 1000);
}

function awardCeremony(score) {
  console.log("Final Score:", score);
  const sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);
  console.log(
    `${sortedScores[0][0]} came first with ${sortedScores[0][1]} points.`
  );
  console.log(
    `${sortedScores[1][0]} came second with ${sortedScores[1][1]} points.`
  );
  console.log(
    `${sortedScores[2][0]} came third with ${sortedScores[2][1]} points.`
  );
}

openingCeremony();
