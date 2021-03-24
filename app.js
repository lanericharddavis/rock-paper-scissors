




function random() {

  let gameOptions = ['rock', 'paper', 'scissors']
  return gameOptions[Math.floor(Math.random() * gameOptions.length)]
}

function play(playerChoice) {
  console.log("You clicked", playerChoice)

  let compChoice = random()

  if (playerChoice == compChoice) {
    //console.log("Tie Game! You Both Have", playerChoice)
    document.getElementById("youClickMsg").innerText = `${"You Chose"
      } ${playerChoice.toUpperCase()} `
    document.getElementById("compChoiceMsg").innerText = `${"Computer Chose"
      } ${compChoice.toUpperCase()} `
    document.getElementById("outcomeMsg").innerText = `${"Tie Game! You Both Have"
      } ${playerChoice.toUpperCase()} `
  }
  else if (playerChoice == 'rock' && compChoice == 'paper') {
    //console.log("You Lose! Computer's Paper Covers Your Rock.")
    document.getElementById("youClickMsg").innerText = `${"You Chose"
      } ${playerChoice.toUpperCase()} `
    document.getElementById("compChoiceMsg").innerText = `${"Computer Chose"
      } ${compChoice.toUpperCase()} `
    document.getElementById("outcomeMsg").innerText = `${"You Lose! Computer's Paper Covers Your Rock."} `
  }
  else if (playerChoice == 'rock' && compChoice == 'scissors') {
    //console.log("You Win! Your Rock Smashes Computer's Scissors.")
    document.getElementById("youClickMsg").innerText = `${"You Chose"
      } ${playerChoice.toUpperCase()} `
    document.getElementById("compChoiceMsg").innerText = `${"Computer Chose"
      } ${compChoice.toUpperCase()} `
    document.getElementById("outcomeMsg").innerText = `${"You Win! Your Rock Smashes Computer's Scissors."} `
  }
  else if (playerChoice == 'paper' && compChoice == 'rock') {
    //console.log("You Win! Your Paper Covers Computer's Rock.")
    document.getElementById("youClickMsg").innerText = `${"You Chose"
      } ${playerChoice.toUpperCase()} `
    document.getElementById("compChoiceMsg").innerText = `${"Computer Chose"
      } ${compChoice.toUpperCase()} `
    document.getElementById("outcomeMsg").innerText = `${"You Win! Your Paper Covers Computer's Rock."} `
  }
  else if (playerChoice == 'paper' && compChoice == 'scissors') {
    //console.log("You Lose! Computer's Scissors Cut Your Paper.")
    document.getElementById("youClickMsg").innerText = `${"You Chose"
      } ${playerChoice.toUpperCase()} `
    document.getElementById("compChoiceMsg").innerText = `${"Computer Chose"
      } ${compChoice.toUpperCase()} `
    document.getElementById("outcomeMsg").innerText = `${"You Lose! Computer's Scissors Cut Your Paper."} `
  }
  else if (playerChoice == 'scissors' && compChoice == 'rock') {
    //console.log("You Lose! Computer's Rock Smashes Your Scissors.")
    document.getElementById("youClickMsg").innerText = `${"You Chose"
      } ${playerChoice.toUpperCase()} `
    document.getElementById("compChoiceMsg").innerText = `${"Computer Chose"
      } ${compChoice.toUpperCase()} `
    document.getElementById("outcomeMsg").innerText = `${"You Lose! Computer's Rock Smashes Your Scissors."} `
  }
  else if (playerChoice == 'scissors' && compChoice == 'paper') {
    //console.log("You Win! Your Scissors Cut Computer's Paper.")
    document.getElementById("youClickMsg").innerText = `${"You Chose"
      } ${playerChoice.toUpperCase()} `
    document.getElementById("compChoiceMsg").innerText = `${"Computer Chose"
      } ${compChoice.toUpperCase()} `
    document.getElementById("outcomeMsg").innerText = `${"You Win! Your Scissors Cut Computer's Paper."} `
  }
}

