import React from 'react';

const GitCheatsheet = ({ onButtonClick, selectedCommands }) => {
  // Commands divided into categories for rendering purposes
  const sections = [
    {
      title: "Setup",
      commands: [
        { name: 'git config --global user.name "Your Name"', description: 'Sets the name you want attached to your commits.' },
        { name: 'git config --global user.email "you@example.com"', description: 'Sets the email you want attached to your commits.' },
        { name: 'git init', description: 'Initializes a new Git repository in your current directory.' },
      ],
    },
    {
      title: "Basic Commands",
      commands: [
        { name: 'git status', description: 'Shows the status of your current directory and tracked files.' },
        { name: 'git add .', description: 'Stages all changes in the current directory for the next commit.' },
        { name: 'git commit -m "message"', description: 'Commits the staged changes with a message describing the commit.' },
        { name: 'git log', description: 'Shows the commit history for the repository.' },
      ],
    },
    {
      title: "Branching",
      commands: [
        { name: 'git branch', description: 'Lists all branches in your repository.' },
        { name: 'git branch branch_name', description: 'Creates a new branch with the specified name.' },
        { name: 'git checkout branch_name', description: 'Switches to the specified branch.' },
        { name: 'git merge branch_name', description: 'Merges the specified branch into the current branch.' },
      ],
    },
    {
      title: "Undo Commands",
      commands: [
        { name: 'git reset --soft HEAD~1', description: 'Moves the last commit to the staging area without deleting changes.' },
        { name: 'git reset --hard HEAD~1', description: 'Completely removes the last commit and discards changes.' },
        { name: 'git revert commit_hash', description: 'Reverts a specific commit without rewriting history.' },
      ],
    },
    {
      title: "Fixing Merge Conflicts",
      commands: [
        { name: 'git merge branch_name', description: 'Attempts to merge branch; if conflicts, manual conflict resolution is needed.' },
        { name: 'git status', description: 'Shows files with conflicts after a failed merge attempt.' },
        { name: 'git add conflicted_file', description: 'Stages resolved conflicts in the specified file.' },
        { name: 'git merge --abort', description: 'Aborts the merge and restores the previous state.' },
      ],
    },
    {
      title: "Stashing",
      commands: [
        { name: 'git stash', description: 'Temporarily stores changes in a "stash" to work on later.' },
        { name: 'git stash list', description: 'Lists all stashes available.' },
        { name: 'git stash apply', description: 'Applies the most recent stash and keeps it in the stash list.' },
        { name: 'git stash pop', description: 'Applies the most recent stash and removes it from the stash list.' },
      ],
    },
    {
      title: "Collaboration",
      commands: [
        { name: 'git remote add origin URL', description: 'Links the repository to a remote server.' },
        { name: 'git push -u origin branch_name', description: 'Pushes commits to the remote repository and sets upstream tracking.' },
        { name: 'git pull', description: 'Fetches changes from the remote repository and merges them into the current branch.' },
        { name: 'git clone URL', description: 'Creates a copy of a repository from a remote URL.' },
      ],
    },
  ];

  return (
    <div>
      <header>
        <h1>Git Cheatsheet</h1>
        <p>A quick reference to essential Git commands and workflows.</p>
      </header>
      {sections.map((section, index) => (
        <section className="git-section" key={index}>
          <h2>{section.title}</h2>
          {section.commands.map((command, idx) => (
            <div className="command" key={idx}>
              <span
                className="command-name"
                style={{ backgroundColor: selectedCommands.includes(command.name) ? 'green' : '' }}
                onClick={() => onButtonClick(command.name)}
              >
                {command.name}
              </span>
              <p>{command.description}</p>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
};

export default GitCheatsheet;
