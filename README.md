# smartrevise-solver
A simple JS web addon to solve questions on "Smart Revise"

# Quick-Start guide
### Setup
- Copy the contents of `solver.js` *(Either from GitHub or by downloading to your machine)* to your clipboard
- On *Smart Revise*, start the quiz and open **inspect element**
- Select the `console` tab on Inspect Element, *this may be in different places on different browsers or configurations*

### Running
- Paste the copied code into the `console` tab
- Press `enter` to run the script.

>:exclamation: If it does not know a question, it will mark it as `I don't know`, Do not panic, as it will be logged and remembered for next time *(If the dataset is saved)*

# How to contribute
#### Contributions are greatly appreciated, especially the addition of new datasets
To contribute new data to the project, get the contents of the `answerDictionary` array saved to a `.json` file <br>
>:question: You can get the new entries by doing `save()` in the console

>:exclamation: It is suggested that datasets are created by the script itself, however, if you want to create one yourself, make sure it works with the questions before contributing

The file should look something like:
```json
[
{
  "question": "This is a question",
  "answers": ["This is an answer"]
},
{
  "question": "This is another question",
  "answers": ["This is answer one", "This is answer two"]
}
]
```
# Features
### Auto Popup Remover
This feature removes any "Slow down" popups, meaning this is AFK-able

### Auto Dataset Sync
This feature syncs any datasets listed in `datasets/index.json` to the script on startup, meaning nothing needs to be loaded by the user

[Read more about contribution](#How-to-contribute)

# Plans for the future
### Randomised Intervals *[Concept]*
This would simply randomise the interval speed to make it look more human like (e.g. ranging from 3.5 seconds to 5 seconds)
