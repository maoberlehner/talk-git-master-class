# Temporary WIP commits

Although `git stash` is fine for saving your current work for a short period of time, there might be situations where you want to temporary save your changes to come back (maybe weeks) later. Or you maybe want to share your current state of work with a colleague, that's when temporary WIP commits come in handy.

```bash
# Add everything to the index.
git add --all
# Make a temporary commit.
git commit -m 'WIP: Figuring out why the API call fails'
# Checkout a new branch from master to work on an urgent bugfix.
git checkout -b bugfix/some-problem master
# Go back to the original branch.
git checkout feature/some-feature
# Look at the last commits to remember what you were working on when you left.
git log
# Undo the temporary commit.
git reset HEAD~
```
