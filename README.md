# smartrevise-solver
A simple JS web addon to solve questions on "Smart Revise"

# Quick-Start guide
### Installation
To install, simply download `solver.js` to your device.

### Setup
- Copy the contents of `solver.js` to your clipboard
- On *Smart Revise*, start the quiz and open **inspect element**
- Select the `console` tab on Inspect Element, *this may be in different places on different browsers or configurations*

### Running
:exclamation: (Currently), this comes with **NO** training data, the script will train itself which will start by marking questions as `I don't know`. This is normal.

- Paste the copied code into the `console` tab
- Press `enter` to run the script.

:exclamation: This script may take a long time to train, it's adviced you save your dataset to use in the future, however, a better system to this is in development

# Plans for the future
### Automated Dataset Sync *[Concept]*
This would fetch datasets from the repository and bring them into the script on load, this would make adding new data much simpler and would allow for a wider spread of tasks to be automated

### Randomised Intervals *[Concept]*
This would simply randomise the interval speed to make it look more human like (e.g. ranging from 3.5 seconds to 5 seconds)
