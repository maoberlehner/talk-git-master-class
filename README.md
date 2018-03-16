# Tips & Tricks 

Below you can find some useful Git commands. If you want to see them in action, you can take a look at the [demo](#demo).

```bash
# Show the current status (use it regularly!).
git status # or `gs`

# Remove all branches which are already merged into master.
git branch --merged master | grep -v "\* master" | xargs -n 1 git branch -d

# Stash changes and include untracked files.
git stash -u

# Reapply stashed files.
git stash apply

# Search the diff for the given string.
git diff -S "foo" # or `gd -S "foo"`

# Search the diff for the given regular expression.
git diff -G "foo|bar" # or `gd -G "foo|bar"`

# Remove untracked files and untracked directories.
git clean -df
```

## Demo

To setup the demo, run `./setup-demo.sh`.

- Run `git status` to see the current status.
- Run `git stash -u` to stash all files.
- Run `git status` to see if everything is ok.
- Run `git stash apply` to reapply stashed files.
- Run `git diff -S "foo"` to see only diffs containing `foo`.
- Run `git diff -G "foo|bar"` to see only diffs containing `foo` or `bar`.
- Run `git clean -df` to cleanup untracked files and directories.
- Run `git status` to see the status again.
