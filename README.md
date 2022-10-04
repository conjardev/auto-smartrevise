# Auto-Smartrevise
A simple JS web addon to solve questions on smartrevise.online

## :exclamation: Caution! :exclamation:
It is highly advised that you check the Terms and Conditions before running any automated scripts on the website.
The site owners can and may take actaion against your Smart Revise account for using this script.
I take no accountability for any action that may be taken against your Smart Revise account for running this script.

You are responsible for your own actions online.

# Quick-Start guide
1. Copy the contents of `solver.js` to your clipboard *(This can be done from the GitHub or by downloading the file)
2. On [Smart Revise](https://smartrevise.online/), start the **quiz** and open `inspect element`
3. On `inspect element`, switch to the tab named `console`
4. Paste the copied code into the `console`
5. Press enter and run

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
