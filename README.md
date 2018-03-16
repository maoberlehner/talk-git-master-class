# Changing history

Sometimes you already have made some commits to your current feature branch and you discover there is a typo in some variable name you’ve added. Sure, you could make a new commit to fix the typo. But what value would this commit, with the message Fixing a typo, have for other programmers reading it in the future?

If your code is not merged yet, and you’re the only one who is working on the branch containing the commit, there is no reason not to fix the original commit in which the variable with the typo was introduced.

## Fixing the most recent commit

Simple changes.

```bash
# Add staged files
git commit add # or `ga`
# Append changes to the previous commit and edit commit message.
git commit --amend # or `gc --amend`
```

More complicated changes for which you want to see the context of the previous commit.

```bash
# Undo the most recent commit.
git reset HEAD~
# Fix the typo and add all files to the index back again afterwards.
git add --all # or `ga --all`
# Reuse the original commit message and commit the changes again.
git commit -c ORIG_HEAD
```

## Fixing an old commit

Theoretically you can make changes to every commit in your history, but you must not change commits which are already shared with other people.

```bash
# Start interactive rebasing.
git rebase -i HEAD~3
# Now change the word in front of the commit you want to update to `edit`.
edit bb5de49 Add something
pick daf2ab3 Change something
pick txf1av2 Add something else
# Fix the typo and add the affected file(s) to the index back again afterwards.
git add foo.js # or `ga foo.js`
# Continue rebasing, you might have to fix some merge conflicts if there are any.
git rebase --continue
```

## Rebase instead of merge

In order to keep your commit history clean, it can be useful to use `rebase` instead of `merge` to update your current branch with the latest changes from `master`.

```bash
git rebase master
```

## Demo

**Fixing the most recent commit**

To setup the demo, run `./setup-demo.sh`.

- Run `git add --all` to add staged files.
- Run `git commit --amend` to add changes to the previous commit.
- Run `git reset HEAD~` to undo the most recent commit.
- Make changes as you whish.
- Run `git add --all` to add staged files.
- Run `git commit -c ORIG_HEAD` to commit the changes using the previous message.

**Fixing an old commit**

- Run `git rebase -i HEAD~3` to start interactive rebasing.
- Change the word in front of the commit you want to update to `edit`.
- Make changes to `foo.js` and run `git add foo.js` afterwards.
- Run `git rebase --continue` and fix merge conflicts.
