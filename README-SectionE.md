# Section E: Bonus fun!

See: [Section E demo video]()

Full instructions:
- [Step 1: Game play variations with intents](#step-1-game-play-variations-with-intents)
- [Step 2: Giving users options](#step-2-giving-users-options)
- [Step 3: Implement a Player B chatbot](#step-3-implement-a-Player-B-chatbot)
- [Step 4: Chabot vs. chatbot](#step-4-chabot-vs-chatbot)

<p>&nbsp;</p>


## Step 1: Game play variations with intents

### 1.1 Define intents
<ol>
<li>
<p>Download this file: <a href="intents.csv"><code>intents.csv</code></a>.</p>
<p><i>Note about downloading an individual file in GitHub:</i> Open that link in a new tab, click <b>Raw</b>, then right-click on the page and select "Save Page As ...". Save the file with the extension <code>.csv</code></p>
</li>
<li>
<p>In Watson Assistant, click the <b>Intents</b> menu.</p>
</li>
<li>
<p>On the <b>Intents</b> page, click <b>Upload intents</b>.</p>
</li>
<li>
<p>In the modal that appears, specify the file <code>intents.csv</code>, and then click <b>Upload</b>.</p>
</li>
</ol>

<img src="images/intents.png" width="600">

### 1.2 Create dialog node to handle `#stop` intent
<ol>
<li>
<p>Add a node below the "Welcome" node</p>
</li>
<li>
<p>Name the new node something like: <code>Stop playing</code></p>
</li>
<li>
<p>In the <b>If assistant recognizes</b> section, specify: <code>#stop</code></p>
</li>
<li>
<p>In the <b>Assistant responds</b> enter a text reply, such as: <code>Thanks for playing. Bye!</code></p>
</li>
<li>
<p>Click <b>Try it</b>, ask a few Yes-or-No questions, and then see what happens when you input something like: "I don't want to play anymore."</p>
</li>
</ol>

### 1.3 Create dialog node to handle `#restart` intent
<ol>
<li>
<p>Add another node below the "Welcome" node and above the "Stop playing" node.</p>
</li>
<li>
<p>Name the new node something like: <code>Play again</code></p>
</li>
<li>
<p>In the <b>If assistant recognizes</b> section, specify: <code>#restart</code></p>
</li>
<li>
<p>In the <b>Assistant responds</b> enter a text reply indicating what's happening: <code>Restarting ...</code></p>
</li>
<li>
<p>In the <b>Then assistant should</b> section, select <b>Jump to</b>. When prompted, click the "Welcome" node and then select <b>Respond</b>.  This causes the "Welcome" node to fire without testing the if-condition of the "Welcome" node.</p>
</li>
<li>
<p>Click <b>Try it</b>, ask a few Yes-or-No questions, and then see what happens when you input something like: "I give up!"</p>
</li>
</ol>

<img src="images/jump-to-welcome.png" width="600">

### 1.4 Create dialog node to handle `#tellme` intent
<ol>
<li>
<p>Add a node below the "Welcome" node and above the "Play again" node</p>
</li>
<li>
<p>Name the new node something like: <code>Tell me</code></p>
</li>
<li>
<p>In the <b>If assistant recognizes</b> section, specify: <code>#tellme</code></p>
</li>
<li>
<p>In the <b>Assistant responds</b> enter a text reply with the answer: <code>The flavor was: $FLAVOR</code></p>
</li>
<li>
<p>Click <b>Try it</b>, ask a few Yes-or-No questions, and then see what happens when you input something like: "Oh just tell me what it is"</p>
</li>
</ol>

<p>&nbsp;</p>

<table>
<tr>
<td>
<h3>Disambiguation feature</h3>
<p>In the <b>Options &gt; Disambiguation</b> menu, you can toggle on or off a built-in disambiguation feature.  This feature fires when user input matches more than one intent with a high confidence.  When that happens, this feature prompts the user to select from a list of options that is generated from your chatbot's dialog nodes.</p>
<p>Demo video: <a href="https://ibm.box.com/s/sn5xbpc457583xvqn7id23zq1i9gybho">Disambiguation feature</a></p>
<p><b>Disambiguation ON</b></p>
<p><img src="images/disambiguation-on.png" width="800"></p>
<p><b>Disambiguation OFF</b></p>
<p><img src="images/disambiguation-off.png" width="800"></p>
</td>
</tr>
</table>

<p>&nbsp;</p>


## Step 2: Giving users options

<p>&nbsp;</p>


## Step 3: Implement a Player B chatbot

<p>&nbsp;</p>


## Step 4: Chabot vs. chatbot

<p>&nbsp;</p>


