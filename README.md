<h1 align="right"><img src="https://github.com/daltonmenezes/discord-guardian-action/blob/main/logo.svg" alt="a green shield with a check symbol in the center" align="left" />Discord Guardian Action</h1>

<p align="right">
🤖 This action fetches the list of <strong>malicious domains on Discord</strong> in different providers and <strong>creates/updates</strong> a <strong>JSON file</strong> with them from time to time.
  <br><br>
  <!-- Patreon -->
  <a href="https://www.patreon.com/daltonmenezes">
    <img alt="patreon url" src="https://img.shields.io/badge/support%20on-patreon-1C1E26?style=for-the-badge&labelColor=1C1E26&color=61ffca">
  </a>
  <!-- License -->
  <a href="https://github.com/daltonmenezes/discord-guardian-action/blob/main/LICENSE">
    <img alt="license url" src="https://img.shields.io/badge/license%20-MIT-1C1E26?style=for-the-badge&labelColor=1C1E26&color=61ffca">
  </a>
</p>
<br>

# Features
- 🤠 Creates/updates domain list from different providers
- ✨ Accepts your own maintained list file to be joined in the **domains.json**
- 👍 Accepts the custom filename and directory to save the domain list

# Usage
As your app will consume the **domains.json**, it's recommended to you create an empty one with an empty array just to be filled when this action run, so your application can import this file without any problem.

**Example:** At **src/data** path in your repository, create a **domains.json** with the following content:

```js
[]
```

And your workflow file should look like the following:

```yml
on:
  schedule:
    # At minute 0 past every 5th hour
    # https://crontab.guru/#0_*/5_*_*_*
    - cron: "0 */5 * * *"

jobs:
  discord_guardian_job:
    runs-on: ubuntu-latest
    name: Discord Guardian Job
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          fetch-depth: 0
      - name: Discord Guardian Action
        uses: actions/discord-guardian-action@v1.1.0
        id: discord
        with:
          name: 'Your Name'
          email: 'your_email@domain.com'
          directory: src/data
```
Now, when this action runs for the first time, the **domains.json** will be filled. 🥳

# Inputs

### `name`
**Required!**

The commit author name.

### `email`
**Required!**

The commit author email.

### `directory`

**Optional**

The directory to output the domain list. Default is `"."`

### `fileName`
**Optional**

The Name of the output JSON file containing the domain list. Default is `"domains"`

### `myDomainList`
**Optional**

The Path to your own JSON list of domains file to be joined in the final `domains.json`

**Example:**
```yml
myDomainList: src/data/my-domains.json
```

# Acknowledgment
This action is only possible thanks to the following projects:
> ✨ Don't forget to give them a star

- [Discord Phishing Links](https://github.com/nikolaischunk/discord-phishing-links)
- [discord-scam-links](https://github.com/BuildBot42/discord-scam-links)

# License

[MIT © Dalton Menezes](https://github.com/daltonmenezes/discord-guardian-action/blob/main/LICENSE)
